import Cookies from "js-cookie";
const URL_BASE_ATENDIMENTOS = `${process.env.NEXT_PUBLIC_API}/atendimentos`

export async function createAtendimento(atendimento, fluxoId, setAtendimentos) {
    const token = Cookies.get("token");

    const res = await fetch(`${URL_BASE_ATENDIMENTOS}?fluxoId=${fluxoId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(atendimento)
    });

    if (!res.ok) {
        alert("Erro ao criar atendimento!");
        return;
    }
    fetchAtendimentos(setAtendimentos, fluxoId);

    return await res.json();
}

export async function updateAtendimento(atendimento, fluxoId, setAtendimentos) {
    const token = Cookies.get("token");
    console.log(atendimento);
    
    const res = await fetch(`${URL_BASE_ATENDIMENTOS}/${atendimento.id}?fluxoId=${fluxoId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(atendimento)
    });

    if (!res.ok) {
        alert("Erro ao atualizar atendimento!");
        return;
    }
    fetchAtendimentos(setAtendimentos, fluxoId);

    return await res.json();
}

export async function fetchAtendimentos(setAtendimentos, fluxoId) {
    const token = Cookies.get("token");

    const res = await fetch(`${URL_BASE_ATENDIMENTOS}?fluxoId=${fluxoId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    if (!res.ok) {
        alert("Erro ao buscar atendimentos!");
        return;
    }
    console.log(res.status);
    
    const text = await res.text();
    const data = text ? JSON.parse(text) : [];
    setAtendimentos(data);
}

export async function deleteAtendimento(atendimentoId, setAtendimentos, fluxoId) {
    const token = Cookies.get("token");

    const res = await fetch(`${URL_BASE_ATENDIMENTOS}/${atendimentoId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    if (!res.ok) {
        alert("Erro ao deletar atendimento!");
        return;
    }

    fetchAtendimentos(setAtendimentos, fluxoId);
}
