import Image from "next/image";
import FormSignUp from "../components/formSignUp";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <>
      <header className="bg-[#1B2C33] min-h-16 flex items-center justify-center">
        <img className="w-[50px] ml-10 mr-5" src="/logo.png" alt="logo" />
        <NavBar />
        <div className="w-11 h-10 bg-amber-50 mr-15 rounded-full">

        </div>
      </header>
      <main>
        
      </main>
    </>
  );
}
