class SelectPages {
    constructor() {
        this.setSelect();
    }
    setSelect() {
        const btnGarage: HTMLElement = document.querySelector('.btn-garage') as HTMLElement;
        const btnWinner: HTMLElement = document.querySelector('.btn-winner') as HTMLElement;
        const garage: HTMLElement = document.querySelector('.section-garage') as HTMLElement;
        const winner: HTMLElement = document.querySelector('.section-winner') as HTMLElement;
        btnGarage?.addEventListener('click', () => {
            if (garage) garage.style.display = 'block';
            if (winner) winner.style.display = 'none';
        });
        btnWinner?.addEventListener('click', () => {
            if (garage) garage.style.display = 'none';
            if (winner) winner.style.display = 'block';
        });
    }
}

export default SelectPages;
