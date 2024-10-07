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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_39_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDc1LFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg2LFxuICAgICAgICA0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICA4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg0LFxuICAgICAgICA1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICA2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjExLFxuICAgICAgICA3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMzYsXG4gICAgICAgIDgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NixcbiAgICAgICAgNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4LFxuICAgICAgICA4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDgwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGQ2FVNHk2OXdHckw4NjN2dE1UQjR3K2w0Ym5HNUhhUEpFQ25NREE4ZUZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA2NjY3MTc4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0Q2QkZFNkIzQUM3OTg0RjkwQjBDQzQyNEFCRDFFRjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2ODUwMzUzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhoMXBPTmNkUXdtT0RpMGZRWnFZR2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTc5YWZiZjMtN2NkYi00MDlhLTllMjYtYTdjNzJkYzUxZmY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDE4NSxcbiAgICAgIDExLFxuICAgICAgMTY5LFxuICAgICAgNzMsXG4gICAgICAyOCxcbiAgICAgIDEzMyxcbiAgICAgIDc1LFxuICAgICAgNyxcbiAgICAgIDE0OSxcbiAgICAgIDEwNSxcbiAgICAgIDE1MCxcbiAgICAgIDE3MCxcbiAgICAgIDYwLFxuICAgICAgMTk0LFxuICAgICAgMTQzLFxuICAgICAgNDYsXG4gICAgICAxNjEsXG4gICAgICA3MixcbiAgICAgIDEwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDEyOCxcbiAgICAgIDkyLFxuICAgICAgMTU2LFxuICAgICAgMTkyLFxuICAgICAgMjExLFxuICAgICAgMTkzLFxuICAgICAgMjE4LFxuICAgICAgOCxcbiAgICAgIDE4MyxcbiAgICAgIDE1OCxcbiAgICAgIDE4LFxuICAgICAgMTAsXG4gICAgICA1NixcbiAgICAgIDE3NSxcbiAgICAgIDEwMixcbiAgICAgIDI0OSxcbiAgICAgIDEwNSxcbiAgICAgIDEyMixcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNWE1ZN0xFSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDY2NjcxNzg2Ojc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QmfCdkIjwnZCD8J2Qg/CdkIgg8J2QivCdkIjwnZCN8J2QhiDwnZCB8J2QgPCdkIvwnZCO8J2QgvCdkIdcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAg8JOGqeKBt+KBuOKBtvCThqpcIixcbiAgICBcImxpZFwiOiBcIjU3MzQyNTI3ODE1NzkyOjc4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pLRXBkTUNFS2JLdHJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV1lGZWx2bmZQaDVXNENteFAzVUJPUzJYZHF3Y0JTQ2hqUzZPSGpOVkYxYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwa09ia1FYSGU3a25DZWpUQ3BTNHU0emZuL2NtVUZtUSszUHFGNWQ2L2dtSEVvalBtdjVZRi9HRGR5OVMrOHRJSjNtZVlRZWtBaGpSY0o3aVc2OFhDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrYWxpc1dyUmJxK1JvT3hXQnk0d3FCSVhEQjVDc2Ywc0FHcGZQM1djTmVobTdjS1R3dm9GcEkvVEp2R21xT3lVMlZ0RXZWK1p4Ry80TGgyMWdsRjdCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNjY2NzE3ODY6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY4NTAzNDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGVmpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZWai5qc29uIjogIntcImtleURhdGFcIjpcImY5VFJ5NlJCY3ZMbnVETG9LSEU5eFJmR3h1YnJXQThzbkMrVkM1eUdueG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzExNTQxMjY2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY4NTAzNTMyNjdcIn0iCn0="  // PUT your SESSION_ID 


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
