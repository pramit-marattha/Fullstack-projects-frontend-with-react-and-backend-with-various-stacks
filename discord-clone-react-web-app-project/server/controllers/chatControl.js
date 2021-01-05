const discordDBschema = require("../models/schema");

exports.getInfoChannelList = (req, res) => {
  discordDBschema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      let channels = [];

      data.map((channelData) => {
        const channelInfo = {
          id: channelData._id,
          name: channelData.channelName,
        };
        channels.push(channelInfo);
      });
      res.status(200).send(channels);
    }
  });
};

exports.getAllData = (req, res) => {
  discordDBschema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

exports.getAllConversation = (req, res) => {
  const id = req.query.id;

  discordDBschema.find({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

exports.postNewChatMessage = (req, res) => {
  const newMessage = req.body;

  discordDBschema.updateOne(
    { _id: req.query.id },
    { $push: { conversation: req.body } },
    (err, data) => {
      if (err) {
        console.log("Error saving message");
        console.log(err);
      } else {
        res.status(201).send(data);
      }
    }
  );
};

exports.postNewChatChannel = (req, res) => {
  const dbData = req.body;

  discordDBschema.create(dbData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};
