class Generate {
    carNames: string[];
    carModels: string[];

    constructor() {
        this.carNames = ['Mazda', 'Citroen', 'VW', 'Ford', 'Peugeot', 'BMW', 'Mercedes', 'Opel', 'Tesla', 'Audi'];
        this.carModels = ['6', 'C5', 'Golf', 'Fiesta', '406', 'X1', 'AMG', 'Omega', 'Model S', 'A8'];
    }

    getRandomName(): string {
        return `${this.carNames[Math.round(Math.random() * 9)]} ${this.carModels[Math.round(Math.random() * 9)]}`;
    }

    getRandomColor(): string {
        const chars = '0123456789ABCDEF';
        let myColor = '#';
        for (let index = 0; index < 6; index++) {
            myColor += chars[Math.floor(Math.random() * 16)];
        }
        return myColor;
    }
}

export default Generate;
