import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z
    .string()
    .min(8, "Senha mínima: 8 caracteres")
});
