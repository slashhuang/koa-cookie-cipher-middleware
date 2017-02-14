/*
 * created by slashhuang
 * 2017.2.10
 */
const fs = require('fs');
const http = require('http');
const zlib = require('zlib');
const Koa = require('koa')
const Compose = require('koa-compose');
// Koa application is now a class and requires the new operator.
const app = new Koa();
const Cipher = require('../src/cipher');
let PORT = 3000;

const MiddlewareArr = [ Cipher ];
app.use(Compose(MiddlewareArr));
app.listen(PORT);
console.log(`server listening on port ${PORT}`)

