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
        this.view.addWinnerTable(this.requestServer.getWinners());
        this.selectPage.setSelect();
        this.setCurrentId();
        this.addEventsOnClickButtonCreate();
        this.removeEventsOnClickButtonCreate();
        this.updateEventsOnClickButtonCreate();
        this.updateEventsOnClickButtonNext();
        this.addEventsOnClickButtonStart();
        this.addEventsOnClickButtonRace();
        this.addEventsOnClickButtonGenerate();
        this.addEventsOnClickButtonReset();
        this.requestServer.getCarsAll();
    }

    addEventsOnClickButtonCreate(): void {
        const create: HTMLButtonElement = document.querySelector('.btn-create') as HTMLButtonElement;
        create.addEventListener('click', () => {
            const inputColorCreate: HTMLInputElement = document.querySelector(
                '.create__input-color'
            ) as HTMLInputElement;
            const inputTextCreate: HTMLInputElement = document.querySelector('.create__input-text') as HTMLInputElement;
            const carName: string = (inputTextCreate as HTMLInputElement).value;
            const carColor: string = (inputColorCreate as HTMLInputElement).value;
            this.requestServer
                .createCar(carName, carColor)
                .then(() => this.view.addTrack(this.requestServer.getCars()));
        });
    }

    removeEventsOnClickButtonCreate(): void {
        const sectionGarage: HTMLElement = document.querySelector('.section-garage') as HTMLElement;
        sectionGarage.addEventListener('click', (btnRemove) => {
            if ((btnRemove.target as HTMLElement).classList.contains('btn-remove')) {
                const currentId: string = ((btnRemove.target as HTMLElement).parentNode as HTMLElement).id;
                this.view.deleteTrack(this.requestServer.deleteCar(currentId));
            }
        });
    }

    updateEventsOnClickButtonCreate(): void {
        const sectionGarage: HTMLElement = document.querySelector('.section-garage') as HTMLElement;
        sectionGarage.addEventListener('click', (btnUpdate) => {
            if ((btnUpdate.target as HTMLElement).classList.contains('btn-update')) {
                const inputColorUpdate: HTMLInputElement | null = document.querySelector('.update__input-color');
                const inputTextUpdate: HTMLInputElement | null = document.querySelector('.update__input-text');
                const carName: string = (inputTextUpdate as HTMLInputElement).value;
                const carColor: string = (inputColorUpdate as HTMLInputElement).value;
                const currentId: string | null = localStorage.getItem('currentIdStorage');
                this.requestServer
                    .updateCar(`${currentId}`, carName, carColor)
                    .then(() => this.view.addTrack(this.requestServer.getCars()));
            }
        });
    }

    setCurrentId(): void {
        const sectionGarage: HTMLElement = document.querySelector('.section-garage') as HTMLElement;
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

    updateEventsOnClickButtonNext(): void {
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
                const btnStop: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
                    '.btn-stop'
                ) as NodeListOf<HTMLButtonElement>;
                btnStop.forEach((element) => (element.disabled = true));
                const btnStart: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn-start') as NodeListOf<HTMLButtonElement>;
                btnStart.forEach((element) => (element.disabled = false));
                // location.reload();
            }
        });
    }

    addEventsOnClickButtonRace(): void {
        const sectionGarage: HTMLElement = document.querySelector('.section-garage') as HTMLElement;
        sectionGarage.addEventListener('click', async (btnRace) => {
            if ((btnRace.target as HTMLElement).classList.contains('btn-race')) {
                ((await this.requestServer.getCars())[0] as cars[]).forEach((item) => {
                    this.view
                        .startAnimation(`${item.id}`, this.requestServer.startStopEngine(`${item.id}`, 'started'))
                        .then(() =>
                            this.requestServer.carRun(`${item.id}`).catch(() => this.view.stopAnimation(`${item.id}`))
                        );
                });
                const btnStart: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn-start') as NodeListOf<HTMLButtonElement>;
                btnStart.forEach((element) => (element.disabled = true));
                this.getWinnerCar();
                this.showWinner();
            }
        });
    }

    addEventsOnClickButtonGenerate(): void {
        const sectionGarage: HTMLElement = document.querySelector('.section-garage') as HTMLElement;
        sectionGarage.addEventListener('click', async (btnGenerate) => {
            if ((btnGenerate.target as HTMLElement).classList.contains('btn-generate')) {
                for (let i = 0; i < 100; i++) {
                    this.requestServer
                        .createCar(this.generate.getRandomName(), this.generate.getRandomColor())
                        .then(() => this.view.addTrack(this.requestServer.getCars()));
                }
            }
        });
    }

    addEventsOnClickButtonReset(): void {
        const sectionGarage: HTMLElement = document.querySelector('.section-garage') as HTMLElement;
        sectionGarage.addEventListener('click', (btnReset) => {
            if ((btnReset.target as HTMLElement).classList.contains('btn-reset')) {
                Animations.recordsAnimation.forEach((item) =>
                    this.view.startAnimation(`${item.id}`, this.requestServer.startStopEngine(`${item.id}`, 'stopped'))
                );
                const btnStart: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn-start') as NodeListOf<HTMLButtonElement>;
                btnStart.forEach((element) => (element.disabled = false));
            }
        });
    }

    getWinnerCar(): void {
        const table: HTMLElement = document.querySelector('.table') as HTMLElement;
        setTimeout(() => {
            const winnerId: string | null = localStorage.getItem('winnerId');
            const timeWinner: string | null = localStorage.getItem('timeWinner');
            this.requestServer.createWinner(`${winnerId}`, '1', `${timeWinner}`);
            table.innerHTML = '';
        }, 5000);
        setTimeout(() => {
            this.view.addWinnerTable(this.requestServer.getWinners());
        }, 6000);
    }

    showWinner(): void {
        const winner: HTMLElement = document.querySelector('.winner') as HTMLElement;
        setTimeout(() => {
            winner.style.display = 'block';
            const nameWin: string | null = localStorage.getItem('nameWin');
            const timeWinner: string | null = localStorage.getItem('timeWinner');
            console.log(timeWinner);
            winner.textContent = `Winner ${nameWin} time: ${timeWinner}`;
            setTimeout(() => (winner.style.display = 'none'), 4000);
        }, Number(localStorage.getItem('timeWinner')) * 1000);
    }
}
export default App;