export interface Categorias {
    id:number;
    titulo:string;
    color: string;
}

export let ListaCategorias:Array<Categorias>=[
    { id:1,
      titulo: "Entretenimiento",
      color: "green"
    },
    { id:2,
        titulo: "Tecnología",
        color: "red"
    },
    { id:3,
        titulo: "Deportes",
        color: "darkred"
    },
    { id:4,
        titulo: "Economía",
        color: "violet"
    },
    { id:5,
        titulo: "Salud",
        color: "darkblue"
    },
    { id:6,
        titulo: "Mundo",
        color: "blue"
    }
]


