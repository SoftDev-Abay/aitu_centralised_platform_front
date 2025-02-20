import Link from "next/link";
import React from "react";
import Image from "next/image";

const PostCard = () => {
  return (
    <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
      <div className="flex gap-3 mb-3 items-center">
        <img
          src="https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png"
          className="rounded-full h-[28px] w-[28px]"
          alt=""
        />
        <Link className="text-black font-medium" href={""}>
          Astana Hub
        </Link>
        <span className="text-gray-600 ">Feb. 19, 2025 10:04</span>
      </div>
      <div className="flex gap-4 mb-3">
        <div className="flex-grow">
          <p className="text-heading3-bold mb-3">
            Startup Garage: открыт прием заявок – преврати идею в tech-стартап
          </p>
          <p>
            Astana Hub сообщает о приеме заявок на четвертый поток инкубационной
            программы Startup Garage, направленной на поддержку начинающих
          </p>
        </div>
        <img
          src="https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png"
          className="rounded-md w-full object-fill max-w-[264px] max-h-[120px]"
          alt=""
        />
      </div>
      <div className="flex gap-2 rounded-3xl bg-gray-200 pr-2 pl-1 py-1 w-fit items-center mb-3">
        <img
          src="https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png"
          className="rounded-full h-[24px] w-[24px]"
          alt=""
        />
        <span className="text-small-regular text-black">Hub news</span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div className="flex gap-1">
            <Image
              src="/assets/reply.svg"
              className="rounded-full"
              height={24}
              width={24}
              alt=""
            />
            <span>0</span>
          </div>
          <div className="flex gap-1">
            <Image
              src="/assets/reply.svg"
              className="rounded-full"
              height={24}
              width={24}
              alt=""
            />
            <span>0</span>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-1">
            <Image
              src="/assets/reply.svg"
              className="rounded-full"
              height={24}
              width={24}
              alt=""
            />
            <span>0</span>
          </div>
          <div className="flex gap-1">
            <Image
              src="/assets/reply.svg"
              className="rounded-full"
              height={24}
              width={24}
              alt=""
            />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
