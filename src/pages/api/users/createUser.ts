import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, password } = req.body;
    // creating new user
    await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return res.status(201).json({});
  } catch (erro) {
    console.log(erro);
  }
}
