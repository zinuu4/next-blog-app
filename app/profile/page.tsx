import { authConfig } from "@/configs/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Profile | Next App",
};

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      <div className="profile">
        <h3>{session?.user?.email}</h3>
        {session?.user?.image && (
          <img
            className="profile__avatar"
            src={session.user.image}
            alt="avatar"
          />
        )}
      </div>
    </div>
  );
}
