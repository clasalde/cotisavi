import { Router } from "express";
import CustomerManager from "../controllers/customerManager.js";

const router = Router();
const customerManager = new CustomerManager();

router.get("/customers", async (req, res) => {
  try {
    const { limit = 100, page = 1, sort, query } = req.query;
    const customers = await customerManager.getCustomers({
      limit: parseInt(limit),
      page: parseInt(page),
      sort,
      query,
    });

    res.json({
      status: "success",
      payload: customers,
      totalPages: customers.totalPages,
      prevPage: customers.prevPage,
      nextPage: customers.nextPage,
      page: customers.page,
      hasPrevPage: customers.hasPrevPage,
      hasNextPage: customers.hasNextPage,
      prevLink: customers.hasPrevPage
        ? `/api/customers?limit=${limit}&page=${customers.prevPage}&sort=${sort}&query=${query}`
        : null,
      nextLink: customers.hasNextPage
        ? `/api/customers?limit=${limit}&page=${customers.nextPage}&sort=${sort}&query=${query}`
        : null,
    });
  } catch (error) {
    console.error("Error while reading customers list", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

router.get("/customers/:cid", async (req, res) => {
  const id = req.params.cid;

  try {
    const customer = await customerManager.getCustomerById(id);
    if (!customer) {
      return res.json({ error: "Customer NOT FOUND" });
    }
    res.json(customer);
  } catch (error) {
    console.error("Error while retrieving customer", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

router.post("/customers", async (req, res) => {
  const newCustomer = req.body;

  try {
    await customerManager.addCustomer(newCustomer);
    res.status(201).json({ message: "Customer added successfully" });
  } catch (error) {
    console.error("Error while adding new customer", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

router.put("/customers/:cid", async (req, res) => {
  const id = req.params.cid;
  const updatedCustomer = req.body;

  try {
    await customerManager.updateCustomer(id, updatedCustomer);
    res.json({ message: "Customer updated successfully" });
  } catch (error) {
    console.error("Error while updating customer", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

router.delete("/customers/:cid", async (req, res) => {
  const id = req.params.cid;

  try {
    await customerManager.deleteCustomer(id);
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error("Error while deleting customer", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

export default router;
