import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js"; 

const  router = Router();

/*get */
router.get("/",categoriaController.getCategorias); /read/ 
router.post("/",categoriaController.postCategorias);/*create */

export default router;