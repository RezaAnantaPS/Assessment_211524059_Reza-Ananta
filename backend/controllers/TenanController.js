import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Controller function to get all Tenan
export const getAllTenan = async (req, res) => {
  try {
    const tenan = await prisma.tenan.findMany();
    res.json(tenan);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};

// Controller function to create a new Tenan
export const createTenan = async (req, res) => {
  const { KodeTenan, NamaTenan, HP } = req.body;
  try {
    const newTenan = await prisma.tenan.create({
      data: {
        KodeTenan,
        NamaTenan,
        HP,
      },
    });
    res.status(201).json(newTenan);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating data." });
  }
};

// Controller function to update an existing Tenan
export const updateTenan = async (req, res) => {
  const { KodeTenan } = req.params;
  const { NamaTenan, HP } = req.body;
  try {
    const updatedTenan = await prisma.tenan.update({
      where: { KodeTenan },
      data: {
        NamaTenan,
        HP,
      },
    });
    res.json(updatedTenan);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating data." });
  }
};

// Controller function to delete a Tenan
export const deleteTenan = async (req, res) => {
  const { KodeTenan } = req.params;
  try {
    await prisma.tenan.delete({
      where: { KodeTenan },
    });
    res.json({ message: "Tenan deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting data." });
  }
};

// Controller function to get a Tenan by KodeTenan
export const getTenanByKodeTenan = async (req, res) => {
  const { KodeTenan } = req.params;
  try {
    const tenan = await prisma.tenan.findUnique({
      where: { KodeTenan },
    });
    if (!tenan) {
      return res.status(404).json({ error: "Tenan not found." });
    }
    res.json(tenan);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};
