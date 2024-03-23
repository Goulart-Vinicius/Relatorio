import express from "express"
import "dotenv/config"

import userRouter from "./router/User.js"

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", userRouter)

app.listen(port, () => {
	console.log(`Rodando em  http://localhost:${port}`)
})

