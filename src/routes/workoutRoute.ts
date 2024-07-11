import express from "express";
import workoutController from "../controller/workoutController";
import { PrismaClient } from "@prisma/client";

const router = express.Router();

router.get("/getUserWorkout", workoutController.getUserWorkouts);
router.get("/getIndividualWorkout", workoutController.getIndividualWorkout);

export default router;