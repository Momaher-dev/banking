"use server";

import { ID } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signUp = async (userData: SignUpParams) => {
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

// export const signIn = async (userData: FormData) => {
//   try {
//     const user = await signInUser(userData);
//     return { success: true, user };
//   } catch (error) {
//     return { success: false, error };
//   }
// };
// function createUser(userData: FormData) {
//   throw new Error("Function not implemented.");
// }
