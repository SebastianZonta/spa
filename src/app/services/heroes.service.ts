import { Injectable } from "@angular/core";

@Injectable()
export class HeroesService {
    private heroes: Hero[] = [
        {
            name: "Aquaman",
            bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            image: "assets/images/aquaman.png",
            premiere: "1941-11-01",
            house: "DC",
            id: 1
        },
        {
            name: "Batman",
            bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
            image: "assets/images/batman.png",
            premiere: "1939-05-01",
            house: "DC",
            id: 2
        },
        {
            name: "Daredevil",
            bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
            image: "assets/images/daredevil.png",
            premiere: "1964-01-01",
            house: "Marvel",
            id: 3
        },
        {
            name: "Hulk",
            bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
            image: "assets/images/hulk.png",
            premiere: "1962-05-01",
            house: "Marvel",
            id: 4
        },
        {
            name: "Linterna Verde",
            bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
            image: "assets/images/linterna-verde.png",
            premiere: "1940-06-01",
            house: "DC",
            id: 5
        },
        {
            name: "Spider-Man",
            bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
            image: "assets/images/spiderman.png",
            premiere: "1962-08-01",
            house: "Marvel",
            id: 6
        },
        {
            name: "Wolverine",
            bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
            image: "assets/images/wolverine.png",
            premiere: "1974-11-01",
            house: "Marvel",
            id: 7
        }
    ];

    constructor() {
    }

    getHeroes(): Hero[] {
        return this.heroes;
    }

    getHeroById(heroeId: number): Hero {
        return this.heroes.find(hero => hero.id === heroeId) ?? new Hero();
    }

    searchHeroe(pattern: string): Hero[] {
        if (pattern === '')
            return this.getHeroes();

        let heroesArry: Hero[] = [];

        for (let hero of this.heroes) {
            var heroName = hero.name.toLowerCase();
            if (heroName.indexOf(pattern.toLowerCase()) >= 0)
                heroesArry.push(hero);
        }

        return heroesArry;
    }
}

interface IHero {
    name: string;
    bio: string;
    image: string;
    premiere: string;
    house: string;
    id: number;
}

export class Hero implements IHero {
    constructor(public name: string = '', public bio: string = '', public image: string = '', public premiere: string = '', public house: string = '', public id: number = 0) {
    }
}