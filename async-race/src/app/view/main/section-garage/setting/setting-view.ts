import './setting.css';
import { paramType } from '../../../../types/types';
import DivCreateView from './create/create-view';
import DivUpdateView from './update/update-view';
import DivPlayView from './play/play-view';

class DivSettingView {
    divCreateView: DivCreateView;
    divUpdateView: DivUpdateView;
    divPlayView: DivPlayView;
    constructor() {
        this.divCreateView = new DivCreateView();
        this.divUpdateView = new DivUpdateView();
        this.divPlayView = new DivPlayView();
        this.createDivSetting();
    }
    htmlTeg: paramType = {
        section: 'section',
        div: 'div',
    };
    cssClasses: paramType = {
        divSetting: 'setting',
    };

    createDivSetting() {
        const divSetting: HTMLElement | null = document.createElement(this.htmlTeg.div);
        divSetting.classList.add(this.cssClasses.divSetting);
        return divSetting;
    }

    appendDivSettingView() {
        const divSetting: HTMLElement | null = this.createDivSetting();
        const divSCreate: HTMLElement | null = this.divCreateView.appendDivCreateView();
        const divUpdate: HTMLElement | null = this.divUpdateView.appendDivUpdateView();
        const divPlay: HTMLElement | null = this.divPlayView.appendDivPlayView();
        divSetting.append(divSCreate, divUpdate, divPlay);
        return divSetting;
    }
}
export default DivSettingView;
