import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
   name: { type: String, required: true },
   age: { type: Number, required: true },
   grade: { type: String, required: true },
});

export const studentModel = mongoose.model("Student_Deatails", StudentSchema);
