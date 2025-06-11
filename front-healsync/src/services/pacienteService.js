import Cookies from "js-cookie";
const URL_BASE_PACIENTES = `${process.env.NEXT_PUBLIC_API}/pacientes`

export async function createPaciente(paciente, fluxoId) {
    const token = Cookies.get("token");

    const res = await fetch(`${URL_BASE_PACIENTES}?fluxoId=${fluxoId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paciente)
    });

    if (!res.ok) {
        alert("Erro ao criar paciente!");
        return;
    }
    fetchPacientes(fluxoId);

    return await res.json();
}

export async function updatePaciente(paciente, fluxoId) {
    const token = Cookies.get("token");
    console.log(paciente);

    const res = await fetch(`${URL_BASE_PACIENTES}/${paciente.id}?fluxoId=${fluxoId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paciente)
    });

    if (!res.ok) {
        alert("Erro ao atualizar paciente!");
        return;
    }
    fetchPacientes( fluxoId);

    return await res.json();
}

export async function fetchPacientes( fluxoId) {
    const token = Cookies.get("token");

    const res = await fetch(`${URL_BASE_PACIENTES}?fluxoId=${fluxoId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    if (!res.ok) {
        alert("Erro ao buscar pacientes!");
        return;
    }
    console.log(res.status);
    
    const text = await res.text();
    const data = text ? JSON.parse(text) : [];
    
}

export async function deletePaciente(pacienteId, fluxoId) {
    const token = Cookies.get("token");

    const res = await fetch(`${URL_BASE_PACIENTES}/${pacienteId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    if (!res.ok) {
        alert("Erro ao deletar paciente!");
        return;
    }

    fetchPacientes(setPacientes, fluxoId);
}
