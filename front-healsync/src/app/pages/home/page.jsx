"use client";
import { useEffect } from "react";
import Fluxos from "../../../components/FluxoTabs";
import Header from "../../../components/Header";
import UnidadeTabs from "../../../components/UnidadeTabs";
import Wellcome from "../../../components/Wellcome";
import SemUnidade from "@/components/NoUnidade";
import { useUnidadesStore } from "@/store/useUnidadeStore";
import {fetchUnidades} from "../../../services/unidadesService"
import { fetchUserData } from "@/services/funcionarioService";
import { useDataUserStore } from "@/store/useDataUserStore";
import Loader from "@/components/loader";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useFluxosStore } from "@/store/useFluxosStore";
import { fetchFluxos } from "@/services/fluxoService";

export default function Home() {
  const {unidades, setUnidades} = useUnidadesStore()
  const {userData,setUserData} = useDataUserStore()
  const {fluxos, setfluxos} = useFluxosStore()
  const {isLoading, setIsLoading} = useLoadingStore()
    
  useEffect(() => {
      const loadData = async () => {
      setIsLoading(true);
      await fetchUnidades(setUnidades, setfluxos);
      await fetchUserData(setUserData);
      setIsLoading(false);
      
    };

    loadData()
  }, []);

  return (
    <>
      <Header />
      <main>
        <Wellcome name={userData && userData.name } />
        {
          isLoading ? <Loader /> : 
            unidades.length === 0 ? (
              <>
                <SemUnidade />
              </>
            ) : (
              <>
                <UnidadeTabs unidades={unidades} />
                <Fluxos fluxos={fluxos} />
              </>
            )
        }
      </main>
    </>
  );
}
