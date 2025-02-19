import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  const { code, message, redirect } = router.query;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">{code || "Error"}</h1>
      <p className="text-lg text-gray-700 mt-2">
        {message || "Something went wrong."}
      </p>

      {redirect && (
        <button
          onClick={() => {
            router.push(String(redirect));
          }}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Go Back
        </button>
      )}
    </div>
  );
}
