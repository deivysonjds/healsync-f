import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function EtapaFluxo() {

    const fluxos = [
        { id: 1, nome: "Recepção" },
        { id: 2, nome: "Sala de espera" },
        { id: 3, nome: "Médico" }
    ]
    return (
        <>  
            <div className="flex flex-col items-center w-full justify-center mt-6 gap-4 mb-12">
                {fluxos.map((fluxo, index) => (
                    <div key={fluxo.id}>
                        <div  className="flex flex-col shadow-md p-4 container h-50 w-64 rounded-2xl hover:scale-105 transition transform">
                            <h1 className="text-2xl font-bold mb-4 text-center">{fluxo.nome}</h1>
                            <p>Esta é a página para gerenciar as etapas de um fluxo.</p>
                            <div className="flex flex-row gap-2">
                                <button className="px-4 hover:cursor-pointer py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                                    monitores
                                </button>
                                <button className="px-4 hover:cursor-pointer py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                                    editar
                                </button>
                            </div>
                        </div>
                        {fluxos.length - 1 !== index && (
                            <div className="flex flex-col justify-center items-center mt-5 w-full">
                                <div className="border-l bg-black h-0.5 w-full opacity-5 shadow-md"></div>
                                <MdKeyboardDoubleArrowDown size={32}/>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}