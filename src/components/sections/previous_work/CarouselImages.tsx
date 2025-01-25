import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const InteractiveCarousel = () => {
  return (
    <Carousel
      className="relative px-10 md:w-3/4"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="flex md:h-[600px]">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="/techo_6954.jpeg"
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex md:h-[600px]">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="/techo_6955.jpeg"
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex md:h-[600px]">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="/techo_6956.jpeg"
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex md:h-[600px]">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="/techo_7082.jpeg"
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex md:h-[600px]">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="/techo_7110.jpeg"
              alt=""
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="flex md:h-[600px]">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="/techo_7220.jpeg"
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex md:h-[600px]">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="/techo_7207.jpeg"
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex md:h-[600px]">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="/techo_7236.jpeg"
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex md:h-[600px]">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="/techo_7388.jpeg"
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex md:h-[600px]">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="/techo_7514.jpeg"
              alt=""
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        variant="default"
        className="absolute left-1 top-1/2 bg-neutral-200 text-neutral-700 hover:bg-neutral-600 hover:text-neutral-200"
      />
      <CarouselNext
        variant="default"
        className="absolute right-1 top-1/2 bg-neutral-200 text-neutral-700 hover:bg-neutral-600 hover:text-neutral-200"
      />
    </Carousel>
  );
};

export default InteractiveCarousel;
