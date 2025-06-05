import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(30, "Nome precisa ter no máximo 30 caracteres"),
  email: z.string().email("E-mail inválido"),
  password: z
    .string()
    .min(8, "Senha mínima: 8 caracteres")
    .regex(/[A-Z]/, "Senha deve ter 1 letra maiúscula")
    .regex(/[0-9]/, "Senha deve ter 1 número"),
  cnpj: z
    .string()
    .regex(/^\d{14}$/, "CNPJ deve ter 14 dígitos numéricos"),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, "Telefone deve ter 10 ou 11 dígitos"),
});
