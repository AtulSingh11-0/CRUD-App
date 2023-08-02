const express = require('express');
require('./db/connection');
const app = express();
const athleteRouter = require('./routers/router');
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(athleteRouter);

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});