import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import techo1 from "/techo_6954.jpeg";
import techo2 from "/techo_6955.jpeg";
import techo3 from "/techo_6956.jpeg";
import techo4 from "/techo_7082.jpeg";
import techo5 from "/techo_7110.jpeg";
import techo6 from "/techo_7220.jpeg";
import techo7 from "/techo_7207.jpeg";
import techo8 from "/techo_7236.jpeg";
import techo9 from "/techo_7388.jpeg";
import techo10 from "/techo_7514.jpeg";
import { Image } from "astro:assets";

const InteractiveCarousel = () => {
  return (
    <Carousel
      className="relative w-3/4"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="flex h-[600px]">
            <Image
              class="h-full w-full rounded-xl object-cover object-center"
              src={techo1}
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex h-[600px]">
            <Image
              class="h-full w-full rounded-xl object-cover object-center"
              src={techo2}
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex h-[600px]">
            <Image
              class="h-full w-full rounded-xl object-cover object-center"
              src={techo3}
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex h-[600px]">
            <Image
              class="h-full w-full rounded-xl object-cover object-center"
              src={techo4}
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex h-[600px]">
            <Image
              class="h-full w-full rounded-xl object-cover object-center"
              src={techo5}
              alt=""
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="flex h-[600px]">
            <Image
              class="h-full w-full rounded-xl object-cover object-center"
              src={techo7}
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex h-[600px]">
            <Image
              class="h-full w-full rounded-xl object-cover object-center"
              src={techo6}
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex h-[600px]">
            <Image
              class="h-full w-full rounded-xl object-cover object-center"
              src={techo8}
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex h-[600px]">
            <Image
              class="h-full w-full rounded-xl object-cover object-center"
              src={techo9}
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex h-[600px]">
            <Image
              class="h-full w-full rounded-xl object-cover object-center"
              src={techo10}
              alt=""
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        variant="default"
        className="bg-neutral-200 text-neutral-700 hover:bg-neutral-600 hover:text-neutral-200"
      />
      <CarouselNext
        variant="default"
        className="bg-neutral-200 text-neutral-700 hover:bg-neutral-600 hover:text-neutral-200"
      />
    </Carousel>
  );
};

export default InteractiveCarousel;
