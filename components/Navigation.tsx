"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  console.log(session);

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}

      {session?.data && <Link href="/profile">Profile</Link>}

      {session?.data ? (
        <Link
          href="#"
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
        >
          Sign out
        </Link>
      ) : (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </>
  );
};

export default Navigation;
