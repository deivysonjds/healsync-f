"use client";  

import Header from "@/components/Header";  
import { useEffect, useState } from "react";  
import {  
  fetchUserData,  
  createFuncionario,  
  updateFuncionario,  
} from "@/services/funcionarioService";  
import Cookies from "js-cookie"; // Para pegar o token  
import Link from "next/link";  
import FuncionariosTable from "@/components/FuncionariosTable";  
import FuncionarioForm from "@/components/FuncionarioForm";  

export default function FuncionariosPage() {  
  const [funcionarios, setFuncionarios] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [showForm, setShowForm] = useState(false);  
  const [editFuncionario, setEditFuncionario] = useState(null);  
  const [formData, setFormData] = useState(initialFormData());  

  // Função para gerar os dados padrão do formulário  
  function initialFormData() {  
    return {  
      nome: "",  
      cpf: "",  
      idade: "",  
      endereco: "",  
      rg: "",  
      email: "",  
      contato: "",  
      role: "",  
      senha: "",  
    };  
  }  

  // Função para pegar o token do cookie  
  const getToken = () => Cookies.get("token");  

  // Carrega a lista quando componente monta  
  useEffect(() => {  
    loadFuncionarios();  
  }, []);  

  // Função para buscar os funcionários  
  const loadFuncionarios = async () => {  
    setLoading(true);  
    try {  
      await fetchUserData(setFuncionarios);  
    } catch (error) {  
      alert("Erro ao carregar funcionários");  
    } finally {  
      setLoading(false);  
    }  
  };  

  // Abre formulário para editar  
  const handleEdit = (func) => {  
    setEditFuncionario(func);  
    setFormData({  
      nome: func.nome || "",  
      cpf: func.cpf || "",  
      idade: func.idade || "",  
      endereco: func.endereco || "",  
      rg: func.rg || "",  
      email: func.email || "",  
      contato: func.contato || "",  
      role: func.role || "",  
      senha: "", // senha vazia ao editar  
    });  
    setShowForm(true);  
  };  

  // Deletar funcionário com confirmação  
  const handleDelete = async (id) => {  
    if (confirm("Tem certeza que deseja excluir este funcionário?")) {  
      // Aqui você pode implementar a exclusão no backend se disponível  
      // await deleteFuncionario(id);  
      await loadFuncionarios();  
    }  
  };  

  // Abre formulário para criar novo funcionário  
  const handleCreate = () => {  
    setEditFuncionario(null);  
    setFormData(initialFormData());  
    setShowForm(true);  
  };  

  // Fecha formulário  
  const handleFormClose = () => {  
    setShowForm(false);  
    setEditFuncionario(null);  
    setFormData(initialFormData());  
  };  

  // Atualiza o estado ao mudar no formulário  
  const handleFormChange = (e) => {  
    setFormData((prev) => ({  
      ...prev,  
      [e.target.name]: e.target.value,  
    }));  
  };  

  // Função que envia os dados do formulário  
  const handleFormSubmit = async (e) => {  
    e.preventDefault();  

    const token = getToken();  
    if (!token) {  
      alert("Usuário não autenticado");  
      return;  
    }  

    const dataToSend = {  
      name: formData.nome,  
      email: formData.email,  
      age: Number(formData.idade),  
      cpf: formData.cpf,  
      phone: formData.contato,  
      rg: formData.rg,  
      role: formData.role,  
      password: formData.senha,  
    };  

    try {  
      if (editFuncionario) {  
        await updateFuncionario(  
          editFuncionario.id || editFuncionario.cpf,  
          dataToSend,  
          token  
        );  
      } else {  
        await createFuncionario(dataToSend, token);  
      }  
      handleFormClose();  
      await loadFuncionarios();  
    } catch (error) {  
      alert(`Erro ao salvar funcionário: ${error.message}`);  
    }  
  };  

  return (
    <>
      <Header />
      <main className="p-8">
        {/* Link para voltar */}
        <div className="mb-4">
          <Link
            href="/pages/home"
            className="text-blue-600 hover:underline font-semibold"
          >
            &larr; Voltar para Home
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-6">Funcionários</h1>

        {/* Botão para novo funcionário */}
        <button
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleCreate}
        >
          Novo Funcionário
        </button>

        {/* Formulário */}
        <FuncionarioForm
          formData={formData}
          editFuncionario={editFuncionario}
          show={showForm}
          onChange={handleFormChange}
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
        />

        {/* Lista de funcionários ou carregando */}
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <FuncionariosTable
            funcionarios={funcionarios}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </main>
    </>
  );
}
