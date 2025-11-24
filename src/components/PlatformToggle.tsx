import { cn } from "@/lib/utils";

interface PlatformToggleProps {
  activeMode: "sales" | "recruitment";
  onModeChange: (mode: "sales" | "recruitment") => void;
}

export function PlatformToggle({ activeMode, onModeChange }: PlatformToggleProps) {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="relative bg-white border border-black/10 rounded-2xl p-1.5 shadow-lg">
        <div
          className={cn(
            "absolute top-1.5 h-12 w-52 bg-gradient-to-r rounded-xl transition-all duration-500 ease-out shadow-md",
            activeMode === "sales" 
              ? "from-blue-500 to-purple-600 left-1.5" 
              : "from-emerald-500 to-teal-600 left-52"
          )}
        />
        <div className="relative flex">
          <button
            onClick={() => onModeChange("sales")}
            className={cn(
              "px-8 py-3 text-sm font-semibold transition-all duration-500 rounded-xl w-52 z-10 relative",
              activeMode === "sales"
                ? "text-white"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            Sales Intelligence
          </button>
          <button
            onClick={() => onModeChange("recruitment")}
            className={cn(
              "px-8 py-3 text-sm font-semibold transition-all duration-500 rounded-xl w-52 z-10 relative",
              activeMode === "recruitment"
                ? "text-white"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            Talent Acquisition
          </button>
        </div>
      </div>
    </div>
  );
}