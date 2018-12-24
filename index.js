const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '772367049:AAGuxZ4MAzSD9B5TBP2eNXy-QKqyUpRwCZE'
const bot = new TelegramBot(TOKEN, {polling: true});
bot.on('message', msg=>{
    bot.sendMessage(msg.chat_id, `Hello ${msg.from.first_name`)
})