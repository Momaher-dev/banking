"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signUp = async (userData: SignUpParams) => {
  const { firstName, lastName, email, password } = userData;
  try {
    const { account } = await createAdminClient();

    const userId = ID.unique();

    const newUserAccount = await account.create(
      userId,
      email,
      password,
      `${firstName} ${lastName}`
    );
    if (!newUserAccount) throw new Error("Error creating user");

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUserAccount);
  } catch (error) {
    console.error('Signup error:', error);
    return { success: false, error };
  }
};

export const signIn = async ({ email, password }: SignInParams) => {
  try {
    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password); // Create session

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
      sameSite: "strict", // Prevent cross-site scripting attacks
      secure: true,
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return { success: true, session };
  } catch (error) {
    console.error('Signin error:', error);
    return { success: false, error }; // Return false and error object
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();

    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}

// TODO: Redirect to sign-in page
export const signOut = async () => {
  try {
    const { account } = await createSessionClient();
    await account.deleteSession("current"); // Delete current session
    cookies().delete("appwrite-session"); // Delete appwrite-session cookie
    redirect("/sign-in"); // Redirect to sign-in page
  } catch (error) {
    return null;
  }
};
