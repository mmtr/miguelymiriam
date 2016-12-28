"use strict";var Sparkle=function(){var e={totalImages:10,v:{start:null,end:null},w:{start:null,end:null},image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAC5UlEQVR42qxVPWgVQRD+Zu7uPTF2xtIidhZiJwqKYONPbNKoEAI2dlqoEIONhSCCbWwsRQMJAUlMUokKKsYiYGdvZ0QwD4Pm3e2us393+95LYuOEebO52/32m5lv9wiJvQRGWszjmaFDGfMGEzoMfnuq2noT56wArX1cXK3InFAwB5Q2w8roL/JqfhRYjvPI/hiJsuB6QTyZEWc5ESSC5bWAyy+tadBd2XBYkXqojTmoZZUyBpXR4j4KznIF3B4DOg54CfyoRRjPBcx6JsA2skQLTp7Elnghy1mAIWwdoLBF6cC120js3UXgMi0Ah/cQvxIgKgJwZJxFYGrK5UBr4ACqG3DjKzCRt4juCADljmX0hrn1yNkus052qfEjbb3OTN4Y+xSTuTw44tl5z3t8EFg5Tg2o64MJ0T1z5RjijOm7bxLVDCNzW5qCMhTMKPqyiPX3par7EBXRySWPdc5QT+JQ35S5VYa2K236xjOlWHsTpGXVYzywhB8szN6TA4XbmcOYE/aWdZawq3Xaw7OH8RLnupyx1GM6fvcmtf40ja9h6H4zdv30UzqbwAKfBH7JwmfNQiQL4XTaDRq1ro1vnfszCNGqxY8Fa+4S8MdmjbzKn8jbjQimHUCj0+iq9rAJejeScUfa9dhiOuBj2FxXhKkImB5VD6pq8CoekPqg6JqIbHD/HPCtBrZ2vPt7QdJZVPCT4/kvdXABr8LpqvrZe32vylGeiXicdrPsZlMy+WuVlKEbvEzuhGqQ+U8p5S1qWjSol9V2e0TEtSinaT9HgYZGxRtNJTeabFbK/1cuAB/7JDdon4q9RwVqXtIZqi+f0PWGZV2Sm+eB2W20vL19yNunJTy1V2XUrB5gjelR6Ac7HJKd7XXWGmOYaXtqo1Y9sGvainwxrqV1TY13Az6jui+6Rt0rtWpkJ2OR1mdBu7ET6D8ZR5MP2YQg2JQziWvy+Rm3nx/8DxPws0vA87mkobvZXwEGAEu4AuZgukO3AAAAAElFTkSuQmCC"},t=null,a=[],n=!1,o=function(e){r(e),i(e),setTimeout(u,0),$(window).on("resize",function(){n=!1,r()})},r=function(a){"undefined"!=typeof a?t=$(a):null===t&&(t=$("body > div").first());var n=t.width(),o=t.height();e.w.start=0,e.w.end=n,e.v.start=-60,e.v.end=o+15},i=function(t){for(var a=0;a<e.totalImages;a++)s(t,a)},s=function(t,n){var o=document.createElement("div");o.id="sparkle"+n;var r=l();o.style.cssText="position:absolute;z:index:5;width:15px;height:15px;left:"+r.x+"px;top:"+r.y+"px;opacity:1";var i=document.createElement("img");i.src=e.image,o.appendChild(i),$(t).append(o,document.body.lastChild),a.push(o)},l=function(){var t={x:null,y:null};return t.x=Math.floor(e.w.start+Math.random()*(e.w.end-e.w.start)),t.y=Math.floor(e.v.start+Math.random()*(e.v.end-e.v.start)),t},u=function(){var e,t=a.length;for(e=0;e<t;e++)d(a[e])},d=function c(e){var t=500+500*Math.random();$(e).animate({opacity:0},t,function(){if(n!==!0){var t=l();e.style.cssText="z-index:5;position:absolute;width:15px;height:15px;left:"+t.x+"px;top:"+t.y+"px;opacity:1",c(e)}})};return{init:o}},locales={es:{start:{title:"Inicio",names:"Miguel y Miriam",slogan:"Historia de un viaje"},beginning:{title:"Comienzos",content:"Nuestra historia comienza hace {years} años. Nadie pudo imaginar la gran aventura que teníamos por delante."},firstMoments:{title:"Primeros momentos",content:"Los últimos kilómetros de nuestro viejo coche nos acercaron a nuestros primeros destinos, conociéndo nuevos lugares y viviendo muchos primeros momentos juntos."},madrid:{title:"Madrid",content:"Después de unos años, decidimos irnos a vivir juntos a Madrid. Entonces comenzó nuestra aventura alrededor del mundo."},newYork:{title:"Nueva York",content:"Tuvimos que cruzar el charco para hacer nuestra primera parada en la ciudad que nunca duerme: Nueva York."},paris:{title:"París",content:"Tras volver a Málaga, pudimos recordar nuestra infancia en París, donde también hubo un ¡SÍ! a la gran pregunta."},london:{title:"Londres",content:"Desde que estuvimos viviendo unos meses en Londres, lo consideramos nuestro segundo hogar. ¡No podemos parar de volver una y otra y otra... y otra vez!"},italy:{title:"Italia",content:"Recorrimos Italia en coche disfrutando de increíbles rincones y deliciosa comida. <br/> ¡Mamma mía!"},edinburgh:{title:"Edimburgo",content:"Dijimos adiós a uno de nuestros mejores años celebrando el Hogmanay en Edimburgo."},japan:{title:"Japón",content:"El futuro nos llevará a conocer nuevas culturas donde cumpliremos nuestros friki-sueños."},celebrate:{title:"¡Celebrémoslo!",content:"Ahora toca empezar una nueva etapa de nuestra aventura. ¿Quieres acompañarnos?<br><br>¡Te esperamos el 26 de septiembre para celebrarlo!"}},en:{start:{title:"Start",names:"Miguel & Miriam",slogan:"Story of a journey"},beginning:{title:"Beginning",content:"Our story begins {years} years ago. Nobody could imagine the great adventure we had ahead."},firstMoments:{title:"First moments",content:"The last kilometers of our old car brought us to our first destination, visiting new places and experiencing many first moments together."},madrid:{title:"Madrid",content:"After a few years, we decided to move in together to Madrid. Then began our adventure around the world."},newYork:{title:"New York",content:"We had to cross the pond to make our first stop in the city that never sleeps: New York"},paris:{title:"Paris",content:"After returning to Malaga, we could remember our childhood in Paris, where there was a YES! answering the big question."},london:{title:"London",content:"Since we were living in London a few months, we consider it our second home. We can not stop coming back again and again and again ... and again!"},italy:{title:"Italy",content:"We toured Italy in car enjoying incredible corners and delicious food. <br> Mamma mia!"},edinburgh:{title:"Edinburgh",content:"We said goodbye to one of our best years celebrating Hogmanay in Edinburgh."},japan:{title:"Japan",content:"The future will show us new cultures where we will realize our geek-dreams."},celebrate:{title:"Let's celebrate it!",content:"Now we are starting a new stage of our adventure. Do you want to join us?<br><br>See you on 26th September to celebrate!"}}},lang=navigator.languages?navigator.languages[0]:navigator.language||navigator.userLanguage;lang&&(lang=lang.split("-")[0]),Vue.use(VueI18n),Vue.config.lang=lang,Vue.config.fallbackLang="es",Object.keys(locales).forEach(function(e){return Vue.locale(e,locales[e])});var app=new Vue({el:".js-app",data:{years:(new Date).getFullYear()-2005},methods:{scroll:function(e){e.preventDefault(),$(":focus").blur();var t=$($(e.currentTarget).attr("href"));$("html, body").animate({scrollTop:t.offset().top},1e3)},onSlideOut:function(){$(".slide.active").removeClass("active")},onSlideIn:function(e){e.addClass("active")},message:function(e){return this.$t(e)}},mounted:function(){var e=this;$('[data-toggle="tooltip"]').tooltip(),$("body").scrollspy({target:".navbar",offset:$(window).height()/2}),$(".navbar").on("activate.bs.scrollspy",function(){e.onSlideOut(),e.onSlideIn($($(".navbar .nav .active a").attr("href")))});var t=new Sparkle;t.init(".highlight")}});