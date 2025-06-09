import { useFluxosStore } from "@/store/useFluxosStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Fluxos({
	fluxos
}) {
	const { setfluxoselecionada } = useFluxosStore();
	const router = useRouter();

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
				<div className="border rounded-xl w-28 h-40 flex items-center justify-center text-sm cursor-pointer hover:scale-105 transform transition-all">
					Adicionar +
				</div>
			</div>
		</section>
	);
}
