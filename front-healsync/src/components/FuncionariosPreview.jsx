import Link from "next/link";

export default function FuncionariosPreview() {
  return (
    <div className="my-6 flex justify-between items-center bg-white rounded shadow p-4">
      <h2 className="text-lg font-bold">Funcionários</h2>
      <Link
        href="/pages/funcionarios"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Gerenciar Funcionários
      </Link>
    </div>
  );
}
