import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Controller function to get all BarangNota
export const getAllBarangNota = async (req, res) => {
  try {
    const barangNota = await prisma.barangNota.findMany();
    res.json(barangNota);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};

// Controller function to create a new BarangNota
export const createBarangNota = async (req, res) => {
  const { KodeNota, KodeBarang, JumlahBarang, HargaSatuan, Jumlah } = req.body;
  try {
    const newBarangNota = await prisma.barangNota.create({
      data: {
        KodeNota,
        KodeBarang,
        JumlahBarang,
        HargaSatuan,
        Jumlah,
      },
    });
    res.status(201).json(newBarangNota);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating data." });
  }
};

// Controller function to update an existing BarangNota
export const updateBarangNota = async (req, res) => {
  const { KodeBarangNota } = req.params;
  const { KodeNota, KodeBarang, JumlahBarang, HargaSatuan, Jumlah } = req.body;
  try {
    const updatedBarangNota = await prisma.barangNota.update({
      where: { KodeBarangNota },
      data: {
        KodeNota,
        KodeBarang,
        JumlahBarang,
        HargaSatuan,
        Jumlah,
      },
    });
    res.json(updatedBarangNota);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating data." });
  }
};

// Controller function to delete a BarangNota
export const deleteBarangNota = async (req, res) => {
  const { KodeBarangNota } = req.params;
  try {
    await prisma.barangNota.delete({
      where: { KodeBarangNota },
    });
    res.json({ message: "BarangNota deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting data." });
  }
};

// Controller function to get a BarangNota by KodeBarangNota
export const getBarangNotaByKodeBarangNota = async (req, res) => {
  const { KodeBarangNota } = req.params;
  try {
    const barangNota = await prisma.barangNota.findUnique({
      where: { KodeBarangNota },
    });
    if (!barangNota) {
      return res.status(404).json({ error: "BarangNota not found." });
    }
    res.json(barangNota);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};
