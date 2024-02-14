import express from "express";
import { signup, login, google } from "../controllers/auth.controller.js";
import validate from "../middleware/validate_datatype.js";
import new_signupSchema from "../validation/signin.validation.js";

const router = express.Router();

router.post('/signup',validate(new_signupSchema), signup);
router.post('/login', login);
router.post('/google', google);

export default router;