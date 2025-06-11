import React from 'react';  

export default function FuncionarioForm({  
  formData,  
  editFuncionario,  
  show,  
  onChange,  
  onClose,  
  onSubmit,  
}) {  
  if (!show) return null; // Não renderiza se não estiver visível  

  const handleFormSubmit = (e) => {  
    e.preventDefault();  
    onSubmit(e);  
  };  

  return (  
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">  
      <form  
        className="bg-white p-8 rounded-xl shadow-lg min-w-[340px] max-w-lg w-full flex flex-col gap-4 border"  
        onSubmit={handleFormSubmit}  
      >  
        {/* Cabeçalho */}  
        <h2 className="text-2xl font-bold mb-4 text-center text-[#1b2c33]">  
          {editFuncionario ? 'Editar Funcionário' : 'Novo Funcionário'}  
        </h2>  

        {/* Campos do formulário */}  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
          {/* Nome */}  
          <div>  
            <label className="block text-sm font-semibold mb-1 text-gray-700" htmlFor="nome">  
              Nome <span className="text-red-500">*</span>  
            </label>  
            <input  
              id="nome"  
              className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"  
              name="nome"  
              value={formData.nome}  
              onChange={onChange}  
              required  
              placeholder="Nome completo"  
            />  
          </div>  

          {/* CPF */}  
          <div>  
            <label className="block text-sm font-semibold mb-1 text-gray-700" htmlFor="cpf">  
              CPF <span className="text-red-500">*</span>  
            </label>  
            <input  
              id="cpf"  
              className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"  
              name="cpf"  
              value={formData.cpf}  
              onChange={onChange}  
              required  
              disabled={!!editFuncionario} // desabilitado em edição  
              placeholder="000.000.000-00"  
            />  
          </div>  

          {/* Idade */}  
          <div>  
            <label className="block text-sm font-semibold mb-1 text-gray-700" htmlFor="idade">  
              Idade <span className="text-red-500">*</span>  
            </label>  
            <input  
              id="idade"  
              className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"  
              name="idade"  
              type="number"  
              min={1}  
              value={formData.idade}  
              onChange={onChange}  
              required  
              placeholder="Ex: 25"  
            />  
          </div>  

          {/* Endereço */}  
          <div>  
            <label className="block text-sm font-semibold mb-1 text-gray-700" htmlFor="endereco">  
              Endereço <span className="text-red-500">*</span>  
            </label>  
            <input  
              id="endereco"  
              className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"  
              name="endereco"  
              value={formData.endereco}  
              onChange={onChange}  
              required  
              placeholder="Rua, número, bairro"  
            />  
          </div>  

          {/* RG */}  
          <div>  
            <label className="block text-sm font-semibold mb-1 text-gray-700" htmlFor="rg">  
              RG <span className="text-red-500">*</span>  
            </label>  
            <input  
              id="rg"  
              className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"  
              name="rg"  
              value={formData.rg}  
              onChange={onChange}  
              required  
              disabled={!!editFuncionario} // desabilitado em edição  
              placeholder="00.000.000-0"  
            />  
          </div>  

                    {/* Email */}
          <div>
            <label
              className="block text-sm font-semibold mb-1 text-gray-700"
              htmlFor="email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
              required
              placeholder="email@exemplo.com"
            />
          </div>

          {/* Contato */}
          <div>
            <label
              className="block text-sm font-semibold mb-1 text-gray-700"
              htmlFor="contato"
            >
              Contato <span className="text-red-500">*</span>
            </label>
            <input
              id="contato"
              className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
              name="contato"
              type="tel"
              pattern="^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$"
              value={formData.contato}
              onChange={onChange}
              required
              placeholder="(99) 99999-9999"
            />
          </div>

          {/* Cargo */}
          <div>
            <label
              className="block text-sm font-semibold mb-1 text-gray-700"
              htmlFor="cargo"
            >
              Cargo <span className="text-red-500">*</span>
            </label>
            <select
              id="role"
              className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
              name="role"
              value={formData.role}
              onChange={onChange}
              required
            >
              <option value="">Selecione</option>
              <option value="PROF">Funcionário</option>
              <option value="MED">Médico</option>
            </select>
          </div>

          {/* Senha */}
          <div className="md:col-span-2">
            <label
              className="block text-sm font-semibold mb-1 text-gray-700"
              htmlFor="senha"
            >
              Senha{" "}
              {editFuncionario ? (
                <span className="text-xs text-gray-500">
                  (Deixe em branco para não alterar)
                </span>
              ) : (
                <span className="text-red-500">*</span>
              )}
            </label>
            <input
              id="senha"
              className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
              name="senha"
              type="password"
              value={formData.senha || ''}
              onChange={onChange}
              required={!editFuncionario}
              placeholder="Senha de acesso"
              autoComplete="new-password"
            />
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex gap-2 mt-6 justify-end">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Salvar
          </button>
          <button
            type="button"
            className="px-5 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
