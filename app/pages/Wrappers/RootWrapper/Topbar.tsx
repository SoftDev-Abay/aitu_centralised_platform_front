import React from "react";
import {
  FaParagraph,
  FaRegStar,
  FaRegSquare,
  FaRegCircle,
  FaFont,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { UseUserStore } from "@/app/store/useUserStore";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Topbar = () => {
  const router = useRouter();

  const logout = () => {
    Cookies.remove("token");
    UseUserStore.getState().setCurrentUser(null);
    router.push("/auth/sign-in");
  };

  return (
    <div className=" bg-white border-b py-4 flex justify-center sticky h-20 top-0 z-10">
      <div className="max-w-screen-2xl flex-1 flex items-center gap-9 justify-between">
        <div className="flex gap-2 w-[240px] items-center">
          {/* <div className="flex gap-4 w-[220px]"> */}
          <img src="/imgs/aitu-logo.png" className="h-[40px]" />
          <span>Astana IT University</span>
        </div>
        {/* <div className="flex-grow flex justify-between">
          <FaRegSquare size={22} />
          <FaRegSquare size={22} />
        </div> */}
        <div className="flex justify-end gap-4 w-[240px]">
          <span>EN</span>
          <span>{UseUserStore.getState().currentUser?.id}</span>
          <Link href="/public/profile">
            <FaUser size={22} />
          </Link>
          <FaSignOutAlt
            size={22}
            onClick={logout}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
