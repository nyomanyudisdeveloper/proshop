"use server";
// import { PrismaClient } from "@prisma/client";
import { prisma } from "@/db/prisma";
import { convertPrismaToPlainJSObject } from "../utils";
import { LATEST_PRODUCT_LIMIT } from "../constants";

export async function getLatestProducts() {
  //   const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertPrismaToPlainJSObject(data);
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: {
      slug,
    },
  });
}
