"use client"
import ButtonSignUp from "./btnSignUp";
import InputForm from "./inputSigUp";

export default function FormSignUp(){
    function sigUp(e){
        e.preventDefault()
        alert("Cadastro!")
    }
    return (
        <form onSubmit={sigUp} className="flex flex-col justify-center items-center rounded-xl bg-gradient-to-b w-[80%] from-[#000000] to-[#2C6379]" action="">
            <p className="text-white font-bold text-center mb-3 mt-6">
                Informe <br/> seus dados
            </p>
            <InputForm label={"Nome do hospital"} type={"text"}/>
            <InputForm label={"Email"} type={"text"}/>
            <InputForm label={"senha"} type={"password"}/>
            <InputForm label={"cnpj"} type={"text"}/>
            <InputForm label={"telefone"} type={"text"}/>
            <ButtonSignUp />
        </form>
    )
}