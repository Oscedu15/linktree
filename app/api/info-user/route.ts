import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  try {
    //Consultamos con clerk si esta registrado el usuario
    const { userId } = getAuth(req);
    //Si el suario no esta registrado en clerk, devolvemos la siguiente respuesta
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    //Si el ususrio esta registrado en clerk, lo buscamos mendiante su id en nuestra base de datos
    let existingUser = await db.user.findUnique({
      where: {
        id: userId,
      },
      include: { links: true },
    });

    //Si el usuario esta autenticado en clerk pero no en nuestra base de datos, procedemos en crearle el usuario en la misma
    if (!existingUser) {
      existingUser = await db.user.create({
        data: {
          id: userId,
          name: "User",
          username: `user_${Date.now()}`,
          links: {
            create: [],
          },
        },
        include: { links: true },
      });
    }

    //Al final enviamos a nuestro front la respuesta con la informacion solicitada
    return NextResponse.json(existingUser);
  } catch (error) {
    console.error("Get User First Login", error);
    return NextResponse.json(
      {
        message: "Error fetching user",
      },
      { status: 500 }
    );
  }
}
