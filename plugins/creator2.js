const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{


"displayName": "OWNER•FAKE",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:OWNER•FAKE\nitem1.TEL;waid=6287735559197:6287735559197\nitem1.X-ABLabel:📍 Owner Fake2\nitem2.EMAIL;type=INTERNET:ezzarrifaa@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://wa.me/6287735559197\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇯🇵 Jepang;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Tokyo 🇯🇵\nitem5.X-ABLabel:───────[ SLIMEBOT ]───────\nEND:VCARD"
  }, {
    "displayName": "OWNER•REAL2",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:OWNER•REAL2\nitem1.TEL;waid=62895325053017:62895325053017\nitem1.X-ABLabel:📍 Owner Real2\nitem2.EMAIL;type=INTERNET:slimebotz011@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://github.com/Adri158\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇯🇵 Jepang;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Tokyo 🇯🇵\nitem5.X-ABLabel:───────[ SLIMEBOT ]───────\nEND:VCARD"
  }, {
    "displayName": "Whatsapp",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Whatsapp\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:📍 Whatsapp\nitem2.EMAIL;type=INTERNET:Whatsapp@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://faq.whatsapp.com/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;⛩️ Whatsapp;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:📞 Official Bot Whatsapp\nitem5.X-ABLabel:───────[ By WhatsApp ]───────\nEND:VCARD"
  }, {
    "displayName": "OWNER•FAKE2",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:OWNER•FAKE2\nitem1.TEL;waid=+6287774166385:6287774166385\nitem1.X-ABLabel:📍 Owner Fake2\nitem2.EMAIL;type=INTERNET:???@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://wa.me/6287774166385\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇯🇵 Jepang;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Tokyo 🇯🇵\nitem5.X-ABLabel:───────[ SLIMEBOT ]───────\nEND:VCARD"
  }, {
    "displayName": "OWNER•REAL",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:OWNER•REAL\nitem1.TEL;waid=6281354079196:6281354079196\nitem1.X-ABLabel:📍 Owner Real\nitem2.EMAIL;type=INTERNET:rimuru418@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://github.com/Adri158\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇯🇵 Jepang;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Tokyo 🇯🇵\nitem5.X-ABLabel:───────[ SLIMEBOT ]───────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler