import express from "express";
import {
  getAllTenan,
  createTenan,
  updateTenan,
  deleteTenan,
  getTenanByKodeTenan,
} from "../controllers/TenanController.js";

const router = express.Router();

router.get("/tenan", getAllTenan);
router.post("/tenan", createTenan);
router.patch("/tenan/:KodeTenan", updateTenan);
router.delete("/tenan/:KodeTenan", deleteTenan);
router.get("/tenan/:KodeTenan", getTenanByKodeTenan); // Added this route

export default router;
