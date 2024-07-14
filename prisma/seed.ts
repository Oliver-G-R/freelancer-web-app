import { HashPassword } from '../src/utils/hashPassword'
import db from '../src/db'

(async () => {
    try {
            
        await db.$transaction(async (db) => {
            const user = await db.user.create({
            data:{
                name: "Oliver",
                nameUser: "Oliver.kali982",
                email: "oliver@example.mail.com",
                password: HashPassword.hash("oliver123"),
                role: "DEVELOPER",
                avatar:  "https://i.pravatar.cc/500",
            }
            })
    

            const developer =  await db.developer.create({
                data: {
                    city: "Victoria, Mexico",
                    speciality: "Desarrollo Full Stack",
                    user: {
                        connect: {
                            id: user.id
                        }
                    }
                }
            })

            await db.project.create({
                data:{
                    name: "Desarrollo frontend",
                    description: "Desarrollo de un ecommerce completo",
                    price: 25000,
                    developer: {
                        connect: {
                            id: developer.id
                        }
                    }
                }
            })
        })

    } catch (error) {
        console.error(error)
    }finally{
        await db.$disconnect()
    }

})()