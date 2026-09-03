import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-[85vw] min-w-[85vw] shrink-0 ${backgroundImage} bg-cover bg-center bg-no-repeat sm:w-[600px] sm:min-w-[600px] lg:w-[900px] lg:min-w-[900px] xl:w-[1100px] xl:min-w-[1100px] lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 sm:p-8 lg:px-20 lg:py-10">

        {/* TOP */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="shrink-0 rounded-full bg-green-50 p-3 sm:p-4">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <h4 className="bold-18 break-words text-white">
              {title}
            </h4>

            <p className="regular-14 break-words text-white">
              {subtitle}
            </p>
          </div>
        </div>

        {/* PEOPLE */}
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="flex -space-x-3 overflow-hidden sm:-space-x-4">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-8 w-8 rounded-full sm:h-10 sm:w-10"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>

          <p className="bold-16 md:bold-20 text-white">
            {peopleJoined}
          </p>
        </div>

      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">

      {/* CAMP CARDS */}
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-5 overflow-x-auto px-4 sm:h-[400px] sm:px-6 lg:h-[500px] lg:gap-8 lg:px-0 xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />

        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      {/* QUOTE CARD */}
      <div className="flexEnd mt-8 px-4 sm:px-6 lg:-mt-40 lg:mr-6 xl:-mt-60">
        <div className="relative w-full max-w-[734px] overflow-hidden rounded-3xl bg-green-50 p-6 sm:p-8 lg:px-12 lg:py-14 xl:rounded-5xl xl:px-16 xl:py-20">

          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong>{" "}
            And Not Knowing The Way?
          </h2>

          <p className="regular-14 xl:regular-16 mt-5 max-w-[600px] text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very
            large. That's why we are here for those of you who want to
            start an adventure
          </p>

          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />

        </div>
      </div>

    </section>
  );
};

export default Camp;