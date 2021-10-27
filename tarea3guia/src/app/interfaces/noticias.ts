export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
}

export let ListaNoticias:Array<Noticias>=[
{ id:1,
  idCategoria:1,
  titulo:"Descubren la ubicación exacta de la isla de ‘El juego del calamar’ a través de Google Maps",
  autor:"América Digital LLC",
  fecha:Date().toString(),
  imagen:"noticia1.jpg",
  texto: "Un internauta utilizó las imágenes satelitales para establecer el lugar en donde se desarrolla gran parte de la exitosa serie de 'El juego del calamar'..."
},

{ id:2,
    idCategoria:2,
    titulo:"Facebook: qué es el metaverso, el nuevo universo digital que va a transformar nuestras experiencias online",
    autor:"BBC News Mundo",
    fecha:Date().toString(),
    imagen:"noticia2.jpg",
    texto: "Facebook acaba de anunciar que contratará a 10.000 personas en Europa para desarrollar el ‘metaverso’.¿Pero de qué trata exactamente este concepto..."
  },
  { id:3,
    idCategoria:3,
    titulo:"Con dos Top 100: así es la lista de la Copa LP Chile 2021",
    autor:"As.com",
    fecha:Date().toString(),
    imagen:"noticia3.jpg",
    texto: "Una de las Top 100 es Beatriz Haddad Maia, quien hace unas semanas llegó a octavos de Indian Wells, donde derrotó a Karolina Pliskova..."
  },
  { id:4,
    idCategoria:4,
    titulo:"La economía de China se podría estar 'apagando' más rápido de lo que se cree",
    autor:"elEconomista.es",
    fecha:Date().toString(),
    imagen:"noticia4.jpg",
    texto: "La economía de China podría estar perdiendo impulso más rápido de lo que los inversores creen. Las políticas 'largoplacistas' del..."
  },
  { id:5,
    idCategoria:5,
    titulo:"Emisiones y cambio climático, emergencia internacional por COVID-19, Israel",
    autor:"Sergio Rodriguez",
    fecha:Date().toString(),
    imagen:"noticia5.jpg",
    texto: "El planeta se encamina a un “catastrófico aumento” de 2,7 °C porque los recortes de emisiones son..."
  },
  { id:6,
    idCategoria:6,
    titulo:"Choque de superpotencias, misiles en Cuba y 13 días de extrema tensión: la Crisis de octubre que casi lleva al mundo al invierno nuclear",
    autor:"Juan Carlos López",
    fecha:Date().toString(),
    imagen:"noticia6.jpg",
    texto: "El 28 de octubre de 1962 el mundo evitó una guerra nuclear.Ese domingo, hace 59 años, el... "
  },
];
