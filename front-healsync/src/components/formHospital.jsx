import InputForm from "./input"

export default function FormHospital({
    register,
    errors,
    watch
}) {

    return (
        <>
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
        </>
    )

}