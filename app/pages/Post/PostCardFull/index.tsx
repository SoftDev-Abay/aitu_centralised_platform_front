import Card from "@/app/components/Card/Card";
import Link from "next/link";
import { FaEye, FaShare, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import HtmlRenderer from "@/app/components/HtmlRenderer/HtmlRenderer";

type PostCardFullProps = {
  id: string;
  channel: string;
  createdAt: string;
  title: string;
  description: string;
  imageUrl: string;
  publisherAccount: {
    imageUrl: string;
    userId: string;
    name: string;
  };
  publisherCompany: {
    imageUrl: string;
    userId: string;
    name: string;
  };
  viewsCount?: number;
  category: string;
  repliesCount: number;
  likeCount: number;
  dislikeCount: number;
  sharesCount: number;
};

const PostCardFull = ({
  title,
  imageUrl,
  createdAt,
  description,
  channel,
  likeCount,
  dislikeCount,
  viewsCount,
  publisherCompany,
  publisherAccount,
}: PostCardFullProps) => {
  return (
    <Card>
      <h3 className="text-heading3-bold mb-5">{title}</h3>
      {/* <p className="mb-5">
          Astana Hub сообщает о приеме заявок на четвертый поток инкубационной
          программы Startup Garage, направленной на поддержку начинающих
          стартапов. Программа ориентирована на IT-проекты на стадиях идеи (MCI)
          или создания продукта (MVP). Подать заявку могут основатели старше 18
          лет из Казахстана и соседних стран.
        </p> */}
      <img src={imageUrl} className="w-full object-fill mb-6" alt="" />

      <HtmlRenderer unsafeHtml={description} className="mb-5" />

      <div className="flex justify-between mb-6 items-center">
        <div className="flex gap-5 items-center">
          <FaShare size={18} />
          <div className="flex gap-2 items-center">
            <FaEye size={18} />
            <span>{viewsCount}</span>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2 items-center">
            <FaThumbsUp size={18} />
            <span>{likeCount}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaThumbsDown size={18} />
            <span>{dislikeCount}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <img
          src={publisherCompany.imageUrl}
          className="rounded-full h-[28px] w-[28px]"
          alt=""
        />
        <Link className="text-black font-medium" href={""}>
          {publisherCompany.name}
        </Link>
        <span className="text-gray-600 ">{createdAt}</span>
      </div>
    </Card>
  );
};

export default PostCardFull;
