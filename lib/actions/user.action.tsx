"use server";

import { signInForSchema } from "../validator";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Sign In the user with credentials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInForSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);

    return { success: true, message: "Sign in successfully" };
  } catch (err) {
    if (isRedirectError(err)) {
      throw err;
    }

    return { success: false, message: "Invalid email or password" };
  }
}

// Sign Out User
export async function signOutUser() {
  await signOut();
}
