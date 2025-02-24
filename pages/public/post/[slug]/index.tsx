import Wrapper from "@/app/pages/Wrappers/RootWrapper/Wrapper";
import PostCard from "@/app/pages/Post/PostCard";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/app/components/Card/Card";
import { FaThumbsUp, FaThumbsDown, FaEye, FaShare } from "react-icons/fa";
import CommentItem from "@/app/components/CommentItem";
import PostCardFull from "@/app/pages/Post/PostCardFull";
import { useAxios } from "@/app/context/AxiosContext";
import { GetServerSideProps } from "next";
import { PostData } from "@/app/constants/PostTypes";
import { useRouter } from "next/router";

const templateDataPost = {
  channel: "TechCrunch",
  createdAt: "Feb. 19, 2025 10:04",
  title: "Startup Garage: открыт прием заявок – преврати идею в tech-стартап",
  description: `
      <p>Заявки принимаются до 1 марта 2025 года по ссылке.</p>

    <p>
      Для участия требуется сертификат об окончании образовательного курса
      Startup Academy, ИИН и ключ ЭЦП. Отбор кандидатов пройдет в два этапа:
      скрининг – проверка соответствия проекта критериям; диагностика –
      экспертная оценка проекта на основе интервью.
    </p>

    <p>
      В рамках программы стартапы не только осваивают теорию, но и применяют
      знания на практике. Еженедельно проходят воркшопы и лекции, где инвесторы
      и основатели IT-компаний делятся инсайтами о рынке. Трекеры помогают
      участникам тестировать гипотезы, внедрять стратегические решения и
      масштабировать проекты. Регулярные трекшн-встречи, борд-митинги и
      мастермайнд-сессии дают возможность анализировать прогресс, обмениваться
      опытом и находить перспективных партнеров.
    </p>

    <p>
      В течение трех месяцев участники изучат ключевые аспекты создания и
      развития технологического бизнеса. Получат практические навыки по
      валидации идей, изучат методологии Lean Startup, HADI и SMART, освоят
      принципы анализа рынка, NoCode-разработки, эффективной презентации
      продукта, разберутся в основах регистрации бизнеса, финансового
      планирования и работы с инвесторами. По завершении программы они будут
      обладать полным пониманием основ ведения tech-стартапа, а также готовым
      продуктом или прототипом и стратегией продаж. Также лучшие проекты
      получают PR-поддержку.
    </p>

    <p>
      За предыдущие потоки 2023–2024 годов в Startup Garage было отобрано 493
      стартапа, из которых 182 успешно завершили обучение. Совокупный объем
      продаж выпускников достиг 366 млн тенге.
    </p>

    <p>
      Чтобы получить дополнительную информацию о программе и подать заявку на
      участие, перейдите по ссылке.
    </p>
      `,
  imgUrl:
    "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
  publisherAccount: {
    imgUrl:
      "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
    name: "Astana Hub",
  },
  publisherCompany: {
    imgUrl:
      "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
    name: "Astana Hub",
  },
  category: "Technology",
  viewsCount: 10,
  likeCount: 150,
  dislikeCount: 150,
};

const comments = [
  {
    userImgUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    userName: "John Doe",
    createdAt: "Feb. 20, 2025 12:34",
    content: "Great article! Very informative.",
    likeCount: 10,
    dislikeCount: 2,
  },
  {
    userImgUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    userName: "Jane Smith",
    createdAt: "Feb. 21, 2025 09:45",
    content: "I learned a lot from this post. Thanks for sharing!",
    likeCount: 8,
    dislikeCount: 1,
  },
  {
    userImgUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    userName: "Mike Johnson",
    createdAt: "Feb. 22, 2025 14:23",
    content: "Interesting perspective. I have a few questions though.",
    likeCount: 5,
    dislikeCount: 0,
  },
  {
    userImgUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    userName: "Emily Davis",
    createdAt: "Feb. 23, 2025 16:12",
    content: "This is exactly what I was looking for. Thanks!",
    likeCount: 12,
    dislikeCount: 3,
  },
  {
    userImgUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    userName: "Chris Lee",
    createdAt: "Feb. 24, 2025 18:56",
    content: "Good read, but I think some points could be elaborated more.",
    likeCount: 7,
    dislikeCount: 4,
  },
];

const CommentsCard = () => {
  return (
    <Card>
      <h3 className="text-heading3-bold mb-5">Comments</h3>

      <div className="flex gap-6 flex-col">
        {comments.map((comment) => (
          <CommentItem {...comment} />
        ))}
      </div>
    </Card>
  );
};
const Page = () => {
  const router = useRouter();
  const { slug: postId } = router.query;

  const axios = useAxios();

  const [post, setPost] = useState<PostData | null>(null);

  console.log("post", post);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {}
    };
    fetchPost();
  }, []);

  if (post) console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/images/${post.id}`);

  return (
    <Wrapper>
      <div className="mb-8">
        {post && (
          <PostCardFull
            {...{
              id: post.id,
              channel: post.title,
              createdAt: "Feb. 19, 2025 10:04",
              title: post.title,
              description: post.description,
              imageUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/images/${post.imageId}`,
              publisherAccount: {
                imageUrl:
                  "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
                userId: post.userId?.toString() && "",
                name: "Nurzhau",
              },
              publisherCompany: {
                imageUrl:
                  "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
                userId: post.userId?.toString() && "",
                name: "Abay",
              },
              category: "Technology",
              repliesCount: 10,
              likeCount: post.likeCount,
              dislikeCount: 10,
              sharesCount: 25,
            }}
          />
        )}
      </div>
      <CommentsCard />
    </Wrapper>
  );
};

export default Page;
