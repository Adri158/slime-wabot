let handler = async(m, { conn, args, usedPrefix }) => {
	
let chat = `┏━━⬣ 𝙄𝙉𝙁𝙊
┃
┃⬡ Mode : Public
┃⬡ Jam : 16:24:32
┃⬡ Tanggal : 10-09-2021
┃⬡ Feature : 330 *Features*
┃⬡ Battery : *33℅*
┗⬣

┏━━⬣ 𝙈𝘼𝙄𝙉
┃
┃⬡ /afk [alasan]
┃⬡ /info
┃⬡ /alive
┃⬡ /jadian (Limit)
┃⬡ /menu
┃⬡ /help
┃⬡ /?
┃⬡ /runtime
┃⬡ /status
┃⬡ /statusbot
┗⬣

┏━━⬣ 𝙎𝙏𝙍𝙀𝙎 𝙈𝙀𝙉𝙐
┃
┃⬡ /wangy
┃⬡ /nenen
┃⬡ /simp
┃⬡ /sherk
┗⬣

┏━━⬣ 𝘼𝙋𝙄 𝙈𝙀𝙉𝙐
┃
┃⬡ /generatekey
┃⬡ /cekey
┗⬣

┏━━⬣ 𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐
┃
┃⬡ /husbu
┃⬡ /kuso <query>
┃⬡ /kusonime <query>
┃⬡ /loli
┃⬡ /lolivid (Limit)
┃⬡ /asupanloli (Limit)
┃⬡ /megumin
┃⬡ /neko
┃⬡ /otakulatest
┃⬡ /otakudesulatest
┃⬡ /otakusearch <query>
┃⬡ /otakudesusearch <query>
┃⬡ /ppcouple
┃⬡ /ppwibu
┃⬡ /sagiri
┃⬡ /charanime <name>
┃⬡ /nekogif (sfw)
┃⬡ /shota
┃⬡ /waifu
┗⬣

┏━━⬣ 𝙂𝘼𝙈𝙀
┃
┃⬡ /adventure
┃⬡ /asahotak
┃⬡ /caklontong
┃⬡ /family100
┃⬡ /judi <jumlah>
┃⬡ /math <mode>
┃⬡ /siapakahaku
┃⬡ /slot
┃⬡ /suit
┃⬡ /tebakgambar
┃⬡ /tebakkata
┃⬡ /tebakkimia
┃⬡ /tebaklagu (Limit)
┃⬡ /tictactoe [custom room name]
┃⬡ /ttt [custom room name]
┗⬣

┏━━⬣ 𝙀𝙓𝙋 & 𝙇𝙄𝙈𝙄𝙏
┃
┃⬡ /dompet
┃⬡ /bank
┃⬡ /buy<jumlah limit>
┃⬡ /buy <jumlah limit>
┃⬡ /buyall
┃⬡ /daily
┃⬡ /claim
┃⬡ /kerja (Limit)
┃⬡ /leaderboard [jumlah user]
┃⬡ /lb [jumlah user]
┃⬡ /levelup
┃⬡ /pay @user <amount>
┃⬡ /paylimit @user <amount>
┃⬡ /topmoney
┗⬣

┏━━⬣ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍
┃
┃⬡ /attp <teks>
┃⬡ /blowjob
┃⬡ /circle
┃⬡ /colong
┃⬡ /ctrigger <text> (Limit)
┃⬡ /dadu
┃⬡ /getexif
┃⬡ /semoji [tipe] <emoji>
┃⬡ /sfire (Limit)
┃⬡ /stickerfire
┃⬡ /smim
┃⬡ /smim2
┃⬡ /smim3
┃⬡ /stahta (teks)
┃⬡ /stiker (caption|reply media)
┃⬡ /stikergif (caption|reply media)
┃⬡ /stickerwa <teks> (Limit)
┃⬡ /circle
┃⬡ /telestick <teks>
┃⬡ /togif (Limit)
┃⬡ /toimg (reply)
┃⬡ /tovideo (reply)
┃⬡ /trigger
┃⬡ /ttp <teks>
┃⬡ /ttp2 <teks>
┃⬡ /ttp3 <teks>
┃⬡ /ttp4 <teks>
┃⬡ /ttpdark (Limit)
┃⬡ /wm <packname>|<author>
┗⬣

┏━━⬣ 𝙏𝙀𝙓𝙏𝙋𝙍𝙊
┃
┃⬡ /underwater
┃⬡ /berry
┃⬡ /thunder
┃⬡ /captainamerica
┃⬡ /camerica
┃⬡ /demon
┃⬡ /transformer
┃⬡ /3dstone
┃⬡ /neon
┃⬡ /glitchtext
┃⬡ /papercut
┃⬡ /gradient
┃⬡ /brokenglass
┃⬡ /3dbeach
┃⬡ /3dmetal
┃⬡ /magma
┃⬡ /glitchtext2
┃⬡ /harrypotter
┃⬡ /watercolor
┃⬡ /bpink
┃⬡ /pornhub
┃⬡ /phlogo
┗⬣

┏━━⬣ 𝙆𝙀𝙍𝘼𝙉𝙂 𝙈𝙀𝙉𝙐
┃
┃⬡ apakah <teks>?
┃⬡ /apakah <pertanyaan>
┃⬡ /howgay siapa?
┃⬡ /howpintar siapa?
┃⬡ /howcantik siapa?
┃⬡ /howganteng siapa?
┃⬡ /howgabut siapa?
┃⬡ /howgila siapa?
┃⬡ /howlesbi siapa?
┃⬡ /howstress siapa?
┃⬡ /howbucin siapa?
┃⬡ /howjones siapa?
┃⬡ /howsadboy siapa?
┃⬡ kapan <text>?
┃⬡ kapankah <text>?
┃⬡ /kapan <pertanyaan>
┃⬡ /kapankah <pertanyaan>
┗⬣

┏━━⬣ 𝙌𝙐𝙊𝙏𝙀𝙎
┃
┃⬡ /bucin
┃⬡ /truth
┃⬡ /fakta
┃⬡ /quotes
┃⬡ /quotesnime
┃⬡ /quotesanime
┃⬡ /truth
┗⬣

┏━━⬣ 𝘼𝘿𝙈𝙄𝙉
┃
┃⬡ /add nomor,nomor (Limit)
┃⬡ /+ nomor,nomor (Limit)
┃⬡ /demote @user
┃⬡ /member @user
┃⬡ /↓ @user
┃⬡ /kick @user (Limit)
┃⬡ /- @user (Limit)
┃⬡ /promote @user
┃⬡ /admin @user
┃⬡ /^ @user
┃⬡ /↑ @user
┗⬣

┏━━⬣ 𝙂𝙍𝙊𝙐𝙋
┃
┃⬡ /cekbot
┃⬡ /enable <option>
┃⬡ /disable <option>
┃⬡ /infogrup
┃⬡ /setgc open
┃⬡ /setgc buka
┃⬡ /setgc tutup
┃⬡ /setgc close
┃⬡ /setgc subject
┃⬡ /setgc desc
┃⬡ /setgc revoke
┃⬡ /setgc reset
┃⬡ /setgc profile
┃⬡ /setgc picture
┃⬡ /linkgroup
┃⬡ /here
┃⬡ /listonline
┃⬡ /opengumuman [teks]
┃⬡ /oannounce [teks]
┃⬡ /ohidetag [teks]
┃⬡ /pengumuman [teks]
┃⬡ /announce [teks]
┃⬡ /hidetag [teks]
┃⬡ /resend (Limit)
┃⬡ /revoke
┃⬡ /setbye <teks>
┃⬡ /setwelcome <teks>
┃⬡ /simulate <event> [@mention]
┃⬡ /totalpesan
┗⬣

┏━━⬣ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
┃
┃⬡ /join <chat.whatsapp.com>
┗⬣

┏━━⬣ 𝙉𝙎𝙁𝙒
┃
┃⬡ /ahegao (Limit)
┃⬡ /ass (Limit)
┃⬡ /boobs (Limit)
┃⬡ /ecchi (Limit)
┃⬡ /hentai (Limit)
┃⬡ /masturbation (Limit)
┃⬡ /nekodl <url> (Limit)
┃⬡ /nekolatest (Limit)
┃⬡ /nekopoilatest (Limit)
┃⬡ /nhsearch <query> (Limit)
┃⬡ /nhentaisearch <query> (Limit)
┃⬡ /nh <code> (Limit)
┃⬡ /nhentai <code> (Limit)
┃⬡ /nsfwloli
┃⬡ /nsfwneko (Limit)
┃⬡ /pussy (Limit)
┃⬡ /sideboobs (Limit)
┃⬡ /trap (Limit)
┃⬡ /yuri (Limit)
┗⬣

┏━━⬣ 𝙄𝙉𝙏𝙀𝙍𝙉𝙀𝙏
┃
┃⬡ /asupan
┃⬡ /ptlvideo
┃⬡ /ptlvid
┃⬡ /bitly <url>
┃⬡ /brainly <soal>
┃⬡ /corona
┃⬡ /fetch <url>
┃⬡ /get <url>
┃⬡ /infogempa
┃⬡ /gimage <query> (Limit)
┃⬡ /image <query> (Limit)
┃⬡ /google <pencarian>
┃⬡ /googlef <pencarian>
┃⬡ /epep <id>
┃⬡ /igstalk <username>
┃⬡ /ip 1.1.1.1
┃⬡ /iplookup 1.1.1.1
┃⬡ /jarak kota1-kota2
┃⬡ /jaraktempuh kota1-kota2
┃⬡ /joox <nama> (Limit)
┃⬡ /jumpscare
┃⬡ /kanji <kanji>
┃⬡ /kbbi <kata>
┃⬡ /lirik <judul> (Limit)
┃⬡ /pastegg <text>
┃⬡ /quran <nama>
┃⬡ /rangkum <soal>
┃⬡ /ss <url> (Limit)
┃⬡ /ssf <url> (Limit)
┃⬡ /sshp <url> (Limit)
┃⬡ /subreddit <query>
┃⬡ /tiktokstalk <username>
┃⬡ /tinyurl <url>
┃⬡ /wallpaper
┃⬡ /wp
┃⬡ /wallpaperq <query> (Limit)
┃⬡ /anime <query>
┃⬡ /wiki<query>
┃⬡ /wikipedia<query>
┃⬡ /ytstalk <username>
┗⬣

┏━━⬣ 𝙈𝘼𝙂𝙀𝙍𝙉𝙐𝙇𝙄𝙎 & 𝙇𝙊𝙂𝙊
┃
┃⬡ /tahta <teks> (Limit)
┃⬡ /magernulis1 <teks> (Limit)
┃⬡ /magernulis2 <teks> (Limit)
┃⬡ /magernulis3 <teks> (Limit)
┃⬡ /magernulis4 <teks> (Limit)
┃⬡ /magernulis5 <teks> (Limit)
┃⬡ /magernulis6 <teks> (Limit)
┃⬡ /meme
┃⬡ /nulis <teks>
┃⬡ /qmaker (tulisan|author|theme)
┃⬡ /quotemaker (tulisan)
┃⬡ /tahta2<teks>
┃⬡ /upimg <reply / caption> (Limit)
┗⬣

┏━━⬣ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍
┃
┃⬡ /fb <url>
┃⬡ /ig <url>
┃⬡ /ighighlight <username>
┃⬡ /igstory <username>
┃⬡ /pinterestdl <url>
┃⬡ /play <pencarian> (Limit)
┃⬡ /play2 <pencarian> (Limit)
┃⬡ /spotify <url>
┃⬡ /tiktok <url>
┃⬡ /tiktokaudio <url>
┃⬡ /ttaudio <url>
┃⬡ /twitter <url> (Limit)
┃⬡ /ytmp3 <url> [server: id4, en60, en61, en68] (Limit)
┃⬡ /yta <url> [server: id4, en60, en61, en68] (Limit)
┃⬡ /ytplay <pencarian>
┃⬡ /ytmp4 <url> [server: id4, en60, en61, en68] (Limit)
┃⬡ /ytv <url> [server: id4, en60, en61, en68] (Limit)
┃⬡ /yt <url> [server: id4, en60, en61, en68] (Limit)
┃⬡ /zippyshare <url>
┃⬡ /zippy <url>
┗⬣

┏━━⬣ 𝙏𝙊𝙊𝙇𝙎
┃
┃⬡ /affect
┃⬡ /aksara <opsi> <teks> (Limit)
┃⬡ /asmaulhusna
┃⬡ /base64
┃⬡ /bass
┃⬡ /blur
┃⬡ /calc <expression>
┃⬡ /beautiful (@tag)
┃⬡ /carbon <code>
┃⬡ /carigrup <pencarian>
┃⬡ /caripesan <pesan>|<jumlah>
┃⬡ /ceknsfw (Limit)
┃⬡ /isnsfw (Limit)
┃⬡ /cuaca _daerah_ 
┃ _Info Cuaca daerah_
┃⬡ /effect_senyum
┃⬡ /hd (caption|reply media)
┃⬡ /enhance (caption|reply media)
┃⬡ /enphoto <effect> <text>|[text2]|[text3]
┃⬡ /facewibu
┃⬡ /ifilter
┃⬡ /caripesan <pesan>|<jumlah>
┃⬡ /gimage <query> (Limit)
┃⬡ /image <query> (Limit)
┃⬡ /githubsearch <pencarian>
┃⬡ /glitch
┃⬡ /hitler (@tag)
┃⬡ /halah <teks>
┃⬡ /hilih <teks>
┃⬡ /huluh <teks>
┃⬡ /heleh <teks>
┃⬡ /holoh <teks>
┃⬡ /ifilter (Limit)
┃⬡ /tobraille
┃⬡ /inspect <chat.whatsapp.com>
┃⬡ /jail (@tag)
┃⬡ /joke
┃⬡ /map
┃⬡ /skullmask
┃⬡ /mention <teks>
┃⬡ /nightcore
┃⬡ /nulis2 <teks>
┃⬡ /ocr (Limit)
┃⬡ /pinterest <query> (Limit)
┃⬡ /pinterest2 <query>.<total> (Limit)
┃⬡ /pixel
┃⬡ /pptrigger (@tag)
┃⬡ /profile [@user]
┃⬡ /qr <teks>
┃⬡ /qrcode <teks>
┃⬡ /qrread (Limit)
┃⬡ /rainbow
┃⬡ /readmore <teks>|<teks>
┃⬡ /spoiler <teks>|<teks>
┃⬡ /reverb
┃⬡ /rip (@tag)
┃⬡ /run (Limit)
┃⬡ /scan [nomor]
┃⬡ /sepia
┃⬡ /slow
┃⬡ /spamcall <nomor>
┃⬡ /spamsms <nomor>
┃⬡ /kecepatan
┃⬡ /ping
┃⬡ /speed
┃⬡ /spotifyplay <pencarian>
┃⬡ /sp <pencarian>
┃⬡ /spotifysearch <pencarian>
┃⬡ /style <text>
┃⬡ /tourl (Limit)
┃⬡ /imgbb (Limit)
┃⬡ /translate <lang> <teks>
┃⬡ /trash
┃⬡ /trash2 (@tag)
┃⬡ /tts <lang> <teks>
┃⬡ /upload (caption|reply media)
┃⬡ /upload2 (caption|reply media)
┃⬡ /wait (caption|reply image)
┃⬡ /wanted (@tag)
┃⬡ /wanted2 (caption|reply)
┃⬡ /wasted
┃⬡ /whatmusic
┃⬡ /yts <pencarian>
┃⬡ /ytsearch <pencarian>
┃⬡ /zodiac *2002 02 25*
┗⬣

┏━━⬣ 𝙁𝙐𝙉
┃
┃⬡ /asupan
┃⬡ /ptlvideo
┃⬡ /ptlvid
┃⬡ /changemymind <teks>
┃⬡ /clyde <teks>
┃⬡ /dadu
┃⬡ /darkjokes
┃⬡ /jedagjedug
┃⬡ /jumpscare
┃⬡ /paling <teks>
┃⬡ /ref
┃⬡ /shitpost
┃⬡ /simi <teks>
┃⬡ /simsimi <teks>
┃⬡ /simih <teks>
┃⬡ /tagme
┗⬣

┏━━⬣ 𝙅𝘼𝘿𝙄𝘽𝙊𝙏
┃
┃⬡ /getcode
┃⬡ /jadibot (Limit)
┃⬡ /listjadibot
┃⬡ /berhenti
┃⬡ /stop
┗⬣

┏━━⬣ 𝙊𝙒𝙉𝙀𝙍
┃
┃⬡ /addprem *@user*
┃⬡ /banchat
┃⬡ /mute
┃⬡ /ban
┃⬡ /broadcast <teks>
┃⬡ /bc <teks>
┃⬡ /broadcastgroup <teks>
┃⬡ /bcgc <teks>
┃⬡ /buatgc
┃⬡ /plugin *stiker*
┃⬡ /deletechat
┃⬡ /deletechat chat
┃⬡ /deletechat group
┃⬡ /deletechat all
┃⬡ /mutechat
┃⬡ /mutechat chat
┃⬡ /mutechat group
┃⬡ /mutechat all
┃⬡ /enable <option>
┃⬡ /disable <option>
┃⬡ /keluar
┃⬡ /leaveall
┃⬡ /oadd @user
┃⬡ /o+ @user
┃⬡ /odemote @user
┃⬡ /omember @user
┃⬡ /ov @user
┃⬡ /okick @user
┃⬡ /o- @user
┃⬡ /opromote @user
┃⬡ /oadmin @user
┃⬡ /o^ @user
┃⬡ /setbotbio
┃⬡ /setbotname
┃⬡ /setbye <teks>
┃⬡ /setmenu <teks>
┃⬡ /setmenubefore <teks>
┃⬡ /setmenuheader <teks>
┃⬡ /setmenubody <teks>
┃⬡ /setmenufooter <teks>
┃⬡ /setmenuafter <teks>
┃⬡ /setprefix <prefix>
┃⬡ /setwelcome <teks>
┃⬡ /simulate <event> [@mention]
┃⬡ /unbanchat
┃⬡ /ban
┗⬣

┏━━⬣ 𝙃𝙊𝙎𝙏
┃
┃⬡ /blocklist
┃⬡ /listblock
┃⬡ /broadcastjadibot <teks>
┃⬡ /bcbot <teks>
┃⬡ /debounce
┃⬡ /sendbug <nomor>
┃⬡ /sendtroli <nomor>
┃⬡ /setbotpp
┃⬡ /setppbot
┃⬡ /update
┃⬡ /update2
┗⬣

┏━━⬣ 𝘼𝘿𝙑𝘼𝙉𝘾𝙀𝘿
┃
┃⬡ > 
┃⬡ => 
┗⬣

┏━━⬣ 𝙄𝙉𝙁𝙊
┃
┃⬡ /admins
┃⬡ /adminlist
┃⬡ /bannedlist
┃⬡ /owner
┃⬡ /creator
┃⬡ /del
┃⬡ /delete
┃⬡ /donasi
┃⬡ /groups
┃⬡ /grouplist
┃⬡ /premium
┃⬡ /shop
┃⬡ /bug <laporan>
┃⬡ /report <laporan>
┃⬡ /ping
┃⬡ /speed
┗⬣

┏━━⬣ 𝙉𝙊 𝘾𝘼𝙏𝙀𝙂𝙊𝙍𝙔
┃
┃⬡ /start
┃⬡ /leave
┃⬡ /next
┃⬡ /save @mention <ContactName>
┃⬡ /getsider
┃⬡ / <>
┃⬡ /upsw [text] (Reply Media)
┃⬡ /upsw <text>
┃⬡ /verify
┗⬣`.trim()
m.reply(chat)
}
handler.command = /^(kotakk)$/i
 
module.exports = handler