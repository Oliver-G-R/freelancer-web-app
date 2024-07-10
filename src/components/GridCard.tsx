import { FreelancerCardProfile } from "@/models/Job"
import { CardProfile } from "./CardProfile"

interface GridCardProps {
  title: string
}

export const GridCard = ({title}:GridCardProps) => {
  const jobs:FreelancerCardProfile[] = [
    {
      id: 1,
      img: 'https://media.gq.com.mx/photos/61780a08f865d472dfcd66c8/master/w_2560%2Cc_limit/GettyImages-1225777369.jpg',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://media.gq.com.mx/photos/61780a08f865d472dfcd66c8/master/w_2560%2Cc_limit/GettyImages-1225777369.jpg',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://media.gq.com.mx/photos/61780a08f865d472dfcd66c8/master/w_2560%2Cc_limit/GettyImages-1225777369.jpg',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://media.gq.com.mx/photos/61780a08f865d472dfcd66c8/master/w_2560%2Cc_limit/GettyImages-1225777369.jpg',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://media.gq.com.mx/photos/61780a08f865d472dfcd66c8/master/w_2560%2Cc_limit/GettyImages-1225777369.jpg',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://media.gq.com.mx/photos/61780a08f865d472dfcd66c8/master/w_2560%2Cc_limit/GettyImages-1225777369.jpg',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://media.gq.com.mx/photos/61780a08f865d472dfcd66c8/master/w_2560%2Cc_limit/GettyImages-1225777369.jpg',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://media.gq.com.mx/photos/61780a08f865d472dfcd66c8/master/w_2560%2Cc_limit/GettyImages-1225777369.jpg',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
    {
      id: 1,
      img: 'https://media.gq.com.mx/photos/61780a08f865d472dfcd66c8/master/w_2560%2Cc_limit/GettyImages-1225777369.jpg',
      nombre: 'Luis Angel',
      ciudad: 'Ciudad de México',
      title: 'Desarrollador web frontend',
      description: 'Soy un desarrollador web frontend con 15 años de experiencia en el sector empresarial.'
    },
  ]
  return (
   <>
      <h1 className="text-4xl text-center mb-10 text-white font-semibold">
        {title}
      </h1>
      <div className="grid grid-cols-auto-fill-400 gap-4">
          {
            jobs.map((props) => ((
              <CardProfile
                key={props.id}
                {...props}
              />
            )))
          }
      </div>
   </>
  )
}
