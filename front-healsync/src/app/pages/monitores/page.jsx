"use client"
import React, { useEffect, useState } from "react";
import MonitorManager from "@/components/MonitorManager";

export default function MonitoresPage() {
  const [monitores, setMonitores] = useState([]);

  // useEffect(() => {
  //   fetch("/api/monitores")
  //     .then((res) => res.json())
  //     .then((data) => setMonitores(data));
  // }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Gerenciar Monitores</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <div className="flex-1 min-w-[300px]">
          <MonitorManager monitores={monitores} setMonitores={setMonitores} />
        </div>
      </div>
    </div>
  );
}
