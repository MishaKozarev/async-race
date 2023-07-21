// import { paramType } from '../../../../types/types';

// class Track {
//     constructor() {
//         this.appendDivTrack();
//     }
//     htmlTeg: paramType = {
//         div: 'div',
//         btn: 'button',
//         p: 'p',
//         svg: 'svg',
//         use: 'use',
//     };
//     cssClasses: paramType = {
//         track: 'track',
//         trackControl: 'track-control',
//         btnSelect: 'btn-select',
//         btnRemove: 'btn-remove',
//         carName: 'track__car-name',
//         trackCar: 'track-car',
//         divTrackBtn: 'track__btn',
//         btnStart: 'btn-start',
//         btnStop: 'btn-stop',
//         trackRace: 'track__race',
//         race: 'race',
//         car: 'car',
//         flag: 'flag',
//     };

//     htmlText: paramType = {
//         btnSelect: 'SELECT',
//         btnRemove: 'REMOVE',
//         carName: 'Tesla',
//         btnStart: 'A',
//         btnStop: 'B',
//     };

//     createNewElement(tagName: string, cssClass: string, text?: string): HTMLElement {
//         const element = document.createElement(`${tagName}`);
//         element.className = cssClass;
//         if (text) {
//             element.textContent = text;
//         }
//         return element;
//     }

//     createDivTrack() {
//         const divTrack: HTMLElement | null = document.createElement(this.htmlTeg.div);
//         divTrack.classList.add(this.cssClasses.track);
//         return divTrack;
//     }

//     createDivTrackControl() {
//         const divTrackControl: HTMLElement | null = document.createElement(this.htmlTeg.div);
//         divTrackControl.classList.add(this.cssClasses.trackControl);
//         return divTrackControl;
//     }

//     createBtnSelect() {
//         const btnSelect: HTMLElement | null = document.createElement(this.htmlTeg.div);
//         btnSelect.classList.add(this.cssClasses.btnSelect);
//         return btnSelect;
//     }

//     createBtnRemove() {
//         const btnRemove: HTMLElement | null = document.createElement(this.htmlTeg.div);
//         btnRemove.classList.add(this.cssClasses.btnRemove);
//         return btnRemove;
//     }

//     createCarName() {
//         const carName: HTMLElement | null = document.createElement(this.htmlTeg.div);
//         carName.classList.add(this.cssClasses.carName);
//         carName.textContent = this.htmlText.carName;
//         return carName;
//     }

//     createDivTrackCar() {
//         const divTrackCar: HTMLElement | null = document.createElement(this.htmlTeg.div);
//         divTrackCar.classList.add(this.cssClasses.trackCar);
//         return divTrackCar;
//     }

//     createDivTrackBtn() {
//         const divTrackBtn: HTMLElement | null = document.createElement(this.htmlTeg.div);
//         divTrackBtn.classList.add(this.cssClasses.divTrackBtn);
//         return divTrackBtn;
//     }

//     createBtnStart() {
//         const btnStart: HTMLElement | null = document.createElement(this.htmlTeg.div);
//         btnStart.classList.add(this.cssClasses.btnStart);
//         btnStart.textContent = this.htmlText.carName;
//         return btnStart;
//     }

//     createBtnStop() {
//         const btnStop: HTMLElement | null = document.createElement(this.htmlTeg.div);
//         btnStop.classList.add(this.cssClasses.btnStop);
//         btnStop.textContent = this.htmlText.btnStop;
//         return btnStop;
//     }

//     createDivTrackRace() {
//         const divTrackRace: HTMLElement | null = document.createElement(this.htmlTeg.div);
//         divTrackRace.classList.add(this.cssClasses.divTrackRace);
//         return divTrackRace;
//     }

//     createDivRace() {
//         const divRace: HTMLElement | null = document.createElement(this.htmlTeg.div);
//         divRace.classList.add(this.cssClasses.divRace);
//         return divRace;
//     }

//     createSvgCar() {
//         const svgCar: HTMLElement | null = document.createElement(this.htmlTeg.svg);
//         svgCar.classList.add(this.cssClasses.car);
//         return svgCar;
//     }
//     createUseSvg() {
//         const useSvgCar: HTMLElement | null = document.createElement(this.htmlTeg.use);
//         useSvgCar.setAttribute('xlink:href', '#car');
//         return useSvgCar;
//     }

//     createDivFlag() {
//         const divFlag: HTMLElement | null = document.createElement(this.htmlTeg.flag);
//         divFlag.setAttribute('xlink:href', '#car');
//         return divFlag;
//     }

//     appendDivTrack() {
//         const divTrack: HTMLElement = this.createNewElement(this.htmlTeg.div, this.cssClasses.track);
//         const divTrackControl: HTMLElement = this.createDivTrackControl();
//         const btnSelect: HTMLElement = this.createBtnSelect();
//         const btnRemove: HTMLElement = this.createBtnRemove();
//         const carName: HTMLElement = this.createCarName();
//         const divTrackCar: HTMLElement = this.createDivTrackCar();
//     }
// }

// export default Track;
