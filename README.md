# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/cfaaa4da-9463-4d65-9d66-4f5af6a94a51

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/cfaaa4da-9463-4d65-9d66-4f5af6a94a51) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite (v5.4.20)
- TypeScript
- React 18
- shadcn-ui
- Tailwind CSS
- @vitejs/plugin-react (stable, non-SWC version)

## Recent Changes & Features

### UI/UX Features

#### Cursor Spotlight Effect
- **Component**: `src/components/CursorSpotlight.tsx`
- **Description**: A global cursor spotlight effect that follows the mouse with a light green glow
- **Implementation**: 
  - Size: 450px radius
  - Color: Consistent light green (`rgba(72, 238, 141, ...)`) across all backgrounds
  - Smooth transitions with 100ms duration
  - Fixed z-index of 30 to stay above content
- **Usage**: Integrated globally in `src/pages/Index.tsx`

#### Glass Navigation Header (October 20, 2025)
- **Components**: `src/components/NavigationHeader.tsx`, `src/pages/Index.tsx`, `src/components/HeroSection.tsx`
- **Description**: Navigation bar now mirrors pressmaster-style pill layout with a translucent glass effect and persistent sticky behavior.
- **Implementation**:
  - Announcement ribbon remains at the very top; nav pill sits below with `backdrop-blur` glass styling.
  - Navigation extracted from the hero section to float globally with `sticky` positioning and adjusted hero offsets so the bar overlaps the dark hero background.
  - Added subtle green login pill linking to `https://app.boilr.ai/` between `Hire boilr` and `Book Demo →` CTAs.
- **Behavior**: Nav remains visible while scrolling; hero content starts higher so no white strip appears behind the glass pill on load.

#### Hero Section
- **Removed**: Static green gradient background and rotating scanner animation
- **Current**: Clean black background with subtle grid pattern
- **File**: `src/components/HeroSection.tsx`

#### Client Logos Marquee (November 24, 2025)
- **Component**: `src/components/ClientLogosSection.tsx`
- **Description**: Scrolling marquee of client logos displayed between HeroSection and LogoOutcomeSection
- **Implementation**:
  - Logos scroll continuously from right to left (40s animation loop)
  - All logos displayed in grayscale using CSS `filter: grayscale(1)`
  - Opacity reduced to 60% with 80% on hover for subtle presentation
  - Fade edges on left and right using gradient overlays (matching gray-50 background)
  - Animation pauses on hover for better UX
  - Background color: `bg-gray-50` (matches LogoOutcomeSection below for seamless appearance)
- **Heading**: "Chosen daily by 50+ small and large recruitment agencies worldwide."
- **Logo Files**: Located in `public/client-logos/` directory:
  - 923+Home+Logo.webp, absolut 1.png, altitude 1.png, consol.png, datascope.webp
  - Empresaria 1.png, IT.png, krg.png, parity_logo 1.png, Switch.png
- **Placement**: Rendered in `src/pages/Index.tsx` between HeroSection and LogoOutcomeSection
- **Responsive**: Logo sizes scale from h-6 (mobile) to h-8 (desktop), gap increases at breakpoints

#### Logo & Outcome Section
- **Enhanced**: Better visual contrast and readability
- **Colors**: Updated to use gray-scale instead of black/white for better visibility
- **Components**: 
  - Logo bubbles with fallback to initials
  - Outcome cards with hover effects and tooltips
  - Animated marquee (left-to-right for logos, right-to-left for outcomes)
- **File**: `src/components/LogoOutcomeSection.tsx`
- **Custom Logos Update (October 19, 2025)**:
  - Replaced generic company names with 7 custom logo images
  - Logo files located in: `src/assets/logo-1-ai-book.png`, `logo-2-raven.png`, `logo-3-ship.png`, `logo-4-oak-leaf.png`, `logo-5-flame.png`, `logo-6-r-arrow.png`, `logo-7-lotus.png`
  - LogoBubble component now displays only the logo image (no border, no background box, no text label)
  - Logo sizes: Mobile: 96px (h-24), Tablet: 112px (h-28), Desktop: 128px (h-32), Large: 144px (h-36)
  - Added hover scale effect (scale-110) for better interactivity
  - Logos scroll continuously from left to right in the marquee with 45s duration
  - Animation starts at -15% (logos centered on page load) and scrolls to -65%
  - Gap between logos increased to 40px for better spacing with larger logos
  - **TEMPORARILY HIDDEN (October 19, 2025)**: Logo marquee section commented out but code preserved for easy re-activation

#### Problem Section ("you already know this...")
- **Component**: `src/components/ProblemSection.tsx`
- **Change**: Enabled section to display reliably between the outcomes card and the solution section; removed IntersectionObserver reveal that kept it invisible on initial load.
- **Heading**: Set to exact copy "you already know this..." per design.
- **Placement**: Rendered in `src/pages/Index.tsx` order: `Hero` → `LogoOutcomeSection` → `ProblemSection` → `SolutionSection` → `TransitionSection` → `ConsolidationSection` → `ClosingSection`.

#### Solution Section - Radar Grid Animation
- **Component**: `src/components/RadarGridPreviewV2.tsx`
- **Fix**: Radar animation now fills its container completely from top to bottom
- **Implementation**:
  - Explicit container heights set in `SolutionSection` (`h-[22rem] sm:h-[24rem] lg:h-[26rem]`) so the preview fills the card, preventing the empty bottom gap.
  - `.preview-root` keeps `height: 100%; min-height: 16rem;` to fill the parent.
  - Kept only a top fade mask for polish; bottom is fully visible.
  - Grid scroll animation runs from `-25%` to `-75%` for seamless looping.
- **Result**: The radar grid fills the entire card container edge-to-edge with continuous content at the bottom

### Build Configuration

#### Vite Configuration
- **Port**: 5173 (default)
- **Host**: "::" (IPv6)
- **Plugin**: Using `@vitejs/plugin-react` (not SWC variant for better compatibility). Config and `package.json` aligned to standard plugin.
- **File**: `vite.config.ts`

#### Vercel Linux build fix
- **Issue 1**: `npm ERR! notsup Unsupported platform for @rollup/rollup-darwin-arm64` during `npm install` on Vercel (Linux builders).
  - **Cause**: A platform-specific Rollup binary (`@rollup/rollup-darwin-arm64`) was listed in `devDependencies`.
  - **Fix**: Removed the Mac-only package and added cross-platform `rollup` instead. See `package.json` diff.

- **Issue 2**: `Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@vitejs/plugin-react-swc'` during build.
  - **Cause**: `vite.config.ts` imported the SWC variant but `package.json` had only the standard plugin.
  - **Fix**: Changed `vite.config.ts` to import `@vitejs/plugin-react` (line 2).

- **Issue 3**: `Cannot find module '@rollup/rollup-linux-x64-gnu'` and `@esbuild/linux-x64` during Vercel build (October 2025).
  - **Root Cause**: npm has a documented bug (https://github.com/npm/cli/issues/4828) where it fails to resolve platform-specific optional dependencies for build tools (Rollup, esbuild, etc.) on Linux. The lockfile generated on Mac (darwin-arm64) doesn't include Linux-specific binaries, and `npm ci` requires exact lockfile matching, causing deployment failures.
  - **Final Fix** (October 19, 2025):
    - ✅ **Upgraded Node to `22.x`** via `engines.node` in `package.json` to match Vercel's default
    - ✅ **Deleted `bun.lockb`** completely to eliminate cross-tool lockfile conflicts (npm-only workflow)
    - ✅ **Added explicit Linux binaries as `optionalDependencies`** in `package.json`:
      - `@rollup/rollup-linux-x64-gnu`: Linux binary for Rollup bundler
      - `@esbuild/linux-x64`: Linux binary for esbuild (used by Vite)
      - These tell npm "install this on Linux, skip on Mac" - cross-platform compatibility
    - ✅ **Changed Vercel install command** in `vercel.json`:
      - From: `"installCommand": "npm ci"` (strict lockfile matching, fails on missing optional deps)
      - To: `"installCommand": "npm install"` (flexible, auto-resolves platform-specific optionals)
      - `"buildCommand": "npm run build"` - Explicit build command
    - ✅ Kept `rollup@^4.18.0` in `devDependencies`
  - **Why This Works**: `npm install` (not `ci`) on Linux will detect the platform and automatically install both `@rollup/rollup-linux-x64-gnu` and `@esbuild/linux-x64` from the optionalDependencies section, even though they're not in the Mac-generated lockfile. Optional dependencies are specifically designed for cross-platform packages with native binaries.
  - **Deployment Steps**:
    1. Commit and push changes to `main` branch
    2. Deploy normally on Vercel (cache clearing no longer required)
    3. Vercel will run `npm install` which auto-resolves both Linux binaries

### Known Issues Fixed
- ✅ Fixed SWC native binding error by switching to standard React plugin
- ✅ Fixed cursor spotlight color adaptation (now consistent green everywhere)
- ✅ Enhanced Logo/Outcome section visibility with better contrast

## Mobile-Only Responsiveness

**Status**: ✅ Fully implemented (October 2025)

### Overview
Mobile-specific optimizations have been applied across all components to ensure the website looks and functions perfectly on small screens while **leaving desktop (md+) visuals completely unchanged**. The approach uses Tailwind's mobile-first defaults with `sm:` and `md:` breakpoint overrides.

### Implementation Strategy
- **Mobile-first defaults**: Base classes target mobile screens; desktop uses `md:` and `lg:` prefixes
- **No desktop changes**: All existing `md:`/`lg:` classes remain untouched
- **Touch optimizations**: Cursor spotlight disabled on coarse pointers; touch targets meet iOS 44px minimum
- **Fluid media**: Images and videos use `max-w-full` and `h-auto` for proper scaling

### Files Modified

#### Navigation & Layout
- **`src/components/NavigationHeader.tsx`**
  - Mobile: Hamburger menu with shadcn Sheet component (visible below 768px)
  - Desktop: Horizontal nav row unchanged (hidden below 768px with `hidden md:flex`)
  - Responsive padding: `px-4 sm:px-10`

#### Hero Section
- **`src/components/HeroSection.tsx`**
  - Typography: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
  - CTAs: Stack vertically on mobile (`flex-col sm:flex-row`), full-width buttons `w-full sm:w-auto`
  - Intel cards: Reduced scale and padding on small screens
  - Responsive padding: `px-4 sm:px-6`

#### Social Proof & Outcomes
- **`src/components/LogoOutcomeSection.tsx`**
  - Heading sizes: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
  - Logo bubbles: Smaller icons (`h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9`), tighter spacing
  - Outcome cards: `min-w-[140px] sm:min-w-[160px] md:min-w-[180px]`, responsive text sizes
  - Marquee fade edges: `w-12 sm:w-24`
  - Pills: `text-[10px] sm:text-[11px]`

#### Problem Section
- **`src/components/ProblemSection.tsx`**
  - Card grid: Stacks on mobile, 3-column on `md:` breakpoint
  - Typography: `text-3xl sm:text-4xl md:text-5xl` headings, `text-[15px] sm:text-[17px] md:text-lg` body
  - Spacing: Reduced padding/gaps on mobile (`p-5 sm:p-6 md:p-8`, `gap-4 sm:gap-5`)
  - Definition list labels: `min-w-[6rem] sm:min-w-[7.5rem]`, `text-[11px] sm:text-[13px]`

#### Solution Section
- **`src/components/SolutionSection.tsx`**
  - Already had mobile optimizations; verified radar preview heights (`h-[22rem] sm:h-[24rem] lg:h-[26rem]`)
  - Feature text: `text-base sm:text-lg lg:text-xl`
  - Spacing: `py-12 sm:py-16 lg:py-20 xl:py-24`

#### Consolidation (Before/After)
- **`src/components/ConsolidationSection.tsx`**
  - Card grid: Stacks on mobile, side-by-side on `md:`
  - Band heights: `h-14 sm:h-16`
  - Logo chips: Smaller icons (`h-4 w-4 sm:h-5 sm:w-5`), text `text-[10px] sm:text-xs`
  - Pills: `text-[9px] sm:text-[10px]`
  - Spacing: `gap-6 sm:gap-8 md:gap-12`
  - **"How It Works Now" Box Enhancement (October 19, 2025)**:
    - Increased border thickness from `border` (1px) to `border-[3px]` (3px) for better visual prominence
    - Strengthened border color opacity from `0.13` to `0.25` for more noticeable green accent
    - Purpose: Draw user focus to the solution side of the before/after comparison

#### Transition & Closing
- **`src/components/TransitionSection.tsx`**: Responsive headings (`text-2xl sm:text-3xl md:text-4xl`) and padding
- **`src/components/ClosingSection.tsx`**: Full-width CTA on mobile (`w-full sm:w-auto`), responsive text sizes

#### Global Components
- **`src/components/CursorSpotlight.tsx`**
  - **Disabled on touch devices**: Checks `matchMedia('(pointer: coarse)')` and returns `null` for mobile/tablets
  - Desktop-only effect to optimize performance on mobile

- **`src/pages/Index.tsx`**
  - Section spacing tuned for mobile: `py-5 sm:py-6 md:py-8`, `pb-8 sm:pb-10 md:pb-12`, etc.

- **`