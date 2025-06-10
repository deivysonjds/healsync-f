import Cookies from "js-cookie";
const URL_BASE_FUNCIONARIOS = `${process.env.NEXT_PUBLIC_API}/funcionarios`;

export async function fetchUserData(setUserData) {
    const token = Cookies.get("token");
    const res = await fetch(URL_BASE_FUNCIONARIOS, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
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

