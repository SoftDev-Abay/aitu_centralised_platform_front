import React, { useEffect, useState } from "react";
import Wrapper from "@/app/pages/Wrappers/RootWrapper/Wrapper";
import ClubCard from "@/app/pages/Club/ClubCard";
import { ClubData } from "@/app/constants/ClubTypes";
import { useAxios } from "@/app/context/AxiosContext";
const Page = () => {
  const axios = useAxios();

  const [clubs, setClubs] = useState<ClubData[]>([]);

  useEffect(() => {
    const fetchClubs = async () => {
      const res = await axios.get("/clubs");

      setClubs(res.data);
    };

    fetchClubs();
  }, []);

  return (
    <Wrapper>
      <h3 className="text-heading3-bold mb-7">All Clubs</h3>
      <div className="flex gap-4">
        {clubs.map((club) => (
          <ClubCard key={club.id} {...club} className="w-[50%]" />
        ))}
      </div>
    </Wrapper>
  );
};

export default Page;
