import express from "express";

const ws = new WebSocket('ws://127.0.0.1:3000/tasks')
ws.send('Funcionou')

const port = 8899;
const app = express();
