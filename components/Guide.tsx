import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">

      {/* TEXT */}
      <div className="padding-container max-container w-full pb-16 sm:pb-24">

        <p className="regular-18 mb-3 uppercase text-green-50">
          We are here for you
        </p>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">

          <h2 className="bold-40 lg:bold-64 w-full lg:max-w-[390px]">
            Guide You to Easy Path
          </h2>

          <p className="regular-16 w-full text-gray-30 lg:max-w-[520px]">
            Only with the hilink application you will no longer get lost
            and get lost again, because we already support offline maps
            when there is no internet connection in the field. Invite
            your friends, relatives and friends to have fun in the
            wilderness through the valley and reach the top of the mountain
          </p>

        </div>
      </div>

      {/* IMAGE */}
      <div className="flexCenter max-container relative w-full px-4 sm:px-6 lg:px-0">

        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="h-auto w-full object-cover object-center lg:2xl:rounded-5xl"
        />

        {/* INFO CARD */}
        <div className="absolute left-7 top-7 flex max-w-[calc(100%-56px)] gap-3 rounded-3xl border bg-white py-6 pl-4 pr-5 shadow-md sm:left-[5%] sm:max-w-[380px] sm:py-8 sm:pl-5 sm:pr-7 lg:top-20">

          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-auto w-4 shrink-0"
          />

          <div className="flex min-w-0 flex-1 flex-col justify-between gap-8">

            <div className="flex w-full flex-col">
              <div className="flex w-full items-center justify-between gap-4">
                <p className="regular-16 text-gray-20">
                  Destination
                </p>

                <p className="bold-16 shrink-0 text-green-50">
                  48 min
                </p>
              </div>

              <p className="bold-20 mt-2">
                Aguas Calientes
              </p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">
                Start track
              </p>

              <h4 className="bold-20 mt-2 break-words">
                Wonorejo Pasuruan
              </h4>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;