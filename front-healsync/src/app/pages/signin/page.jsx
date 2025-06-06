import FormSignIn from "@/components/formSignIn";

export default function Home() {
  return (
    <main className="grid grid-cols-[40%_60%] h-screen">
      <div className="flex flex-col justify-center items-center">
        <FormSignIn />
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#000000] to-[#285060]">
        <img src="/logo.png" alt="logo" className="w-50 mb-5"/>
        <h1 className="text-white font-bold">Sign In</h1>
      </div>
    </main>
  );
}
