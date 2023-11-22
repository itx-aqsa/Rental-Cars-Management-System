const frontendLog = require("../models/frontendLog")

const AddNewFrontEndException = async (req, res) => {
  try {
    const newException = await frontendLog.create({
      fileName: req.body.fileName,
      uiScreen: req.body.uiScreen,
      details: req.body.details,
    });

    res.json(newException);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};


module.exports = {
    AddNewFrontEndException,
};
