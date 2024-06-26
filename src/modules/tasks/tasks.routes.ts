import { Router } from 'express';
import * as TaskController from './tasks.controller';
import { Request, Response } from 'express';
const router = Router();


// Get Tasks
router.get('/completed/faculty/:facultyId', TaskController.viewCompleted);
router.get('/pending/:facultyId', TaskController.viewPending);
router.get('/current/:studentId', TaskController.viewCurrent);
router.get('/completed/student/:studentId', TaskController.viewCompletedByStudent);

// Update Tasks
router.put('/checkoff/:studentId/:taskId', TaskController.checkoff);

// Create task
router.post('/', TaskController.createTask);

export default router;