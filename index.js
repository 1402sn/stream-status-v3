const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const express = require('express');
const moment = require('moment');
const readline = require('readline-sync');
const num = parseFloat((Math.random() * 0.2 + 0.1 + Number.EPSILON).toFixed(1));
const operator = Math.random() < 0.3 ? '+' : '-';
const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'));
app.listen(port, () =>
  console.log(`Your app is listening at http://localhost:${port}`)
);

const client = new Client({
  checkUpdate: false
});

client.on('ready', async () => {
  if (global.dataWeather && global.dataWeather.current_weather) {
    global.temp = global.dataWeather.current_weather.temperature;
    global.wind = global.dataWeather.current_weather.windspeed;
  } else {
    global.temp = 25;
    global.wind = 3.5;
  }

  setInterval(() => {
    const created = moment().format('YYYY-MM-DD HH:mm:ss ');

    const change = ['https://media.discordapp.net/attachments/1116694463658598412/1201399397582376960/f8f1d39b8527f261926ea4d6ca88c43f.gif?ex=65ee9761&is=65dc2261&hm=73dc7e27b3bd90b9fd818e6f2d215582ab8481c28c7cfa5453bcc3aabc0026ec&=',
                    'https://media.discordapp.net/attachments/1116694463658598412/1201399383355314266/blue-lock-isagi.gif?ex=65ee975d&is=65dc225d&hm=bba587c38bcb3fdac0934485317e0a8d4123facc404c05354a218ba791f19ed5&=',
                    'https://media.discordapp.net/attachments/1116694463658598412/1201399329890521138/gojo-six-eyes.gif?ex=65ee9751&is=65dc2251&hm=2d16c799f905ec860a0970a42675bed3552be9a155565f0ac3c891a40ef5dc77&=',
                    'https://media.discordapp.net/attachments/1116694463658598412/1201399307279015936/mob-psycho100-mob-psycho.gif?ex=65ee974b&is=65dc224b&hm=9ba8992c530bf14d525c9f82fecb45402a8fb138b504b0f03236fd82551a14f5&=',
                   ];
    const poop = ['https://media.discordapp.net/attachments/889976848581287946/1192463032610193610/a_f3bcc76b8af98fb87ab30d8d82376ac0.gif?ex=65e9c43d&is=65d74f3d&hm=41dfdde129cfc0d8b2b2f3db3d010cebf19747865f64ebd6f936dd75dd61d1d9&=&width=350&height=350'];
    const change2 = ['มีบอทเจ๋งๆ ', 'มีเม็ดม่วง', 'AAAA', 'Love na'];
    const change3 = ['⏰', '⏰', '⏰', '⏰'];
    const iooi = ['୧₊˚❤️・Itzlevy ・꒱', '〝📦〞Stream Twitch Free', '〝📦〞Free access 200 room+'];
    const iiio = ['https://discord.gg/aqt6thEVV7'];
    const yyyt = ['⏰₊꒷ Join discord ˳ʚ', '⏰₊꒷ Join discord ˳ʚ', '⏰₊꒷ Join discord ˳ʚ'];
    const ddds = ['https://discord.gg/aqt6thEVV7'];

    // Randomize data
    const tyyy = yyyt[Math.floor(Math.random() * yyyt.length)];
    const sddd = ddds[Math.floor(Math.random() * ddds.length)];
    const oooi = iiio[Math.floor(Math.random() * iiio.length)];
    const ioii = iooi[Math.floor(Math.random() * iooi.length)];
    const popp = poop[Math.floor(Math.random() * poop.length)];
    const ssss = change[Math.floor(Math.random() * change.length)];
    const dwada = change2[Math.floor(Math.random() * change2.length)];
    const ap = change3[Math.floor(Math.random() * change3.length)];


    const r = new Discord.RichPresence()
      .setApplicationId('928000104378548224')
      .setType('STREAMING')
      .setURL('https://youtu.be/xTZk2G9-6co?si=xpE-kzJivOITFzmQ')
      .setState(`${dwada}`)
      .setName(`levy`)
      .setDetails(`${ap}${getTime()} ${moment().format('- DD/MM/YYYY')}`)
      .setAssetsLargeImage(`${ssss}`)
      .setAssetsLargeText(`🌡️ ${operator === '+' ? (global.temp + num).toFixed(1) : (global.temp - num).toFixed(1)} °C | 🍃 ${operator === '+' ? (global.wind + num).toFixed(1) : (global.wind - num).toFixed(1)} m/s`)
      .addButton(`${ioii}`, `${oooi}`)
      .addButton(`${tyyy}`, `${sddd}`)
      .setAssetsSmallText(`ping : ${Math.round(client.ws.ping)}`)
      .setStartTimestamp(Date.now())
      .setEndTimestamp(Date.now());

    client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline
    client.user.setActivity(r);
  }, 2 * 1000);

  console.log(`${client.user.username} Is Ready!`);
});


function getDate() {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }).split(' ')[0].replaceAll(',', '');
}

function getTime() {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }).split(' ')[1].replaceAll(',', '');
}

// Login
client.login(process.env['token']);
