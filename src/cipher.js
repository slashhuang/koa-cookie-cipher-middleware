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
module.exports =(option)=>{
    //解密的cookie名字
    let {cookieName} = option;
    return async (ctx, next)=>{
        ctx.cookie_decoder={
            // 获取解密数据
            decipher:function(cookieName){
                let cipherVal = ctx.cookies.get(cookieName);
                return new Promise((res,rej)=>{
                    resolve(U_decipher(cipherVal))
                }).catch((e)=>{
                    return { error:'error'}
                })
            },
            //进行数据加密
            cipher:function (value) {
                return U_cipher(value)
            }
        };
        await next();
    }
};