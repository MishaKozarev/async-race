class SelectPages {
    constructor() {
        this.setSelect();
    }
    setSelect() {
        const btnGarage: HTMLElement | null = document.querySelector('.btn-garage');
        const btnWinner: HTMLElement | null = document.querySelector('.btn-winner');
        const garage: HTMLElement | null = document.querySelector('.section-garage');
        const winner: HTMLElement | null = document.querySelector('.section-winner');
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
