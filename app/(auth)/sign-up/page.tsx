import React from "react";
import AuthForm from "@/components/AuthForm";

const sinUp = () => {
  return (
    <section className="flex-center h-screen size-full max-sm:px-6">
      <div className="flex-center size-full max-sm:w-[90%] max-sm:max-w-[400px] flex-col gap-4">
        <AuthForm type="sign-up" />
      </div>
    </section>
  );
};

export default sinUp;
