import { useDataUserStore } from "@/store/useDataUserStore";

const gradient = "bg-gradient-to-r from-black from-0% to-[#285060] to-100%";

export default function Wellcome({
  name
}) {
  return (
    <div
      className={`text-white flex flex-col justify-center items-center font-bold px-6 -mt-[1px] w-full h-32 text-2xl ${gradient}`}
    >
      <p>Bem vindo(a) {name}!</p>
      <p className="text-sm">O que deseja hoje?</p>
    </div>
  );
}
