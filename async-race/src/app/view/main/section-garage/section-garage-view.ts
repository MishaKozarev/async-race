import './garage.css';
import { paramType } from '../../../types/types';
import DivSettingView from './setting/setting-view';

class SectionGarageView {
    divSettingView: DivSettingView;
    constructor() {
        this.divSettingView = new DivSettingView();
        this.createSectionGarage();
    }
    htmlTeg: paramType = {
        section: 'section',
    };
    cssClasses: paramType = {
        sectionGarage: 'garage',
    };

    createSectionGarage() {
        const sectionGarage: HTMLElement | null = document.createElement(this.htmlTeg.section);
        sectionGarage.classList.add(this.cssClasses.sectionGarage);
        return sectionGarage;
    }

    appendSectionGarageView() {
        const sectionGarage: HTMLElement = this.createSectionGarage();
        const divSetting: HTMLElement | null = this.divSettingView.appendDivSettingView();
        // const divGame: HTMLElement | null = this.createDivGame();
        // const divSwitch: HTMLElement | null = this.createDivSwitch();
        if (divSetting) sectionGarage.append(divSetting);
        return sectionGarage;
    }
}
export default SectionGarageView;
