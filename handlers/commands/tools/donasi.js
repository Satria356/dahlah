module.exports = {
    tags: ['others', 'information'],
    cmd: ['donasi', 'donasi'],
    help: ['donasi'],
    exec: (m, client, { prefix }) => {
      
 const btn = [
            
            { urlButton: { displayText: `DANA`, url: ` 6283811034750` } },
            { urlButton: { displayText: `GOPAY`, url: `6283168004413 ` } },
            { urlButton: { displayText: `PULSA `, url: `6283811034750` } },
        ]
        client.sendMessage(m.chat, { 
			caption: `Kalian bisa mendukung saya agar bot ini tetap up to date dengan

πΏπππΌππ πππΌ β’
β ππππΌπ
β πΏπΌππΌ
β πππππππππ½ππ
β ππππ β ππππ π½πππππ πππ`, 
			footer, 
			templateButtons: btn,
			image: {url: 'https://telegra.ph/file/bcd9669f3b7efda08602d.jpg'}
		}, { quoted: m })
}}
