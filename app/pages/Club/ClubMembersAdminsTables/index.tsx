import React from "react";
import { ClubData, Member, Admin } from "@/app/constants/ClubTypes";
import Button from "@/app/components/Button/Button";
import { useAxios } from "@/app/context/AxiosContext";

type Props = {
  club: ClubData;
  refetch: () => void;
};

const ClubMembersAdminsTables: React.FC<Props> = ({ club, refetch }) => {
  const axios = useAxios();

  const handleDeleteAdmin = async (adminId: number) => {
    try {
      // Replace with your actual endpoint to delete an admin.
      await axios.delete(`/clubs/${club.id}/admins/${adminId}`);
      alert("Admin deleted successfully!");
      refetch();
      // Optionally, refresh the club data.
    } catch (error) {
      console.error(error);
      alert("Error deleting admin.");
    }
  };

  const handleDeleteMember = async (memberId: number) => {
    try {
      // Replace with your actual endpoint to delete a member.
      await axios.delete(`/clubs/${club.id}/members/${memberId}`);
      alert("Member deleted successfully!");
      refetch();
      // Optionally, refresh the club data.
    } catch (error) {
      console.error(error);
      alert("Error deleting member.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Admins Table */}
      <div>
        <h2 className="text-xl font-bold mb-4">Club Admins</h2>
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">First Name</th>
              <th className="px-4 py-2 border">Last Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Department</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {club.admins.map((admin: Admin) => (
              <tr key={admin.id} className="text-center">
                <td className="px-4 py-2 border">{admin.id}</td>
                <td className="px-4 py-2 border">{admin.firstName}</td>
                <td className="px-4 py-2 border">{admin.lastName}</td>
                <td className="px-4 py-2 border">{admin.email}</td>
                <td className="px-4 py-2 border">{admin.department}</td>
                <td className="px-4 py-2 border">{admin.role}</td>
                <td className="px-4 py-2 border">
                  <Button
                    onClick={() => handleDeleteAdmin(admin.id)}
                    size="sm"
                    color="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Members Table */}
      <div>
        <h2 className="text-xl font-bold mb-4">Club Members</h2>
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">First Name</th>
              <th className="px-4 py-2 border">Last Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Department</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {club.members.map((member: Member) => (
              <tr key={member.id} className="text-center">
                <td className="px-4 py-2 border">{member.id}</td>
                <td className="px-4 py-2 border">{member.firstName}</td>
                <td className="px-4 py-2 border">{member.lastName}</td>
                <td className="px-4 py-2 border">{member.email}</td>
                <td className="px-4 py-2 border">{member.department}</td>
                <td className="px-4 py-2 border">{member.role}</td>
                <td className="px-4 py-2 border">
                  <Button
                    onClick={() => handleDeleteMember(member.id)}
                    size="sm"
                    color="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClubMembersAdminsTables;
