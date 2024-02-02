import { Router } from 'express';
import UserController from './controllers/UserController';

const router = Router();

// Todas as rotas utilizadas
router.post("/user", UserController.criarUsuario);
router.get("/user/encontrar-todos", UserController.encontrarTodosUsuarios);
router.get("/user/encontrar-id/:id", UserController.encontrarUsuarioID);
router.get("/user/encontrar-email/:email", UserController.encontrarUsuarioEmail);
router.get("/user/encontrar-nomes", UserController.encontrarUsuariosNome);
router.put("/user/atualizar/:id", UserController.atualizaUsuario);
router.delete("/user/deletar/:id", UserController.deletarUsuarioID);

export { router };