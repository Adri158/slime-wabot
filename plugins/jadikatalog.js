let split = '|'
let handler  = async (m, { conn, text, usedPrefix }) => {
  let lmao = 'emror?'
  let [txt, ...text2] = text.replace(lmao, '').trimStart().split(split)
  if (!txt) throw 'Masukan Judul dan Deskripsi nya'
  if (!text2) throw `Contoh : ${usedPrefix}jadikatalog SLAYER?|INI BUKAN SELAYER BRUH:>`
  let q = m.quoted ? m.quoted : m 
  let mime = (q.msg || q).mimetype || ''
  if (/image|video/.test(mime)) {
    let img = await q.download()
    if (!img) throw 'Foto/Sticker tidak ditemukan'
    let pi = conn.prepareMessageFromContent(m.chat, {
	"productMessage": { 
          "product": { 
            "productImage":{ 
	      "mimetype": "image/jpeg", 
	      "jpegThumbnail": img 
            }, 
	    "title": `${txt}`, 
	    "description": `${text2}`, 
	    "currencyCode": "IDR", 
            "priceAmount": "50000", 
	    "retailerId": "DANISHGANTENG", 
	    "productImageCount": 1 
	  }, 
	  "businessOwnerJid": conn.user.jid
	}
      }, {})
    conn.relayWAMessage(pi, m)
  } else m.reply('FOTO NYA MANA sayang?')
}

handler.help = ['jadikatalog (business)']
handler.tags = ['owner']
handler.command = /^(jadikatalog)$/i
handler.owner = true
handler.fail = null

module.exports = handler
