import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useDarkMode } from "@/config/darkmode";
import { useState } from "react";

export function ToggleGroupDemo({ arr }: any) {
  const { isDarkMode } = useDarkMode();

  let color: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";

  const [selected, setSelected] = useState(arr[0]);
  const getBackgroundColorClass = () => {
    // If the item is selected
    return isDarkMode ? "bg-[#F3F6F8]" : "bg-[#2B2E31]"; // Change to your selected background color
  };
  return (
    <ToggleGroup className={`h-auto ${color} `} type="single" value={selected}>
      <ToggleGroupItem
        className={`py-1 h-auto `}
        value={arr[0]}
        name={arr[0]}
        aria-label="Toggle bold"
        onClick={() => {
          setSelected(arr[0]);
        }}
      >
        <span className="text-[10px] truncate">{arr[0]}</span>
      </ToggleGroupItem>
      <ToggleGroupItem
        className="py-0 h-auto "
        name={arr[1]}
        value={arr[1]}
        aria-label="Toggle italic"
        onClick={() => setSelected(arr[1])}
      >
        <span className="text-[10px] truncate">{arr[1]}</span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
