import { useRouter } from "next/router";
import Button from "@/app/components/Button/Button";
import Link from "next/link";
export default function ErrorPage() {
  const router = useRouter();
  const { code, message, redirect } = router.query;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-heading1-bold font-bold text-red-600">
        {code || "Error"}
      </h1>
      <p className="text-heading3-bold text-gray-700 mt-2">
        {message || "Something went wrong."}
      </p>

      {redirect && (
        <Link
          href={String(redirect)}
          className="mt-4 px-4 py-2 text-dark-1 rounded-md"
        >
          Go Back
        </Link>
      )}
    </div>
  );
}
