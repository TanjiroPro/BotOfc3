let handler = async (m, { isPrems, conn }) => {
let img = 'https://qu.ax/yxvfQ.jpg' 
let texto = `
╔═━━━━✦❘ ᴍᴇɴᴜ ꜰʀᴇᴇ ꜰɪʀᴇ ❘✦━━━━═╗
│ 🇵🇪 .vs4
│ 🇵🇪 .vs6
│ 🇵🇪 .bermuda
│ 🇵🇪 .purgatorio
│ 🇵🇪 .lista1 < Puro Apostado >
│ 🇵🇪 .lista2 < Puro By >
│ 🇵🇪 .lista3 < Puro Vv2 >
│ 🇵🇪 .lista4 < Puro 500 > 
│ 🇵🇪 .vs8
│ 🇵🇪 .reglasclk
│ 🇵🇪 .reglasinf
│ 🇵🇪 .guerra
│ 🇵🇪 .donarsala
╚═━━━━✦❘ ᴍᴀꜰɪᴀ ʙᴏᴛ ❘✦━━━━═╝
`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['menuff']
handler.tags = ['main'] 
handler.command = ['menuff', 'menuff'] 
export default handler