import express from "express";
import {
  getAllKasir,
  createKasir,
  updateKasir,
  deleteKasir,
  getKasirByKodeKasir,
} from "../controllers/KasirController.js";

const router = express.Router();

// Define the routes for Kasir
router.get("/kasir", getAllKasir);
router.post("/kasir", createKasir);
router.patch("/kasir/:KodeKasir", updateKasir);
router.delete("/kasir/:KodeKasir", deleteKasir);
router.get("/kasir/:KodeKasir", getKasirByKodeKasir);

export default router;
