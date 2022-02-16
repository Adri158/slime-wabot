let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let wm = global.botwm
    let user = global.db.data.users[m.sender]
    let _timers = (31104000000 - (new Date - user.lastclaim))
    let timers = clockString(_timers) 
    if (new Date - user.lastclaim > 31104000000) {
    let str = `+120000000 money 💹\n+6000 Legendary crate 🧰\n+3600 Pet crate 📫\n+8400 Iron ⛓\n+2400 gold 🪙\n+8400 string 🕸\n+12000 kayu 🪵`
        conn.send2Button(m.chat, str, wm, 'Weekly', '.weekly', 'Monthly', '.monthly',m)
        conn.reply(str)
        user.money += 120000000
        user.legendary += 6000
        user.string += 8400
        user.kayu += 12000
        user.iron += 8400
        user.gold += 2400
        user.pet += 3600
        user.lastclaim = new Date * 1
    } else {
        let buttons = button(`silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, user)
        conn.sendMessage(m.chat, buttons, MessageType.buttonsMessage, { quoted: m })
    }
}
handler.help = ['yearly']
handler.tags = ['rpg']
handler.command = /^(yearly)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 43200000)
  let m = Math.floor(ms / 720000) % 60
  let s = Math.floor(ms / 12000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let botol = global.botwm

function button(teks, user) {
    const buttons = []
    
    let claim = new Date - user.lastclaim > 86400000
    let yearly = new Date - user.lastyearly > 31104000000
    let monthly = new Date - user.lastmonthly > 2592000000
    let weekly = new Date - user.lastweekly > 604800000
    console.log({claim, yearly, monthly, weekly})
    
    if (yearly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/ yearly'}, type: 1})
   if (monthly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/monthly'}, type: 1})
    if (weekly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/weekly'}, type: 1})
    if (claim) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/claim'}, type: 1})
    if (buttons.length == 0) throw teks
    
    const buttonMessage = {
        contentText: teks,
        footerText: `${botol}`,
        buttons: buttons,
        headerType: 1
    }
    
    return buttonMessage
}