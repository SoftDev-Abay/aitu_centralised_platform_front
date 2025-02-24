import React, { useEffect } from "react";
import Wrapper from "@/app/pages/Wrappers/RootWrapper/Wrapper";
import SurveyConstructor from "@/app/pages/Survey/SurveyConstructor";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { slug: clubId } = router.query;

  // useEffect(() => {
  //   if (!clubId) {
  //     router.replace("/error?code=404&message=NotFound&redirect=/public/post");
  //   }
  // }, [clubId, router]);

  if (!clubId) {
    return null; // or a loading spinner
  }

  console.log(clubId);

  return (
    <Wrapper>
      {/* <QuestionConstructor /> */}
      <SurveyConstructor clubId={String(clubId)} />
    </Wrapper>
  );
};

export default Page;
