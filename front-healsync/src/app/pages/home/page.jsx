"use client";
import { useEffect, useState } from "react";
import Fluxos from "../../../components/FluxoTabs";
import Header from "../../../components/Header";
import UnidadeTabs from "../../../components/UnidadeTabs";
import Wellcome from "../../../components/Wellcome";
import SemUnidade from "@/components/NoUnidade";
import Cookies from "js-cookie";

export default function Home() {
  const [unidades, setUnidades] = useState([]);
  async function fetchUnidades() {
      const token = Cookies.get("token");
      console.log("Token:", token);
      
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/unidades`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
        console.log(res.status);

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
