"use client";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import {
  fetchUserData,
  createFuncionario,
  updateFuncionario,
} from "@/services/funcionarioService";
import Link from "next/link";
import FuncionariosTable from "@/components/FuncionariosTable";
import FuncionarioForm from "@/components/FuncionarioForm";

export default function FuncionariosPage() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editFuncionario, setEditFuncionario] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    idade: "",
    endereco: "",
    rg: "",
    email: "",
    contato: "",
    role: "",
    senha: "",
  });

  useEffect(() => {
    loadFuncionarios();
  }, []);

  const loadFuncionarios = async () => {
    setLoading(true);
    await fetchUserData(setFuncionarios);
    setLoading(false);
  };

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
      senha: "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    // await deleteFuncionario(id);
    await loadFuncionarios();
  };

  const handleCreate = () => {
    setEditFuncionario(null);
    setFormData({
      nome: "",
      cpf: "",
      idade: "",
      endereco: "",
      rg: "",
      email: "",
      contato: "",
      role: "",
      senha: "",
    });
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditFuncionario(null);
    setFormData({
      nome: "",
      cpf: "",
      idade: "",
      endereco: "",
      rg: "",
      email: "",
      contato: "",
      role: "",
      senha: "",
    });
  };

  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Exemplo de conversão antes de enviar
    const dataToSend = {
      name: formData.nome,
      email: formData.email,
      age: Number(formData.idade),
      cpf: formData.cpf,
      phone: formData.contato,
      rg: formData.rg,
      role: formData.role,
      password: formData.senha,
      // Remova hospitalId daqui!
    };
    if (editFuncionario) {
      await updateFuncionario(
        editFuncionario.id || editFuncionario.cpf,
        dataToSend
      );
    } else {
      await createFuncionario(dataToSend);
    }
    handleFormClose();
    await loadFuncionarios();
  };

  return (
    <>
      <Header />
      <main className="p-8">
        <div className="mb-4">
          <Link
            href="/pages/home"
            className="text-blue-600 hover:underline font-semibold"
          >
            &larr; Voltar para Home
          </Link>
        </div>
        <h1 className="text-2xl font-bold mb-6">Funcionários</h1>
        <button
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleCreate}
        >
          Novo Funcionário
        </button>
        <FuncionarioForm
          formData={formData}
          editFuncionario={editFuncionario}
          show={showForm}
          onChange={handleFormChange}
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
        />
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
