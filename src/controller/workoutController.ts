import { Response, Request } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserWorkouts = async (req: Request, res: Response) => {
    //TODO: add actual user id
    const userId = req.params.userId;
    try {
        const result = await prisma.user.findMany({
            where: { clerkID: '1234abcd' },
            include: { workouts: true },
        });

        res.status(200).json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const getIndividualWorkout = async (req: Request, res: Response) => {
    const workoutId = req.params.workoutId;
    try {
        const result = await prisma.workout.findUnique({
            where: { workoutId: 1 },
        });

        res.status(200).json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }

}

export default { getUserWorkouts, getIndividualWorkout}