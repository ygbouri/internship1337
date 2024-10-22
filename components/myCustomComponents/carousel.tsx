import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin({ param }: any) {
  const [selectItem, setSelectItem] = React.useState(-1);
  const handleSelectedItem = (index: number) => {
    setSelectItem(index);
  };
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-lg  "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full   ">
        {Array.from({ length: param.length }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 w-full">
              <Card className="w-full">
                <CardContent className="-ml-1 w-full flex aspect-square items-center justify-center p-6">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span>
                   */}
                  <img
                    src={param[index]}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      {/* <CarouselSpacing param={param} ></CarouselSpacing> */}
      <Carousel className="w-full h-[20%]  flex items-center yellow">
        <CarouselContent className="-ml-1 w-full">
          {param.map((item: string, index: number) => (
            <CarouselItem
              key={index}
              className="pl-1 flex items-center  md:basis-1/2 lg:basis-1/4 "
            >
              <div className="p-1 green">
                <Card className="red">
                  <CardContent className="w-full flex aspect-square items-center justify-center p-6">
                    {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                    <img
                      src={item}
                      alt=""
                      className="w-full h-full rounded-md"
                      onClick={() => setSelectItem(param.indexof(item) + 1)}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Carousel>
  );
}
