/*
 * a koa-middle-ware cipher cookie plugin
 * built by slashhuang
 * 2017.2.14
 */
const crypto = require('crypto');
let { U_cipher,U_decipher } = require('./util');
/**
 * @params
 * data  : the data you want to cipher
 * keyName : the keyName to strengthen your cipher
 */
module.exports =  (ctx, next)=>{
    console.log('here---')
    ctx.cookie_decoder={
        // 获取解密数据
        decipher:function(cookieName){
            let cipherVal = ctx.cookies.get(cookieName);
            return new Promise((resolve,rej)=>{
                    resolve(U_decipher(cipherVal))
            }).catch((e)=>{
                console.log(e.stack)
            })
        },
        //进行数据加密
        cipher:function (value) {
            return U_cipher(value)
        }
    };
    next();
}