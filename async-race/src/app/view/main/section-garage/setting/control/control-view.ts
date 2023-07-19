import './control.css';
import { paramType } from '../../../../../types/types';

class DivControlView {
    constructor() {
        this.createDivControl();
    }
    htmlTeg: paramType = {
        div: 'div',
    };
    cssClasses: paramType = {
        divControl: 'control',
    };

    createDivControl() {
        const divControl: HTMLElement | null = document.createElement(this.htmlTeg.div);
        divControl.classList.add(this.cssClasses.divControl);
        return divControl;
    }
    appendDivControlView() {
        const divControl: HTMLElement = this.createDivControl();
        return divControl;
    }
}
export default DivControlView;
