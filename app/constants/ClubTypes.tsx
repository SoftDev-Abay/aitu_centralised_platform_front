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
  forms: [
    {
      id: string;
      createdBy: string;
      createdAt: string;
      clubId: string;
      deadline: string;
      templateContent: string;
    }
  ];
};

export type { ClubData, Admin, Member };
