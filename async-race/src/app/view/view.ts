import data from '../data/htmlData';
import carSvgImg from '../data/carSvgImg';

class View {
    body: HTMLBodyElement | null;
    sectionGarage: HTMLElement;

    constructor() {
        this.body = document.querySelector('body');
        this.sectionGarage = this.createElem(data.html.section, data.css.sectionGarage);
    }

    createElem(tagName: string, cssClass: string, text?: string) {
        const element = document.createElement(`${tagName}`);
        element.className = cssClass;
        if (text) element.textContent = text;
        return element;
    }

    createInput(tagName: string, cssClass: string, attribute?: string, nameAttribute?: string) {
        const element = document.createElement(`${tagName}`);
        element.className = cssClass;
        if (attribute) element.setAttribute(`${attribute}`, `${nameAttribute}`);
        return element;
    }

    createPage() {
        const header: HTMLElement = this.createElem(data.html.header, data.css.header);
        const main: HTMLElement = this.createElem(data.html.main, data.css.main);
        const footer: HTMLElement = this.createElem(data.html.footer, data.css.footer);
        const sectionWinner: HTMLElement = this.createElem(data.html.section, data.css.sectionWinner);
        const btnGarage: HTMLElement = this.createElem(data.html.btn, data.css.btnGarage, data.text.btnGarage);
        const btnWinner: HTMLElement = this.createElem(data.html.btn, data.css.btnWinner, data.text.btnWinner);
        const divControl: HTMLElement = this.createElem(data.html.div, data.css.control);
        const inputTextCreate: HTMLElement = this.createInput(
            data.html.input,
            data.css.inputTextCreate,
            data.attr.type,
            data.nameAttr.text
        );
        const inputColorCreate: HTMLElement = this.createInput(
            data.html.input,
            data.css.inputColorCreate,
            data.attr.type,
            data.nameAttr.color
        );
        const btnCreate: HTMLElement = this.createElem(data.html.btn, data.css.btnCreate, data.text.btnCreate);
        const inputTextUpdate: HTMLElement = this.createInput(
            data.html.input,
            data.css.inputTextUpdate,
            data.attr.type,
            data.nameAttr.text
        );
        const inputColorUpdate: HTMLElement = this.createInput(
            data.html.input,
            data.css.inputColorUpdate,
            data.attr.type,
            data.nameAttr.color
        );
        const btnUpdate: HTMLElement = this.createElem(data.html.btn, data.css.btnUpdate, data.text.btnUpdate);
        const btnRace: HTMLElement = this.createElem(data.html.btn, data.css.btnRace, data.text.btnRace);
        const btnReset: HTMLElement = this.createElem(data.html.btn, data.css.btnReset, data.text.btnReset);
        const btnGenerate: HTMLElement = this.createElem(data.html.btn, data.css.btnGenerate, data.text.btnGenerate);
        const countGarage: HTMLElement = this.createElem(data.html.h2, data.css.countGarage, data.text.countGarage);
        const numGarage: HTMLElement = this.createElem(data.html.h2, data.css.numGarage, data.text.numGarage);
        const btnPrev: HTMLElement = this.createElem(data.html.btn, data.css.btnPrev, data.text.btnPrev);
        const btnNext: HTMLElement = this.createElem(data.html.btn, data.css.btnNext, data.text.btnNext);
        this.body?.append(header, main, footer);
        header.append(btnGarage, btnWinner);
        main.append(this.sectionGarage, sectionWinner);
        this.sectionGarage.append(divControl, countGarage, numGarage);
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
        const countWinner: HTMLElement = this.createElem(data.html.h2, data.css.countGarage, data.text.countGarage);
        const numWinner: HTMLElement = this.createElem(data.html.h2, data.css.numWinner, data.text.numWinner);
        const table: HTMLElement = this.createElem(data.html.table, data.css.table);
        const thNumber: HTMLElement = this.createElem(data.html.th, data.css.th, data.text.number);
        const thCar: HTMLElement = this.createElem(data.html.th, data.css.th, data.text.car);
        const thName: HTMLElement = this.createElem(data.html.th, data.css.th, data.text.name);
        const thWinner: HTMLElement = this.createElem(data.html.th, data.css.th, data.text.winner);
        const thBestTime: HTMLElement = this.createElem(data.html.th, data.css.th, data.text.best);
        sectionWinner.append(countWinner, numWinner, table);
        table.append(thNumber, thCar, thName, thWinner, thBestTime);
        footer.append(btnPrev, btnNext);
    }

    createTrack(carColor: string, carName: string, carModel?: string): void {
        const divTrack: HTMLElement = this.createElem(data.html.div, data.css.divTrack);
        const carNameModel: string = carModel ? `${carName} ${carModel}` : carName;
        const carImage: HTMLOrSVGImageElement = this.createElem(data.html.div, data.css.carImage) as HTMLImageElement;
        carImage.innerHTML = carSvgImg;
        const spanCarName: HTMLElement = this.createElem(data.html.span, data.css.carName, `${carNameModel}`);
        const btnStart: HTMLElement = this.createElem(data.html.btn, data.css.btnStart, data.text.btnStart);
        const btnStop: HTMLElement = this.createElem(data.html.btn, data.css.btnStop, data.text.btnStop);
        const btnSelect: HTMLElement = this.createElem(data.html.btn, data.css.btnSelect, data.text.btnSelect);
        const btnRemove: HTMLElement = this.createElem(data.html.btn, data.css.btnRemove, data.text.btnRemove);
        const flagFinish: HTMLElement = this.createElem(data.html.div, data.css.flag);
        divTrack.append(btnStart, btnStop, btnSelect, btnRemove, spanCarName, carImage, flagFinish);
        this.sectionGarage.append(divTrack);
        (divTrack.children[5].children[0].children[0] as HTMLElement).style.fill = carColor;
    }
}
export default View;
