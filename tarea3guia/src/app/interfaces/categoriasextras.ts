export interface Categoriasextras {
    id:number;
    titulo:string;
    color: string;
}

export let ListaCategorias:Array<Categoriasextras>=[
    { id:1,
      titulo: "Entretenimiento",
      color: "Green"
    },
    { id:2,
        titulo: "Tecnología",
        color: "red"
    },
    { id:3,
        titulo: "Deportes",
        color: "DARK-RED"
    },
    { id:4,
        titulo: "Economía",
        color: "PURPLE"
    },
    { id:5,
        titulo: "Salud",
        color: "DARKBLUE"
    },
    { id:6,
        titulo: "Mundo",
        color: "blue"
    }
]