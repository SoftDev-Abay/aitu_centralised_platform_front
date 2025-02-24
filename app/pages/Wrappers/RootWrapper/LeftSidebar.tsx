import Card from "@/app/components/Card/Card";
import React from "react";
import NestedLinksBox from "@/app/components/NestedLinksBox";
import BookmarkIcon from "@/app/icons/BookmarkIcon";
import HouseIcon from "@/app/icons/HouseIcon";
import NotificationLink from "@/app/components/NotificationLink";

import {
  FaCalendar,
  FaRegCalendarAlt,
  FaNewspaper,
  FaUsers,
  FaUser,
  FaClipboard,
  FaBell,
} from "react-icons/fa";

const links = {
  nestedLinks: [
    {
      title: "Calendar",
      url: "/public/calendar",
      icon: <FaCalendar color="gray" size={20} />,
    },
    {
      title: "Events",
      url: "/public/event/1",
      // url: "/public/event/1",
      icon: <FaRegCalendarAlt color="gray" size={20} />,
    },
    {
      title: "News",
      url: "/public/post",
      icon: <FaNewspaper color="gray" size={20} />,
    },
    {
      title: "Clubs",
      url: "/public/club",
      icon: <FaUsers color="gray" size={20} />,
    },
    {
      title: "Applications",
      url: "/public/hotel",
      icon: <FaClipboard color="gray" size={20} />,
      nestedLinks: [
        {
          title: "All",
          url: "/public/hotel/rooms",
        },
        {
          title: "Pending",
          url: "/public/hotel/placements",
        },
      ],
    },
    {
      title: "Profile",
      url: "/public/profile",
      icon: <FaUser color="gray" size={20} />,
    },
  ],
  notificationLinks: [
    {
      title: "Notifications",
      url: "",
      icon: <FaBell color="gray" size={20} />,
    },
  ],
};

const LeftSidebar = () => {
  return (
    <div className="flex flex-col  w-[240px] sticky h-[calc(100vh-80px)] custom-scrollbar py-6 overflow-y-auto top-[80px]">
      {links.nestedLinks.map((link, index) => (
        <NestedLinksBox
          title={link.title}
          url={link.url}
          icon={link.icon}
          nestedLinks={link.nestedLinks}
          key={index}
        />
      ))}

      {links.notificationLinks.map((link, index) => (
        <NotificationLink
          title={link.title}
          url={link.url}
          icon={link.icon}
          key={index}
        />
      ))}
    </div>
  );
};

export default LeftSidebar;
