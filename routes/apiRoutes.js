
const cors = require('cors');
module.exports = app => {

  app.post('/api/log',cors(), async (req, res) => {
    const id = req.body.id;
    const value = req.body.value;
    const fieldType = req.body.fieldType;

    if (!fieldType) {
      return res.sendStatus(400).json({
        error: "missing data..."
      })
    }
    console.log("---------input changes logs---------");
    console.log("id...", id, "value...", value, "fieldType...", fieldType);
    res.sendStatus(200);
  });

  app.post('/api/submit',cors(), async (req, res) => {
    const formData = req.body.formData;

    if(!formData) {
      return res.sendStatus(400).json({
        error: "missing data..."
      })
    }
    console.log("form data...", formData);
    res.sendStatus(200);

  });
};
