const handler = async (m, { conn }) => {
  const texto = `
 _*ᴍᴇʀᴍᴇʟᴀᴅᴀ ʙᴏᴛ*_ 🥷

\`\`\`VENDEDOR OFC:\`\`\`
+51 936 994 155 < Mafia >  
  `.trim()

  await conn.reply(m.chat, texto, m)
}

handler.help = ['script']
handler.tags = ['info']
handler.command = ['script']

export default handler
