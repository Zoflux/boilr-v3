import { cn } from "@/lib/utils";

type SolutionMode = "discovery" | "signals";

interface PlatformToggleProps {
  activeMode: SolutionMode;
  onModeChange: (mode: SolutionMode) => void;
}

export function PlatformToggle({ activeMode, onModeChange }: PlatformToggleProps) {
  const tabs: { id: SolutionMode; label: string }[] = [
    { id: "discovery", label: "Discovery" },
    { id: "signals", label: "Signals" }
  ];

  const activeIndex = tabs.findIndex((tab) => tab.id === activeMode);

  return (
    <div className="flex items-center justify-center mb-12">
      <div className="relative w-full max-w-3xl">
        <div className="relative bg-white border border-black/10 rounded-2xl p-1.5 shadow-lg overflow-hidden">
          <div
            className="absolute inset-y-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 transition-transform duration-500 ease-out shadow-md"
            style={{
              width: "50%",
              transform: `translateX(${activeIndex * 100}%)`
            }}
          />
          <div className="relative flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onModeChange(tab.id)}
                className={cn(
                  "flex-1 px-6 py-3 text-sm font-semibold transition-colors duration-300 rounded-xl z-10 relative",
                  activeMode === tab.id
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}