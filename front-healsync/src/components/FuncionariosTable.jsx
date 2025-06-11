/**
 * Tabela de funcionários.
 *
 * Props:
 * - funcionarios: array de objetos funcionário para exibir na tabela
 * - onEdit: função chamada ao clicar em "Editar" (recebe o funcionário)
 * - onDelete: função chamada ao clicar em "Deletar" (recebe o id ou cpf)
 *
 * Observações:
 * - Exibe mensagem caso não haja funcionários.
 * - Os valores de cargo são convertidos para exibição amigável.
 * - Ações de editar e deletar são exibidas em cada linha.
 *
 * Sugestão: Para tabelas maiores, considere paginação ou busca.
 */
export default function FuncionariosTable({ funcionarios, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm">
        <thead>
          <tr>
            <th className="border px-2 py-2">Nome</th>
            <th className="border px-2 py-2">CPF</th>
            <th className="border px-2 py-2">Idade</th>
            <th className="border px-2 py-2">Endereço</th>
            <th className="border px-2 py-2">RG</th>
            <th className="border px-2 py-2">Email</th>
            <th className="border px-2 py-2">Contato</th>
            <th className="border px-2 py-2">Cargo</th>
            <th className="border px-2 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(funcionarios) && funcionarios.length > 0 ? (
            funcionarios.map((func, idx) => (
              <tr key={func.id || func.cpf || idx}>
                <td className="border px-2 py-2">{func.nome}</td>
                <td className="border px-2 py-2">{func.cpf}</td>
                <td className="border px-2 py-2">{func.idade}</td>
                <td className="border px-2 py-2">{func.endereco}</td>
                <td className="border px-2 py-2">{func.rg}</td>
                <td className="border px-2 py-2">{func.email}</td>
                <td className="border px-2 py-2">{func.contato}</td>
                <td className="border px-2 py-2">
                  {/* Exibe o cargo de forma amigável */}
                  {func.role === "PROF"
                    ? "Funcionário"
                    : func.role === "MED"
                    ? "Médico"
                    : func.role}
                </td>
                <td className="border px-2 py-2 flex gap-2">
                  <button
                    className="px-2 py-1 bg-yellow-400 rounded"
                    onClick={() => onEdit(func)}
                  >
                    Editar
                  </button>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded"
                    onClick={() => onDelete(func.id || func.cpf)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center py-4">
                Nenhum funcionário encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

/*
Sugestões de melhoria:
- Extrair linha da tabela para um componente separado se houver muitas ações ou colunas.
- Adicionar loading ou skeleton enquanto carrega os dados.
- Adicionar confirmação ao deletar.
*/
