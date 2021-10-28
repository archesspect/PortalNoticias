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
    }
]