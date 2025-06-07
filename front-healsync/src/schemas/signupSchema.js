import { z } from "zod";

export const signUpHospitalSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(30, "Nome precisa ter no máximo 30 caracteres"),
  email: z.string().email("E-mail inválido"),
  cnpj: z
    .string()
    .regex(/^\d{14}$/, "CNPJ deve ter 14 dígitos numéricos"),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, "Telefone deve ter 10 ou 11 dígitos"),
});

export const signUpAdminSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(30, "Nome precisa ter no máximo 30 caracteres"),
  email: z.string().email("E-mail inválido"),
  password: z
    .string()
    .min(8, "Senha deve ter pelo menos 6 caracteres")
    .max(20, "Senha precisa ter no máximo 20 caracteres"),
  age: z
    .number()
    .int("Idade deve ser um número inteiro")
    .min(18, "Idade mínima é 18 anos")
    .max(120, "Idade máxima é 120 anos"),
  cpf: z
    .string()
    .regex(/^\d{11}$/, "CPF deve ter 11 dígitos numéricos"),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, "Telefone deve ter 10 ou 11 dígitos"),
  role: z.enum(["admin", "user"], {
    errorMap: () => ({ message: "Função deve ser 'admin' ou 'user'" }),
  }),
  hospitalId: z
    .string()
    .uuid("ID do hospital deve ser um UUID válido"),
});
