import Fluxos from "../../components/FluxoTabs";
import Header from "../../components/Header";
import UnidadeTabs from "../../components/UnidadeTabs";
import Wellcome from "../../components/Wellcome";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Wellcome />
        <UnidadeTabs />
        <Fluxos />
      </main>
    </>
  );
}
