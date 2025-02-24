import Wrapper from "@/app/pages/Wrappers/RootWrapper/Wrapper";
import PostCard from "@/app/pages/Post/PostCard";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import UpcomingEvent from "@/app/pages/Post/UpcomingEvent";
import { useAxios } from "@/app/context/AxiosContext";
const templateDataPosts = [
  {
    id: "",
    channel: "TechCrunch",
    createdAt: "Feb. 19, 2025 10:04",
    title: "Startup Garage: открыт прием заявок – преврати идею в tech-стартап",
    description:
      "Astana Hub сообщает о приеме заявок на четвертый поток инкубационной программы Startup Garage, направленной на поддержку начинающих.",
    imageUrl:
      "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
    publisherAccount: {
      imgUrl:
        "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
      userId: "",
    },
    publisherCompany: {
      imgUrl:
        "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
      userId: "",
    },
    category: "Technology",
    repliesCount: 10,
    likeCount: 150,
    dislikeCount: 10,
    sharesCount: 25,
  },
  {
    id: "",
    channel: "Hacker News",
    createdAt: "Mar. 10, 2025 14:30",
    title: "New AI Tool Revolutionizes Software Development",
    description:
      "A new AI tool has been developed that significantly speeds up the software development process.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTah0nVO5ESjopFqpvWoEzgfcq4z2q85WwOOg&s",
    publisherAccount: {
      imgUrl:
        "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
      userId: "",
    },
    publisherCompany: {
      imgUrl:
        "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
      userId: "",
    },
    category: "Artificial Intelligence",
    repliesCount: 20,
    likeCount: 200,
    dislikeCount: 24,

    sharesCount: 50,
  },
  {
    id: "",
    channel: "Wired",
    createdAt: "Apr. 5, 2025 09:15",
    title: "The Future of Quantum Computing",
    description:
      "Quantum computing is set to revolutionize the tech industry with its unprecedented processing power.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BtcIe7q95NJJ16HXDyEJg8_pr8X7emp7cg&s",
    publisherAccount: {
      imgUrl:
        "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
      userId: "",
    },
    publisherCompany: {
      imgUrl:
        "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
      userId: "",
    },
    category: "Science",
    repliesCount: 5,
    likeCount: 100,
    dislikeCount: 35,
    sharesCount: 30,
  },
];

const events = [
  {
    day: "05",
    month: "MAR",
    badgeText: "New",
    title: "Spring Festival Launch Event",
    time: "18:30",
    location: "Central Park",
    eventImage:
      "https://astanahub.com/media/Frame_29_1-612c9443a0ce-thumbnail-800.png",
  },
  {
    day: "12",
    month: "MAR",
    badgeText: "Featured",
    title: "Tech Talk: The Future of AI",
    time: "20:00",
    location: "Silicon Valley",
    eventImage:
      "https://astanahub.com/media/Frame_29_1-612c9443a0ce-thumbnail-800.png",
  },
  {
    day: "18",
    month: "MAR",
    badgeText: "Sold Out",
    title: "Music Concert: Live in Concert",
    time: "21:00",
    location: "Madison Square Garden",
    eventImage:
      "https://astanahub.com/media/Frame_29_1-612c9443a0ce-thumbnail-800.png",
  },
  {
    day: "25",
    month: "MAR",
    badgeText: "Limited",
    title: "Art Exhibition: Modern Art Insights",
    time: "17:00",
    location: "Art Gallery, NY",
    eventImage:
      "https://astanahub.com/media/Frame_29_1-612c9443a0ce-thumbnail-800.png",
  },
  {
    day: "02",
    month: "APR",
    badgeText: "Exclusive",
    title: "Wine Tasting Evening",
    time: "19:30",
    location: "Vineyard Estate",
    eventImage:
      "https://astanahub.com/media/Frame_29_1-612c9443a0ce-thumbnail-800.png",
  },
  {
    day: "10",
    month: "APR",
    badgeText: "Featured",
    title: "Book Launch: Mystery Novel",
    time: "16:00",
    location: "City Library",
    eventImage:
      "https://astanahub.com/media/Frame_29_1-612c9443a0ce-thumbnail-800.png",
  },
  {
    day: "15",
    month: "APR",
    badgeText: "New",
    title: "Cooking Workshop: Italian Cuisine",
    time: "15:00",
    location: "Culinary School",
    eventImage:
      "https://astanahub.com/media/Frame_29_1-612c9443a0ce-thumbnail-800.png",
  },
  {
    day: "22",
    month: "APR",
    badgeText: "Upcoming",
    title: "Marathon 2025: Run for a Cause",
    time: "07:00",
    location: "Downtown",
    eventImage:
      "https://astanahub.com/media/Frame_29_1-612c9443a0ce-thumbnail-800.png",
  },
  {
    day: "30",
    month: "APR",
    badgeText: "Hot",
    title: "Startup Pitch Night",
    time: "20:00",
    location: "Innovation Hub",
    eventImage:
      "https://astanahub.com/media/Frame_29_1-612c9443a0ce-thumbnail-800.png",
  },
];

const Page = () => {
  const axios = useAxios();

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts");
        console.log("posts", posts);
        setPosts(res.data);
      } catch (error) {}
    };
    fetchPosts();
  }, []);

  return (
    <Wrapper>
      <div className="flex flex-col gap-10 mb-8 ">
        {templateDataPosts.map((post) => (
          <PostCard {...post}/>
        ))}
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <p>Upcoming events</p>
          <div className="flex gap-2 items-center">
            <span>See all</span>
            <Image
              src="/assets/reply.svg"
              className="rounded-full"
              height={24}
              width={24}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {events.slice(0, 2).map((event) => (
            <UpcomingEvent {...event} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10 mb-8 ">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            {...{
              id: post.id,
              channel: post.title,
              createdAt: "Feb. 19, 2025 10:04",
              title: post.title,
              description: post.description,
              imageUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/images/{id}/id`,
              publisherAccount: {
                imgUrl:
                  "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
                userId: post.userId,
              },
              publisherCompany: {
                imgUrl:
                  "https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png",
                userId: post.userId,
              },
              category: "Technology",
              repliesCount: 10,
              likeCount: post.likeCount,
              dislikeCount: 10,
              sharesCount: 25,
            }}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Page;
