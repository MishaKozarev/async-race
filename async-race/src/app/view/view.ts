import view from '../data/viewData';
import carSvg from '../data/carSvgData';
import changeData from '../data/changeData';
import { cars, engine, records, winItem } from '../types/types';
import Animations from '../data/animation';
import RequestServer from '../control/requestsServer';

class View {
    body: HTMLBodyElement | null;
    sectionGarage: HTMLElement;
    animations: Animations;
    requestServer: RequestServer;
    constructor() {
        this.body = document.querySelector('body');
        this.sectionGarage = this.createElem(view.html.section, view.css.sectionGarage);
        this.animations = new Animations();
        this.requestServer = new RequestServer();
    }

    createElem(tagName: string, cssClass: string, text?: string) {
        const element = document.createElement(`${tagName}`);
        element.className = cssClass;
        if (text) element.innerHTML = text;
        return element;
    }

    createElemTrack(tagName: string, cssClass: string, id: string) {
        const element = document.createElement(`${tagName}`);
        element.className = cssClass;
        element.id = id;
        return element;
    }

    createInput(tagName: string, cssClass: string, attribute?: string, nameAttribute?: string) {
        const element = document.createElement(`${tagName}`);
        element.className = cssClass;
        if (attribute) element.setAttribute(`${attribute}`, `${nameAttribute}`);
        return element;
    }

    createPage() {
        const header: HTMLElement = this.createElem(view.html.header, view.css.header);
        const main: HTMLElement = this.createElem(view.html.main, view.css.main);
        const footer: HTMLElement = this.createElem(view.html.footer, view.css.footer);
        const sectionWinner: HTMLElement = this.createElem(view.html.section, view.css.sectionWinner);
        const btnGarage: HTMLElement = this.createElem(view.html.btn, view.css.btnGarage, view.text.btnGarage);
        const btnWinner: HTMLElement = this.createElem(view.html.btn, view.css.btnWinner, view.text.btnWinner);
        const divControl: HTMLElement = this.createElem(view.html.div, view.css.control);
        const inputTextCreate: HTMLElement = this.createInput(
            view.html.input,
            view.css.inputTextCreate,
            view.attr.type,
            view.nameAttr.text
        );
        const inputColorCreate: HTMLElement = this.createInput(
            view.html.input,
            view.css.inputColorCreate,
            view.attr.type,
            view.nameAttr.color
        );
        const btnCreate: HTMLElement = this.createElem(view.html.btn, view.css.btnCreate, view.text.btnCreate);
        const inputTextUpdate: HTMLElement = this.createInput(
            view.html.input,
            view.css.inputTextUpdate,
            view.attr.type,
            view.nameAttr.text
        );
        const inputColorUpdate: HTMLElement = this.createInput(
            view.html.input,
            view.css.inputColorUpdate,
            view.attr.type,
            view.nameAttr.color
        );
        const btnUpdate: HTMLElement = this.createElem(view.html.btn, view.css.btnUpdate, view.text.btnUpdate);
        const btnRace: HTMLElement = this.createElem(view.html.btn, view.css.btnRace, view.text.btnRace);
        const btnReset: HTMLElement = this.createElem(view.html.btn, view.css.btnReset, view.text.btnReset);
        const btnGenerate: HTMLElement = this.createElem(view.html.btn, view.css.btnGenerate, view.text.btnGenerate);
        const countGarage: HTMLElement = this.createElem(view.html.h2, view.css.countGarage, view.text.countGarage);
        const numGarage: HTMLElement = this.createElem(view.html.h2, view.css.numGarage, view.text.numGarage);
        const btnPrev: HTMLElement = this.createElem(view.html.btn, view.css.btnPrev, view.text.btnPrev);
        const btnNext: HTMLElement = this.createElem(view.html.btn, view.css.btnNext, view.text.btnNext);
        const containerTracks: HTMLElement = this.createElem(view.html.div, view.css.container);
        const diwWinner: HTMLElement = this.createElem(view.html.div, view.css.winner);
        this.body?.append(header, main, footer);
        header.append(btnGarage, btnWinner);
        main.append(this.sectionGarage, sectionWinner);
        this.sectionGarage.append(diwWinner, divControl, countGarage, numGarage, containerTracks);
        divControl.append(
            inputTextCreate,
            inputColorCreate,
            btnCreate,
            inputTextUpdate,
            inputColorUpdate,
            btnUpdate,
            btnRace,
            btnReset,
            btnGenerate
        );
        const countWinner: HTMLElement = this.createElem(view.html.h2, view.css.countGarage, view.text.countGarage);
        const numWinner: HTMLElement = this.createElem(view.html.h2, view.css.numWinner, view.text.numWinner);
        const table: HTMLElement = this.createElem(view.html.table, view.css.table);
        const thNumber: HTMLElement = this.createElem(view.html.th, view.css.th, view.text.number);
        const thCar: HTMLElement = this.createElem(view.html.th, view.css.th, view.text.car);
        const thName: HTMLElement = this.createElem(view.html.th, view.css.th, view.text.name);
        const thWinner: HTMLElement = this.createElem(view.html.th, view.css.th, view.text.winner);
        const thBestTime: HTMLElement = this.createElem(view.html.th, view.css.th, view.text.best);
        sectionWinner.append(countWinner, numWinner, table);
        table.append(thNumber, thCar, thName, thWinner, thBestTime);
        footer.append(btnPrev, btnNext);
    }

    createTrack(id: number, carColor: string, carName: string, carModel?: string): void {
        const containerTracks: HTMLElement = document.querySelector('.container') as HTMLElement;
        const divTrack: HTMLElement = this.createElemTrack(view.html.div, view.css.divTrack, `${id}`);
        const carNameModel: string = carModel ? `${carName} ${carModel}` : carName;
        const carImage: HTMLOrSVGImageElement = this.createElem(view.html.div, view.css.carImage) as HTMLImageElement;
        carImage.innerHTML = carSvg;
        const spanCarName: HTMLElement = this.createElem(view.html.span, view.css.carName, `${carNameModel}`);
        const btnStart: HTMLButtonElement = this.createElem(
            view.html.btn,
            view.css.btnStart,
            view.text.btnStart
        ) as HTMLButtonElement;
        const btnStop: HTMLButtonElement = this.createElem(
            view.html.btn,
            view.css.btnStop,
            view.text.btnStop
        ) as HTMLButtonElement;
        const btnSelect: HTMLElement = this.createElem(view.html.btn, view.css.btnSelect, view.text.btnSelect);
        const btnRemove: HTMLElement = this.createElem(view.html.btn, view.css.btnRemove, view.text.btnRemove);
        const flagFinish: HTMLElement = this.createElem(view.html.div, view.css.flag);
        divTrack.append(btnStart, btnStop, btnSelect, btnRemove, spanCarName, carImage, flagFinish);
        (divTrack.children[5].children[0].children[0] as HTMLElement).style.fill = carColor;
        containerTracks.append(divTrack);
        btnStop.disabled = true;
    }

    async addTrack(cars: Promise<[cars[] | cars, string, string]>): Promise<void> {
        const result: [cars[] | cars, string, string] = await cars;
        const carsNumber: string = result[1];
        const pageNumber: string = result[2];
        const carsOnPage = 7;
        const containerTracks: HTMLElement = document.querySelector('.container') as HTMLElement;
        const btnPrev: HTMLButtonElement = document.querySelector('.btn-prev') as HTMLButtonElement;
        const btnNext: HTMLButtonElement = document.querySelector('.btn-next') as HTMLButtonElement;
        if (containerTracks) containerTracks.innerHTML = '';
        changeData.pageCarsNumber = pageNumber;
        Animations.recordsAnimation = [];
        (result[0] as cars[]).forEach((item) => {
            this.createTrack(item.id, item.color, item.name);
        });
        const titleGarage = document.querySelector('.title-garage') as HTMLElement;
        const subtitleGarage = document.querySelector('.subtitle-garage') as HTMLElement;
        titleGarage.innerText = `Garage (${carsNumber})`;
        subtitleGarage.innerHTML = `Page #${pageNumber}`;
        btnNext.disabled = !(Number(carsNumber) > carsOnPage);
        btnNext.disabled = !(Math.ceil(Number(carsNumber) / carsOnPage) > Number(pageNumber));
        btnPrev.disabled = Number(pageNumber) === 1;
    }

    async deleteTrack(id: Promise<string>) {
        document.getElementById(await id)?.remove();
    }

    async updateDataTrack(car: Promise<[cars[] | cars, string, string]>): Promise<void> {
        const result: [cars[] | cars, string, string] = await car;
        const carData = result[0];
        const inputTextUpdate = document.querySelector('.update__input-text') as HTMLInputElement;
        const inputColorUpdate = document.querySelector('.update__input-color') as HTMLInputElement;
        inputTextUpdate.value = (carData as cars).name;
        inputColorUpdate.value = (carData as cars).color;
        changeData.idUpdate = String((carData as cars).id);
    }

    async startAnimation(id: string, carEnginData: Promise<engine>): Promise<void> {
        // const winner = document.querySelector('.winner') as HTMLElement;
        const carFeature: engine = await carEnginData;
        const carBlock: HTMLElement = document.getElementById(id) as HTMLElement;
        if (carFeature.velocity === 0) {
            const newRecordsAnimation: records[] = [];
            Animations.recordsAnimation.forEach((item) => {
                if (item.id !== +id) {
                    newRecordsAnimation.push(item);
                } else {
                    item.animation.cancel();
                }
            });
            Animations.recordsAnimation = newRecordsAnimation;
            (carBlock.children[5].children[0] as HTMLElement).style.left = '0';
            return;
        }
        const time: number = carFeature.distance / carFeature.velocity;
        const distance: number = +(carBlock.children[5] as HTMLElement).offsetWidth - 100;
        const anim: Animation = (carBlock.children[5].children[0] as HTMLElement).animate(
            [{ left: '0px' }, { left: `${distance}px` }],
            { duration: time, fill: 'forwards' }
        );
        (carBlock.children[0] as HTMLButtonElement).disabled = true;
        (carBlock.children[1] as HTMLButtonElement).disabled = false;
        Animations.recordsAnimation.push({ id: +id, time: +(time / 1000).toFixed(2), animation: anim });
        const winnerCarAnimation = Animations.recordsAnimation.sort((a, b) => (a.time < b.time ? -1 : 1));
        const timeWinner: number = winnerCarAnimation[0].time;
        const winnerId = winnerCarAnimation[0].id;
        const carsAllGarage: cars[] = await this.requestServer.getCarsAll();
        const allCar = carsAllGarage.filter((el) => el.id === winnerId)[0];
        const allCarId = allCar.id;
        const allCarName = allCar.name;
        if (winnerId === allCarId) {
            localStorage.setItem('winnerId', `${winnerId}`);
            localStorage.setItem('nameWin', `${allCarName}`);
            localStorage.setItem('timeWinner', `${timeWinner}`);
        }
    }

    async stopAnimation(id: string): Promise<void> {
        const carBlock: HTMLElement = document.getElementById(id) as HTMLElement;
        const carPosition: number = carBlock.children[5].children[0].getBoundingClientRect().left;
        (carBlock.children[5].children[0] as HTMLElement).style.left = `${carPosition}px`;
        Animations.recordsAnimation.forEach((item) => {
            if (item.id === +id) {
                item.time = Infinity;
                item.animation.cancel();
            }
        });
    }

    drawWinnersFragment(number: number, name: string, wins: string, time: string): void {
        const winnersTable: HTMLElement = document.querySelector('.table') as HTMLElement;
        const tableRow: HTMLElement = this.createElem('tr', 'tr-regular') as HTMLElement;
        const tdNum: HTMLElement = this.createElem('td', 'td-number', `${number}`) as HTMLElement;
        const tdCar: HTMLElement = this.createElem('td', 'td-car') as HTMLElement;
        tdCar.innerHTML = carSvg;
        const tdName: HTMLElement = this.createElem('td', 'td-name', `${name}`) as HTMLElement;
        const tdWin: HTMLElement = this.createElem('td', 'td-wins', `${wins}`) as HTMLElement;
        const tdTime: HTMLElement = this.createElem('td', 'td-time', `${time}`) as HTMLElement;
        winnersTable.append(tableRow);
        tableRow.append(tdNum, tdCar, tdName, tdWin, tdTime);
    }

    async addWinnersFragments(winners: Promise<winItem[]>): Promise<void> {
        const results: winItem[] = await winners;
        const carsAllGarage: cars[] = await this.requestServer.getCarsAll();
        Animations.winnersId = [];
        results.forEach((result) => {
            const allCar = carsAllGarage.filter((el) => el.id === result.id)[0];
            console.log(allCar);
            const allCarId = allCar.id;
            const allCarName = allCar.name;
            if (result.id === allCarId) {
                this.drawWinnersFragment(1, `${allCarName}`, `1`, `${result.time}`);
                Animations.winnersId.push(result.id);
            }
        });
    }
}
export default View;
