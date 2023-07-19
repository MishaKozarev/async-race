import './create.css';
import { paramType } from '../../../../../types/types';

class DivCreateView {
    constructor() {
        this.createDivCreate();
    }
    htmlTeg: paramType = {
        div: 'div',
        input: 'input',
        btn: 'button',
    };
    cssClasses: paramType = {
        divCreate: 'create',
        inputText: 'create__input',
        inputColor: 'create__color',
        btnCreate: 'btn-create',
    };

    htmlText: paramType = {
        btnCreate: 'CREATE',
    };

    createDivCreate() {
        const divCreate: HTMLElement | null = document.createElement(this.htmlTeg.div);
        divCreate.classList.add(this.cssClasses.divCreate);
        return divCreate;
    }

    createInputTextCreate() {
        const inputText: HTMLElement | null = document.createElement(this.htmlTeg.input);
        inputText.classList.add(this.cssClasses.inputText);
        inputText.setAttribute('type', 'text');
        return inputText;
    }

    createInputColorCreate() {
        const inputColor: HTMLElement | null = document.createElement(this.htmlTeg.input);
        inputColor.classList.add(this.cssClasses.inputColor);
        inputColor.setAttribute('type', 'color');
        return inputColor;
    }

    createBtnCreate() {
        const btnCreate: HTMLElement | null = document.createElement(this.htmlTeg.btn);
        btnCreate.classList.add(this.cssClasses.btnCreate);
        btnCreate.textContent = this.htmlText.btnCreate;
        return btnCreate;
    }

    appendDivCreateView() {
        const divCreate: HTMLElement = this.createDivCreate();
        const inputText: HTMLElement = this.createInputTextCreate();
        const inputColor: HTMLElement = this.createInputColorCreate();
        const btnCreate: HTMLElement = this.createBtnCreate();
        divCreate.append(inputText, inputColor, btnCreate);
        return divCreate;
    }
}
export default DivCreateView;
