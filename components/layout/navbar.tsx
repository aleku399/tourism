"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { usePathname } from 'next/navigation'
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import NavItems from "./navItems";

const NavBar: React.FC<{ session: Session | null }> = ({ session }) => {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const pathname = usePathname();



  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex-col max-w-screen-xl items-center justify-between w-full">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center font-display text-2xl">
              <Image
                src="/boots.jpeg"
                alt="logo"
                width="30"
                height="30"
                className="mr-2 rounded-3xl"
              ></Image>
              <p>Safari Boots</p>
            </Link>
            <div>
              {session ? (
                <UserDropdown session={session} />
              ) : (
                <button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
          <NavItems pathname={pathname} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
