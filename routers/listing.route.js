import express from "express";
import { createlising, deletelisting, getlisting, updatelisting } from "../controllers/listing.controller.js";
import createListingSchema from "../validation/listing.validation.js";
import validate from "../middleware/validate_datatype.js";

const router = express.Router();

router.get("/getlisting", getlisting);
router.post("/addlisting", validate(createListingSchema), createlising);
router.put("/updatelisting", updatelisting);
router.delete("/deletelisting", deletelisting);

export default router;
