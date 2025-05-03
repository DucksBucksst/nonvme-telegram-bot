const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const webAppUrl = 'https://nonvme.vercel.app';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Нажми кнопку ниже, чтобы открыть NoNvme:', {
    reply_markup: {
      inline_keyboard: [[
        { text: 'Открыть NoNvme', web_app: { url: webAppUrl } }
      ]]
    }
  });
});
