let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastngocok)
    let _timers = (500000 - __timers)
    let timers = clockString(_timers) 
    let order = global.db.data.users[m.sender].korbanngocok
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let user = global.db.data.users[m.sender]
    let buttons = [
{buttonId: '.inv', buttonText: {displayText: 'Inventory'}, type: 1}, 
]
const buttonMessage = {
    contentText: `Sepertinya Sperma Anda Sudah Habis Untuk Rara Silahkan Isi Kembali sekitar\n*🕔 ${timers}*`,
    footerText: wm, 
    buttons: buttons,
    headerType: 1
}
    if (new Date - global.db.data.users[m.sender].lastngocok > 500000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 1) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1000000)
let rbrb5 = (randomaku5 * 145)


zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`

dimas = `✔️ Mendapatkan rara....
`

dimas2 = `Mulai entod rara...
`

dimas3 = `Ahhh, , > / / / <
*Crott.. *didalam anu nya rara.. 💦🥵
`

dimas5 = `Ahhhh rara merasa enak,,  > / / / < 🥵💦`

dimas4 = `✔️ Menerima gaji dari rara....
`
hsl = `*—[ Hasil Dari ${command} ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])} ]—*

👤 Pelanggan: ${pickRandom([Rara])}
 ➕ 💹 *Uang:* 1000000000
 ➕ ✨ *Exp:* ${zero5}
 ➕ 🔥 *Dosa:* 1000

➕  📥 *Ngentod ama rara sebelumnya:*  ${order}

${wm}
`


global.db.data.users[m.sender].warn += 10
global.db.data.users[m.sender].money += 100000
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].ojekk += 1

setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 35000) 
               
                     setTimeout(() => {
                     m.reply(`${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${dimas}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('🔎 mencari rara')
                     }, 0) 
  user.lastngentodamarara = new Date * 1
    } else conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage ,m )
}
handler.help = ['hr', 'nr']
handler.tags = ['rpg']
handler.command = /^(hr|nr)$/i
handler.register = true
handler.premium = false

module.exports = handler
let wm = global.botwm

function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}