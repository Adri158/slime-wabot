let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
✧─────[ *Group Official* ]─────✧
🍀 Group 1 :
https://chat.whatsapp.com/F9dPQcOf82Z4Dc9uxE7Kh0
🍀 Group 2 :
https://chat.whatsapp.com/HBHl2HD0OfBIlEKUMAum4A
🍀 Group 3 :
https://chat.whatsapp.com/Fh0eaf7IuuG3i67wXRC1O8
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler