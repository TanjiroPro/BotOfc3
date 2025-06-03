let handler = async (m, { isPrems, conn }) => {
let img = 'https://qu.ax/GvsoD.png' 
let texto = `
𝟔 𝐕𝐄𝐑𝐒𝐔𝐒 𝟔

🇵🇪 𝐏𝐞𝐫𝐮 ::
🇦🇷 𝐀𝐫𝐠𝐞𝐧𝐭𝐢𝐧𝐚 ::
🇨🇱 𝐂𝐡𝐢𝐥𝐞 ::

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔

👑 ┇ 
🥷🏻 ┇  
🥷🏻 ┇ 
🥷🏻 ┇ 

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔

👑 ┇ 
🥷🏻 ┇  
🥷🏻 ┇ 
🥷🏻 ┇ 

ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
🥷🏻 ┇ 
🥷🏻 ┇
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
handler.help = ['vs8']
handler.tags = ['menuff'] 
handler.command = ['vs8', 'vs8'] 
export default handler