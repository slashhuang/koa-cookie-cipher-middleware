/**
 * Created by slashhuang on 17/2/15.
 * 工具相关
 */
const crypto = require('crypto');
/*加密*/
exports.U_cipher=(keyName)=>(data)=>{
    let cipher = crypto.createCipher('aes192', keyName);
    return cipher.update(data.toString(),'utf8', 'hex') +  cipher.final('hex')
}
/*解密*/
exports.U_decipher=(keyName)=>(data)=>{
    let decipher = crypto.createDecipher('aes192', keyName)
    try{
        let decipherData =  decipher.update(data,'hex','utf8') + decipher.final('utf8');
        return decipherData
    }catch(e){
        console.log(e.stack)
        return false
    }
}