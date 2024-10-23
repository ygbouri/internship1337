import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useDarkMode } from "@/context/darkmode";

export function PaginationDemo() {
  const { isDarkMode } = useDarkMode();
  return (
    <Pagination className="flex  justify-start">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            href="#"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className={``} href="#">
            <label
              htmlFor=""
              className={`${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            >
              1
            </label>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            <label
              htmlFor=""
              className={`${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            >
              2
            </label>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            <label
              htmlFor=""
              className={`${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            >
              3
            </label>
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            className={`${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            href="#"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
