import { Response, Request } from 'express';

export const getTest = async (req: Request, res: Response) => {
    res.status(200).json({ hello: 'Hello Test' });
};
