import './main.css';
import { paramType } from '../../types/types';
import SectionGarageView from './section-garage/section-garage-view';
import SectionWinnerView from './section-winner/section-winner-view';

class MainView {
    sectionGarage: SectionGarageView;
    sectionWinner: SectionWinnerView;
    constructor() {
        this.sectionGarage = new SectionGarageView();
        this.sectionWinner = new SectionWinnerView();
        this.createMain();
    }
    htmlTeg: paramType = {
        main: 'main',
    };
    cssClasses: paramType = {
        main: 'main',
    };
    createMain() {
        const main: HTMLElement | null = document.createElement(this.htmlTeg.main);
        main.classList.add(this.cssClasses.main);
        return main;
    }

    appendMainView() {
        const main: HTMLElement = this.createMain();
        const sectionGarageView: HTMLElement | null = this.sectionGarage.appendSectionGarageView();
        const sectionWinnerView: HTMLElement | null = this.sectionWinner.appendSectionWinnerView();
        main.append(sectionGarageView, sectionWinnerView);
        return main;
    }
}
export default MainView;
