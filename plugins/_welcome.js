//código creado x The Carlos 👑
//no olvides dejar créditos     

import fetch from 'node-fetch'

const iconsUrl = 'https://qu.ax/qUCDv.png'
const redesUrl = 'https://chat.whatsapp.com/KqyCD7J3Xc59SnHKVS51MV'

const fkontak = {
  key: {
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
    contactMessage: {
      displayName: ' Mermelada Bot',
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:; Mermelada Bot ;;;\nFN:Mermelada Bot\nitem1.TEL;waid=1234567890:+12 3456 7890\nEND:VCARD`,
    },
  },
}

export async function before(m, { conn }) {
  if (!m.messageStubType || !m.isGroup) return true

  const chat = global.db.data.chats[m.chat]
  if (!chat?.welcome) return true

  const vnWelcome = 'https://files.catbox.moe/or87jd.mp4'
  const vnBye = 'https://files.catbox.moe/51b21l.mp4'

  const getMentionedJid = () =>
    m.messageStubParameters.map((param) => `${param}@s.whatsapp.net`)

  const who = `${m.messageStubParameters[0]}@s.whatsapp.net`
  const user = global.db.data.users[who] || {}
  const userNameRaw = user.name || (await conn.getName(who))

  if (m.messageStubType === 27) {
    await conn.sendMessage(
      m.chat,
      {
        audio: { url: vnWelcome },
        contextInfo: {
          forwardingScore: 9999999,
          isForwarded: true,
          mentionedJid: getMentionedJid(),
          externalAdReply: {
            title: '♧ W E L C O M E ♧',
            body: `${userNameRaw} ha ingresado.`,
            previewType: 'PHOTO',
            thumbnailUrl: null,
            thumbnail: await (await fetch(iconsUrl)).buffer(),
            sourceUrl: redesUrl,
            showAdAttribution: true,
          },
        },
        ptt: true,
        mimetype: 'audio/mpeg',
        fileName: 'cyber-welcome.mp3',
      },
      { quoted: fkontak }
    )
  }

  if (m.messageStubType === 28 || m.messageStubType === 32) {
    await conn.sendMessage(
      m.chat,
      {
        audio: { url: vnBye },
        contextInfo: {
          forwardingScore: 9999999,
          isForwarded: true,
          mentionedJid: getMentionedJid(),
          externalAdReply: {
            title: '⚠ N O V U E L V A S  ⚠',
            body: `${userNameRaw} ha salido.`,
            previewType: 'PHOTO',
            thumbnailUrl: null,
            thumbnail: await (await fetch(iconsUrl)).buffer(),
            sourceUrl: redesUrl,
            showAdAttribution: true,
          },
        },
        ptt: true,
        mimetype: 'audio/mpeg',
        fileName: 'cyber-bye.mp3',
      },
      { quoted: fkontak }
    )
  }
}