// import "./style.scss";
import RequireAuth from "@/app/components/RequireAuth/RequireAuth";
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";

import { FC, ReactNode } from "react";
import { useLoadingContext } from "@/app/context/LoadingContext";
import Topbar from "./Topbar";
import LeftSidebar from "./LeftSidebar";
import Bottombar from "./Bottombar";
import RightSidebar from "./RightSidebar";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoadingContext();

  return (
    <>
      {isLoading && <LoadingSpinner />}

      <RequireAuth allowedRoles={["hotel"]}>
        <Topbar />
        <main className="flex flex-row">
          <LeftSidebar />

          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>

          <RightSidebar />
        </main>
        <Bottombar />
      </RequireAuth>
    </>
  );
}
