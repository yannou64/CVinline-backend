import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())



app.listen(port, () => {
    console.log(`Le serveur est démarré sur http://localhost:${port}`)
})

