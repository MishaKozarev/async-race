import { paramType } from '../../../../types/types';
import svgSprite from './svgSprite/svgSprite-view';
import CAR from './svgSprite/svgCar-view';

class Track {
    constructor() {
        this.appendDivTrack();
    }

    htmlTeg: paramType = {
        div: 'div',
        btn: 'button',
        p: 'p',
        svg: 'svg',
        use: 'use',
    };

    cssClasses: paramType = {
        track: 'track',
        trackControl: 'track-control',
        btnSelect: 'btn-select',
        btnRemove: 'btn-remove',
        carName: 'track__car-name',
        trackCar: 'track-car',
        trackBtn: 'track__btn',
        btnStart: 'btn-start',
        btnStop: 'btn-stop',
        trackRace: 'track__race',
        race: 'race',
        car: 'car',
        flag: 'flag',
    };

    htmlText: paramType = {
        btnSelect: 'SELECT',
        btnRemove: 'REMOVE',
        carName: 'Tesla',
        btnStart: 'A',
        btnStop: 'B',
    };

    createNewElement(tagName: string, cssClass: string, text?: string): HTMLElement {
        const element = document.createElement(`${tagName}`);
        element.className = cssClass;
        if (text) {
            element.textContent = text;
        }
        return element;
    }

    createBtnSelect() {
        const btnSelect: HTMLElement | null = document.createElement(this.htmlTeg.div);
        btnSelect.classList.add(this.cssClasses.btnSelect);
        return btnSelect;
    }

    createBtnRemove() {
        const btnRemove: HTMLElement | null = document.createElement(this.htmlTeg.div);
        btnRemove.classList.add(this.cssClasses.btnRemove);
        return btnRemove;
    }

    createCarName() {
        const carName: HTMLElement | null = document.createElement(this.htmlTeg.div);
        carName.classList.add(this.cssClasses.carName);
        carName.textContent = this.htmlText.carName;
        return carName;
    }

    createBtnStart() {
        const btnStart: HTMLElement | null = document.createElement(this.htmlTeg.btn);
        btnStart.classList.add(this.cssClasses.btnStart);
        btnStart.textContent = this.htmlText.btnStart;
        return btnStart;
    }

    createBtnStop() {
        const btnStop: HTMLElement | null = document.createElement(this.htmlTeg.btn);
        btnStop.classList.add(this.cssClasses.btnStop);
        btnStop.textContent = this.htmlText.btnStop;
        return btnStop;
    }

    createUseSvg() {
        const useSvgCar: HTMLElement | null = document.createElement(this.htmlTeg.use);
        useSvgCar.setAttribute('xlink:href', '#car');
        return useSvgCar;
    }

    appendDivTrack() {
        const divTrack: HTMLElement = this.createNewElement(this.htmlTeg.div, this.cssClasses.track);
        const divTrackControl: HTMLElement = this.createNewElement(this.htmlTeg.div, this.cssClasses.trackControl);
        const btnSelect: HTMLElement = this.createBtnSelect();
        const btnRemove: HTMLElement = this.createBtnRemove();
        const carName: HTMLElement = this.createCarName();
        const divTrackCar: HTMLElement = this.createNewElement(this.htmlTeg.div, this.cssClasses.trackCar);
        const divTrackBtn: HTMLElement = this.createNewElement(this.htmlTeg.div, this.cssClasses.trackBtn);
        const btnStart: HTMLElement = this.createBtnStart();
        const btnStop: HTMLElement = this.createBtnStop();
        const divTrackRace: HTMLElement = this.createNewElement(this.htmlTeg.div, this.cssClasses.trackRace);
        const divRace: HTMLElement = this.createNewElement(this.htmlTeg.div, this.cssClasses.race);
        // const svgCar: HTMLElement = this.createNewElement(this.htmlTeg.svg, this.cssClasses.car);
        // const useSvgCar: HTMLElement = this.createUseSvg();
        const divFlag: HTMLElement = this.createNewElement(this.htmlTeg.div, this.cssClasses.flag);
        divTrack.append(divTrackControl, divTrackCar);
        divTrackControl.append(btnSelect, btnRemove, carName);
        divTrackCar.append(divTrackBtn, divTrackRace);
        divTrackBtn.append(btnStart, btnStop);
        divTrackRace.append(divRace);
        divRace.append(divFlag);
        divRace.insertAdjacentHTML('afterbegin', `${CAR}`);
        divRace.insertAdjacentHTML('beforeend', `${svgSprite}`);
        // svgCar.append(useSvgCar);
        return divTrack;
    }
}

export default Track;
