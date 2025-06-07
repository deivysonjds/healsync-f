"use client"
import ButtonSign from "./btnSign";
import InputForm from "./input";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { signUpHospitalSchema, signUpAdminSchema} from "../schemas/signupSchema";
import { useState } from "react";


export default function FormSignUp(){
    const [signUpIsOk, setSigninIsOk] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(signUpHospitalSchema)
    })

    const signUpHospital =async (data)=>{
        console.log(JSON.stringify(data, null, 2));
        
        console.log("api: " +process.env.NEXT_PUBLIC_API);
        
        let dataResponse = await fetch(`${process.env.NEXT_PUBLIC_API}/hospital/register`,{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        
        if (dataResponse.ok) {
            setSigninIsOk(!signUpIsOk)
        }
        
    }
    
    return (
        <>
            {
                !signUpIsOk ? <form onSubmit={handleSubmit(signUpHospital)} className="flex flex-col justify-center items-center rounded-xl bg-gradient-to-b w-[80%] from-[#000000] to-[#2C6379]" action="">
                <p className="text-white font-bold text-center mb-3 mt-6">
                    Informe seus dados
                </p>

                <InputForm 
                    label={"Nome do hospital"}
                    type={"text"}
                    name={"name"}
                    register={register}
                    error={errors.name}
                />

                <InputForm
                    label={"Email"} 
                    type={"text"}
                    name={"email"}
                    register={register}
                    error={errors.email}
                    />

                <InputForm
                    label={"cnpj"} 
                    type={"text"}
                    name={"cnpj"}
                    register={register}
                    error={errors.cnpj}
                    />

                <InputForm
                    label={"telefone"} 
                    type={"text"}
                    name={"phone"}
                    register={register}
                    error={errors.phone}
                    />

                <ButtonSign textContent={"up"}/>
                <p className="text-white mb-2 text-sm">
                    ou{" "}
                    <a className="underline font-bold" href="/pages/signin">clique aqui</a>
                    {" "}para fazer login
                </p>
            </form> : <div className="flex flex-col justify-center items-center rounded-xl bg-gradient-to-b w-[80%] from-[#000000] to-[#2C6379]">
                <div>
                    <p className="text-white text-3xl mt-15">
                        Dados cadastrados! <img className="inline" src="/icon-check.png" alt="icon check" />
                    </p>
                </div>
                <div>
                    <a onClick={setSigninIsOk(!signUpIsOk)} href="/">
                        <button className="bg-[#1b2c33] text-white pl-4 pr-4 pt-2 pb-2 rounded-md m-7 hover:bg-[#000000] hover:cursor-pointer transition min-w-[120px]">
                            fazer login
                        </button>
                    </a>
                </div>
            </div>
            }
            
        </>
    )
}