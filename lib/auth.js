"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function validateUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");
    if (!token) {
      throw new Error("Token is invalid or expired");
    }
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    return userId;
  } catch (error) {
    console.log(error);
    throw new Error("Token is invalid or expired");
  }
}
