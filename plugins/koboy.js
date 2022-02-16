let handler = (m, { conn, usedPrefix, command, text }) => {
  conn.tembak = conn.tembak || { musuh: [], tembak: [] }
   if(/kiri/i.test(text)) {
    let { chat, fromMe, id, isBaileys } = m.quoted
    let kiri = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(conn.tembak.tembak.indexOf("🤠") == 0) {
      conn.tembak.tembak = kiri[0]
    } else if(conn.tembak.tembak.indexOf("🤠") == 1) {
      conn.tembak.tembak = kiri[0]
    } else if(conn.tembak.tembak.indexOf("🤠") == 2) {
      conn.tembak.tembak = kiri[1]
    } else if(conn.tembak.tembak.indexOf("🤠") == 3) {
      conn.tembak.tembak = kiri[2]
    } else if(conn.tembak.tembak.indexOf("🤠") == 4) {
      conn.tembak.tembak = kiri[3]
    }

    let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")

    conn.deleteMessage(chat, { fromMe, id, remoteJid: chat })

    if(conn.tembak.musuh.indexOf("🥷") === conn.tembak.tembak.indexOf("🤠")) return conn.sendButton(m.chat, pos, "🎮 KannaBot", "Tembak", `${usedPrefix}${command} tembak`)
    return conn.send2Button(m.chat, pos, "🎮 KannaBot", "←", `${usedPrefix}${command} kiri`, "→", `${usedPrefix}${command} kanan`)
  } else if(/kanan/i.test(text)) {
    let { chat, fromMe, id, isBaileys } = m.quoted
    let kanan = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(conn.tembak.tembak.indexOf("🤠") == 0) {
      conn.tembak.tembak = kanan[1]
    } else if(conn.tembak.tembak.indexOf("🤠") == 1) {
      conn.tembak.tembak = kanan[2]
    } else if(conn.tembak.tembak.indexOf("🤠") == 2) {
      conn.tembak.tembak = kanan[3]
    } else if(conn.tembak.tembak.indexOf("🤠") == 3) {
      conn.tembak.tembak = kanan[4]
    } else if(conn.tembak.tembak.indexOf("🤠") == 4) {
      conn.tembak.tembak = kanan[4]
    }

    let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")

    conn.deleteMessage(chat, { fromMe, id, remoteJid: chat })

    if(conn.tembak.musuh.indexOf("🥷") === conn.tembak.tembak.indexOf("🤠")) return conn.sendButton(m.chat, pos, "🎮 KannaBot", "Tembak", `${usedPrefix}${command} tembak`)
    return conn.send2Button(m.chat, pos, "🎮 KannaBot", "←", `${usedPrefix}${command} kiri`, "→", `${usedPrefix}${command} kanan`)
  } else if(/tembak/i.test(text)) {
    let { chat, fromMe, id, isBaileys } = m.quoted
    if(conn.tembak.tembak.indexOf("🤠") == conn.tembak.musuh.indexOf("🥷")) {
      conn.tembak = {}
      global.db.data.users[m.sender].money += 1000
      global.db.data.users[m.sender].limit += 1
      m.reply("*🎉 Kamu menang!*\n\n*Hasil :*\n💸 Money 1000\n🎫 Limit 1")
    }
    conn.deleteMessage(chat, { fromMe, id, remoteJid: chat })
  } else {
    randMusuh = [
      ["🥷", "-", "-", "-", "-"],
      ["-", "🥷", "-", "-", "-"],
      ["-", "-", "🥷", "-", "-"],
      ["-", "-", "-", "🥷", "-"],
      ["-", "-", "-", "-", "🥷"]
    ]
    randAku = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    musuh = random(randMusuh)
    aku = random(randAku)

    conn.tembak.musuh = musuh
    conn.tembak.tembak = aku

    let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")

    if(conn.tembak.musuh.indexOf("🥷") === conn.tembak.tembak.indexOf("🤠")) return conn.sendButton(m.chat, pos, "🎮 KannaBot", "Tembak", `${usedPrefix}${command} tembak`)
    return conn.send2Button(m.chat, pos, "🎮 KannaBot", "←", `${usedPrefix}${command} kiri`, "→", `${usedPrefix}${command} kanan`)
  }
}

handler.command = /^(koboy)/i

module.exports = handler


function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}