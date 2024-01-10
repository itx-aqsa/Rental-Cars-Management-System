const express = require("express");
const connectToMongo = require("./Utils/db");
var cors = require('cors')
require('dotenv').config()

connectToMongo();

const app = express();
const port = 5000;

app.use(cors())

app.use(express.json());


app.use('/api/customers', require('./routes/customers'))
app.use('/api/employees', require('./routes/Employees'))
app.use('/api/vehicles', require('./routes/vehicles'))
app.use('/api/brands', require('./routes/Brands'))
app.use('/api/reservations', require('./routes/Reservations'))
app.use('/api/feedbacks', require('./routes/Feedbacks'))
app.use('/api/notifications', require('./routes/Notifications'))
app.use('/api/payments', require('./routes/Payments'))
app.use('/api/reports', require('./routes/Reports'))
app.use('/api/stripe', require("./routes/stripe"))
app.use('/api/frontendlog', require("./routes/FrontendLog"))







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
