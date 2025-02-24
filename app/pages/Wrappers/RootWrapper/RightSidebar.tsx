import Card from "@/app/components/Card/Card";
import React from "react";
import Button from "@/app/components/Button/Button";
import { FaLink } from "react-icons/fa";
import { UseUserStore } from "@/app/store/useUserStore";

const RightSidebar = () => {
  
  return (
    <div className="flex flex-col gap-4 w-[240px] sticky h-[calc(100vh-80px)] custom-scrollbar py-6 overflow-y-auto top-[80px]">
      <Card padding="padding-medium">
        <img
          className="rounded-xl h-[180px]"
          src="https://astanahub.com/static/img/science-banner1.jpg"
          alt=""
        />
        <p className="text-heading4-semibold mt-3 mb-1 border-gray-100">
          Lorem ipsum dolor
        </p>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          reiciendis error eum quibusdam.
        </p>
        <Button className="w-full" color="empty">
          Go
        </Button>
      </Card>
      <div>
        <p className="mb-2">Recomendations</p>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full w-8 h-8"
              src="https://astanahub.com/static/img/science-banner1.jpg"
              alt=""
            />

            <div>
              <p>Science Club</p>
              <span className="text-small-regular text-gray-400">
                256 members * 12 Events
              </span>
            </div>

            <FaLink />
          </div>
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full w-8 h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiTota4owcdFumqTTwqeVl3os19JQFR-Vhg&s"
              alt=""
            />

            <div>
              <p>Volonteering Club</p>
              <span className="text-small-regular text-gray-400">
                320 members * 50 Events
              </span>
            </div>

            <FaLink />
          </div>
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full w-8 h-8"
              src="https://i1.sndcdn.com/avatars-000250837011-87cq7j-t1080x1080.jpg"
              alt=""
            />

            <div>
              <p>Music Club</p>
              <span className="text-small-regular text-gray-400">
                50 members * 36 Events
              </span>
            </div>

            <FaLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
