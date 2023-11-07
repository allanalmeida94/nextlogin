import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { name, email, password } = req.body;

  await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return res.status(201).json({});
}
