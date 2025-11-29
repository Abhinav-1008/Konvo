import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {acceptFriendRequested,
        getOutgoingFriendReqs,
        getFriendRequests,
        getMyFriends, 
        getRecommendedUsers,
        sendFriendRequest,
       } from "../controllers/user.controller.js";

const router = express.Router();

//apply auth middleware to all routes
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest)
router.put("/friend-request/:id/accept", acceptFriendRequested)


router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);


export default router;