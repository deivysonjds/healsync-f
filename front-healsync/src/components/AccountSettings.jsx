"use client";
import React, { useState, useEffect } from "react";
import { useDataUserStore } from "@/store/useDataUserStore";
import { updateFuncionario } from "@/services/funcionarioService";

export default function AccountSettings() {
  const { userData, setUserData } = useDataUserStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    cpf: "",
    phone: "",
    rg: "",
    role: "",
    password: "",
    hospitalId: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("info");

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        age: userData.age || "",
        cpf: userData.cpf || "",
        phone: userData.phone || "",
        rg: userData.rg || "",
        role: userData.role || "",
        password: "", // nunca preenche senha por segurança
        hospitalId: userData.hospitalId || ""
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    try {
      if (!userData || !userData.id) {
        setMessage("Erro: ID do usuário não encontrado.");
        setIsLoading(false);
        return;
      }
      // Monta objeto de update apenas com campos preenchidos
      const updatePayload = { ...formData };
      if (!updatePayload.password) delete updatePayload.password; // não envia senha se não for alterada
      const updatedData = await updateFuncionario(userData.id, updatePayload);
      setUserData(updatedData);
      setMessage("Dados atualizados com sucesso!");
    } catch (error) {
      setMessage(`Erro ao atualizar dados: ${error.message}`);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <div className="bg-[#1A2327] flex items-center justify-between px-8 py-3">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <nav className="flex gap-8 text-white font-medium text-lg">
            <a href="/pages/home" className="hover:underline">início</a>
            <a href="#" className="hover:underline">pagamentos</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="focus:outline-none">
            <img src="/icon-config.png" alt="Configurações" className="h-7 w-7" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-8 mb-4">
        <h1 className="text-2xl font-medium text-[#222]">Configurações da Conta</h1>
        <hr className="w-3/4 border-t border-gray-300 mt-4" />
      </div>

      <div className="flex-1 flex justify-center items-center w-full">
        <div className="flex flex-row items-center justify-center gap-10 w-full max-w-5xl mx-auto scale-[0.92]">
          <aside className="flex flex-col gap-2 min-w-[180px] max-w-[200px] w-[200px] pt-5 pb-5 px-3 bg-white rounded-2xl shadow-lg border border-gray-200 transition-all !mx-auto">
            <button
              onClick={() => setActiveTab('info')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-lg w-full text-left font-medium shadow-sm ${activeTab === 'info' ? 'font-bold text-[#1A2327] bg-gray-100' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Info <span className="ml-1">→</span>
            </button>
            <button
              onClick={() => setActiveTab('unidades')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-lg w-full text-left font-medium shadow-sm ${activeTab === 'unidades' ? 'font-bold text-[#1A2327] bg-gray-100' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Unidades <span className="ml-1">→</span>
            </button>
          </aside>
          <main className="flex-1 flex justify-center">
            {activeTab === "info" && (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-10 min-w-[420px] w-full max-w-[540px] border border-gray-100 transition-all">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight">DADOS PESSOAIS</h2>
                    <p className="text-gray-500 text-base mt-1">Seu espaço!</p>
                  </div>
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#1A2327] text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg hover:bg-[#25313a] disabled:opacity-50 transition-all"
                  >
                    {isLoading ? "Salvando..." : "Salvar"}
                  </button>
                </div>

                {message && <p className={`mb-4 text-base ${message.startsWith("Erro") ? "text-red-500" : "text-green-600"}`}>{message}</p>}

                <div className="flex flex-col gap-5 mb-8">
                  <div>
                    <label className="block text-base font-semibold mb-1" htmlFor="name">Nome:</label>
                    <input id="name" type="text" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#1A2327] bg-gray-50 text-lg" />
                  </div>
                  <div>
                    <label className="block text-base font-semibold mb-1" htmlFor="email">Email:</label>
                    <input id="email" type="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#1A2327] bg-gray-50 text-lg" />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-base font-semibold mb-1" htmlFor="age">Idade:</label>
                      <input id="age" type="number" value={formData.age} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#1A2327] bg-gray-50 text-lg" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-base font-semibold mb-1" htmlFor="cpf">CPF:</label>
                      <input id="cpf" type="text" value={formData.cpf} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#1A2327] bg-gray-50 text-lg" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-base font-semibold mb-1" htmlFor="phone">Telefone:</label>
                      <input id="phone" type="text" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#1A2327] bg-gray-50 text-lg" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-base font-semibold mb-1" htmlFor="rg">RG:</label>
                      <input id="rg" type="text" value={formData.rg} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#1A2327] bg-gray-50 text-lg" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-base font-semibold mb-1" htmlFor="role">Cargo:</label>
                      <input id="role" type="text" value={formData.role} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#1A2327] bg-gray-50 text-lg" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-base font-semibold mb-1" htmlFor="hospitalId">Hospital ID:</label>
                      <input id="hospitalId" type="text" value={formData.hospitalId} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#1A2327] bg-gray-50 text-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-base font-semibold mb-1" htmlFor="password">Senha:</label>
                    <input id="password" type="password" value={formData.password} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#1A2327] bg-gray-50 text-lg" placeholder="Deixe em branco para não alterar" />
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button type="button" className="text-red-600 hover:underline font-semibold text-base">Desativar conta</button>
                </div>
              </form>
            )}
            {activeTab === "unidades" && (
              <div className="bg-white rounded-2xl shadow-2xl p-10 min-w-[420px] w-full max-w-[700px] border border-gray-100 transition-all">
                <h2 className="text-2xl font-bold mb-8">Unidades</h2>
                <p className="text-gray-500 mb-6">Aqui você pode visualizar e gerenciar suas unidades cadastradas.</p>
                <form className="flex flex-col gap-5">
                  <div>
                    <label className="block text-base font-semibold mb-1" htmlFor="nomeUnidade">Nome da unidade</label>
                    <input id="nomeUnidade" type="text" placeholder="Nome da unidade" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#1A2327] text-lg" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-base font-semibold mb-1" htmlFor="cep">CEP</label>
                      <input id="cep" type="text" placeholder="CEP" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#1A2327] text-lg" />
                    </div>
                    <div>
                      <label className="block text-base font-semibold mb-1" htmlFor="logradouro">Logradouro</label>
                      <input id="logradouro" type="text" placeholder="Logradouro" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#1A2327] text-lg" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-base font-semibold mb-1" htmlFor="numero">Nº</label>
                      <input id="numero" type="text" placeholder="Nº" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#1A2327] text-lg" />
                    </div>
                    <div>
                      <label className="block text-base font-semibold mb-1" htmlFor="complemento">Complemento</label>
                      <input id="complemento" type="text" placeholder="Complemento" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#1A2327] text-lg" />
                    </div>
                    <div>
                      <label className="block text-base font-semibold mb-1" htmlFor="cidade">Cidade</label>
                      <input id="cidade" type="text" placeholder="Cidade" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#1A2327] text-lg" />
                    </div>
                  </div>
                  <div className="w-1/3">
                    <label className="block text-base font-semibold mb-1" htmlFor="uf">UF</label>
                    <input id="uf" type="text" placeholder="UF" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-[#1A2327] text-lg" />
                  </div>
                  <div className="flex justify-end mt-4">
                    <button type="button" className="border border-gray-400 px-8 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">Criar Unidade</button>
                  </div>
                </form>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
