import Wrapper from "@/app/pages/Wrappers/RootWrapper/Wrapper";

import React from "react";
import { UseUserStore } from "@/app/store/useUserStore";
import Card from "@/app/components/Card/Card";
const Page = () => {
  return (
    <Wrapper>
      <Card>
        <h2 className="text-heading3-bold mb-4">User data</h2>

        <div className="flex flex-col gap-5 mb-7">
          <div className="flex justify-between">
            <p>Email</p>
            <p>{UseUserStore.getState().currentUser?.email}</p>
          </div>
          <div className="flex justify-between">
            <p>FirstName</p>
            <p>{UseUserStore.getState().currentUser?.firstName}</p>
          </div>
          <div className="flex justify-between">
            <p>LastName</p>
            <p>{UseUserStore.getState().currentUser?.lastName}</p>
          </div>
          <div className="flex justify-between">
            <p>Department</p>
            <p>{UseUserStore.getState().currentUser?.department}</p>
          </div>
          <div className="flex justify-between">
            <p>Security Key</p>
            <p>{UseUserStore.getState().currentUser?.securityKey}</p>
          </div>
        </div>
        <h2 className="text-heading3-bold mb-4">User Clubs</h2>
        {UseUserStore.getState().currentUser?.clubs.map((club) => (
          <div className="flex flex-col gap-5 mb-7">
            <div className="flex justify-between">
              <p>Club Name</p>
              <p>{club.name}</p>
            </div>
            <div className="flex justify-between">
              <p>Your Role</p>
              <p>{club.role}</p>
            </div>
          </div>
        ))}
      </Card>
    </Wrapper>
  );
};

export default Page;
