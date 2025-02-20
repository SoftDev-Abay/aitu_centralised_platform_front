import React from "react";
import Badge from "@/app/components/Badge";
import Image from "next/image";
const UpcomingEvent = () => {
  return (
    <div className="flex gap-1">
      <div className="bg-white rounded-xl p-6 border-2 border-gray-100 flex flex-col justify-center items-center">
        <span className="text-heading2-semibold">20</span>
        <span className="text-base-regular mb-2">FEB</span>
        <Badge text="None" />
      </div>
      <div className="flex-grow p-6 gap-6 flex border-gray-100 bg-white rounded-xl border-2">
        <div className=" flex-grow flex flex-col justify-between">
          <p className="text-heading4-medium">
            Бакалавриат «Глобальные цифровые коммуникации» приглашает на вебинар
          </p>
          <div className="flex justify-between">
            <span className="">19:00 , Online</span>

            <Image
              src="/assets/reply.svg"
              className="rounded-full"
              height={24}
              width={24}
              alt=""
            />
          </div>
        </div>

        <img
          src="https://astanahub.com/media/%D0%93%D0%A6%D0%9A_%D0%B1%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80_1118%D1%85745-023dd8346ee9-thumbnail-800.png"
          className="rounded-md w-full object-fill max-w-[222px] max-h-[120px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default UpcomingEvent;
