let handler = async (m, { isPrems, conn }) => {
let img = 'https://qu.ax/TAfdP.webp' 
let texto = `𝕸𝖆𝖕𝖆 𝕻𝖚𝖗𝖌𝖆𝖙𝖔𝖗𝖎𝖔 𝕱𝖗𝖊𝖊 𝕱𝖎𝖗𝖊 🤖
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
handler.help = ['purgatorio']
handler.tags = ['menuff'] 
handler.command = ['purgatorio', 'purgatorio'] 
export default handler