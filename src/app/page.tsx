import { CardProfile } from "@/components/CardProfile";
import { FreelancerCardProfile } from "@/models/Job";

export default function Home() {
  const jobs:FreelancerCardProfile[] = [
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
  ]
  return (
    <main className="">
      <div className="grid  grid-cols-auto-fill-400 gap-4">
        {
          jobs.map((props) => ((
            <CardProfile
              key={props.id}
              {...props}
            />
          )))
        }
      </div>
    </main>
  );
}


