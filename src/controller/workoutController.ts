import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get a user id off the request and return all workouts associated with that user
export const getUserWorkouts = async (req: Request, res: Response) => {
  //TODO: add actual user id
  const userId = req.params.userId;
  try {
    const result = await prisma.user.findMany({
      where: { clerkID: "1234abcd" },
      include: { workouts: true },
    });

    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


// Get a workout id off the request and return the workout and its elements w/ details
export const getIndividualWorkout = async (req: Request, res: Response) => {
  const workoutId = req.params.workoutId;
  try {
    const result = await prisma.workout.findUnique({
      where: { workoutId: 1 },
      include: { elements: { include: { element: true } } },
    });

    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Get a search term off the request and return workouts that match that search term
export const getWorkoutsSearch = async (req: Request, res: Response) => {

    // const searchTerm = req.params.searchTerm;
    const searchTerm = "Test Workout";
    try {
      const result = await prisma.workout.findMany({
        where: { name: { contains: searchTerm } },
      });
  
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }


}


// Get a search term off the request and return elements that match that search term
export const getElements = async (req: Request, res: Response) => {
  // const searchTerm = req.params.searchTerm;
  const searchTerm = "Another One";
  try {
    const result = await prisma.element.findMany({
      where: { name: { contains: searchTerm } },
    });

    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default { getUserWorkouts, getIndividualWorkout, getElements, getWorkoutsSearch };
