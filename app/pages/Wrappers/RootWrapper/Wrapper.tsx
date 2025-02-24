import React from "react";
import Topbar from "./Topbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100 flex flex-col relative">
      <Topbar />

      <div className="flex justify-center">
        <div className="flex max-w-screen-2xl w-full gap-9 ">
          <LeftSidebar />
          {/* h-[calc(100vh-80px)] */}
          <main className="flex-grow py-6  max-w-[calc(1536px-(480px+72px))]">{children}</main>
          <RightSidebar />
          {/* <LeftSidebar /> */}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
