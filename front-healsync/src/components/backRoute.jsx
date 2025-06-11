"use client";
import { useRouter } from "next/navigation";
import { SlArrowLeftCircle } from "react-icons/sl";

export default function BackRoute() {
    const router = useRouter();

    return (
        <>
        <div className="flex m-2.5 items-center gap-1 font-bold hover:cursor-pointer" onClick={() => router.back()}>
            <SlArrowLeftCircle size={25}/>
            <p className="text-1xl">voltar</p>
        </div>
        </>
    );
}