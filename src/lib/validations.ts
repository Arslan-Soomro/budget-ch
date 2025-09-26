import { z } from "zod";

export const userSignUpSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export type UserSignUpValues = z.infer<typeof userSignUpSchema>;

export const userSignInSchema = userSignUpSchema.pick({
  email: true,
  password: true,
});

export type UserSignInValues = z.infer<typeof userSignInSchema>;

export const userForgotPasswordSchema = userSignUpSchema.pick({
  email: true,
});

export type UserForgotPasswordValues = z.infer<typeof userForgotPasswordSchema>;
