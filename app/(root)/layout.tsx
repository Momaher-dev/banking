import SideBar from "@/components/SideBar";
import MobileNav from "@/components/mobileNav";
import Image from "next/image";
import { getLoggedInUser } from "@/lib/actions/user.action";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex size-full font-col">
        <div className="root-layout">
          <Image src="/icons/logo.png" alt="logo" width={30} height={30} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
