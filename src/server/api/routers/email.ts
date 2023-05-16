import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { emailForm } from "~/utils/nodemailer";

export const nodemailerRouter = createTRPCRouter({
  sendEmail: publicProcedure
    .input(z.object({
      name: z.string(),
      email: z.string(),
      message: z.string()
    }))
    .mutation(async ({ input }) => {
      const { name, email, message } = input;

      if (!name || !email || !message) {
        throw new TRPCError({
          message: "Must provide valid name, email, and message!",
          code: "NOT_FOUND"
        });
      } else {
        try {
          await emailForm(name, email, message);
        } catch(e) {
          throw new TRPCError({
            message: `Error: ${e}`,
            code: "INTERNAL_SERVER_ERROR"
          })
        }
        
      }

    })
})