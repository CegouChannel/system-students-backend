import express from "express"
import * as StudentController from "../controllers/StudentController.js"
import * as GroupController from "../controllers/GroupController.js"
import * as PlanTrainingController from "../controllers/PlanTrainingController.js"
import * as LessonsController from '../controllers/LessonController.js'
import * as JournalController from '../controllers/JournalController.js'
import * as UserController from '../controllers/UserController.js'

const router = express.Router()

router.get('/students', StudentController.showStudents)
router.get('/students/:id', StudentController.showStudentById)
router.post('/students', StudentController.createStudent)
router.put('/students/:id', StudentController.updateStudent)
router.delete('/students/:id', StudentController.deleteStudent)

router.get('/groups', GroupController.showGroups)
router.get('/groups/:id', GroupController.showGroupById)
router.post('/groups', GroupController.createGroup)
router.put('/groups/:id', GroupController.updateGroup)
router.delete('/groups/:id', GroupController.deleteGroup)

router.get('/plansTraining', PlanTrainingController.showPlansTraining)
router.get('/plansTraining/:id', PlanTrainingController.showPlanTrainingById)
router.post('/plansTraining', PlanTrainingController.createPlanTraining)
router.put('/plansTraining/:id', PlanTrainingController.updatePlanTraining)
router.delete('/plansTraining/:id', PlanTrainingController.deletePlanTraining)

router.get('/lessons', LessonsController.showLessons)
router.get('/lessons/:id', LessonsController.showLessonById)
router.post('/lessons', LessonsController.createLesson)
router.put('/lessons/:id', LessonsController.updateLesson)
router.delete('/lessons/:id', LessonsController.deleteLesson)

router.get('/journal', JournalController.showJournal)
router.get('/journal/:id', JournalController.showJournalById)
router.post('/journal', JournalController.createJournal)
router.put('/journal/:id', JournalController.updateJournal)
router.delete('/journal/:id', JournalController.deleteJournal)

router.post('/login', UserController.login)
// router.post('/login', UserController.createUser)
export default router