"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./constants");
const student_controller_1 = require("./controllers/student_controller");
const appRoutes = express_1.default.Router();
appRoutes.get(constants_1.routesConst.studentDetails, student_controller_1.getStudentDetails);
exports.default = appRoutes;
