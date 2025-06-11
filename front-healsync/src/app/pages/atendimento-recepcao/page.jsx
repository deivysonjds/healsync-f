"use client";
import { useFluxosStore } from "@/store/useFluxosStore";
import { useUnidadesStore } from "@/store/useUnidadeStore";
import { useEffect } from "react";
import { fetchFluxos } from "@/services/fluxoService";
import BackRoute from "@/components/backRoute";
import { createPaciente } from "@/services/pacienteService";
import { useRouter } from "next/navigation";

export default function AtendimentoRecepcao() {
  const { unidadeSelecionada } = useUnidadesStore();
  const {fluxos, setfluxos} = useFluxosStore();
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      age: parseInt(formData.get("age")),
      cpf: formData.get("cpf"),
      telefone: formData.get("telefone"),
      rg: formData.get("rg"),
      cns: formData.get("cns"),
      endereco: {
        rua: formData.get("rua"),
        numero: parseInt(formData.get("numero")),
        bairro: "",
        cidade: formData.get("cidade"),
        cep: formData.get("cep"),
        complemento: formData.get("complemento"),
        uf: formData.get("uf")
      }
    };

    const fluxoId = formData.get("fluxoId");
    console.log("data", data);
    console.log("fluxoId", fluxoId);

    let res = await createPaciente(data, fluxoId, unidadeSelecionada.id);
    router.refresh()
  }

  useEffect(()=>{
    const loadData = async () => {
      if (unidadeSelecionada && unidadeSelecionada.id) {
        await fetchFluxos(setfluxos, unidadeSelecionada.id);
      }
    };
    loadData();
  }, [unidadeSelecionada, setfluxos]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <BackRoute />
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {unidadeSelecionada && unidadeSelecionada.name}
        </h1>

        {/* Dados do paciente */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Dados do paciente</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" type="text" placeholder="Nome completo" className="input" />
            <input name="cpf" type="text" placeholder="CPF" className="input" />
            <input name="age" type="number" placeholder="Idade" className="input" />
            <input name="rg" type="text" placeholder="RG" className="input" />
            <input name="cns" type="text" placeholder="Cartão do SUS" className="input" />
            <input name="email" type="email" placeholder="E-mail" className="input" />
            <input name="telefone" type="text" placeholder="Contato" className="input md:col-span-2" />
          </div>
        </div>

        {/* Endereço */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Endereço</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="cep" type="text" placeholder="CEP" className="input" />
            <input name="rua" type="text" placeholder="Logradouro" className="input" />
            <input name="numero" type="text" placeholder="Nº" className="input" />
            <input name="complemento" type="text" placeholder="Complemento" className="input" />
            <input name="cidade" type="text" placeholder="Cidade" className="input" />
            <input name="uf" type="text" placeholder="UF" className="input" />
          </div>
        </div>

        {/* Tipo de atendimento e botão */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="w-full md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-gray-700">Tipo de atendimento</label>
            <select name="fluxoId" className="input">
              {fluxos && fluxos.map((fluxo) => (
                <option key={fluxo.id} value={fluxo.id}>
                  {fluxo.nameSpecialist}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-2 rounded-md transition w-full md:w-auto">
            Iniciar atendimento
          </button>
        </div>
      </form>
    </div>
  );
}

// Tailwind input padrão para reaproveitamento
const inputClass = "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600";
