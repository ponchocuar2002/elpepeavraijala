const fun = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 29
   ╿
┯┷ *〈 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar detalles del bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuario bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos los usuarios de chat
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar la velocidad del bot de conexión
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Informar de un error al propietario del bot
╿
┷┯*〈 𝐷𝐼𝑉𝐸𝑅𝑆𝐼𝑂𝑁 〉*
   ╽
   ┠≽ *${prefix}alay* <text>
   ┃ *Desc* : Cambiando palabras en alay
   ┠──────────────╼
   ┠≽ *${prefix}bucin*
   ┃ *Desc* : Envía un esclavo de amor al azar
   ┠──────────────╼
   ┠≽ *${prefix}trust*
   ┃ *Desc* : Envía una verdad aleatoria
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ *Desc* : Envía un desafío aleatorio
   ┠──────────────╼
   ┠≽ *${prefix}simi* <text>
   ┃ *Desc* : Habla con Simi
   ╿ *${ownerName}*,
   ╰╼≽ *Creador © ${botName}`
}
exports.fun = fun
