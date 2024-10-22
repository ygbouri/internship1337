import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useDarkMode } from "@/config/darkmode";
import { useState } from "react";

export function CommandDemo({ arr, onSelect }: any) {
  const { isDarkMode } = useDarkMode();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSelect(value);
  };
  return (
    <Command
      className={`h-[80%] rounded-lg ${
        isDarkMode ? " bg-white" : " bg-[#232628]"
      } ${isDarkMode ? "border-gray-100" : "border-gray-500"} shadow-md`}
      onChange={(e) => handleChange(e)}
    >
      <CommandInput className={``} placeholder="Search" />
      <CommandList>
        {/* <CommandEmpty>No results found.</CommandEmpty> */}
        {/* <CommandGroup heading="Suggestions">
          {arr.map((item: any, index: number) => (
            <CommandItem key={index}>
              <span>{item.title}</span>
            </CommandItem>
          ))}
        </CommandGroup> */}
      </CommandList>
    </Command>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// import {
//   Calculator,
//   Calendar,
//   CreditCard,
//   Settings,
//   Smile,
//   User,
// } from "lucide-react";

// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandShortcut,
// } from "@/components/ui/command";

// export function CommandDemo() {
//   return (
//     <Command className="rounded-lg border shadow-md">
//       <CommandInput placeholder="Type a command or search..." />
//       <CommandList>
//         <CommandEmpty>No results found.</CommandEmpty>
//         <CommandGroup heading="Suggestions">
//           <CommandItem>
//             <Calendar className="mr-2 h-4 w-4" />
//             <span>Calendar</span>
//           </CommandItem>
//           <CommandItem>
//             <Smile className="mr-2 h-4 w-4" />
//             <span>Search Emoji</span>
//           </CommandItem>
//           <CommandItem>
//             <Calculator className="mr-2 h-4 w-4" />
//             <span>Calculator</span>
//           </CommandItem>
//         </CommandGroup>
//         <CommandSeparator />
//         <CommandGroup heading="Settings">
//           <CommandItem>
//             <User className="mr-2 h-4 w-4" />
//             <span>Profile</span>
//             <CommandShortcut>⌘P</CommandShortcut>
//           </CommandItem>
//           <CommandItem>
//             <CreditCard className="mr-2 h-4 w-4" />
//             <span>Billing</span>
//             <CommandShortcut>⌘B</CommandShortcut>
//           </CommandItem>
//           <CommandItem>
//             <Settings className="mr-2 h-4 w-4" />
//             <span>Settings</span>
//             <CommandShortcut>⌘S</CommandShortcut>
//           </CommandItem>
//         </CommandGroup>
//       </CommandList>
//     </Command>
//   );
// }
