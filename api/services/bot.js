var TelegramBot=require('node-telegram-bot-api');
var token='Aqui_va_tu_toke';

var bot= new TelegramBot(
token, {
	polling: true
});

bot.getMe().then(function(me){
	console.log('Hola mi nombre es:'+ me.username);

});

bot.onText(/^\/yo soy (.+)$/, function (msg, match){
var name=match[1];
console.log(msg);
bot.sendMessage(msg.chat.id, `¡hola ${name} !`).then(function(){
	console.log(`Hola  ${name}`);

});

});

bot.onText(/\/imagen/, function (msg){

console.log(msg);
photo='assets/images/simpsons.jpg';
bot.sendPhoto(msg.chat.id, photo).then(function(){
	console.log(`Obteniendo imagen`);

});

});

bot.onText(/\/audio/, function (msg){

console.log(msg);
auido='./assets/cancion.mp3';
bot.sendAudio(msg.chat.id, auido).then(function(){
	console.log(`Obteniendo auido`);

});

});


bot.onText(/\/ubicacion/, function (msg){
var chatId=msg.chat.id;
var latitud='20.080851';
var longitud='-98.080851';

bot.sendLocation(chatId, latitud,longitud).then(function(){
	console.log(`Obteniendo ubicacion`);

});

});