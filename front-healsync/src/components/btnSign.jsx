

export default function ButtonSign({textContent}){

    return (
        <>
            <button className="bg-[#1b2c33] text-white pl-4 pr-4 pt-2 pb-2 rounded-md m-7 hover:bg-[#000000] hover:cursor-pointer transition min-w-[120px]" type="submit">
                {textContent == "up"? "Inscreva-se" : "entrar"}
            </button>
        </>
    )
}