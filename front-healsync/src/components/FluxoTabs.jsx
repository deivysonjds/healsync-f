import { useFluxosStore } from "@/store/useFluxosStore";
import { useUnidadesStore } from "@/store/useUnidadeStore";
import Link from "next/link";
import { useState } from "react";
import { createFluxo } from "@/services/fluxoService";
import { useRouter } from "next/navigation";

export default function Fluxos({
	fluxos
}) {
	const [isNewFluxo, setIsNewFluxo] = useState(false);
	const { setfluxos } = useFluxosStore();
	const { setfluxoselecionada } = useFluxosStore();
	const {unidadeSelecionada} = useUnidadesStore();
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const nameSpecialist = e.target.nameSpecialist.value;
		let fluxo = await createFluxo({ nameSpecialist }, unidadeSelecionada.id, setfluxos);
		setfluxoselecionada(fluxo)
		router.push('/pages/fluxo');
	};

	return (
		<section className="px-6 mt-6 font-extrabold ">
			<h2 className="font-bold text-lg mb-2">fluxos</h2>
			<div className="flex gap-2">
				{fluxos.map((fluxo) => (
					<Link key={fluxo.id} href="/pages/fluxo">
						<div
							className="border rounded-xl w-28 h-40 flex items-center justify-center text-sm cursor-pointer hover:scale-105 transform transition-all"
							onClick={() => setfluxoselecionada(fluxo)} 
						>
							{fluxo.nameSpecialist}
						</div>
					</Link>
				))}

				<div 
					onClick={() => setIsNewFluxo(true)} 
					className="border rounded-xl w-28 h-40 flex items-center justify-center text-sm cursor-pointer hover:scale-105 transform transition-all">
					Adicionar +
				</div>
				{isNewFluxo && (
					<div className="absolute top-0 left-0 w-full h-full backdrop-blur-xs flex flex-col items-center justify-center z-50">
						<form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-80">
							<input id="nameSpecialist" required type="text" placeholder="Nome do Fluxo" className="border p-2 rounded" />
							<div className="flex gap-2 mt-4">
								<button 
									onClick={() => setIsNewFluxo(false)}
									className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition hover:cursor-pointer">
									Cancelar
								</button>
								<button 
									className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition hover:cursor-pointer"
									type="submit">
									Adicionar
								</button>
							</div>
						</form>
					</div>
				)}
			</div>
		</section>
	);
}
