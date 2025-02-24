import Link from "next/link";
import React from "react";
import Image from "next/image";
import Card from "@/app/components/Card/Card";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaEye,
  FaShare,
  FaComment,
} from "react-icons/fa";

interface PostCardProps {
  id: string;
  channel: string;
  createdAt: string;
  title: string;
  description: string;
  imageUrl: string;
  publisherAccount: {
    imgUrl: string;
    userId: string;
  };
  publisherCompany: {
    imgUrl: string;
    userId: string;
  };

  category: string;
  repliesCount: number;
  likeCount: number;
  dislikeCount: number;
  sharesCount: number;
}

const PostCard: React.FC<PostCardProps> = ({
  channel,
  id,
  createdAt,
  title,
  description,
  imageUrl,
  publisherAccount,
  publisherCompany,
  category,
  repliesCount,
  likeCount,
  dislikeCount,
  sharesCount,
}) => {
  return (
    <Card>
      <div className="flex gap-3 mb-3 items-center">
        <img
          src={publisherAccount.imgUrl}
          className="rounded-full h-[28px] w-[28px]"
          alt=""
        />
        <Link className="text-black font-medium" href="">
          {channel}
        </Link>
        <span className="text-gray-600 ">{createdAt}</span>
      </div>
      <div className="flex gap-4 mb-3">
        <div className="flex-grow">
          <p className="text-heading3-bold mb-3">
            <Link href={`/public/post/${id}`}>{title}</Link>
          </p>
          <p>{description}</p>
        </div>
        <img
          src={imageUrl}
          className="rounded-md w-full object-fill max-w-[264px] max-h-[120px]"
          alt=""
        />
      </div>
      <div className="flex gap-2 rounded-3xl bg-gray-200 pr-2 pl-1 py-1 w-fit items-center mb-7">
        <img
          src={publisherCompany.imgUrl}
          className="rounded-full h-[24px] w-[24px]"
          alt=""
        />
        <span className="text-small-regular text-black">{category}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div className="flex gap-2">
            <FaComment size={18} />
            <span>{repliesCount}</span>
          </div>
          <div className="flex gap-2">
            <FaShare size={18} />

            <span>{sharesCount}</span>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <FaThumbsUp size={18} />

            <span>{likeCount}</span>
          </div>
          <div className="flex gap-2">
            <FaThumbsDown size={18} />

            <span>{dislikeCount}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
