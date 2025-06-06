import { Frown, Building2 } from "lucide-react";

export default function SemUnidade() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 py-10">
      <div className="w-24 h-24 border-4 border-[#1b333d] rounded-full flex items-center justify-center mb-6">
        <Frown size={48} className="text-[#1b333d]" />
      </div>

      <p className="text-lg font-medium text-black mb-6">
        Que pena, você ainda não possui <br />
        nenhuma Unidade cadastrada.
      </p>

      <button className="flex items-center gap-2 bg-gradient-to-r from-black to-[#285060] text-white font-semibold px-6 py-3 rounded-lg">
        Cadastrar unidade
        <Building2 size={20} />
      </button>
    </div>
  );
}
