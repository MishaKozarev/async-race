import './setting.css';
import { paramType } from '../../../../types/types';
import DivCreateView from './create/create-view';
import DivUpdateView from './update/update-view';
import DivControlView from './control/control-view';

class DivSettingView {
    divCreateView: DivCreateView;
    divUpdateView: DivUpdateView;
    divControlView: DivControlView;
    constructor() {
        this.divCreateView = new DivCreateView();
        this.divUpdateView = new DivUpdateView();
        this.divControlView = new DivControlView();
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
        const divControl: HTMLElement | null = this.divControlView.appendDivControlView();
        divSetting.append(divSCreate, divUpdate, divControl);
        return divSetting;
    }
}
export default DivSettingView;
