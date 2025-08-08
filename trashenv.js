const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'trashcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEd3RE1Zay9iWDhrOS9Ib1M2ZmJYNnhpZnc0Zk5NNCtXSHpXNEl1T3JHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5HbG5jcE5lb1cwZnBEcG5idm5GN0paN0VwRkhaUHJmUWxZOGJ3R2VrZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJR2JSSVBXbVM3NTFVRjhlcnJmUzJ4NFIrMk5WdlRxZkZ5V1oxQ20zREh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJidWg5YWo3VDRpejhzNDR5cGtRWHkrdGFUL29OL0F3K3pYV2p0OXpyYzNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBQd3JySU5HL0xZMmU0YWUrUDlueGFPNmErU3g5M2NRMWlHQmRmNVZsM009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZPOWdpRGJpdE9wVmZ2cmVpbGs2eTkzVjlMOEEyTjRlY0FRUlNSTThaRFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJwRHJnMVBabEdRbWlCWG9tbEx2U3krd004VElEalNCZ082RXZkc2gyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzlnME5TTmFRWC8vRTFodkNTaUJJQjRwNFlEb2t5RFVGZ2IrVzRZVlRXZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc2Q2V0RlRqUFdmQVlwVS93VDI2bFlmNGdsZVNYdEtOb05vWFJoSTVwTEtTeDg3RTFpZ1VVNmhadFpxdUZxNHM4NTFqZEIwZExEL2ZaaW1sK1NrQmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJTRXkrcTlucy80bytZY2VHVU42MDNpcTBYc3N5YXdpWm1kZHg0aTFIdG9zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJidzhuUmEweFI2U0c0WXctMVZablhRIiwicGhvbmVJZCI6IjZmOGI5NzZiLTliNzQtNDExZS05ZGY5LWYwNzc1MWU5YWJmYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxcUQrSW9DS0ZOMXcxZHhaaW5kM2dxbTdIOG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTRFaGgraytVV3ZPUkgrcU1VREF4U1BQYzRzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRSQVNIQk9UIiwibWUiOnsiaWQiOiIyNTQ3NDUzMTQyMzc6MTlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4MTEyODIyNDUwMTg4MDoxOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tlODBod1FzS3JXeEFZWUJ5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJ0R1lkZ1hzZ2xYTW5BczRBSS9udm4wNmIwK1U3UXpoYkF2U01WSTJJbTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImE5aHBPb3UyeGY5dTZzTllueTNNYkY0Z1g2eTg3VVBGUTFmMEh2bW9SNk15Z0U4VW5ML0VGa2Zmc08rZFVZYmVPYnBhRlNXRGZsSFJkakl3WnAvVERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHcnFHaHE1ZnBmY1hyQUgrb1BLZ0FwNGFUYVRHUGRaSTBqQlUrakxENSt5WmhsTTUrZEtGbzVuQ2VFS2RBc2QwSWphYXdjMlNMSkg0RVYrSTJ1bzRodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc0NTMxNDIzNzoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkclJtSFlGN0lKVnpKd0xPQUNQNTc1OU9tOVBsTzBNNFd3TDBqRlNOaUp1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ2MzM1MzQsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNYm8ifQ==' 
// Owner Setting
global.xprefix = process.env.BOT_PREFIX ||'.'
global.owner = ["254745314237",]
global.error = ["6666",]
global.ownername = process.env.OWNER_NAME ||'RODNEY'
global.antidelete = process.env.ANTI_DELETE || true
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Bot Setting
global.botname = "Trashcore"
global.botversion = "1.6.0"
global.typebot = "Plugin"
global.session = "trashsession"
global.connect = true
global.statusview = process.env.AUTO_STATUS || true
global.antilinkgc = process.env.ANTILINK_GROUP || true
global.autoTyping = process.env.AUTO_TYPE || false
global.autoRecord = process.env.AUTO_RECORD || false
global.thumb = "https://files.catbox.moe/4ryp6k.jpg"
global.wagc = "https://chat.whatsapp.com/BPyIptm3ZH68y4pSPrLMyq?mode=r_t"
global.caption = "Trashcore media"
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Sticker Marker
global.packname = process.env.PACK_NAME ||'𝐓𝐑𝐀𝐒𝐇𝐂𝐎𝐑𝐄'
global.packname = process.env.AUTHOR||'𝐏𝐀𝐂𝐊𝐒'
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Respon Message
global.mess = {
    success: '✅ Done.',
    admin: '🚨 Admin only.',
    premium: '🆘must be a premium user.',
    botAdmin: '🤖 Make me admin first.',
    owner: '👑 Owner only.',
    OnlyGrup: '👥 Group only.',
    private: '📩 Private chat only.',
    wait: '⏳ Processing...',
    error: '⚠️ Error occurred.',
}
//━━━━━━━━━━━━━━━━━━━━━━━━//
// File Update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update File 📁 : ${__filename}`)
delete require.cache[file]
require(file)
})
