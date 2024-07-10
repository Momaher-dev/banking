import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotleBalanceBox";
import RightSideBar from "@/components/RightSideBar";

const Home = () => {
  const loggedInUser = {
    firstName: "Mo_Maher",
    lastName: "Mohammed",
    email: "mo_maher@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <div className="home-content-left">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome to Horizon"
              user={
                loggedInUser.firstName + " " + loggedInUser.lastName || "Guest"
              }
              subtext="Access your account and manage your finances with ease."
            />
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              currency="USD"
              totalCurrentBalance={134413}
            />
          </header>
        </div>
      </div>
      <RightSideBar
        user={loggedInUser}
        transactions={[]}
        banks={[{ currentBalance: 767887 }, { currentBalance: 1355675441223 }]}
      />
    </section>
  );
};

export default Home;
