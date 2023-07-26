import View from './view/view';
import SelectPages from './control/select-pages';
import RequestsServer from './control/requestsServer';
import changeData from './data/changeData';
import { cars } from './types/types';
import Generate from './data/generate';
import Animations from './data/animation';

class App {
    view: View;
    selectPage: SelectPages;
    requestServer: RequestsServer;
    generate: Generate;
    constructor() {
        this.view = new View();
        this.selectPage = new SelectPages();
        this.requestServer = new RequestsServer();
        this.generate = new Generate();
    }
    start(): void {
        this.view.createPage();
        this.view.addTrack(this.requestServer.getCars());
        this.view.addWinnersFragments(this.requestServer.getWinner());
        this.selectPage.setSelect();
        this.getCurrentId();
        this.addEventsOnClickButtonCreate();
        this.removeEventsOnClickButtonCreate();
        this.updateEventsOnClickButtonCreate();
        this.updateEventsOnClickButtonТNext();
        this.addEventsOnClickButtonStart();
        this.addEventsOnClickButtonRace();
        this.addEventsOnClickButtonGenerate();
        this.addEventsOnClickButtonReset();
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

    updateEventsOnClickButtonТNext(): void {
        document.querySelector('.footer')?.addEventListener('click', (event) => {
            if ((event.target as HTMLElement).classList.contains('btn-next')) {
                this.view.addTrack(this.requestServer.getCars('', `${+changeData.pageCarsNumber + 1}`));
            }
            if ((event.target as HTMLElement).classList.contains('btn-prev')) {
                this.view.addTrack(this.requestServer.getCars('', `${+changeData.pageCarsNumber - 1}`));
            }
        });
    }

    addEventsOnClickButtonStart(): void {
        document.querySelector('.container')?.addEventListener('click', async (event) => {
            const parentId: string = ((event.target as HTMLElement).parentNode as HTMLElement).id;
            if ((event.target as HTMLElement).classList.contains('btn-start')) {
                this.view
                    .startAnimation(parentId, this.requestServer.startStopEngine(parentId, 'started'))
                    .then(() => this.requestServer.carRun(parentId).catch(() => this.view.stopAnimation(parentId)));
            }
            if ((event.target as HTMLElement).classList.contains('btn-stop')) {
                this.view.startAnimation(parentId, this.requestServer.startStopEngine(parentId, 'stopped'));
                // location.reload();
            }
        });
    }

    addEventsOnClickButtonRace() {
        const sectionGarage = document.querySelector('.section-garage') as HTMLElement;
        sectionGarage.addEventListener('click', async (btnRace) => {
            if ((btnRace.target as HTMLElement).classList.contains('btn-race')) {
                ((await this.requestServer.getCars())[0] as cars[]).forEach((item) => {
                    this.view
                        .startAnimation(`${item.id}`, this.requestServer.startStopEngine(`${item.id}`, 'started'))
                        .then(() =>
                            this.requestServer.carRun(`${item.id}`).catch(() => this.view.stopAnimation(`${item.id}`))
                        );
                });
                const btnStart = document.querySelectorAll('.btn-start') as NodeListOf<HTMLButtonElement>;
                btnStart.forEach((element) => (element.disabled = true));
            }
        });
    }

    addEventsOnClickButtonGenerate() {
        const sectionGarage = document.querySelector('.section-garage') as HTMLElement;
        sectionGarage.addEventListener('click', async (btnGenerate) => {
            if ((btnGenerate.target as HTMLElement).classList.contains('btn-generate')) {
                for (let index = 0; index < 100; index++) {
                    this.requestServer
                        .createCar(this.generate.getRandomName(), this.generate.getRandomColor())
                        .then(() => this.view.addTrack(this.requestServer.getCars()));
                }
            }
        });
    }

    addEventsOnClickButtonReset() {
        const sectionGarage = document.querySelector('.section-garage') as HTMLElement;
        sectionGarage.addEventListener('click', (btnReset) => {
            if ((btnReset.target as HTMLElement).classList.contains('btn-reset')) {
                Animations.recordsAnimation.forEach((item) =>
                    this.view.startAnimation(`${item.id}`, this.requestServer.startStopEngine(`${item.id}`, 'stopped'))
                );
                const btnStart = document.querySelectorAll('.btn-start') as NodeListOf<HTMLButtonElement>;
                btnStart.forEach((element) => (element.disabled = false));
            }
        });
    }
}
export default App;
