interface Project{
  id: String
  name: String
  description: String
  price: String
  created_at: String
  updated_at: String
  developerId: String
}

interface CreateProject extends Omit<Project, 'id' | 'created_at' | 'updated_at'>{
  developerId: String
}




export type { Project, CreateProject }