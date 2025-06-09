"use client";
import EtapaFluxo from "@/components/etapaFluxo";
import Header from "@/components/Header";
import { useFluxosStore } from "@/store/useFluxosStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SlArrowLeftCircle } from "react-icons/sl";


export default function FluxoPage() {
    const {fluxoselecionada} = useFluxosStore();
    const router = useRouter();

    return (
        <>
        <Header />
        <main>
            <div>
                <Link href="/pages/home" className="flex m-1.5 items-center gap-1 font-bold" onClick={() => router.back()}>
                    <SlArrowLeftCircle className="h-9"/>
                    <p className="text-1xl">voltar</p>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2>{fluxoselecionada && fluxoselecionada.nameSpecialist}</h2>
            </div>
            <div className="flex flex-col items-center justify-center mt-6">
                <EtapaFluxo />
            </div>
        </main>
        </>
    );
}