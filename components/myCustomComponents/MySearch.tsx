import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

export function DialogDemo() {
  const [iscolor, setColor] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button>
         */}
        <IoMdSearch color="#697794" className="size-6" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] absolute top-36 ">
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="name" className="col-span-3" placeholder="search" />
          </div>
        </div> */}

        <div className="flex ">
          <div className="w-[80%] border  flex items-center h-full bg-[#F3F6F8]">
            <IoMdSearch color="#697794" className="size-6 w-[15%] " />
            <Input id="name" className="w-[85%]" placeholder="search" />
          </div>
        </div>
        <DialogFooter>
          <Button
            className={`bg-[#F3F6F8] ${
              iscolor ? "text-white" : "text-[#855ADF]"
            } `}
            type="submit"
            onMouseEnter={() => setColor(true)}
            onMouseLeave={() => setColor(false)}
          >
            search
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
