import React from "react";
import Badge from "@/app/components/Badge";
import Image from "next/image";

const UpcomingEvent = ({
  day,
  month,
  badgeText,
  title,
  time,
  location,
  eventImage,
}) => {
  return (
    <div className="flex gap-1 ">
      <div className="bg-white rounded-xl p-6 border-2 border-gray-100 flex flex-col justify-center items-center w-[120px]">
        <span className="text-heading2-semibold">{day}</span>
        <span className="text-base-regular mb-2">{month}</span>
        <Badge text={badgeText} />
      </div>
      <div className="flex-grow p-6 gap-6 flex border-gray-100 bg-white rounded-xl border-2">
        <div className="flex-grow flex flex-col justify-between">
          <p className="text-heading4-medium">{title}</p>
          <div className="flex justify-between">
            <span>
              {time} , {location}
            </span>
            <Image
              src={"/assets/reply.svg"}
              className="rounded-full"
              height={24}
              width={24}
              alt="Reply Icon"
            />
          </div>
        </div>

        <img
          src={eventImage}
          className="rounded-md w-full object-fill max-w-[222px] max-h-[120px]"
          alt="Event"
        />
      </div>
    </div>
  );
};

export default UpcomingEvent;
