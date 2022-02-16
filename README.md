<p align="center">
    <img src="https://telegra.ph/file/a5146f6e28d4400312aae.jpg" width="100%" style="margin-left: auto;margin-right: auto;display: block;">
</p>
<h1 align="center">Slime BOT</h1>

<a href="https://github.com/Adri158/slime-wabot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Adri158/slime-wabot?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/Adri158/slime-wabot/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/Adri158/slime-wabot?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/Adri158/slime-wabot/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/Adri158/slime-wabot?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/Adri158/slime-wabot/graphs/contributors"><img title="Contributors" src="https://img.shields.io/github/contributors/Adri158/slime-wabot?label=Contributors&color=blue&style=flat-square"></a>
<a href="https://github.com/Adri158/slime-wabot/issues"><img title="Issues" src="https://img.shields.io/github/issues/Adri158/slime-wabot?label=Issues&color=success&style=flat-square"></a>
<a href="https://github.com/Adri158/slime-wabot/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/Adri158/slime-wabot?label=Issues&color=red&style=flat-square"></a>
<a href="https://github.com/Adri158/slime-wabot/pulls"><img title="Pull Request" src="https://img.shields.io/github/issues-pr/Adri158/slime-wabot?label=PullRequest&color=success&style=flat-square"></a>
<a href="https://github.com/Adri158/slime-wabot/pulls?q=is%3Apr+is%3Aclosed"><img title="Pull Request" src="https://img.shields.io/github/issues-pr-closed/Adri158/slime-wabot?label=PullRequest&color=red&style=flat-square"></a>

## FOR DEPLOY HEROKU USER

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Adri158/slime-wabot)

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git

## FOR DEPLOY RAILWAY USER

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2FAdri158%2Fslime-wabot)

## FOR DEPLOY REPLIT USER

[![Run on Replit](https://repl.it/badge/github/FadliDarmawan/haruno)](https://replit/github/Adri158/slime-wabot/)
```cmd
Open Console
------------
> npm i
> npm i qrcode
> install-pkg webp
> install-pkg ffmpeg
-------------
Click Run
```
## Wangsaff gwehj

[![Grup Wangsaff](https://img.shields.io/badge/Wangsaff%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/F9dPQcOf82Z4Dc9uxE7Kh0)
[![Wangsaff BOT](https://img.shields.io/badge/Wangsaff%20BOT-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/6282195470493/)

## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Adri158/slime-wabot/
cd slime-wabot
npm i
npm update
node .
```

---------

## UNTUK PENGGUNA TERMUX
```bash
termux-setup-storage
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
pkg install libwebp
git clone https://github.com/Adri158/slime-wabot/
npm install -g npm@6.14.14
npm start
```

---------

## Arguments `node . [--options] [<session name>]`

#### Contoh: `node . --self --restrict --autoread`

### `--self`

Aktifkan mode self (Mengabaikan yang lain)

### `--prefix <prefixes>`

* `prefixes` dipisahkan oleh masing-masing karakter
Setel awalan

### `--server`

Digunakan untuk [heroku](https://heroku.com/) atau pindai melalui situs web

### `--db <json-server-url>`

Gunakan db eksternal alih-alih db lokal, 
Contoh Server `https://json-server.nurutomo.repl.co/`
Code: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

Server harus memiliki spesifikasi seperti ini

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

Jika qr unicode kecil tidak mendukung

### `--restrict`

Mengaktifkan plugin terbatas (yang dapat menyebabkan nomor Anda **diblokir** jika digunakan terlalu sering)

* Administrasi Grup `add, kick, promote, demote`

### `--img`

Aktifkan pemeriksa gambar melalui terminal

### `--autoread`

Jika diaktifkan, semua pesan masuk akan ditandai sebagai telah dibaca

### `--nyimak`

Tidak ada bot, cukup cetak pesan yang diterima dan tambahkan pengguna ke database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------

 [![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo) | [![Ariffb](https://github.com/ariffb25.png?size=100)](https://github.com/ariffb25) | [![Kannachann](https://github.com/Kannachann.png?size=100)](https://github.com/Kannachann) | [![Adri158](https://github.com/Adri158.png?size=100)](https://github.com/Adri158)
----|----|----|----
[Nurutomo](https://github.com/Nurutomo) | [Ariffb](https://github.com/ariffb25) | [Kannachann](https://github.com/Kannachann) | [Adri](https://github.com/Adri158)
 Penulis / Pencipta | Penulis ulang Ke-1 | Penulis ulang Ke-2 |Penulis ulang Ke-3

P gw gabut
