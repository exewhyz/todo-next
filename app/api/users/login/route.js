import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return Response.json(
        {
          message:
            "Email or Password is Incorrect. Please provide correct credentials",
        },
        {
          status: 401,
        }
      );
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return Response.json(
        {
          message:
            "Email or Password is Incorrect. Please provide correct credentials",
        },
        {
          status: 401,
        }
      );
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    const cookiesStore = await cookies();
    cookiesStore.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 24 * 60 * 60,
      sameSite: "strict",
    });
    return Response.json(
      {
        message: "Logged In Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
