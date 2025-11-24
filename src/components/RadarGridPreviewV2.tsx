import React, { useMemo } from "react";

/**
 * RadarGridPreviewV2 (True Radar Sync)
 * - Grid scrolls slowly (Feed)
 * - Radar sweeps continuously (4s rotation)
 * - Cells "pop" EXACTLY when the radar beam hits them using atan2 math
 * - Randomized priority cells for "live" feel
 */

export const SOURCE_TYPES = [
  "Company Career Page", "Public Job Board", "Industry News Article", "Official Press Release",
  "Funding Announcement", "Government Tender Portal", "Customer Support Tickets", "CRM Opportunity Updates",
  "Inbound Email Thread", "Internal Slack Channel", "Meeting Transcript", "LinkedIn Company Updates",
  "Engineering GitHub Activity", "App Store Reviews", "Glassdoor Reviews", "Company Website Change",
  "Technology Stack Change", "Org Chart Update", "Hiring Manager Post", "New Office Location",
  "Vendor Management System", "Procurement Category RFP", "Legal/Compliance Filing", "Product Changelog",
];

export const COMPANY_NAMES = [
  "ACME Corp","Globex Inc","Initech","Umbrella Corp","Stark Ind","Wayne Ent","Hooli","Aperture Sci","Soylent Corp","Massive Dynamic",
  "Cyberdyne","Tyrell Corp","Wonka Ind","Gekko & Co","Nakatomi","Dunder Mifflin","Oceanic Air","Axiom","Vandelay Ind","Monsters Inc",
  "Duff Brewing","Gringotts","Pied Piper","Black Mesa","Blue Sun","Octan","MomCorp","Oscorp","Weyland-Yutani","Planet Express"
];

export default function RadarGridPreviewV2() {
  // Fixed grid size for calculation (assumes Desktop 4-col layout mostly, scales down gracefully)
  const COLS = 4;
  const ROWS = 12; 
  const totalItems = 48;

  // Radar Rotation Speed (MUST match CSS animation duration)
  const DURATION = 4; // seconds

  const items = useMemo(() => {
    // Center point of the grid (indices)
    // We calculate relative to the visible viewport part roughly
    const cx = (COLS - 1) / 2;
    const cy = (ROWS / 2) - 1; // Approximate visual center

    return Array.from({ length: totalItems }, (_, i) => {
      const row = Math.floor(i / COLS);
      const col = i % COLS;

      // Calculate Angle relative to center
      const dx = col - cx;
      const dy = row - cy;
      
      // Calculate angle in radians
      // atan2(y, x) gives angle from X-axis (Right).
      // We want angle from Y-axis (Top) going Clockwise.
      // Top (0, -1) -> should be 0
      // Right (1, 0) -> should be PI/2
      
      let theta = Math.atan2(dy, dx); // -PI to PI
      
      // Convert to Clockwise from Top:
      // theta is angle from Right (Counter-Clockwise in math, but Y is down in DOM...)
      // In DOM: Y is down.
      // Right (1, 0) -> atan2(0, 1) = 0
      // Bottom (0, 1) -> atan2(1, 0) = PI/2
      // Left (-1, 0) -> atan2(0, -1) = PI
      // Top (0, -1) -> atan2(-1, 0) = -PI/2
      
      // We want Top (-PI/2) to be 0.
      // We want Right (0) to be PI/2.
      // formula: angle = theta + PI/2
      
      let angleNorm = theta + Math.PI / 2;
      if (angleNorm < 0) angleNorm += 2 * Math.PI; // Normalize 0 - 2PI
      
      // Fraction of the circle (0.0 to 1.0)
      const progress = angleNorm / (2 * Math.PI);
      
      // Calculate Delay: Delay = progress * Duration
      const delay = progress * DURATION;

      const src = SOURCE_TYPES[i % SOURCE_TYPES.length];
      const company = COMPANY_NAMES[i % COMPANY_NAMES.length];
      
      return {
        text: src,
        sub: company,
        id: `SIG-${1000 + i}`,
        delay: delay,
        // High priority hits that will light up - MORE DENSITY for active feel
        isHighPriority: [
          1, 3, 5, 8, 10, 12, 15, 17, 19, 
          21, 24, 26, 28, 30, 33, 35, 37, 
          39, 42, 44, 46
        ].includes(i)
      };
    });
  }, []);

  return (
    <div className="preview-root font-sans group">
      <div className="grid-viewport">
        {/* Feed Stack - Slow scroll */}
        <div className="feed-stack">
          <GridContent items={items} duration={DURATION} />
          <GridContent items={items} duration={DURATION} />
        </div>
        
        <div className="mask top" />
        <div className="mask bottom" />
      </div>

      {/* CIRCULAR RADAR OVERLAY */}
      <div className="radar-overlay">
        <div className="radar-sweep" />
        <div className="radar-axis" />
      </div>

      <style>{`
        .preview-root {
          position: relative;
          height: 100%;
          min-height: 16rem;
          width: 100%;
          background: #050a0f;
          color: #e5e7eb;
          overflow: hidden;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          cursor: default;
        }

        .feed-stack {
          position: absolute;
          left: 0; right: 0; top: 0;
          animation: feedScroll 60s linear infinite; /* Very slow feed */
          width: 100%;
        }

        @keyframes feedScroll {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          padding: 10px;
          width: 100%;
        }

        @media (min-width: 640px) { .grid-container { grid-template-columns: repeat(3, 1fr); gap: 12px; padding: 12px; } }
        @media (min-width: 1024px) { .grid-container { grid-template-columns: repeat(4, 1fr); } }

        /* Card Style */
        .data-cell {
          position: relative;
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 6px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: all 0.3s ease;
          opacity: 0.6;
        }

        /* SYNCHRONIZED POP ANIMATION */
        .data-cell.priority {
          /* Animation duration must match radar rotation exactly */
          animation: radarHit ${DURATION}s infinite linear;
          /* Initial state (before hit) */
          opacity: 0.6;
          border-color: rgba(16, 185, 129, 0);
          background: rgba(16, 185, 129, 0);
        }

        @keyframes radarHit {
          0% { /* Start of cycle (0 deg) - if delay aligns, this is hit time */
            transform: scale(1); opacity: 0.6;
            border-color: rgba(16, 185, 129, 0);
            background: rgba(16, 185, 129, 0);
          }
          /* The 'Hit' window is very short */
          1% {
            transform: scale(1.03); 
            opacity: 1;
            border-color: rgba(16, 185, 129, 0.6);
            background: rgba(16, 185, 129, 0.15);
            box-shadow: 0 0 15px rgba(16, 185, 129, 0.2);
          }
          15% { /* Fade out trail */
            transform: scale(1);
            opacity: 0.9;
            border-color: rgba(16, 185, 129, 0.2);
            background: rgba(16, 185, 129, 0.05);
            box-shadow: none;
          }
          40% { /* Back to normal */
            transform: scale(1);
            opacity: 0.6;
            border-color: rgba(16, 185, 129, 0);
            background: rgba(16, 185, 129, 0);
          }
          100% { transform: scale(1); opacity: 0.6; }
        }

        .cell-header { display: flex; align-items: center; gap: 8px; }

        .status-dot {
          width: 5px; height: 5px; border-radius: 50%; background: #374151;
        }

        .data-cell.priority .status-dot {
          /* Sync dot with cell hit */
          animation: dotHit ${DURATION}s infinite linear;
        }
        
        @keyframes dotHit {
          0% { background: #374151; box-shadow: none; }
          1% { background: #10b981; box-shadow: 0 0 8px #10b981; }
          20% { background: #10b981; box-shadow: none; }
          40% { background: #374151; }
          100% { background: #374151; }
        }

        .signal-type {
          font-size: 11px; font-weight: 500; color: #9ca3af;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        
        .data-cell.priority .signal-type {
          animation: textHit ${DURATION}s infinite linear;
        }
        
        @keyframes textHit {
          0% { color: #9ca3af; text-shadow: none; }
          1% { color: #f3f4f6; text-shadow: 0 0 8px rgba(16, 185, 129, 0.6); }
          20% { color: #d1d5db; text-shadow: none; }
          40% { color: #9ca3af; }
          100% { color: #9ca3af; }
        }

        .signal-source {
          font-size: 10px; color: #4b5563; font-family: ui-monospace, monospace;
        }

        .mask { position: absolute; left: 0; right: 0; height: 60px; z-index: 10; pointer-events: none; }
        .mask.top { top: 0; background: linear-gradient(to bottom, #050a0f 10%, transparent); }
        .mask.bottom { bottom: 0; background: linear-gradient(to top, #050a0f 10%, transparent); }

        /* RADAR OVERLAY */
        .radar-overlay {
          position: absolute; inset: 0; z-index: 20; pointer-events: none;
          display: flex; align-items: center; justify-content: center;
        }

        .radar-sweep {
          position: absolute;
          width: 200%; 
          height: 200%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 280deg,
            rgba(16, 185, 129, 0.02) 300deg,
            rgba(16, 185, 129, 0.1) 340deg,
            rgba(16, 185, 129, 0.5) 358deg,
            rgba(16, 185, 129, 0.9) 360deg
          );
          animation: radarSpin ${DURATION}s infinite linear;
          border-radius: 50%;
          top: -50%; left: -50%; 
        }
        
        .radar-sweep::after {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          width: 2px; height: 50%;
          background: linear-gradient(to bottom, rgba(16, 185, 129, 0.8), transparent);
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
          transform-origin: bottom center;
        }

        .radar-axis {
          width: 8px; height: 8px; background: #10b981; border-radius: 50%;
          box-shadow: 0 0 15px #10b981;
          z-index: 30;
        }

        @keyframes radarSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function GridContent({ items, duration }: { items: any[], duration: number }) {
  return (
    <div className="grid-container">
      {items.map((item, idx) => (
        <div 
          key={`${item.id}-${idx}`} 
          className={`data-cell ${item.isHighPriority ? 'priority' : ''}`}
          style={{
            // The MAGIC: Sync animation with radar rotation
            // We pass the calculated delay (based on angle) to the animation
            // We use negative delay to start 'in the past' so it syncs immediately
            animationDelay: item.isHighPriority ? `-${duration - item.delay}s` : '0s'
          }}
        >
          <div className="cell-header">
            <div className="status-dot" />
            <div className="signal-type">{item.text}</div>
          </div>
          <div className="signal-source">
            {item.sub} • {item.id}
          </div>
        </div>
      ))}
    </div>
  );
}

/* Tests */
export function __test_canRender(){ return (<div><RadarGridPreviewV2 /></div>); }
