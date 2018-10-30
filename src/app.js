import express from "express"
import path from "path"
import morgan from "morgan"
import bodyParser from "body-parser"
import CORS from "cors"
import prettyjson from "prettyjson"

import db from "./db"
import routes from "./routes"

import config from "../config"

db()

morgan.token("header", function getBody(req) {
  const headers = { ...req.headers, "x-access-token": "" }
  return `## HEADER ##\n${prettyjson.render(headers)}`
})
morgan.token("body", function getBody(req) {
  return req.body ? `## BODY ##\n${prettyjson.render(req.body)}` : "-"
})

const app = express()
app.disable("x-powered-by")

// View engine setup
app.set("views", path.join(__dirname, "../views"))
app.set("view engine", "pug")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "../public")))

// Logs
app.use(morgan("combined"))
app.use(morgan(":header"))
app.use(morgan(":body"))

app.use(
  CORS({
    exposedHeaders: ["x-page", "x-page-size", "x-total-count"],
  })
)

// Routes
app.use("/api", routes)

// Catch 404 and forward to error handler
app.use((req, res) => {
  throw new Error("Not Found")
})

// Error handler
app.use(function onError(err, req, res, next) {
  console.error(err)
  res.status(err.status || 500).send(err.message)
})

export default app
