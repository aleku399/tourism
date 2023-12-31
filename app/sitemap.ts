import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export default async function (): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      url: "https://tourism-5xim-aleku399.vercel.app/",
      lastModified: new Date(),
    },
    ...users.map((user) => ({
      url: `https://tourism-5xim-aleku399.vercel.app/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}
