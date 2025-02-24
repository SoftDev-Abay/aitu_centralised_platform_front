import React, { useEffect, useState } from "react";
import Wrapper from "@/app/pages/Wrappers/RootWrapper/Wrapper";
import ClubCard from "@/app/pages/Club/ClubCard";
import { ClubData } from "@/app/constants/ClubTypes";
import { useAxios } from "@/app/context/AxiosContext";
import { useRouter } from "next/router";
import ClubCardFull from "@/app/pages/Club/ClubCardFull";
import ClubMembersAdminsTables from "@/app/pages/Club/ClubMembersAdminsTables";
import Card from "@/app/components/Card/Card";
import ClubUserController from "@/app/pages/Club/ClubUserController";
import { UseUserStore } from "@/app/store/useUserStore";
import Button from "@/app/components/Button/Button";
import Link from "next/link";
import ClubApplicationsTable from "@/app/pages/Club/ClubApplicationsTable";

const Page = () => {
  const axios = useAxios();
  const router = useRouter();

  const { slug: clubId } = router.query;

  const [club, setClub] = useState<ClubData | null>(null);

  const fetchClub = async () => {
    const res = await axios.get("/clubs/" + clubId);

    setClub(res.data);
  };

  useEffect(() => {
    fetchClub();
  }, []);

  if (!club) return null;

  const currentClubUserData = UseUserStore.getState().currentUser?.clubs.find(
    (clubIterator) => clubIterator.id === club.id
  );

  const userRole = currentClubUserData?.role;

  console.log({ currentClubUserData, userRole });

  return (
    <Wrapper>
      <div className="mb-6">
        <ClubCardFull {...club} userRole={userRole} />
      </div>

      {userRole === "ADMIN" ? (
        <>
          <Card className="mb-6">
            <ClubMembersAdminsTables club={club} refetch={fetchClub} />
          </Card>

          <div className="mb-6">
            <ClubUserController clubId={club.id} onUserAdded={fetchClub} />
          </div>

          <ClubApplicationsTable clubId={club.id} />
        </>
      ) : null}
    </Wrapper>
  );
};

export default Page;
