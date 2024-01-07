import * as z from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name cannot be more than 50 characters in length" }),
  email: z.string().email({ message: "Please enter your valid email address" }),
  message: z
    .string()
    .min(10, { message: "Field must contain 10 to 1000 characters" })
    .max(1000, { message: "Field must contain 10 to 1000 characters" }),
});
