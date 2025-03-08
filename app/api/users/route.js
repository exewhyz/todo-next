import { PrismaClient } from "@prisma/client";
import { validateUser } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const userId = await validateUser();
    if (!userId) {
      return Response.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }
    const user = await prisma.user.findUnique({
      omit: {
        password: true,
      },
      where: {
        id: userId,
      },
    });

    if (!user) {
      return Response.json(
        {
          message: "Error while fetching user data...Please login again.",
        },
        {
          status: 404,
        }
      );
    }
    return Response.json(
      {
        data: user,
        message: "User data fetched Successfully",
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
