class Generate {
    carNames: string[];
    carModels: string[];

    constructor() {
        this.carNames = ['Renault', 'Mercedes', 'Geely', 'Lada', 'Peugeot', 'BMW', 'Citroen', 'Opel', 'Tesla', 'Audi'];
        this.carModels = ['Granta', 'C5', 'Golf', 'S', '207', 'X7', 'Atlas', 'Astra', 'Model S', 'A6'];
    }

    getRandomName(): string {
        const COUNT_CARS = 9;
        return `${this.carNames[Math.round(Math.random() * COUNT_CARS)]} ${
            this.carModels[Math.round(Math.random() * COUNT_CARS)]
        }`;
    }

    getRandomColor(): string {
        const items = '0123456789ABCDEF';
        let color = '#';
        const COUNT_CHARS_IN_RGB = 6;
        const COUNT_COLOR_RANDOM = 16;
        for (let index = 0; index < COUNT_CHARS_IN_RGB; index++) {
            color += items[Math.floor(Math.random() * COUNT_COLOR_RANDOM)];
        }
        return color;
    }
}

export default Generate;
