"use client"
import { useForm } from "react-hook-form";
import ButtonSign from "./btnSign";
import InputForm from "./input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../schemas/signinSchema";
import { useAuthStore } from "@/store/useAuthStore";

export default function FormSignIn(){
    const {login} = useAuthStore()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(signinSchema)
    })

    const signIn = async (data)=>{
        let res = await fetch(`${process.env.NEXT_PUBLIC_API}/login`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        if (res.ok) {
            let token = await res.text()
            
            login(token)
            window.location.href = '/pages/home'
            return;
        }
        
        let erro = await res.text()
        alert("Erro: " + erro)
    }

    return (
        <form onSubmit={handleSubmit(signIn)} className="flex flex-col justify-center items-center rounded-xl bg-gradient-to-b w-[80%] from-[#000000] to-[#2C6379]" action="">
            <p className="text-white text-2xl font-bold text-center m-5">
                Informe <br/> seus dados
            </p>
            <InputForm
                label={"Email"}
                type={"text"} 
                placeholder={"username@example.com"}
                register={register}
                name={"email"}
                error={errors.email}
            />
                
            <InputForm
                label={"senha"}
                type={"password"}
                register={register}
                name={"password"}
                error={errors.password}
            />
                
            <ButtonSign />
            <p className="text-white text-sm mb-5">
                Não possui uma conta? <a className="font-bold underline" href="/signup">Cadastre-se</a>
            </p>
        </form>
    )
}