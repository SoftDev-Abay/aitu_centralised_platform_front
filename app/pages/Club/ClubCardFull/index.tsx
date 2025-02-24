import React from "react";
import { ClubData } from "@/app/constants/ClubTypes";
import Card from "@/app/components/Card/Card";
import Link from "next/link";
import { FaUsers, FaUserCog } from "react-icons/fa";
import Button from "@/app/components/Button/Button";

type ClubCardFullProps = ClubData & {
  userRole?: string;
};

const ClubCardFull: React.FC<ClubCardFullProps> = ({
  id,
  name,
  description,
  admins,
  members,
  status,
  userRole,
}) => {
  return (
    <Card>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-heading3-bold">
          <Link href={`/public/club/${id}`}>{name}</Link>
        </h3>
        <div className="flex gap-4 items-center">
          <div className="flex gap-3 items-center ">
            <FaUsers size={18} />
            <span>{members.length}</span>
          </div>
          <div className="flex gap-3 items-center">
            <FaUserCog size={18} />
            <span>{admins.length}</span>
          </div>
        </div>
      </div>
      <p className="text-body-normal mb-7">{description}</p>
      {!userRole ? (
        <Button color="dark">
          <Link href={`/survey`}>Apply</Link>
        </Button>
      ) : null}
    </Card>
  );
};

export default ClubCardFull;
