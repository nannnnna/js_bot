const { Telegraf } = require('telegraf');

const bot = new Telegraf('6323438195:AAGpAbUPZJSxsOBnTRvzP-dOyKTH90Q6o-o');

bot.command('help', (ctx) => {
    ctx.reply(`
    Бот может здороваться на разных языках.
    Список поддерживаемых приветствий:
    - привет - русский
    - hello - английский
    - hola - испанский
    `)
});

bot.hears('привет', (ctx) => ctx.reply('привет'));
bot.hears('hello', (ctx) => ctx.reply('hello'));
bot.hears('hola', (ctx) => ctx.reply('hola'));

bot.on('text', (ctx) => ctx.reply(`Приветствие "${ctx.update.message.text}" не поддерживается.`))

bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));