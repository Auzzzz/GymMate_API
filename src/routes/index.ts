import express from 'express';
import testRoutes from './testRoute';
import workoutRoutes from './workoutRoute';

const router = express.Router()

router.use('/test', testRoutes)
router.use('/workout', workoutRoutes)



export default router