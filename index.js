const { Telegraf } = require('telegraf')
const { token } = require('./config.js')
const bot = new Telegraf(token)
const fetch = require('node-fetch');

bot.start(ctx => ctx.reply("Assalomualaykum. Men sizga namoz vaqtlarini ko'rishda yordam beraman buning uchun kerakli shaharni tanlashingiz kifoya.",
    {reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'Toshkent',
                    callback_data: "Tashkent"
                },
                {
                    text: 'Samarqand',
                    callback_data: "Samarkand"
                }
            ],
            [
                {
                    text: 'Xiva',
                    callback_data: "Khiva"
                },
                {
                    text: 'Qo`qon',
                    callback_data: "Kokand"
                }
            ],
             [   {
                    text: 'Termiz',
                    callback_data: "Termez"
                },
                {
                    text: 'Andijon',
                    callback_data: "Andijan"
                }],
            [    {
                    text: 'Buxoro',
                    callback_data: "Bukhara"
                },
                {
                    text: 'Jizzax',
                    callback_data: "Jizzakh"
                }],
            [    
                {
                    text: 'Farg`ona',
                    callback_data: "Fergana"
                },
                {
                    text: 'Namangan',
                    callback_data: "Namangan"
                }],
            [    
                {
                    text: 'Navoiy',
                    callback_data: "Navoi"
                },
                {
                    text: 'Sirdaryo',
                    callback_data: "Sirdaryo"
                }],
            [    
                {
                    text: 'Nukus',
                    callback_data: "Nukus"
                }]
            
        ]
    }}
))




bot.on('callback_query', ctx => {
    let city = ctx.update.callback_query.data
    
    fetch(`https://api.pray.zone/v2/times/today.json?city=${city}`)
    .then(res => res.json())
    .then(text => {
        console.log()
        ctx.reply(`
<b>Bugun: ${text.results.datetime[0].date.gregorian}</b>
<b>Bomdod</b>: ${text.results.datetime[0].times.Fajr}
<b>Peshin</b>: ${text.results.datetime[0].times.Dhuhr}
<b>Asr</b>: ${text.results.datetime[0].times.Asr}
<b>Shom</b>: ${text.results.datetime[0].times.Maghrib}
<b>Hufton</b>: ${text.results.datetime[0].times.Isha}
            `,{
                parse_mode: 'HTML',
            })
    })
})


bot.launch()    