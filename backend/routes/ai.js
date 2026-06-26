import express from "express";
import {
  weeklyReport,
  suggestHabits,
  recoveryPlan,
  chatAnalysis,
  morningMotivation,
  testGemini,
} from "../controllers/aiController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

router.get("/test", testGemini);
router.post("/weekly-report", weeklyReport);
router.post("/suggest-habits", suggestHabits);
router.post("/recovery-plan", recoveryPlan);
router.post("/chat", chatAnalysis);
router.get("/morning", morningMotivation);

export default router;