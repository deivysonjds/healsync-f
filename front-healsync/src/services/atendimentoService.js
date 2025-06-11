import Cookies from "js-cookie";
const URL_BASE_ATENDIMENTOS = `${process.env.NEXT_PUBLIC_API}/atendimentos`

export async function createAtendimento(atendimentos, fluxoId, setAtendimentos) {
    const token = Cookies.get("token");

    const res = await fetch(`${URL_BASE_ATENDIMENTOS}?fluxoId=${fluxoId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(atendimentos)
    });

    if (!res.ok) {
        alert("Erro ao criar atendimento!");
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

    let data = null;
    // Verifica se a resposta tem corpo antes de tentar fazer o parsing
    const text = await res.text();
    if (text) {
        try {
            data = JSON.parse(text);
        } catch (e) {
            console.error("Erro ao fazer parse do JSON:", e);
            data = null;
        }
    } else {
        data = [];
    }
    console.log(data);
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
