let handler = async (m, { isPrems, conn }) => {
let img = 'https://qu.ax/GvsoD.png' 
let texto = `
_*🕹️ LISTA DE ACTIVIDADES 🕹️*_

———————————————
💸 *APOS MIXTO* 💸

*6🇦🇷 5🇨🇱 4🇵🇪*
*• JUGADORXS •*
🚺
🚹
🚺
🚹

*• SUPLENTES •*
🚺
🚹
————————————
💸 *APOS MIXTO* 💸

*8🇦🇷 7🇨🇱 6🇵🇪*
*• JUGADORXS •*
🚺
🚹
🚺
🚹
*• SUPLENTES •*
🚺
🚺

————————————
💸 *APOS MIXTO* 💸

*10🇦🇷 9🇨🇱 8🇵🇪*
*• JUGADORXS •*
🚺
🚹
🚺
🚹
*• SUPLENTES •*
🚺
🚺

————————————
💸 *APOS MIXTO* 💸

*12🇦🇷 11🇨🇱 10🇵🇪*
*• JUGADORXS •*
🚺
🚹
🚺
🚹
*• SUPLENTES •*
🚺
🚺

————————————
💸 *APOS MIXTO* 💸

*02🇦🇷 01🇨🇱 12🇵🇪*
*• JUGADORXS •*
🚺
🚹
🚺
🚹
*• SUPLENTES •*
🚺
🚺
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
handler.help = ['lista1']
handler.tags = ['menuff'] 
handler.command = ['lista1', 'list1'] 
export default handler