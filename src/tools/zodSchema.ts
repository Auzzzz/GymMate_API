import { z } from "zod";

export const searchSchema = z.object({
  body: z.object({
    search: z.string().min(1),
  }),
});

export const slugSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export const idSchema = z.object({
    params: z.object({
      id: z.number().int(),
    }),
  });
  
