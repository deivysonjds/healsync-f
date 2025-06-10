export default function FuncionarioForm({
  formData,
  editFuncionario,
  show,
  onChange,
  onClose,
  onSubmit,
}) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-80">
      <form
        className="bg-white p-8 rounded-xl shadow-lg min-w-[340px] max-w-lg w-full flex flex-col gap-4 border"
        style={{ minWidth: 0 }}
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-[#1b2c33]">
          {editFuncionario ? "Editar Funcionário" : "Novo Funcionário"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-semibold mb-1 text-gray-700"
            >
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
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="cpf"
              className="block text-sm font-semibold mb-1 text-gray-700"
            >
              CPF <span className="text-red-500">*</span>
            </label>
            <input
              id="cpf"
              className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
              name="cpf"
              value={formData.cpf}
              onChange={onChange}
              required
              disabled={!!editFuncionario}
              placeholder="000.000.000-00"
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="idade"
              className="block text-sm font-semibold mb-1 text-gray-700"
            >
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
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="endereco"
              className="block text-sm font-semibold mb-1 text-gray-700"
            >
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
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="rg"
              className="block text-sm font-semibold mb-1 text-gray-700"
            >
              RG <span className="text-red-500">*</span>
            </label>
            <input
              id="rg"
              className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
              name="rg"
              value={formData.rg}
              onChange={onChange}
              required
              disabled={!!editFuncionario}
              placeholder="00.000.000-0"
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-1 text-gray-700"
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
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="contato"
              className="block text-sm font-semibold mb-1 text-gray-700"
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
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-semibold mb-1 text-gray-700"
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
              <option value="FUNCIONARIO">Funcionário</option>
              <option value="MEDICO">Médico</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="senha"
              className="block text-sm font-semibold mb-1 text-gray-700"
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
              value={formData.senha}
              onChange={onChange}
              required={!editFuncionario}
              placeholder="Senha de acesso"
              autoComplete="new-password"
            />
          </div>
        </div>
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
