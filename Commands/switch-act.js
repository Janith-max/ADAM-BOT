/**
========================================================
     █▀ █▀▀ █▀▀ ▀█▀ █▀█ █▀█ ▄▄ ▀█ ░ █▀█           |•|
     ▄█ ██▄ █▄▄ ░█░ █▄█ █▀▄ ░░ █▄ ▄ █▄█           |•|
========================================================
 Copyright (C) 2022.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : Secktor-2.0                                                                    
 * @author : Slasher-Official <https://github.com/X-S-L-A-S-H-E-R>   
 * @description : Secktor-2.0 ,A Multi-functional whatsapp bot.       
 * @version 2.0.1                                                                                             
 ========================================================
 **/

const { cmd,sck,sck1, getAdmin, tlang, prefix } = require('../lib')
const Config = require('../config')
    //---------------------------------------------------------------------------
cmd({
        pattern: "act",
        desc: "Switches for varios works.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        //-----------------------------------------
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)
        const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        //-----------------------------------------
        if (!citel.isGroup) return citel.reply("This command is only for group")
        if (!text) return citel.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw\n4-bot`)
        if (!isAdmins) return citel.reply("❌ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ᴀᴅᴍɪɴꜱ")
        switch (text.split(" ")[0]) {
            case 'antilink':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antilink: "true" })
                            .save()
                        return citel.reply(' ᴀɴᴛɪʟɪɴᴋ ᴇɴᴀʙʟᴇᴅ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ')
                    } else {
                        if (checkgroup.antilink == "true") return citel.reply("Antilink was alredy  enabled here.")
                        await sck.updateOne({ id: citel.chat }, { antilink: "true" })
                        citel.reply('Enabled antilink in current chat.')
                        return
                    }
                }
                break
          
                      case 'economy':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, economy: "true" })
                            .save()
                        return citel.reply(' ᴇᴄᴏɴᴏᴍʏ ᴇɴᴀʙʟᴇᴅ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ')
                    } else {
                        if (checkgroup.economy == "true") return citel.reply("Economy was alredy enabled.")
                        await sck.updateOne({ id: citel.chat }, { economy: "true" })
                        citel.reply('Economy enabled in current chat.')
                        return
                    }
                }
                break
            case 'events':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, events: "true" })
                            .save()
                        return citel.reply("ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴇɴᴀʙʟᴇᴅ *ᴇᴠᴇɴᴛꜱ*")
                    } else {
                        if (checkgroup.events == "true") return citel.reply("*Events* are already enabled")
                        await sck.updateOne({ id: citel.chat }, { events: "true" })
                        return citel.reply("Successfully Enabled *Events*")
                    }
                }
                break
            case 'nsfw':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, nsfw: "true" })
                            .save()
                        return citel.reply("ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴇɴᴀʙʟᴇᴅ *ɴꜱꜰᴡ*")
                    } else {
                        if (checkgroup.nsfw == "true") return citel.reply("*NSFW* is already enabled")
                        await sck.updateOne({ id: citel.chat }, { nsfw: "true" })
                        citel.reply("ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴇɴᴀʙʟᴇᴅ *ɴꜱꜰᴡ*")
                        return
                    }
                }
                break
            default:
                {
                    citel.reply("Please provide me term like.\n1-events\n2-antilink\n3-nsfw\n4-economy")
                }
        }
    }
)
