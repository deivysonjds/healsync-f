import Cookies from "js-cookie";

// Base URL para requisições relacionadas a funcionários
const URL_BASE_FUNCIONARIOS = `${process.env.NEXT_PUBLIC_API}/funcionarios`;

/**
 * Busca todos os funcionários e atualiza o estado fornecido.
 * @param {Function} setUserData - Função para atualizar o estado dos funcionários.
 */
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
    console.log('Dados recebidos:', data); // Adicione este log
    setUserData(data);
}

/**
 * Atualiza os dados de um funcionário.
 * @param {string|number} userId - ID ou CPF do funcionário.
 * @param {Object} dataToUpdate - Dados a serem atualizados.
 * @returns {Promise<Object>} - Dados atualizados do funcionário.
 * @throws {Error} - Caso a atualização falhe.
 */
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

/**
 * Cria um novo funcionário.
 * @param {Object} funcionario - Dados do funcionário a ser criado.
 * @returns {Promise<Object>} - Funcionário criado.
 * @throws {Error} - Caso a criação falhe.
 */
export async function createFuncionario(funcionario) {
    const token = Cookies.get("token");
    console.log("Enviando para API:", funcionario); // Debug: verificar payload enviado

    const res = await fetch(URL_BASE_FUNCIONARIOS, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(funcionario),
    });

    if (!res.ok) {
        // Tenta extrair mensagem de erro da resposta
        const errorData = await res.json().catch(() => ({}));
        console.error("Erro ao criar funcionário:", errorData);
        throw new Error(errorData.message || "Erro ao criar funcionário");
    }

    return await res.json();
}

/**
 * Deleta um funcionário pelo ID.
 * @param {string|number} id - ID ou CPF do funcionário.
 * @returns {Promise<boolean>} - Retorna true se deletado com sucesso.
 * @throws {Error} - Caso a deleção falhe.
 */
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

// Sugestão de melhoria:
// - Centralizar a obtenção do token em uma função utilitária para evitar repetição.
// - Criar um wrapper para fetch com tratamento de erros padrão.
// - Usar try/catch para capturar erros de rede inesperados.
// - Padronizar o tratamento de erros para facilitar manutenção e debugging.
