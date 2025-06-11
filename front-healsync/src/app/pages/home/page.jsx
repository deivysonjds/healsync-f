"use client";
import { useEffect } from "react";
import Fluxos from "../../../components/FluxoTabs";
import Header from "../../../components/Header";
import UnidadeTabs from "../../../components/UnidadeTabs";
import Wellcome from "../../../components/Wellcome";
import SemUnidade from "@/components/NoUnidade";
import { useUnidadesStore } from "@/store/useUnidadeStore";
import { fetchUnidades } from "../../../services/unidadesService";
import { fetchUserData } from "@/services/funcionarioService";
import { useDataUserStore } from "@/store/useDataUserStore";
import Loader from "@/components/loader";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useFluxosStore } from "@/store/useFluxosStore";
import { useAuthStore } from "@/store/useAuthStore"; // Import useAuthStore
import FuncionariosPreview from "@/components/FuncionariosPreview";

export default function Home() {
  const {unidades, setUnidades} = useUnidadesStore()
  const {userData,setUserData} = useDataUserStore()
  const {fluxos, setfluxos} = useFluxosStore()
  const {isLoading, setIsLoading} = useLoadingStore()
  const token = useAuthStore(state => state.token); // Changed to reactive selector

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      // Ensure token is available before fetching data that depends on it
      if (token) {
        await fetchUnidades(setUnidades, setfluxos); // Assuming fetchUnidades might also need auth or can run without it
        await fetchUserData(setUserData);
      } else {
        console.warn("Token ainda não disponível, adiando o carregamento dos dados do usuário.");
        // Optionally, you could set an error state or retry logic here
        // For now, we'll just log a warning. The user might need to log in again.
      }
      setIsLoading(false);
    };

    loadData();
  }, [token, setUnidades, setfluxos, setUserData, setIsLoading]); // Add token to dependency array

  return (
    <>
      <Header />
      <main>
        <Wellcome name={userData && userData.name} />
        {isLoading ? (
          <Loader />
        ) : unidades && unidades.length === 0 ? (
          <>
            <SemUnidade />
          </>
        ) : (
          <>
            <UnidadeTabs unidades={unidades} />
            <Fluxos fluxos={fluxos} />
            <FuncionariosPreview />
          </>
        )}
      </main>
    </>
  );
}
