import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-red-700">Oops.....</h1>
      <h1 className="text-4xl font-bold text-red-700">
        Halaman yang anda cari tidak ditemukan
      </h1>
    </div>
  );
}
