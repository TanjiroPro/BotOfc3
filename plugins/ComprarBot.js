const handler = async (m, {conn}) => {
  m.reply(global.ComprarBot);
};
handler.command ='comprarbot',/^(ComprarBot|Comprar|comprar|ComprarBot)$/i;
export default handler;
handler.tags = ['main']
handler.help = ['comprarbot']

global.ComprarBot = `
_*Deseas Comprar Mermelada Bot ✨?*_

_*Vendedor Oficial ::*_
- _*@Mermelada *_ :: +56958890156

- *_Grupo Ofc Ventas_* :: https://chat.whatsapp.com/KqyCD7J3Xc59SnHKVS51MV
`;