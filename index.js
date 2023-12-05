const { Telegraf } = require('telegraf');

const bot = new Telegraf('6323438195:AAGpAbUPZJSxsOBnTRvzP-dOyKTH90Q6o-o');

bot.use(async (ctx) => {
    await ctx.reply(JSON.stringify(ctx.update, null, 2));
});

bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));