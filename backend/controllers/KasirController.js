import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Controller function to get all Kasir
export const getAllKasir = async (req, res) => {
  try {
    const kasir = await prisma.kasir.findMany();
    res.json(kasir);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};

// Controller function to get a Kasir by KodeKasir
export const getKasirByKodeKasir = async (req, res) => {
  const { KodeKasir } = req.params;
  try {
    const kasir = await prisma.kasir.findUnique({
      where: { KodeKasir },
    });
    if (!kasir) {
      return res.status(404).json({ error: "Kasir not found." });
    }
    res.json(kasir);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};


// Controller function to create a new Kasir
export const createKasir = async (req, res) => {
  const { KodeKasir, Nama, HP } = req.body;
  try {
    const newKasir = await prisma.kasir.create({
      data: {
        KodeKasir,
        Nama,
        HP,
      },
    });
    res.status(201).json(newKasir);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating data." });
  }
};

// Controller function to update an existing Kasir
export const updateKasir = async (req, res) => {
  const { KodeKasir } = req.params;
  const { Nama, HP } = req.body;
  try {
    const updatedKasir = await prisma.kasir.update({
      where: { KodeKasir },
      data: {
        Nama,
        HP,
      },
    });
    res.json(updatedKasir);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating data." });
  }
};

// Controller function to delete a Kasir
export const deleteKasir = async (req, res) => {
  const { KodeKasir } = req.params;
  try {
    await prisma.kasir.delete({
      where: { KodeKasir },
    });
    res.json({ message: "Kasir deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting data." });
  }
};
