class SelectPages {
    setSelect() {
        const btnGarage: HTMLElement | null = document.querySelector('.btn-garage');
        const btnWinner: HTMLElement | null = document.querySelector('.btn-winner');
        btnGarage?.addEventListener('click', () => {
            btnGarage.classList.add('select');
            btnWinner?.classList.remove('select');
        });
        btnWinner?.addEventListener('click', () => {
            btnWinner.classList.add('select');
            btnGarage?.classList.remove('select');
        });
        console.log(btnGarage);
    }
}

export default SelectPages;
