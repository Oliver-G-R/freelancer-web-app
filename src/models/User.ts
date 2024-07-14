interface User{
  id:         string    
  name:       string
  nameUser:   string
  email:      string     
  password:   string
  avatar:     string
  role:       string     
  created_at: Date   
  updated_at: Date   
}

interface DeveLoper extends User{
  city:       string
  speciality:  string
  userId:     string
}


interface Client extends User{}
interface Admin extends User{}



interface CreateClient extends Omit<User, 'id' | 'created_at' | 'updated_at' | 'role' | 'avatar'>{}
interface CreateDeveloper extends Omit<DeveLoper, 'id' | 'created_at' | 'updated_at' | 'role' | 'avatar' | 'userId'>{}


export type { User, DeveLoper, Client, Admin, CreateClient, CreateDeveloper }