
import FormSignUp from "../../components/formSignUp";

export default function Home() {
  return (
    <main className="grid grid-cols-[60%_40%] h-screen">
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#000000] to-[#285060]">
        <img src="/logo.png" alt="logo" className="w-50 mb-5"/>
        <h1 className="text-white font-bold">Sign Up</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <FormSignUp />
      </div>
    </main>
  );
}
