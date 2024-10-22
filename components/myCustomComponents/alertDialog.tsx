import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RiDeleteBin5Line } from "react-icons/ri";

export function AlertDialogDemo({ siz, onSelect }: any) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          aria-haspopup="true"
          size="icon"
          variant="ghost"
          className={` w-${siz} h-${siz} rounded-md bg-[#FDEDEB] `}
        >
          <RiDeleteBin5Line
            className="w-4 h-4 rounded-md"
            style={{ color: "#EA644F" }}
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            product and remove it from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onSelect}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function AlertDialogDemoDeleteAll({ onSelect }: any) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          aria-haspopup="true"
          variant="ghost"
          className="w-[70px] flex justify-center  bg-[#EA644F] py-3"
        >
          Delete All
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            product and remove it from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onSelect}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
