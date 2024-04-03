import CustomerModel from "../models/customer.model.js";

class CustomerManager {
  //ADD NEW CUSTOMER
  async addCustomer({ nombre, apellido, telefono, mail, dinero, interes }) {
    try {
      if (!nombre || !apellido || !telefono) {
        console.log("All fields are mandatory");
        return;
      }

      // const carExist = await CarModel.findOne({ id: id });

      // if (carExist) {
      //   console.log("Code MUST be unique!");
      //   return;
      // }

      const newCustomer = new CustomerModel({
        nombre,
        apellido,
        telefono,
        mail,
        dinero,
        interes,
      });

      await newCustomer.save();
    } catch (error) {
      console.log("Error while adding new customer", error);
      throw error;
    }
  }

  //GET ALL CUSTOMERS
  async getCustomers({ limit = 10, page = 1, sort, query } = {}) {
    try {
      const skip = (page - 1) * limit;
      let queryOptions = {};
      if (query) {
        queryOptions = { category: query };
      }

      const sortOptions = {};
      if (sort) {
        if (sort === "asc" || sort === "desc") {
          sortOptions.telefono = sort === "asc" ? 1 : -1;
        }
      }

      const customers = await CustomerModel.find(queryOptions)
        .sort(sortOptions)
        .skip(skip)
        .limit(limit);

      const totalCustomers = await CustomerModel.countDocuments(queryOptions);
      const totalPages = Math.ceil(totalCustomers / limit);
      const hasPrevPage = page > 1;
      const hasNextPage = page < totalPages;

      return {
        docs: customers,
        totalPages,
        prevPage: hasPrevPage ? page - 1 : null,
        nextPage: hasNextPage ? page + 1 : null,
        page,
        hasPrevPage,
        hasNextPage,
        prevLink: hasPrevPage
          ? `/api/customers?limit=${limit}&page=${
              page - 1
            }&sort=${sort}&query=${query}`
          : null,
        nextLink: hasNextPage
          ? `/api/customers?limit=${limit}&page=${
              page + 1
            }&sort=${sort}&query=${query}`
          : null,
      };
    } catch (error) {
      console.log("Error while getting customers from DB", error);
      throw error;
    }
  }

  //GET ONE CUSTOMER BY ID
  async getCustomerById(id) {
    try {
      const customer = await CustomerModel.findById(id);
      if (!customer) {
        console.log("Customer NOT FOUND on DB");
        return null;
      }
      console.log("Customer FOUND");
      return customer;
    } catch (error) {
      console.log("Error while reading file by ID", error);
      throw error;
    }
  }

  //UPDATE CUSTOMER
  async updateCustomer(id, updatedCustomer) {
    try {
      const updateCustomer = await CustomerModel.findByIdAndUpdate(id, updatedCustomer);

      if (!updateCustomer) {
        console.log("Customer NOT FOUND");
        return null;
      }
      console.log("Customer Updated");
      return updateCustomer;
    } catch (error) {
      console.log("Error while updating customer by ID", error);
      throw error;
    }
  }

  //DELETE CUSTOMER
  async deleteCustomer(id) {
    try {
      const deleteCustomer = await CustomerModel.findByIdAndDelete(id);

      if (!deleteCustomer) {
        console.log("Customer NOT FOUND");
        return null;
      }
      console.log("Customer deleted");
    } catch (error) {
      console.log("Error while deleting customer by ID", error);
      throw error;
    }
  }
}

export default CustomerManager;