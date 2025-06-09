"use client"
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";

export default function NavBar() {
    const { logout } = useAuthStore()
    const [isExitPopUoOpen, setIsExitPopUoOpen] = useState(false)

    const handleExit = () => {
        logout()
        location.href = "/"
    }
    return (
        <>
            <nav className="flex flex-row justify-between items-center w-[100%] ml-3 mr-5 text-white">
                <div className="flex flex-row gap-4">
                    <div>
                        <a href="/pages/home" className="hover:underline transition">
                            <p>início</p>
                        </a>
                    </div>
                    <div>
                        <a href="/pages/pagamentos" className="hover:underline transition">
                            <p>pagamentos</p>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 mr-4">
                    <a href="/pages/config">
                        <img className="w-11" src="/icon-config.png" alt="logo" />
                    </a>
                    <div onClick={() => setIsExitPopUoOpen(true)} className="hover:underline transition hover:cursor-pointer">
                        <p>sair</p>
                    </div>
                </div>
            </nav>
            {isExitPopUoOpen && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ">
                <div className="bg-gray-300 rounded-xl shadow-lg p-6 w-full max-w-md text-black">
                    <p className="text-lg mb-4">Você realmente deseja sair?</p>
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={() => setIsExitPopUoOpen(false)}
                            className="px-4 py-2 bg-white rounded hover:bg-gray-100 hover:cursor-pointer"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={() => handleExit()}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 hover:cursor-pointer"
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
            }
        </>
    );
}
