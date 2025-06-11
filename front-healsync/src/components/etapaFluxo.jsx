import { useAtendimentoStore } from "@/store/useAtendimentoStore";
import { useState } from "react";
import { MdKeyboardDoubleArrowDown, MdEdit } from "react-icons/md";
import { createAtendimento, updateAtendimento } from "@/services/atendimentoService";
import MonitorManager from "./MonitorManager";
import MonitorPainel from "../app/pages/monitor/page.jsx";

export default function EtapaFluxo({ atendimentos, isEditMode,fluxoSelecionado }) {
    const {
        setAtendimentos,
        atendimentoselecionada,
        setAtendimentoSelecionada
    } = useAtendimentoStore();

    const [editandoOrdem, setEditandoOrdem] = useState(null);
    const [showMonitorManager, setShowMonitorManager] = useState(false);
    const [showMonitorPainel, setShowMonitorPainel] = useState(false);
    const [monitores, setMonitores] = useState([]);

    const handleEditEtapa = (atendimento) => {
        setAtendimentoSelecionada(atendimento);
        setEditandoOrdem(atendimento.ordem);
    };

    const handleSaveEtapa = async (e) => {
        e.preventDefault();

        if (!atendimentoselecionada) {
            alert("Nenhum atendimento selecionado.");
            return;
        }

        const atendimento = {
            ...atendimentoselecionada,
            sala: e.target.sala.value.trim(),
            typeSala: e.target.typeSala.value.trim()
        };

        if (!atendimento.sala || !atendimento.typeSala) {
            alert("Preencha todos os campos.");
            return;
        }

        if (atendimento.id) {
            await updateAtendimento(atendimento,fluxoSelecionado.id,setAtendimentos)
        } else {
            await createAtendimento(atendimento,fluxoSelecionado.id,setAtendimentos)
        }
        setAtendimentoSelecionada(null);
        setEditandoOrdem(null);
    };

    return (
        <div className="flex flex-col items-center w-full justify-center mt-6 gap-4 mb-12">
            {Array.isArray(atendimentos) && atendimentos.map((atendimento, index) => (
                <div key={atendimento.ordem}>
                    <div className="flex flex-col shadow-md p-4 container w-64 rounded-2xl hover:scale-105 transition transform">
                        <h1 className="text-2xl font-bold mb-4 text-center">{atendimento.nome}</h1>
                        {editandoOrdem === atendimento.ordem ? (
                            <form onSubmit={handleSaveEtapa}>
                                <label htmlFor="sala">Sala:</label>
                                <input
                                    id="sala"
                                    type="text"
                                    defaultValue={atendimento.sala}
                                    className="mb-2 w-full p-2 border rounded"
                                />
                                <label htmlFor="typeSala">Tipo:</label>
                                <select name="typeSala" id="typeSala" defaultValue={atendimento.ordem == 1 ? "atendimento" : atendimento.typeSala} className="mb-2 w-full p-2 border rounded">
                                    <option value="">Selecione um tipo</option>
                                    <option value="espera">espera</option>
                                    <option value="atendimento">atendimento</option>
                                </select>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                                    salvar
                                </button>
                            </form>
                        ) : (
                            <>
                                <p>sala: {atendimento.sala}</p>
                                <p>tipo: {atendimento.typeSala}</p>
                            </>
                        )}
                        <div className="flex flex-row gap-2 mt-4">
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                                onClick={() => {
                                    if (isEditMode) setShowMonitorManager(true);
                                    else setShowMonitorPainel(true);
                                }}
                                type="button"
                            >
                                monitores
                            </button>
                            {isEditMode && (
                                <div onClick={() => handleEditEtapa(atendimento)}>
                                    <MdEdit
                                        size={24}
                                        className="hover:cursor-pointer hover:scale-105 transition-all hover:shadow-lg"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    {showMonitorManager && isEditMode && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                            <div className="relative">
                                <button
                                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl font-bold z-10"
                                    onClick={() => setShowMonitorManager(false)}
                                    aria-label="Fechar"
                                >
                                    ×
                                </button>
                                <MonitorManager monitores={monitores} setMonitores={setMonitores} />
                            </div>
                        </div>
                    )}
                    {showMonitorPainel && !isEditMode && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                            <div className="relative">
                                <button
                                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl font-bold z-10"
                                    onClick={() => setShowMonitorPainel(false)}
                                    aria-label="Fechar"
                                >
                                    ×
                                </button>
                                <MonitorPainel />
                            </div>
                        </div>
                    )}
                    {atendimentos.length - 1 !== index && (
                        <div className="flex flex-col justify-center items-center mt-5 w-full">
                            <MdKeyboardDoubleArrowDown size={32} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
