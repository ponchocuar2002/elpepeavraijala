const limit = (prefix, botName, ownerName) => {
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
┷┯〈 𝐿𝐼𝑀𝐼𝑇𝐸 〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Comprueba tu límite
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Check Tu dinero
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Compra al limite
   ╿ *${ownerName}*,
   ╰╼≽ *Creador © ${botName}
--------------------------------
Note: Kamu bisa membeli limit dengan cara mengumpulkan uang terlebih dahulu. Cek uang kamu dengan cara mengetikan perintah *${prefix}bal* , harga 1 limit = 1000 uang.
Note2: Kamu bisa mengumpulkan uang dengan cara chat dengan teman segroup atau bisa dengan naik level.`
}
exports.limit = limit
