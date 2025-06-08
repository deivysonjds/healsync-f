import { z } from "zod";

// Validações reutilizáveis
const cnpjRegex = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/;
const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
const phoneRegex = /^(\d{2}\s?)?\d{4,5}-?\d{4}$/;
const rgRegex = /^\d{1,2}\.?\d{3}\.?\d{3}-?[\dXx]$/;

export const signUpSchema = z.object({
  // Dados do Hospital
  name: z
    .string()
    .trim()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(30, "Nome não pode exceder 30 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
    
  email: z
    .string()
    .trim()
    .email("Por favor, insira um e-mail válido")
    .max(100, "E-mail não pode exceder 100 caracteres"),
    
  cnpj: z
    .string()
    .trim()
    .regex(cnpjRegex, "CNPJ inválido. Formato esperado: XX.XXX.XXX/XXXX-XX")
    .transform(val => val.replace(/\D/g, '')),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Telefone inválido. Use (XX) XXXX-XXXX ou (XX) XXXXX-XXXX")
    .transform(val => val.replace(/\D/g, '')),
    
  // Dados do Usuário
  nameUser: z
    .string()
    .trim()
    .min(3, "Nome completo deve ter pelo menos 3 caracteres")
    .max(50, "Nome não pode exceder 50 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
    
  emailUser: z
    .string()
    .trim()
    .email("Por favor, insira um e-mail válido")
    .max(40, "E-mail não pode exceder 100 caracteres"),
    
  password: z
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .max(20, "Senha não pode exceder 20 caracteres")
    .regex(/[A-Z]/, "Senha deve conter pelo menos 1 letra maiúscula")
    .regex(/[a-z]/, "Senha deve conter pelo menos 1 letra minúscula")
    .regex(/[0-9]/, "Senha deve conter pelo menos 1 número")
    .regex(/[^A-Za-z0-9]/, "Senha deve conter pelo menos 1 caractere especial"),
    
  age: z
    .number()
    .int("Idade deve ser um número inteiro")
    .min(18, "Você deve ter pelo menos 18 anos")
    .max(120, "Idade máxima permitida é 120 anos"),
    
  cpf: z
    .string()
    .trim()
    .regex(cpfRegex, "CPF inválido. Formato esperado: XXX.XXX.XXX-XX")
    .transform(val => val.replace(/\D/g, '')),
    
  phoneUser: z
    .string()
    .trim()
    .regex(phoneRegex, "Telefone inválido. Use (XX) XXXX-XXXX ou (XX) XXXXX-XXXX")
    .transform(val => val.replace(/\D/g, '')),
    
  rg: z
    .string()
    .trim()
    .regex(rgRegex, "RG inválido. Formatos aceitos: XX.XXX.XXX-X ou X.XXX.XXX")
    .transform(val => val.replace(/\D/g, ''))
}).refine(data => data.email !== data.emailUser, {
  message: "E-mail do usuário não pode ser igual ao e-mail do hospital",
  path: ["emailUser"]
});