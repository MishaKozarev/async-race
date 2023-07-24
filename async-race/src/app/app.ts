import View from './view/view';
import SelectPages from './control/select-pages';
import RequestsServer from './control/requestsServer';
import changeData from './data/changeData';

class App {
    view: View;
    selectPage: SelectPages;
    requestServer: RequestsServer;
    constructor() {
        this.view = new View();
        this.selectPage = new SelectPages();
        this.requestServer = new RequestsServer();
    }
    start(): void {
        this.view.createPage();
        this.view.addTrack(this.requestServer.getCars());
        this.selectPage.setSelect();
        this.getCurrentId();
        this.addEventsOnClickButtonCreate();
        this.removeEventsOnClickButtonCreate();
        this.updateEventsOnClickButtonCreate();
        this.addChangePageButtonsLogic();
    }

    addEventsOnClickButtonCreate() {
        const create: HTMLElement | null = document.querySelector('.btn-create');
        if (create)
            create.addEventListener('click', () => {
                const inputColorCreate: HTMLInputElement | null = document.querySelector('.create__input-color');
                const inputTextCreate: HTMLInputElement | null = document.querySelector('.create__input-text');
                const carName: string = (inputTextCreate as HTMLInputElement).value;
                const carColor: string = (inputColorCreate as HTMLInputElement).value;
                this.requestServer
                    .createCar(carName, carColor)
                    .then(() => this.view.addTrack(this.requestServer.getCars()));
            });
    }

    removeEventsOnClickButtonCreate() {
        const sectionGarage = document.querySelector('.section-garage') as HTMLElement;
        sectionGarage.addEventListener('click', (btnRemove) => {
            if ((btnRemove.target as HTMLElement).classList.contains('btn-remove')) {
                const currentId: string = ((btnRemove.target as HTMLElement).parentNode as HTMLElement).id;
                this.view.deleteTrack(this.requestServer.deleteCar(currentId));
            }
        });
    }

    updateEventsOnClickButtonCreate() {
        const sectionGarage = document.querySelector('.section-garage') as HTMLElement;
        sectionGarage.addEventListener('click', (btnUpdate) => {
            if ((btnUpdate.target as HTMLElement).classList.contains('btn-update')) {
                const inputColorUpdate: HTMLInputElement | null = document.querySelector('.update__input-color');
                const inputTextUpdate: HTMLInputElement | null = document.querySelector('.update__input-text');
                const carName: string = (inputTextUpdate as HTMLInputElement).value;
                const carColor: string = (inputColorUpdate as HTMLInputElement).value;
                const currentId = localStorage.getItem('currentIdStorage');
                this.requestServer
                    .updateCar(`${currentId}`, carName, carColor)
                    .then(() => this.view.addTrack(this.requestServer.getCars()));
            }
        });
    }

    getCurrentId() {
        const sectionGarage = document.querySelector('.section-garage') as HTMLElement;
        sectionGarage.addEventListener('click', (btnSelect) => {
            if ((btnSelect.target as HTMLElement).classList.contains('btn-select')) {
                (btnSelect.target as HTMLButtonElement).disabled = true;
                localStorage.setItem(
                    'currentIdStorage',
                    `${((btnSelect.target as HTMLElement).parentNode as HTMLElement).id}`
                );
            }
        });
    }

    go() {
        const track: HTMLElement | null = document.querySelector('.track');
        const car: HTMLElement | null = document.querySelector('.car-image');
        track?.addEventListener('click', (event) => {
            if ((event.target as HTMLElement).classList.contains('btn-start')) {
                car?.classList.add('go');
            }
        });
    }

    addChangePageButtonsLogic(): void {
        document.querySelector('.footer')?.addEventListener('click', (event) => {
            if ((event.target as HTMLElement).classList.contains('btn-next')) {
                this.view.addTrack(this.requestServer.getCars('', `${+changeData.pageCarsNumber + 1}`));
            }
            if ((event.target as HTMLElement).classList.contains('btn-prev')) {
                this.view.addTrack(this.requestServer.getCars('', `${+changeData.pageCarsNumber - 1}`));
            }
        });
    }
}
export default App;
