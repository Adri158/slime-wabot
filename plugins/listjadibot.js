async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  m.reply( `🌟 *Bot Utama :*\n⤷ wa.me/6282195470493?text=.menu (SlimeBotz)\n\n`+ `🤖 *JadiBot :*\n` + users.map(v => '✎ wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu (${v.name})`).join('\n'))
}
handler.command = handler.help = ['listjadibot','listbot','ljb']
handler.tags = ['jadibot']

module.exports = handler