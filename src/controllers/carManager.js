import CarModel from "../models/car.model.js";

class CarManager {
  //ADD NEW CAR
  async addCar({ marca, modelo, version, img, description, price }) {
    try {
      if (!marca || !modelo || !version || !img || !description || !price) {
        console.log("All fields are mandatory");
        return;
      }

      // const carExist = await CarModel.findOne({ id: id });

      // if (carExist) {
      //   console.log("Code MUST be unique!");
      //   return;
      // }

      const newCar = new CarModel({
        marca,
        modelo,
        version,
        img,
        description,
        price,
      });

      await newCar.save();
    } catch (error) {
      console.log("Error while adding new car", error);
      throw error;
    }
  }

  //GET ALL CARS
  async getCars({ limit = 10, page = 1, sort, query } = {}) {
    try {
      const skip = (page - 1) * limit;
      let queryOptions = {};
      if (query) {
        queryOptions = { category: query };
      }

      const sortOptions = {};
      if (sort) {
        if (sort === "asc" || sort === "desc") {
          sortOptions.price = sort === "asc" ? 1 : -1;
        }
      }

      const cars = await CarModel.find(queryOptions)
        .sort(sortOptions)
        .skip(skip)
        .limit(limit);

      const totalCars = await CarModel.countDocuments(queryOptions);
      const totalPages = Math.ceil(totalCars / limit);
      const hasPrevPage = page > 1;
      const hasNextPage = page < totalPages;

      return {
        docs: cars,
        totalPages,
        prevPage: hasPrevPage ? page - 1 : null,
        nextPage: hasNextPage ? page + 1 : null,
        page,
        hasPrevPage,
        hasNextPage,
        prevLink: hasPrevPage
          ? `/api/cars?limit=${limit}&page=${
              page - 1
            }&sort=${sort}&query=${query}`
          : null,
        nextLink: hasNextPage
          ? `/api/cars?limit=${limit}&page=${
              page + 1
            }&sort=${sort}&query=${query}`
          : null,
      };
    } catch (error) {
      console.log("Error while getting cars from DB", error);
      throw error;
    }
  }

  //GET ONE CAR BY ID
  async getCarById(id) {
    try {
      const car = await CarModel.findById(id);
      if (!car) {
        console.log("Car NOT FOUND on DB");
        return null;
      }
      console.log("Car FOUND");
      return car;
    } catch (error) {
      console.log("Error while reading file by ID", error);
      throw error;
    }
  }

  //UPDATE CAR
  async updateCar(id, updatedCar) {
    try {
      const updateCar = await CarModel.findByIdAndUpdate(id, updatedCar);

      if (!updateCar) {
        console.log("Car NOT FOUND");
        return null;
      }
      console.log("Car Updated");
      return updateCar;
    } catch (error) {
      console.log("Error while updating car by ID", error);
      throw error;
    }
  }

  //DELETE CAR
  async deleteCar(id) {
    try {
      const deleteCar = await CarModel.findByIdAndDelete(id);

      if (!deleteCar) {
        console.log("Car NOT FOUND");
        return null;
      }
      console.log("Car Deleted");
    } catch (error) {
      console.log("Error while deleting car by ID", error);
      throw error;
    }
  }
}

export default CarManager;
