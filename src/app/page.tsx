"use client";
import { CardProfile } from "@/components/CardProfile";
import { GridCard } from "@/components/GridCard";
import { Search } from "@/components/Search";
import { GetAllProjects } from "@/services/Projects";
import { useEffect, useState } from 'react';

export default function Home() {
  const [projects, setProjects] = useState<any>()
  useEffect(() => {
    GetAllProjects()
    .then(response => {
      setProjects(response.data)
    })
  }, [])
  
  return (
    <>
      <main className="global-container m-auto p-5 pt-28">
        <Search />
       {<GridCard  title="Desarrolladores nuevos en la plataforma" loading={!projects}>
          {
            projects?.map((project:any) => (
              <CardProfile
                sowHeader
                key={project.id}
                {...project}
              />
            ))
          }
        </GridCard>}
      </main>
    </>
  );
}


