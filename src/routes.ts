import express from "express";

import {
   filterStudentDetails,
   getStudentDetails,
} from "./controllers/student_controller";

export const appRoutes = express.Router();

appRoutes.get("/students", getStudentDetails);

appRoutes.post("/filterStudents", filterStudentDetails);
