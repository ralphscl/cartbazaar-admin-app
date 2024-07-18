import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
        <div className="text-accent flex items-center justify-end">
          <h2 className="font-bold">
            {session?.user.name}
          </h2>

          <div className="p-2">
            <img src={session?.user.image} alt="" className="w-8 h-8 rounded" />
          </div>
        </div>
    </Layout>
  );
}
