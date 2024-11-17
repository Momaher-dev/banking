import { signOut } from "@/lib/actions/user.action";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await signOut();

    if (loggedOut) router.push("/sign-in");
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user?.name}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate text-gray-600 font-semibold">
          {user?.email}
        </h1>
       
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <Image src="/icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  );
};

export default Footer;
