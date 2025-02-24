type Admin = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  securityKey: string;
  role: string;
};

type Member = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  securityKey: string;
  role: string;
};

type ClubData = {
  id: string;
  name: string;
  description: string;
  admins: Admin[];
  members: Member[];
  status: string;
};

export type { ClubData, Admin, Member };
