"use client"
import ButtonSign from "./btnSign";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { signUpSchema} from "../schemas/signupSchema";
import { useState } from "react";
import FormHospital from "./formHospital";
import FormUser from "./formUser";


export default function FormSignUp(){
    const [signUpIsOk, setSignUpIsOk] = useState(false)
    const [isHospitalForm, setIsHospitalForm] = useState(true)

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: '',
            nameUser: '',
            phone: '',
            phoneUser: '',
            email: '',
            emailUser: '',
            age: 0,
            cpf: '',
            cnpj: '',
            rg: '',
            password: '',

        }
    })

    const signUp =async (data)=>{
        
        let dataResponse = await fetch(`${process.env.NEXT_PUBLIC_API}/signup`,{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        console.log('status: ', dataResponse.status);        
        
        if (dataResponse.status != 201) {
            alert('Erro: ', await dataResponse.json())
            return;
        }
        setSignUpIsOk(true)
    }  
    
    const handleChange = ()=>{
        console.log(watch());
        
    }
    
    return (
        <>
            {
                !signUpIsOk ? <form onSubmit={handleSubmit(signUp)} onChange={handleChange} className="flex flex-col justify-center items-center rounded-xl bg-gradient-to-b w-[80%] from-[#000000] to-[#2C6379]" action="">
                <p className="text-white font-bold text-center mb-3 mt-6">
                    {isHospitalForm ? "Informe os dados do hospital" : "Informe seus dados"}
                </p>

                { isHospitalForm ? 
                    <FormHospital watch={watch} register={register} errors={errors} /> : 
                    <FormUser watch={watch} register={register} errors={errors} /> 
                }
                { isHospitalForm ? 
                <button className="bg-[#1b2c33] text-white pl-4 pr-4 pt-2 pb-2 rounded-md m-7 hover:bg-[#000000] hover:cursor-pointer transition min-w-[120px]" 
                    onClick={() => setIsHospitalForm(false)}>
                    Próximo
                </button> : 
                <div>
                    <button className="bg-[#1b2c33] text-white pl-4 pr-4 pt-2 pb-2 rounded-md m-7 hover:bg-[#000000] hover:cursor-pointer transition min-w-[120px]"
                        onClick={()=> setIsHospitalForm(true)}>
                        Voltar
                    </button>
                    <ButtonSign textContent={"up"}/>
                </div>
                }
                <p className="text-white mb-2 text-sm">
                    ou{" "}
                    <a className="underline font-bold" href="/">clique aqui</a>
                    {" "}para fazer login
                </p>
            </form> : <div className="flex flex-col justify-center items-center rounded-xl bg-gradient-to-b w-[80%] from-[#000000] to-[#2C6379]">
                <div>
                    <p className="text-white text-3xl mt-15">
                        Dados cadastrados! <img className="inline" src="/icon-check.png" alt="icon check" />
                    </p>
                </div>
                <div>
                    <a href="/">
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