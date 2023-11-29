import express from "express";
import cors from "cors";
import BarangRoute from "./routes/BarangRoutes.js";
import KasirRoute from "./routes/KasirRoutes.js"
import TenanRoute from "./routes/TenanRoutes.js"
import NotaRoute from "./routes/NotaRoutes.js"
import BarangNotaRoute from "./routes/BarangNotaRoutes.js"

// dotenv.config();
const port = 5000
const app = express();

app.use(cors());
app.use(express.json());

// Other middleware and configurations

app.use(BarangRoute);
app.use(KasirRoute);
app.use(TenanRoute);
app.use(NotaRoute);
app.use(BarangNotaRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
