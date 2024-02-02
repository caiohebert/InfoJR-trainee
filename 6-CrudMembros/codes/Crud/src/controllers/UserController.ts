import { PrismaClient } from '@prisma/client';
import {Request, Response} from 'express';

const prisma = new PrismaClient();

// Funções utilizadas para criar as rotas
export default {
    async criarUsuario( req: Request, res: Response ) {
        try {
            const { name, email, age, city, state } = req.body;

            let user = await prisma.user.findUnique({ where: { email } });  //procura se ja existe um usuario com esse email

            if (user) {
                return res.json({ error: "Já existe um usuário com esse email!!" })
            }

            user = await prisma.user.create({
                data: {
                    name,
                    email,
                    age,
                    city,
                    state,
                },
            });

            return res.json(user);

        } catch (error) {
            return res.json({ error });
        }
    },

    // retorna todos os usuários
    async encontrarTodosUsuarios( req: Request, res: Response) {  
        try {
            const users = await prisma.user.findMany(); 

            if(!users){
                return res.json({ error: "Você não cadastrou nenhum usuário."});
            }

            return res.json(users);
        } catch (error) {
            return res.json({error});
        } 
    },

    // encontra o usuário pelo id
    async encontrarUsuarioID( req: Request, res: Response) {  
        try {
            const {id} = req.params;

            const user = await prisma.user.findUnique({where: {id: Number(id)}});
            
            if(!user){
                return res.json({ error: "Usuário não encontrado."});
            }

            return res.json(user);

        } catch (error) {
            return res.json({error});
        }
    },

    // encontra o usuário pelo email
    async encontrarUsuarioEmail( req: Request, res: Response) {  
        try {
            const {email} = req.params;

            const user = await prisma.user.findUnique({where: {email: email}});
            
            if(!user){
                return res.json({ error: "Usuário não encontrado."});
            }

            return res.json(user);

        } catch (error) {
            return res.json({error});
        }
    },

    // encontra os usuários pelo nome. ex: /user/encontrar-nomes?name=Caio,raimunda
    async encontrarUsuariosNome( req: Request, res: Response) {  
        try {
            let nomes = req.query.name + "";
            let lista = nomes.split(",");
            const users = await prisma.user.findMany({where: {name: {in: lista}}});
            
            if(!users){
                return res.json({ error: "Usuário não encontrado."});
            }

            return res.json(users);

        } catch (error) {
            return res.json({error});
        }
    },

    async atualizaUsuario(req: Request, res: Response){
        try {
            const {id} = req.params;
            const { name, email, age, city, state } = req.body;

            let user = await prisma.user.findUnique({where: {id: Number(id)}});
            
            if(!user){
                return res.json({ error: "Usuário não encontrado"});
            }
            
            user = await prisma.user.update({
                where: {id: Number(id)},
                data: {name, email, age, city, state}, 
            });

            return res.json(user);

        } catch (error) {
            return res.json({error});
        }
    },

    //deleta o usuário pelo id
    async deletarUsuarioID( req: Request, res: Response) {  
        try {
            // primeiro verifica se tem o usuário
            const {id} = req.params;

            const user = await prisma.user.findUnique({where: {id: Number(id)}});
            
            if(!user){
                return res.json({ error: "Usuário não encontrado."});
            }
            
            await prisma.user.delete({where: {id: Number(id)}});

            return res.json({message: "Usuário deletado."});

        } catch (error) {
            return res.json({error});
        }
    },

    
}