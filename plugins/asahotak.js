const fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.asahotak[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*—[ Asak Otak]—*
${json.soal}

*⏰ Timeout:* ${(timeout / 1000).toFixed(2)} detik
*🎁 Bonus:* ${poin} XP
*🔎 Hint:* ${usedPrefix}ao
    `.trim()
    conn.asahotak[id] = [
        await conn.sendButton(m.chat, caption.trim(), `${wm}`, 'Bantuan', '.ao'),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, '© SlimeBotz', 'Asah Otak', '.asahotak')
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i

module.exports = handler

let wm = global.botwm