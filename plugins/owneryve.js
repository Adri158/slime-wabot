let handler = function (m) {
	this.sendContact(m.chat, '6281354079196', 'Owner DoraBot :)', m)
}

handler.customPrefix = ['🍭Owner Dorabot'] 
handler.command = new RegExp

module.exports = handler