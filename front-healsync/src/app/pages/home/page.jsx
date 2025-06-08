"use client";
import { useEffect } from "react";
import Fluxos from "../../../components/FluxoTabs";
import Header from "../../../components/Header";
import UnidadeTabs from "../../../components/UnidadeTabs";
import Wellcome from "../../../components/Wellcome";
import SemUnidade from "@/components/NoUnidade";
import Cookies from "js-cookie";
import { useUnidadesStore } from "@/store/useUnidadeStore";

export default function Home() {
  const {unidades, setUnidades} = useUnidadesStore()

  async function fetchUnidades() {
      const token = Cookies.get("token");
      
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/unidades`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          },
        });

        const data = await res.json();
        
        setUnidades(data);
    }
    
  useEffect(() => {

    fetchUnidades();
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
