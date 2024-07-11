import express from "express";
import { getTest } from "../controller/testcontroller";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", getTest);
router.get("/test", async (req, res) => {
  try {
    const result = await prisma.user.findMany({
      include: { workouts: true },
    });

    console.log(result)

    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
