const discord = require("discord.js")

const client = new discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const config = require('./config')
const editor = require('./editor')
client.on('ready', () => {
    console.log(`${client.guilds.cache.size}`)
})
const fetch = require('node-fetch')
client.on('messageReactionAdd', async(reaction_orig, user) => {
const message = !reaction_orig.message.author ? await reaction_orig.message.fetch() : reaction_orig.message;
const embed = new discord.MessageEmbed()
.setDescription(`
تم اضافة رياكشن من قبل : 
<@${user.id}>
صاحب الرسالة : 
<@${message.author.id}>
الرياكشن : 

<a:${reaction_orig.emoji.name}:${reaction_orig.emoji.id}>

روم الي صار فيه الرياكشن : 

<#${message.channel.id}>
 رابط الرسالة  :

 https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}

`)

.setImage(`https://cdn.discordapp.com/emojis/${reaction_orig.emoji.id}?size=96&quality=lossless`)
const embed2 = new discord.MessageEmbed()
    .setDescription(`
    تم اضافة رياكشن من قبل : 
<@${user.id}>
صاحب الرسالة : 
<@${message.author.id}>
الرياكشن : 

${reaction_orig.emoji.name}
<#${message.channel.id}>
 رابط الرسالة  :

 https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}

    `)
    

const chh = client.channels.cache.get('940696641864871976')
if(reaction_orig.emoji.id == null) return chh.send(embed2).catch(err => console.log(err))

chh.send(`https://cdn.discordapp.com/emojis/${reaction_orig.emoji.id}?size=96&quality=lossless`,embed).catch(err => console.log(err))


})
client.on('messageReactionRemove', async(reaction_orig, user) => {
    const message = !reaction_orig.message.author ? await reaction_orig.message.fetch() : reaction_orig.message;
    const embed = new discord.MessageEmbed()
    .setDescription(`

    تم ازالة رياكشن من قبل : 
    <@${user.id}>
    صاحب الرسالة : 
    <@${message.author.id}>
    الرياكشن : 
    
    <a:${reaction_orig.emoji.name}:${reaction_orig.emoji.id}>
    
    روم الي صار فيه الرياكشن : 
    
    <#${message.channel.id}>
     رابط الرسالة  :
 
 https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}

    
    `)
    .setImage(`https://cdn.discordapp.com/emojis/${reaction_orig.emoji.id}?size=96&quality=lossless`)
    const embed2 = new discord.MessageEmbed()
    .setDescription(`
    تم ازالة رياكشن من قبل : 
<@${user.id}>
صاحب الرسالة : 
<@${message.author.id}>
الرياكشن : 

${reaction_orig.emoji.name}
<#${message.channel.id}>
 رابط الرسالة  :

 https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}


    `)
    const chh = client.channels.cache.get('940695735253491752')
    if(reaction_orig.emoji.id == null) return chh.send(embed2).catch(err => console.log(err))

    chh.send(`https://cdn.discordapp.com/emojis/${reaction_orig.emoji.id}?size=96&quality=lossless`,embed)
