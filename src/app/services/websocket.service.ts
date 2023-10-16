import { Injectable } from '@angular/core';
import express from "express";
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
// import { createAdapter } from '@socket.io/redis-adapter';
// import { Emitter } from "@socket.io/redis-emitter";
// import {createClient} from "redis";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  ws = new WebSocket('ws://127.0.0.1:3000/tasks')
  constructor(http: HttpClient){}

port = 8899;
app = express();


}