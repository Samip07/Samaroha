import express from "express";
const router = express.Router();

import {
  createVenue,
  deleteVenue,
  getAllVenue,
  updateVenue,
  showStats,
} from "../controllers/venueController.js";

router.route("/").post(createVenue).get(getAllVenue);
// remember about :id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteVenue).patch(updateVenue);

export default router;
