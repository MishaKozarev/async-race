import View from './view/view';
import SelectPages from './control/select-pages';

class App {
    view: View;
    selectPage: SelectPages;
    constructor() {
        this.view = new View();
        this.selectPage = new SelectPages();
    }
    start(): void {
        this.view.createPage();
        this.addTrack();
        this.selectPage.setSelect();
    }

    addTrack() {
        const create: HTMLElement | null = document.querySelector('.btn-create');
        if (create)
            create.addEventListener('click', () => {
                const inputColorCreate: HTMLInputElement | null = document.querySelector('.create__input-color');
                const inputTextCreate: HTMLInputElement | null = document.querySelector('.create__input-text');
                const color: string | undefined = inputColorCreate?.value;
                const text: string | undefined = inputTextCreate?.value;
                console.log(color);
                this.view.createTrack(`${color}`, `${text}`, '');
                this.go();
            });
    }

    go() {
        const track: HTMLElement | null = document.querySelector('.track');
        const car: HTMLElement | null = document.querySelector('.car-image');
        console.log(track, car);
        track?.addEventListener('click', (event) => {
            if ((event.target as HTMLElement).classList.contains('btn-start')) {
                car?.classList.add('go');
            }
        });
    }
}
export default App;
