"use client"
import ButtonSign from "./btnSign";
import InputForm from "./input";

export default function FormSignIn(){
    function sigUp(e){
        e.preventDefault()
        alert("Login!")
    }
    return (
        <form onSubmit={sigUp} className="flex flex-col justify-center items-center rounded-xl bg-gradient-to-b w-[80%] from-[#000000] to-[#2C6379]" action="">
            <p className="text-white text-2xl font-bold text-center m-5">
                Informe <br/> seus dados
            </p>
            <InputForm label={"Email"} type={"text"} placeholder={"username@example.com"}/>
            <InputForm label={"senha"} type={"password"}/>
            <ButtonSign />
            <p className="text-white text-sm mb-5">
                Não possui uma conta? <a className="font-bold underline" href="/signup">Cadastre-se</a>
            </p>
        </form>
    )
}