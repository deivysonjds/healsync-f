import Cookies from "js-cookie";
const URL_BASE_FUNCIONARIOS = `${process.env.NEXT_PUBLIC_API}/funcionarios`;

export async function fetchUserData(setUserData) {
    const token = Cookies.get("token");
    const res = await fetch(URL_BASE_FUNCIONARIOS, {
        method: "GET",
        headers: {
                Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    setUserData(data);
}

export const updateFuncionario = async (userId, dataToUpdate) => {
    const token = Cookies.get("token");
    const res = await fetch(`${URL_BASE_FUNCIONARIOS}/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dataToUpdate),
    });
    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Falha ao atualizar dados do funcionário");
    }
    return await res.json();
};

export async function createFuncionario(funcionario) {
    const token = Cookies.get("token");
    console.log("Enviando para API:", funcionario); // <-- Adicione isso

    const res = await fetch(URL_BASE_FUNCIONARIOS, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(funcionario),
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Erro ao criar funcionário:", errorData);
        throw new Error(errorData.message || "Erro ao criar funcionário");
    }

    return await res.json();
}

export async function deleteFuncionario(id) {
    const token = Cookies.get("token");

    const res = await fetch(`${URL_BASE_FUNCIONARIOS}/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Erro ao deletar funcionário");
    }

    return true;
}
