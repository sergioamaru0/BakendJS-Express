const esxpress = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = esxpress();

const PORT = process.env.PORT || 3000;
const routerApi = require('./routes/index');
app.use(cors());
app.use(esxpress.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});
routerApi(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});