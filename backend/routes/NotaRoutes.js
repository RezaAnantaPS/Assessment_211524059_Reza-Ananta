import express from "express";
import {
  getAllNota,
  createNota,
  updateNota,
  deleteNota,
  getNotaByKodeNota,
} from "../controllers/NotaController.js";

const router = express.Router();

router.get("/nota", getAllNota);
router.post("/nota", createNota);
router.patch("/nota/:KodeNota", updateNota);
router.delete("/nota/:KodeNota", deleteNota);
router.get("/nota/:KodeNota", getNotaByKodeNota); // Added this route

export default router;
