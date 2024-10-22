import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize({ param, isSelected, onSelect }: any) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-md"
    >
      <CarouselContent>
        {/* {Array.from({ length: param.length }).map((_, index) => ( */}
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          {/* <CarouselPrevious /> */}
          <div className="p-1">
            {/* <Card> */}
            {/* <CardContent className="flex aspect-square items-center justify-center p-1"> */}
            <img
              src={param}
              alt=""
              className="w-full h-full rounded-md"
              onClick={onSelect}
            />
            {/* </CardContent> */}
            {/* </Card> */}
          </div>
          {/* <CarouselNext /> */}
        </CarouselItem>
        {/* ))} */}
      </CarouselContent>
    </Carousel>
  );
}
