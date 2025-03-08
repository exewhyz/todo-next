"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import domain from "./todos";

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

export async function login(email, password) {
  try {
    const response = await fetch(`${domain}/api/users/login`, {
      method: "POST",
      body: {
        email,
        password,
      },
    });
    const { message } = await response.json();
    return message;
  } catch (error) {
    console.log(error);
    throw new Error("Error while login");
  }
}

export async function register(name, email, password) {
  try {
    const response = await fetch(`${domain}/api/users/register`, {
      method: "POST",
      body: {
        name,
        email,
        password,
      },
    });
    const { message } = await response.json();
    return message;
  } catch (error) {
    console.log(error);
    throw new Error("Error while Registering User");
  }
}

export async function logout() {
  try {
    const response = await fetch(`${domain}/api/users/logout`);
    const { message } = await response.json();
    return message;
  } catch (error) {
    console.log(error);
    throw new Error("Error while Registering User");
  }
}

export async function getUser() {
  try {
    const response = await fetch(`${domain}/api/users/`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error while Registering User");
  }
}
