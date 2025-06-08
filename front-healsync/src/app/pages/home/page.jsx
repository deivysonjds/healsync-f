"use client";
import { useEffect } from "react";
import Fluxos from "../../../components/FluxoTabs";
import Header from "../../../components/Header";
import UnidadeTabs from "../../../components/UnidadeTabs";
import Wellcome from "../../../components/Wellcome";
import SemUnidade from "@/components/NoUnidade";
import { useUnidadesStore } from "@/store/useUnidadeStore";
import {fetchUnidades} from "../../../services/unidadesService"

export default function Home() {
  const {unidades, setUnidades} = useUnidadesStore()
    
  useEffect(() => {
    fetchUnidades(setUnidades);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Wellcome />
        {unidades.length === 0 ? (
          <SemUnidade />
        ) : (
          <>
            <UnidadeTabs unidades={unidades} />
            <Fluxos />
          </>
        )}
      </main>
    </>
  );
}
