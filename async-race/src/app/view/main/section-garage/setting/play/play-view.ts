import './play.css';
import { paramType } from '../../../../../types/types';

class DivPlayView {
    constructor() {
        this.createDivPlay();
    }
    htmlTeg: paramType = {
        div: 'div',
        btn: 'button',
        h2: 'h2',
        h4: 'h4',
    };
    cssClasses: paramType = {
        divPlay: 'play',
        btnRace: 'btn-race',
        btnReset: 'btn-reset',
        btnGenerate: 'btn-generate',
        title: 'title',
        subtitle: 'subtitle',
    };

    htmlText: paramType = {
        btnRace: 'RACE',
        btnReset: 'RESET',
        btnGenerate: 'GENERATE CARS',
        title: 'Garage( )',
        subtitle: 'Page #',
    };

    createDivPlay() {
        const divPlay: HTMLElement | null = document.createElement(this.htmlTeg.div);
        divPlay.classList.add(this.cssClasses.divPlay);
        return divPlay;
    }

    createBtnRace() {
        const btnRace: HTMLElement | null = document.createElement(this.htmlTeg.btn);
        btnRace.classList.add(this.cssClasses.btnRace);
        btnRace.textContent = this.htmlText.btnRace;
        return btnRace;
    }

    createBtnReset() {
        const btnReset: HTMLElement | null = document.createElement(this.htmlTeg.btn);
        btnReset.classList.add(this.cssClasses.btnReset);
        btnReset.textContent = this.htmlText.btnReset;
        return btnReset;
    }

    createBtnGenerate() {
        const btnGenerate: HTMLElement | null = document.createElement(this.htmlTeg.btn);
        btnGenerate.classList.add(this.cssClasses.btnGenerate);
        btnGenerate.textContent = this.htmlText.btnGenerate;
        return btnGenerate;
    }
    createTitle() {
        const title: HTMLElement | null = document.createElement(this.htmlTeg.h2);
        title.classList.add(this.cssClasses.title);
        title.textContent = this.htmlText.title;
        return title;
    }
    createSubtitle() {
        const subtitle: HTMLElement | null = document.createElement(this.htmlTeg.h4);
        subtitle.classList.add(this.cssClasses.subtitle);
        subtitle.textContent = this.htmlText.subtitle;
        return subtitle;
    }

    appendDivPlayView() {
        const divPlay: HTMLElement = this.createDivPlay();
        const btnRace: HTMLElement = this.createBtnRace();
        const btnReset: HTMLElement = this.createBtnReset();
        const btnGenerate: HTMLElement = this.createBtnGenerate();
        const title: HTMLElement = this.createTitle();
        const subtitle: HTMLElement = this.createSubtitle();
        divPlay.append(btnRace, btnReset, btnGenerate, title, subtitle);
        return divPlay;
    }
}
export default DivPlayView;
