import React from "react";
import { ClubData } from "@/app/constants/ClubTypes";
import Card from "@/app/components/Card/Card";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";

interface ClubCardProps extends ClubData {}

type CardProps = ClubData & React.HTMLAttributes<HTMLDivElement>;

const ClubCard: React.FC<CardProps> = ({
  id,
  name,
  description,
  admins,
  members,
  status,
  ...rest
}) => {
  return (
    <Card {...rest}>
      <h3 className="text-heading3-bold">
        <Link href={`/public/club/${id}`}>{name}</Link>
      </h3>
      <p className="text-body-normal">{description}</p>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <FaUsers size={18} />
          <span>{members.length}</span>
        </div>
        <div className="flex gap-3">
          <FaUsers size={18} />
          <span>{admins.length}</span>
        </div>
      </div>
    </Card>
  );
};

export default ClubCard;
