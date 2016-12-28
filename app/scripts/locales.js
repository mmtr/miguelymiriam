/* global Vue, VueI18n */

let locales = {
  es: {
    start: {
      title: 'Inicio',
      names: 'Miguel y Miriam',
      slogan: 'Historia de un viaje'
    },
    beginning: {
      title: 'Comienzos',
      content: 'Nuestra historia comienza hace {years} años. Nadie pudo imaginar la gran aventura que teníamos por delante.',
    },
    firstMoments: {
      title: 'Primeros momentos',
      content: 'Los últimos kilómetros de nuestro viejo coche nos acercaron a nuestros primeros destinos, conociéndo nuevos lugares y viviendo muchos primeros momentos juntos.',
    },
    madrid: {
      title: 'Madrid',
      content: 'Después de unos años, decidimos irnos a vivir juntos a Madrid. Entonces comenzó nuestra aventura alrededor del mundo.',
    },
    newYork: {
      title: 'Nueva York',
      content: 'Tuvimos que cruzar el charco para hacer nuestra primera parada en la ciudad que nunca duerme: Nueva York.',
    },
    paris: {
      title: 'París',
      content: 'Tras volver a Málaga, pudimos recordar nuestra infancia en París, donde también hubo un ¡SÍ! a la gran pregunta.',
    },
    london: {
      title: 'Londres',
      content: 'Desde que estuvimos viviendo unos meses en Londres, lo consideramos nuestro segundo hogar. ¡No podemos parar de volver una y otra y otra... y otra vez!',
    },
    italy: {
      title: 'Italia',
      content: 'Recorrimos Italia en coche disfrutando de increíbles rincones y deliciosa comida. <br/> ¡Mamma mía!',
    },
    edinburgh: {
      title: 'Edimburgo',
      content: 'Dijimos adiós a uno de nuestros mejores años celebrando el Hogmanay en Edimburgo.',
    },
    japan: {
      title: 'Japón',
      content: 'El futuro nos llevará a conocer nuevas culturas donde cumpliremos nuestros friki-sueños.',
    },
    celebrate: {
      title: '¡Celebrémoslo!',
      content: 'Ahora toca empezar una nueva etapa de nuestra aventura. ¿Quieres acompañarnos?<br><br>¡Te esperamos el 26 de septiembre para celebrarlo!',
    },
  },
  en: {
    start: {
      title: 'Start',
      names: 'Miguel & Miriam',
      slogan: 'Story of a journey'
    },
    beginning: {
      title: 'Beginning',
      content: 'Our story begins {years} years ago. Nobody could imagine the great adventure we had ahead.',
    },
    firstMoments: {
      title: 'First moments',
      content: 'The last kilometers of our old car brought us to our first destination, visiting new places and experiencing many first moments together.',
    },
    madrid: {
      title: 'Madrid',
      content: 'After a few years, we decided to move in together to Madrid. Then began our adventure around the world.',
    },
    newYork: {
      title: 'New York',
      content: 'We had to cross the pond to make our first stop in the city that never sleeps: New York',
    },
    paris: {
      title: 'Paris',
      content: 'After returning to Malaga, we could remember our childhood in Paris, where there was a YES! answering the big question.',
    },
    london: {
      title: 'London',
      content: 'Since we were living in London a few months, we consider it our second home. We can not stop coming back again and again and again ... and again!',
    },
    italy: {
      title: 'Italy',
      content: 'We toured Italy in car enjoying incredible corners and delicious food. <br> Mamma mia!',
    },
    edinburgh: {
      title: 'Edinburgh',
      content: 'We said goodbye to one of our best years celebrating Hogmanay in Edinburgh.',
    },
    japan: {
      title: 'Japan',
      content: 'The future will show us new cultures where we will realize our geek-dreams.',
    },
    celebrate: {
      title: 'Let\'s celebrate it!',
      content: 'Now we are starting a new stage of our adventure. Do you want to join us?<br><br>See you on 26th September to celebrate!',
    },
  }
};

let lang = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
if (lang) {
  lang = lang.split('-')[0];
}

Vue.use(VueI18n);

Vue.config.lang = lang;
Vue.config.fallbackLang = 'es';

Object.keys(locales).forEach(lang => Vue.locale(lang, locales[lang]));
