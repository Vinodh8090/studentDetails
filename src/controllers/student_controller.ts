import express from "express";
import { studentModel } from "../datamodels/students";

export const getStudentDetails = async (
   req: express.Request,
   res: express.Response
) => {
   try {
      const page: number = parseInt(req.query.page as string) || 1;
      const pageSize: number = parseInt(req.query.page_size as string) || 10;
      const students = await studentModel
         .find()
         .skip((page - 1) * pageSize)
         .limit(pageSize);
      console.log("students");
      res.json({ students });
   } catch (error) {
      console.log("error while fetching student details", error);
      return res.sendStatus(400);
   }
};

export const filterStudentDetails = async (
   req: express.Request,
   res: express.Response
) => {
   try {
      const filterCriteria: any = req.body.filter_criteria || {};
      const filteredStudents = await studentModel.find(filterCriteria);
      res.json({ filtered_students: filteredStudents });
   } catch (error) {
      console.log("error while fetching student details", error);
      return res.sendStatus(400);
   }
};
