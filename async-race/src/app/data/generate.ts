class Generate {
    carNames: string[];
    carModels: string[];

    constructor() {
        this.carNames = ['Renault', 'Mercedes', 'Geely', 'Lada', 'Peugeot', 'BMW', 'Citroen', 'Opel', 'Tesla', 'Audi'];
        this.carModels = ['Granta', 'C5', 'Golf', 'S', '207', 'X7', 'Atlas', 'Astra', 'Model S', 'A6'];
    }

    getRandomName(): string {
        return `${this.carNames[Math.round(Math.random() * 9)]} ${this.carModels[Math.round(Math.random() * 9)]}`;
    }

    getRandomColor(): string {
        const items = '0123456789ABCDEF';
        let color = '#';
        for (let index = 0; index < 6; index++) {
            color += items[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

export default Generate;
