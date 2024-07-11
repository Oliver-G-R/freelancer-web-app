import { GridCard } from "@/components/GridCard";
import { HeaderNav } from "@/components/HeaderNav";
import { Search } from "@/components/Search";

export default function Home() {
  
  return (
    <>
      <HeaderNav/>
      <main className="global-container m-auto p-5 pt-28">
        <Search />
        <GridCard title="Desarrolladores nuevos en la plataforma" />
      </main>
    </>
  );
}


