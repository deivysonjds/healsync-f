import Cookies from "js-cookie";
const URL_BASE_FLUXOS = `${process.env.NEXT_PUBLIC_API}/fluxos`

export async function createFluxo(fluxo, unidadeId, setFluxos) {
    const token = Cookies.get("token");

    const res = await fetch(URL_BASE_FLUXOS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            nameSpecialist: fluxo.nameSpecialist,
            unidadeId: unidadeId,
        })
    });

    if (!res.ok) {
        alert("Erro ao criar fluxo!");
        return;
    }
    fetchFluxos(setFluxos, unidadeId);
    
    return await res.json();
}

export async function fetchFluxos(setFluxos, unidadeId) {
    const token = Cookies.get("token");

    const res = await fetch(`${URL_BASE_FLUXOS}?unidadeId=${unidadeId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    const data = await res.json();
    
    setFluxos(data);
}

export async function deleteFluxo(fluxoId, setFluxos, unidadeId) {
    const token = Cookies.get("token");

    const res = await fetch(`${URL_BASE_FLUXOS}/${fluxoId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    if (!res.ok) {
        alert("Erro ao deletar fluxo!");
        return;
    }

    fetchFluxos(setFluxos, unidadeId);
}
