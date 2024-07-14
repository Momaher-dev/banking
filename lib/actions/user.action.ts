"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signUp = async (user: SignUpParams) => {
  try {
    const { account } = await createAdminClient();
    const { firstName, lastName, email, password } = userData;

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUserAccount);
  } catch (error) {
    return { success: false, error };
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
export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    // cookies().set("appwrite-session", session.secret, {
    //   path: "/",
    //   httpOnly: true,
    //   sameSite: "strict",
    //   secure: true,
    // });
    return parseStringify(session);
  } catch (error) {
    return { success: false, error };
  }
};
export const signOut = async () => {
  try {
    const { account } = await createSessionClient();
    await account.deleteSession("current");
    cookies().delete("appwrite-session");
    redirect("/");
  } catch (error) {
    return null;
  }
};
