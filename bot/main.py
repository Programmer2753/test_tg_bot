from aiogram import Bot, Dispatcher, types
from aiogram.utils import executor
from aiogram.types import WebAppInfo
from config import TOKEN, ADMIN_ID, SITE_URL

bot = Bot(token=TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    kb = types.InlineKeyboardMarkup()
    kb.add(types.InlineKeyboardButton("Открыть приложение", web_app=WebAppInfo(url=SITE_URL)))
    await message.answer("Открой приложение:", reply_markup=kb)

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)
