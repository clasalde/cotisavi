import { Router } from "express";
import CarManager from "../controllers/carManager.js";

const router = Router();
const carManager = new CarManager();

router.get("/cars", async (req, res) => {
  try {
    const { limit = 100, page = 1, sort, query } = req.query;
    const cars = await carManager.getCars({
      limit: parseInt(limit),
      page: parseInt(page),
      sort,
      query,
    });

    res.json({
      status: "success",
      payload: cars,
      totalPages: cars.totalPages,
      prevPage: cars.prevPage,
      nextPage: cars.nextPage,
      page: cars.page,
      hasPrevPage: cars.hasPrevPage,
      hasNextPage: cars.hasNextPage,
      prevLink: cars.hasPrevPage
        ? `/api/cars?limit=${limit}&page=${cars.prevPage}&sort=${sort}&query=${query}`
        : null,
      nextLink: cars.hasNextPage
        ? `/api/cars?limit=${limit}&page=${cars.nextPage}&sort=${sort}&query=${query}`
        : null,
    });
  } catch (error) {
    console.error("Error while reading cars list", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

router.get("/cars/:cid", async (req, res) => {
  const id = req.params.cid;

  try {
    const car = await carManager.getCarById(id);
    if (!car) {
      return res.json({ error: "Car NOT FOUND" });
    }
    res.json(car);
  } catch (error) {
    console.error("Error while retrieving car", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

router.post("/cars", async (req, res) => {
  const newCar = req.body;

  try {
    await carManager.addCar(newCar);
    res.status(201).json({ message: "Car added successfully" });
  } catch (error) {
    console.error("Error while adding new car", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

router.put("/cars/:cid", async (req, res) => {
  const id = req.params.cid;
  const updatedCar = req.body;

  try {
    await carManager.updateCar(id, updatedCar);
    res.json({ message: "Car updated successfully" });
  } catch (error) {
    console.error("Error while updating car", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

router.delete("/cars/:cid", async (req, res) => {
  const id = req.params.cid;

  try {
    await carManager.deleteCar(id);
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    console.error("Error while deleting car", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

export default router;
