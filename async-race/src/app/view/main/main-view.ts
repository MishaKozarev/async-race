import './main.css';
import { paramType } from '../../types/types';
import SectionGarageView from './section-garage/section-garage-view';

class MainView {
    sectionGarage: SectionGarageView;
    constructor() {
        this.sectionGarage = new SectionGarageView();
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
        main.append(sectionGarageView);
        return main;
    }
}
export default MainView;
