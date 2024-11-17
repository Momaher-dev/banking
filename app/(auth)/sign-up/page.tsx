import React from "react";
import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

const SignUp = async () => {
  try {
    const loggedIn = await getLoggedInUser();
    console.log(loggedIn);
    // If user is logged in, redirect to home
    if (loggedIn) {
      redirect('/');
    }
  } catch (error) {
    // Handle any errors silently - user is probably not logged in
  }

  return (
    <section className="flex-center h-screen size-full max-sm:px-6">
      <div className="flex-center size-full max-sm:w-[90%] max-sm:max-w-[400px] flex-col gap-4">
        <AuthForm type="sign-up" />
      </div>
    </section>
  );
};

export default SignUp;