import express from "express"
import userRoutes from "./routes/UserRoutes.js"
import db from "./configs/db.js"
import User from "./models/UserModel.js"
import cors from "cors"

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use('/api', userRoutes)


try {
  await db.authenticate()
  User.sync()
  console.log("Database connected successfully.");
} catch (error) {
  console.log(error);
}



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})