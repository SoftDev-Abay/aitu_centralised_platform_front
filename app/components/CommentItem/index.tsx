import Link from "next/link";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

type CommentItemProps = {
  userImgUrl: string;
  userName: string;
  createdAt: string;
  content: string;
  likeCount: number;
  dislikeCount: number;
};

const CommentItem = ({
  userImgUrl,
  userName,
  createdAt,
  content,
  likeCount,
  dislikeCount,
}: CommentItemProps) => {
  return (
    <div className="flex gap-3">
      <img src={userImgUrl} className="rounded-full h-[28px] w-[28px]" alt="" />
      <div className="mt-1">
        <div className="flex gap-2 mb-2">
          <Link className="text-black font-medium" href={""}>
            {userName}
          </Link>
          <span className="text-gray-600 ">{createdAt}</span>
        </div>
        <p className="mb-4">{content}</p>
        <div className="flex gap-5">
          <Link className="text-gray-400 font-medium" href={""}>
            Reply
          </Link>
          <div className="flex gap-6 items-center">
            <div className="flex gap-1 items-center">
              <FaThumbsUp size={16} />
              <span>{likeCount}</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaThumbsDown size={16} />
              <span>{dislikeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
