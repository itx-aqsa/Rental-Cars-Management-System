const backendLog = require("../models/backendLog")

const AddNewBackEndException = async (fileName, functionName, details) => {
  try {
    const newException = await backendLog.create({
      fileName: fileName,
      functionName: functionName,
      details: details,
    });

    res.json(newException);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};


module.exports = {
    AddNewBackEndException,
};
