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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


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
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923066671786,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_51_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDksXG4gICAgICAgIDcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDkzLFxuICAgICAgICA4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk0LFxuICAgICAgICA0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MixcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM5LFxuICAgICAgICA5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MixcbiAgICAgICAgMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwLFxuICAgICAgICA3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU1LFxuICAgICAgICA5MSxcbiAgICAgICAgNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJMRG1tYmdpY1hXRDNSWmoyVzlhb2pqWjdnZzMydXJSUlIzemx1RHFVa1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDY2NjcxNzg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4QjkxMDYxQ0I3NEZBN0EyREM4RDY0OThBQTY0OTQ2MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgyNjU4ODRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX21wOGN4YWZUd1dRc1JRR0s3TkhXQVwiLFxuICBcInBob25lSWRcIjogXCIyOWY4NzZlYy1hYjkyLTRkODMtYTdkOS0yZTdlYjI3OWY2YTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAxOTgsXG4gICAgICAxMjQsXG4gICAgICA5MixcbiAgICAgIDEzNyxcbiAgICAgIDYwLFxuICAgICAgMTk5LFxuICAgICAgNzIsXG4gICAgICAxMixcbiAgICAgIDE4NixcbiAgICAgIDU0LFxuICAgICAgODQsXG4gICAgICAxMzgsXG4gICAgICAxNDIsXG4gICAgICAyOSxcbiAgICAgIDExNixcbiAgICAgIDIxMixcbiAgICAgIDg2LFxuICAgICAgNjEsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAxNjYsXG4gICAgICAyNDAsXG4gICAgICAxMTIsXG4gICAgICAyMDUsXG4gICAgICA2OSxcbiAgICAgIDExMSxcbiAgICAgIDE4NSxcbiAgICAgIDIwLFxuICAgICAgMjEyLFxuICAgICAgMTM0LFxuICAgICAgMzksXG4gICAgICA3NixcbiAgICAgIDIwOSxcbiAgICAgIDM0LFxuICAgICAgOTMsXG4gICAgICA3NyxcbiAgICAgIDYwLFxuICAgICAgMjE2LFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZIU0hLSEsyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNjY2NzE3ODY6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCZ8J2QiPCdkIPwnZCD8J2QiCDwnZCK8J2QiPCdkI3wnZCGIPCdkIHwnZCA8J2Qi/CdkI7wnZCC8J2Qh1xcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICDwk4ap4oG34oG44oG28JOGqlwiLFxuICAgIFwibGlkXCI6IFwiNTczNDI1Mjc4MTU3OTI6OTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnlFcGRNQ0VJWDlqTGdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXWUZlbHZuZlBoNVc0Q214UDNVQk9TMlhkcXdjQlNDaGpTNk9Iak5WRjFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInN6ZktTT1JXOHJwdXdSc1ErOVpwc20wSCtLODdMRDd4Z2lDY254TGZvcnQrdjA1dnpITnc5ei9kUEtja1NqdWU2QSszQlE0amgyL2xPUkVyckNkWkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhLWnltV1Uvbnp3TE8zZTFkQlplYzhmVnJoUEFZTjlHN3hZVkhOYUk5V0JBVTFIcXdtWnloZnhBWFFXMkhUd3RDenRCYWFGSmpkSm1jUTRLVkFVU2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2NjY3MTc4Njo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODI2NTg2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxWc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFZzLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ZIDDI KING",
  ownername:process.env.OWNER_NAME|| "ZIDDI KING BALOCH",


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
