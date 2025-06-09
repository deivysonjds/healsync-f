const inverseGradient =
  "bg-gradient-to-l from-black from-0% to-[#285060] to-100%";

export default function UnidadeButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={`hover:scale-105 hover:cursor-pointer transform transition-all ${
        props.ativo
          ? `${inverseGradient} text-white`
          : "bg-white text-black border"
      } text-sm rounded-full px-4 py-1`}
    >
      {props.children}
    </button>
  );
}
