"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUnidades } from "@/services/unidadesService";

export default function NovaUnidade() {
  const route = useRouter();

  const [form, setForm] = useState({
    nome: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cidade: "",
    uf: "",
  });

  const [erroCep, setErroCep] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buscarEndereco = async (cep) => {
    const cepLimpo = cep.replace(/\D/g, "");
    if (cepLimpo.length !== 8) return;

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await res.json();

      if (data.erro) {
        setErroCep("CEP não encontrado.");
        return;
      }

      setErroCep("");
      setForm((prev) => ({
        ...prev,
        logradouro: data.logradouro || "",
        complemento: data.complemento || "",
        cidade: data.localidade || "",
        uf: data.uf || "",
      }));
    } catch (error) {
      setErroCep("Erro ao buscar o CEP.");
    }
  };

  const handleBlurCep = () => {
    buscarEndereco(form.cep);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nome, cep, logradouro, numero, complemento, cidade, uf } = form;

    const endereco = {
        rua: logradouro, 
        bairro: "substituir",
        número: numero,
        cidade: cidade, 
        cep: cep, 
        complemento: complemento, 
        uf: uf
    };
    const payload = {
      nome,
      endereco,
    };

    createUnidades(payload);

    route.push("/pages/home");
  };
  return (
    <main className="p-4 md:px-16">
      <button
        className="text-base mb-4 text-gray-700 hover:underline"
        onClick={() => route.back()}
      >
        &lt; voltar
      </button>

      <h1 className="text-center text-xl font-bold mb-6">Nova Unidade</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md border max-w-3xl mx-auto"
      >
        <h2 className="text-lg font-bold mb-4">Dados da Unidade</h2>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">
            Nome da unidade
          </label>
          <input
            name="nome"
            placeholder="Nome da unidade"
            value={form.nome}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            type="text"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold mb-1">CEP</label>
            <input
              name="cep"
              placeholder="CEP"
              value={form.cep}
              onChange={handleChange}
              onBlur={handleBlurCep}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              type="text"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-bold mb-1">Logradouro</label>
            <input
              name="logradouro"
              placeholder="Logradouro"
              value={form.logradouro}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              type="text"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Nº</label>
            <input
              name="numero"
              placeholder="Nº"
              value={form.numero}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              type="text"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Complemento</label>
            <input
              name="complemento"
              placeholder="Complemento"
              value={form.complemento}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              type="text"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Cidade</label>
            <input
              name="cidade"
              placeholder="Cidade"
              value={form.cidade}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              type="text"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">UF</label>
            <input
              name="uf"
              placeholder="UF"
              value={form.uf}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              type="text"
              maxLength={2}
            />
          </div>
        </div>

        {erroCep && <p className="text-red-500 text-sm">{erroCep}</p>}

        <div className="flex justify-end">
          <button
            type="submit"
            className={`bg-white text-black border hover:bg-gradient-to-l from-black from-0% to-[#285060] to-100% hover:text-white px-6 py-2 rounded-md mt-2`}
          >
            Criar Unidade
          </button>
        </div>
      </form>
    </main>
  );
}
