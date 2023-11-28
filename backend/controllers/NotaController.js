import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Controller function to get all Nota
export const getAllNota = async (req, res) => {
  try {
    const nota = await prisma.nota.findMany();
    res.json(nota);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};

// Controller function to create a new Nota
export const createNota = async (req, res) => {
  const {
    KodeNota,
    KodeTenan,
    KodeKasir,
    TglNota,
    JamNota,
    JumlahBelanja,
    Diskon,
    Total,
  } = req.body;
  try {
    const newNota = await prisma.nota.create({
      data: {
        KodeNota,
        KodeTenan,
        KodeKasir,
        TglNota,
        JamNota,
        JumlahBelanja,
        Diskon,
        Total,
      },
    });
    res.status(201).json(newNota);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        error: "An error occurred while creating data.",
        details: error,
      });
  }

};

// Controller function to update an existing Nota
export const updateNota = async (req, res) => {
  const { KodeNota } = req.params;
  const {
    KodeTenan,
    KodeKasir,
    TglNota,
    JamNota,
    JumlahBelanja,
    Diskon,
    Total,
  } = req.body;
  try {
    const updatedNota = await prisma.nota.update({
      where: { KodeNota },
      data: {
        KodeTenan,
        KodeKasir,
        TglNota,
        JamNota,
        JumlahBelanja,
        Diskon,
        Total,
      },
    });
    res.json(updatedNota);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating data." });
  }
};

// Controller function to delete a Nota
export const deleteNota = async (req, res) => {
  const { KodeNota } = req.params;
  try {
    await prisma.nota.delete({
      where: { KodeNota },
    });
    res.json({ message: "Nota deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting data." });
  }
};

// Controller function to get a Nota by KodeNota
export const getNotaByKodeNota = async (req, res) => {
  const { KodeNota } = req.params;
  try {
    const nota = await prisma.nota.findUnique({
      where: { KodeNota },
    });
    if (!nota) {
      return res.status(404).json({ error: "Nota not found." });
    }
    res.json(nota);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};
