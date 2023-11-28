import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllBarang = async (req, res) => {
  try {
    const barang = await prisma.barang.findMany();
    res.json(barang);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};

export const getBarangByKodeBarang = async (req, res) => {
  const { KodeBarang } = req.params;
  try {
    const barang = await prisma.barang.findUnique({
      where: { KodeBarang },
    });
    if (!barang) {
      return res.status(404).json({ error: "Barang not found." });
    }
    res.json(barang);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};

export const createBarang = async (req, res) => {
  const { KodeBarang, NamaBarang, Satuan, HargaSatuan, Stok } = req.body;
  try {
    const newBarang = await prisma.barang.create({
      data: {
        KodeBarang,
        NamaBarang,
        Satuan,
        HargaSatuan,
        Stok,
      },
    });
    res.status(201).json(newBarang);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating data." });
  }
};

export const updateBarang = async (req, res) => {
  const { KodeBarang } = req.params;
  const { NamaBarang, Satuan, HargaSatuan, Stok } = req.body;
  try {
    const updatedBarang = await prisma.barang.update({
      where: { KodeBarang },
      data: {
        NamaBarang,
        Satuan,
        HargaSatuan,
        Stok,
      },
    });
    res.json(updatedBarang);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating data." });
  }
};

export const deleteBarang = async (req, res) => {
  const { KodeBarang } = req.params;
  try {
    await prisma.barang.delete({
      where: { KodeBarang },
    });
    res.json({ message: "Barang deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting data." });
  }
};
