const owner = (prefix, botName, ownerName) => {
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
┷┯*〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 𝑀𝐸𝑁𝑈 𝐷𝐸𝐿 𝐶𝑅𝐸𝐴𝐷𝑂𝑅 〉*
   ╽
   ┠≽ *${prefix}setprefix* <text/optional>
   ┃ *Desc* : Reemplazar prefijo
   ┠──────────────╼
   ┠≽ *${prefix}block* <@tag>
   ┃ *Desc* : Bloquear usuario
   ┠──────────────╼
   ┠≽ *${prefix}unblock* <@tag>
   ┃ *Desc* : Desbloquear usuario
   ┠──────────────╼
   ┠≽ *${prefix}bc* <text>
   ┃ *Desc* : Transmitir a todos los contactos y grupos
   ┠──────────────╼
   ┠≽ *${prefix}clone* <@tag>
   ┃ *Desc* : Clonar perfil de otros miembros
   ┠──────────────╼
   ┠≽ *${prefix}clearall
   ┃ *Desc* : Borrar todo el chat
   ╿ *${ownerName}*,
   ╰╼≽ *Creador © ${botName}`
}
exports.owner = owner
