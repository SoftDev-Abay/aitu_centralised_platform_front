interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  securityKey: string;
  role: string;
  clubs: {
    id: string;
    name: string;
    description: string;
    status: string;
    role: string;
  }[];
}

// {
//   "id": 9338,
//   "firstName": "Nurzhau",
//   "lastName": "Azimbai",
//   "email": "221558@astanait.edu.kz",
//   "department": "SE-2204",
//   "securityKey": "a53dd0f1133a51367c3bb5169ba46c68",
//   "role": "ADMIN",
//   "clubs": [
//       {
//           "id": "a820eb86-ac48-486e-9ff6-a4a85e05b4fd",
//           "name": "Java devs",
//           "description": "Club for java development enjoyers",
//           "status": "ACTIVE",
//           "role": "ADMIN"
//       }
//   ]
// }

export type { IUser };
