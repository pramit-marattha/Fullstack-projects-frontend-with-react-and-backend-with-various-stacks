const express = require("express");
const requestControl = require("../controllers/chatControl");

const router = express.Router();
// NOTE: get request
router.get("/get/channelList", requestControl.getInfoChannelList);
router.get("/get/data", requestControl.getAllData);
router.get("/get/conversation", requestControl.getAllConversation);

// post request
router.post("/new/message", requestControl.postNewChatMessage);
router.post("/new/channel", requestControl.postNewChatChannel);

module.exports = router;
