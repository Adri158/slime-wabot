let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'Kyurrxd091' || args[0] == 'Affk91' || args[0] == 'pPiOoxd027' || args[0] == 'A820bdoqP') {

    if (new Date - global.db.data.users[m.sender].lastgift > 86400000) {
       conn.reply(m.chat, '*🎉 SELAMAT!*\nKamu telah mendapatkan\n100000 XP ✨\n 100 Limit! 🎫\n1000000 Money 💹\n1000000 Tabungan 💳\n100 Gold 🪙\n2 Arloji 🧭\n50 Legendary 🧰\n1 Pet Naga 🐉', m)
    global.db.data.users[m.sender].exp += 100000
    global.db.data.users[m.sender].limit += 100
    global.db.data.users[m.sender].money +=1000000
    global.db.data.users[m.sender].gold += 100
    global.db.data.users[m.sender].legendary += 50
    global.db.data.users[m.sender].atm += 1000000
    global.db.data.users[m.sender].naga += 1
    global.db.data.users[m.sender].arlok += 2
    global.db.data.users[m.sender].lastclaim = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali !\n\nKetik *!buygift* untuk membeli kodegift premium', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan belinya terlebih dahulu untuk mendapatkan kodegift !\n\nKetik *!buygift*`, m)
    }
}
handler.help = ['premgift <kode>']
handler.tags = ['gift']
handler.command = /^(premgift)$/i

module.exports = handler