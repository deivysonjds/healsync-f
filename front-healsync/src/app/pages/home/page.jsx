"use client";
import { useEffect, useState } from "react";
import Fluxos from "../../components/FluxoTabs";
import Header from "../../components/Header";
import UnidadeTabs from "../../components/UnidadeTabs";
import Wellcome from "../../components/Wellcome";
import SemUnidade from "@/app/components/NoUnidade";

export default function Home() {
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    async function fetchUnidades() {
      try {
        const res = await fetch("/api/unidade", {
          //substituir pela URL do backend
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setUnidades(data);
      } catch (err) {
        console.error("Erro ao buscar unidades:", err);
      }
    }

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
