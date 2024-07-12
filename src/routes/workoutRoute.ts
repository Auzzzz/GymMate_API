import express from "express";
import workoutController from "../controller/workoutController";
import { PrismaClient } from "@prisma/client";
import { searchSchema, idSchema, slugSchema } from "../tools/zodSchema";
import { validate } from "../tools/validation";

const router = express.Router();

router.get(
  "/getUserWorkout/:id",
  validate(slugSchema),
  workoutController.getUserWorkouts
);
router.get(
  "/getIndividualWorkout/:id",
  validate(slugSchema),
  workoutController.getIndividualWorkout
);
router.post(
  "/getElements",
  validate(searchSchema),
  workoutController.getElements
);
router.post(
  "/getWorkoutsSearch",
  validate(searchSchema),
  workoutController.getWorkoutsSearch
);

export default router;
