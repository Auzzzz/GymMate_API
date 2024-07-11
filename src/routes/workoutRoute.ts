import express from "express";
import workoutController from "../controller/workoutController";
import { PrismaClient } from "@prisma/client";
import { searchSchema } from "../tools/zodSchema";
import { validate } from "../tools/validation";

const router = express.Router();

router.get("/getUserWorkout", workoutController.getUserWorkouts);
router.get("/getIndividualWorkout", workoutController.getIndividualWorkout);
router.get("/getElements", workoutController.getElements);
router.post("/getWorkoutsSearch", validate(searchSchema), workoutController.getWorkoutsSearch);

export default router;