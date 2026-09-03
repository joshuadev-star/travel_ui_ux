import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative max-container overflow-hidden padding-container flex flex-col gap-14 py-10 pb-20 md:gap-20 lg:py-20 xl:flex-row xl:gap-10">

      <div className="hero-map" />

      {/* LEFT SIDE */}
      <div className="relative z-20 flex w-full flex-1 flex-col xl:w-1/2">

        <h1 className="bold-52 max-w-[700px] sm:text-[60px] lg:text-[88px]">
          Dstar Camp Area
        </h1>

        <p className="regular-16 mt-6 max-w-[520px] text-gray-30">
          We want to be on each of your journeys seeking the satisfaction
          of seeing the incorruptible beauty of nature. We can help you on
          an adventure around the world in just one app
        </p>

        {/* REVIEWS */}
        <div className="my-8 flex flex-wrap items-center gap-4 sm:my-11">
          <div className="flex items-center gap-1">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
          />

          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* LOCATION CARD */}
      <div className="relative z-20 flex w-full flex-1 items-start justify-center xl:w-1/2 xl:justify-end">
        <div className="flex w-full max-w-[350px] flex-col gap-8 rounded-3xl bg-green-90 px-6 py-7 sm:px-7 sm:py-8">

          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">
                Location
              </p>

              <Image
                src="/close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </div>

            <p className="bold-20 text-white">
              Aguas Calientes
            </p>
          </div>

          <div className="flexBetween gap-6">
            <div className="flex flex-col">
              <p className="regular-16 text-gray-20">
                Distance
              </p>

              <p className="bold-20 text-white">
                173.28 mi
              </p>
            </div>

            <div className="flex flex-col">
              <p className="regular-16 text-gray-20">
                Elevation
              </p>

              <p className="bold-20 text-white">
                2.040 km
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;