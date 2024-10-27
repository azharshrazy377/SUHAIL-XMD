const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ZIDDI KING BALOCH" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923066671786";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923066671786,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_32_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMSxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk1LFxuICAgICAgICA0NixcbiAgICAgICAgMjMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyLFxuICAgICAgICA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NixcbiAgICAgICAgODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MixcbiAgICAgICAgMTA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDksXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDExMixcbiAgICAgICAgNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzLFxuICAgICAgICA1NixcbiAgICAgICAgODgsXG4gICAgICAgIDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDkwLFxuICAgICAgICA4MyxcbiAgICAgICAgNixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmK3A5WHlKZkc2bmh0N2JtSVcrbk1UVGFhcjRMcEROY1dvb3Ewb0cvcWtvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjSHFJWVpfelF4U1NfZWJWclF1bllBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI2NmZmMmYxLTQ1ODItNDkyOS05Y2JlLWZiNjNhYTk5ODQ5MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAyMTcsXG4gICAgICAxODIsXG4gICAgICA5LFxuICAgICAgMjAyLFxuICAgICAgMTkxLFxuICAgICAgMTUsXG4gICAgICA0NyxcbiAgICAgIDQ1LFxuICAgICAgODUsXG4gICAgICAxMTYsXG4gICAgICAxOTIsXG4gICAgICAxMzAsXG4gICAgICAxNjksXG4gICAgICAxMjksXG4gICAgICA0MSxcbiAgICAgIDIyOSxcbiAgICAgIDIwMixcbiAgICAgIDIyMSxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDExOCxcbiAgICAgIDE1NixcbiAgICAgIDI0MyxcbiAgICAgIDc4LFxuICAgICAgMjIyLFxuICAgICAgNzUsXG4gICAgICAxNDAsXG4gICAgICAxMCxcbiAgICAgIDE1NSxcbiAgICAgIDExNCxcbiAgICAgIDExOSxcbiAgICAgIDE5NCxcbiAgICAgIDIyNCxcbiAgICAgIDQsXG4gICAgICA2NCxcbiAgICAgIDQ0LFxuICAgICAgNTksXG4gICAgICAxMDQsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0Uzk3TUpNRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDY2NjcxNzg2OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QmfCdkIjwnZCD8J2Qg/CdkIgg8J2QivCdkIjwnZCN8J2QhiDwnZCB8J2QgPCdkIvwnZCO8J2QgvCdkIdcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAg8JOGqeKBt+KBuOKBtvCThqpcIixcbiAgICBcImxpZFwiOiBcIjU3MzQyNTI3ODE1NzkyOjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXRXBkTUNFTTZ0K0xnR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV1lGZWx2bmZQaDVXNENteFAzVUJPUzJYZHF3Y0JTQ2hqUzZPSGpOVkYxYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtUnozQjAxaEdWdTZ5ckFNWERlWFU0UENzUEp4eGkzd0NteTJ1bllSOGdST2MvRmFLZ2ZsUURhaDd1YWhkdXlJNEFqNGZzc3dUM3VzVGRpamZiaEtBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXcE5yZjBwMGZnY0pCalVvNThKbFh0bXRTaWJCK2Q2ajJlUTVlS1VVQkQvR05VUjhYaDEyelZDSXUydS8wVjIvQ1lrU1NIalRqS0NNenZiM3o5bUVnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNjY2NzE3ODY6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAwMjUxNzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPS0NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9LQy5qc29uIjogIntcImtleURhdGFcIjpcIk9QUmNjMERnd0pUMVZNc0x6bnk2RDBmY1pOZjJyZ2Z0US8yYTgrSVpQVHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzExNTQxMjg1LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMTczMDAxMjc3ODU1MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ضـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖٜ۬ﹻۗﹻۧ۬ﹻ۬ﹻــدی کنـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻــگ بلـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖﹿﹻۧ۬ﹻ۬ﹻــوچ",
  ownername:process.env.OWNER_NAME|| "کنـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻــگ بلـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖﹿﹻۧ۬ﹻ۬ﹻــوچ"
    ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
