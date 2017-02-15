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
const TestMiddleware = async function(ctx,next) {

    console.log(`cipher name  slashhuang\n`);

    let cookieCipher = await ctx.cookie_decoder.cipher('slashhuang')

    console.log(`cipher slashhuang to ${cookieCipher}\n`);

    let cookieDecipher = await ctx.cookie_decoder.decipher('slashhuang');

    console.log(`decipher cookie ${cookieCipher} to ${cookieDecipher}`);
}
const MiddlewareArr = [ Cipher('hello'),TestMiddleware ];
app.use(Compose(MiddlewareArr));
app.listen(PORT);
console.log(`server listening on port ${PORT}\n`)

