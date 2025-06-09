import Cookies from "js-cookie";
import { fetchFluxos } from "./fluxoService";
const URL_BASE_UNIDADES = `${process.env.NEXT_PUBLIC_API}/unidades`

export async function fetchUnidades(setUnidades, setfluxos) {
    const token = Cookies.get("token");
    
    const res = await fetch(URL_BASE_UNIDADES, {
        method: "GET",
        headers: {
        Authorization: `Bearer ${token}`
        },
    });

    const data = await res.json();
    await fetchFluxos(setfluxos, data[0].id);
    setUnidades(data);
}

