import NavBar from "./navbar";

export default function Header() {
  return (
    <header className="bg-[#1B2C33] min-h-16 flex items-center justify-center">
      <img className="w-[50px] ml-10 mr-5" src="/logo.png" alt="logo" />
      <NavBar />
    </header>
  );
}
