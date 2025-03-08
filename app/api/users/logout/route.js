import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    return Response.json(
      {
        message: "Logged out Successfully",
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
