import InputForm from "./input"

export default function FormUser({
    register,
    errors,
    watch
}) {

    return (
        <>
            <InputForm 
                label={"Seu nome"}
                type={"text"}
                name={"nameUser"}
                register={register}
                error={errors.nameUser}
            />

            <InputForm
                label={"Email do usuário"} 
                type={"text"}
                name={"emailUser"}
                register={register}
                error={errors.emailUser}
            />

            <InputForm
                label={"idade"} 
                type={"number"}
                name={"age"}
                register={register}
                error={errors.age}
            />

            <InputForm
                label={"cpf"} 
                type={"text"}
                name={"cpf"}
                register={register}
                error={errors.cpf}
            />

            <InputForm
                label={"rg"} 
                type={"text"}
                name={"rg"}
                register={register}
                error={errors.rg}
            />

            <InputForm
                label={"telefone do usuário"} 
                type={"text"}
                name={"phoneUser"}
                register={register}
                error={errors.phoneUser}
            />

            <InputForm
                label={"senha"} 
                type={"password"}
                name={"password"}
                register={register}
                error={errors.password}
            />
        </>
    )
}