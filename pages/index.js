
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";

export default function Home() {
  const { data: session } = useSession()

  if(!session) {
    return (
      <main className="bg-accent w-screen h-screen flex items-center">
        <div className="w-full flex justify-center items-center">
          <button 
            className="bg-white py-2 px-4 rounded-lg hover:bg-gray-200"
            onClick={() => signIn()}
          >
            Login with Google
          </button>
        </div>
      </main>
    )
  }

  return (
    <div className="bg-accent min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow">
        <div>
        logged in as {session.user.name}
        </div>
      </div>
    </div>
  );
}
