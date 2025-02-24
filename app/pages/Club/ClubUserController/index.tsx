import React, { useEffect, useState } from "react";
import { useAxios } from "@/app/context/AxiosContext";
import Button from "@/app/components/Button/Button";
import SimpleSelect, { Option } from "@/app/components/SimpleSelect";
import Card from "@/app/components/Card/Card";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  role: string;
};

type Props = {
  clubId: string;
  onUserAdded?: () => void;
};

const ClubUserController: React.FC<Props> = ({ clubId, onUserAdded }) => {
  const axios = useAxios();
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<Option | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    fetchUsers();
  }, [axios]);

  const userOptions: Option[] = users.map((user) => ({
    label: `${user.firstName} ${user.lastName} (${user.email})`,
    value: user.id.toString(),
  }));

  const handleAddAsAdmin = async () => {
    if (!selectedUser) return;
    try {
      await axios.post(`/clubs/${clubId}/admins/${selectedUser.value}`);

      alert("User added as admin successfully!");
      onUserAdded && onUserAdded();
    } catch (error) {
      console.error(error);
      alert("Error adding user as admin.");
    }
  };

  const handleAddAsMember = async () => {
    if (!selectedUser) return;
    try {
      await axios.post(`/clubs/${clubId}/members/${selectedUser.value}`);
      alert("User added as member successfully!");
      onUserAdded && onUserAdded();
    } catch (error) {
      console.error(error);
      alert("Error adding user as member.");
    }
  };

  return (
    <Card>
      <h2 className="text-xl font-bold mb-2">Add User to Club</h2>
      <div className="mb-4">
        <SimpleSelect
          options={userOptions}
          value={selectedUser}
          onChange={setSelectedUser}
          placeholder="Select a user"
        />
      </div>
      <div className="flex gap-4">
        <Button onClick={handleAddAsAdmin} size="sm" color="accent">
          Add as Admin
        </Button>
        <Button onClick={handleAddAsMember} size="sm" color="dark">
          Add as Member
        </Button>
      </div>
    </Card>
  );
};

export default ClubUserController;
