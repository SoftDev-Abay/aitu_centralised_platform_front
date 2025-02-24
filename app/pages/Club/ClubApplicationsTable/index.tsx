import React, { useEffect, useState } from "react";
import { useAxios } from "@/app/context/AxiosContext";
import Card from "@/app/components/Card/Card";
import Button from "@/app/components/Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";

export type ClubApplication = {
  id: string;
  createdBy: string;
  createdAt: string;
  clubId: string;
  deadline: string;
  templateContent: string; // This will not be shown.
};

type Props = {
  clubId: string;
};

const ClubApplicationsTable: React.FC<Props> = ({ clubId }) => {
  const axios = useAxios();
  const [applications, setApplications] = useState<ClubApplication[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/applications/form/club/${clubId}`);
        setApplications(res.data);
      } catch (error) {
        console.error("Error fetching applications", error);
      }
      setLoading(false);
    };

    if (clubId) {
      fetchApplications();
    }
  }, [clubId, axios]);

  if (loading) {
    return <div>Loading applications...</div>;
  }

  return (
    <Card>
      <h2 className="text-heading4-semibold font-bold mb-4">
        Club Applications
      </h2>

      <div className="mb-6">
        {applications.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">Created By</th>
                  <th className="px-4 py-2 border">Created At</th>
                  <th className="px-4 py-2 border">Deadline</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="text-center">
                    <td className="px-4 py-2 border">{app.id}</td>
                    <td className="px-4 py-2 border">{app.createdBy}</td>
                    <td className="px-4 py-2 border">
                      {new Date(app.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 border">
                      {new Date(app.deadline).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 border">
                      <Button size="sm" color="highlight">
                        <Link href={`/public/survey/${clubId}`}>More</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Link href={`/public/survey/create/${clubId}`}>
        <Button color="dark">New Application</Button>
      </Link>
    </Card>
  );
};

export default ClubApplicationsTable;
