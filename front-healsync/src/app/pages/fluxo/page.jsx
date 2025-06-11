"use client";
import BackRoute from "@/components/backRoute";
import EtapaFluxo from "@/components/etapaFluxo";
import Header from "@/components/Header";
import { fetchAtendimentos } from "@/services/atendimentoService";
import { useAtendimentoStore } from "@/store/useAtendimentoStore";
import { useFluxosStore } from "@/store/useFluxosStore";
import { useEffect, useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function FluxoPage() {
    const { fluxoselecionada} = useFluxosStore();
    const [isEditMode, setIsEditMode] = useState(false);
    const {atendimentos, setAtendimentos} = useAtendimentoStore();

    const handleAddAtendimento = () => {
        setAtendimentos([...atendimentos, { ordem: atendimentos.length +1 , sala: "", typeSala: "" }]);
    }
    useEffect(()=>{
        if (fluxoselecionada) {
            fetchAtendimentos(setAtendimentos, fluxoselecionada.id);
        }
    }, [fluxoselecionada]);
    return (
        <>
        <Header />
        <main>
            <div>
                <BackRoute />
            </div>
            <div className="flex flex-col items-center justify-center mt-6">
                <div className="flex flex-row justify-center mt-6 mb-6 w-[70%] rounded-2xl shadow-lg">
                    <div className="flex flex-col items-center justify-center w-full p-4">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="font-bold text-lg">{fluxoselecionada && fluxoselecionada.nameSpecialist}</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-6">
                            <EtapaFluxo fluxoSelecionado={fluxoselecionada} atendimentos={atendimentos} isEditMode={isEditMode}/>
                        </div>
                        {isEditMode && (
                            <>
                                <IoIosAddCircleOutline
                                    onClick={handleAddAtendimento}
                                    size={30}  
                                    className="hover:cursor-pointer hover:scale-105 transition-all hover:shadow-lg rounded-full transform"/>
                            </>
                        )}
                    </div>
                    <div onClick={() => setIsEditMode(!isEditMode)} className="flex flex-col h-full items-start justify-end m-2 hover:cursor-pointer hover:scale-105 transition-all hover:shadow-lg rounded-lg">
                        <BiSolidEdit size={30}/>
                    </div>
                </div>

            </div>
        </main>
        </>
    );
}