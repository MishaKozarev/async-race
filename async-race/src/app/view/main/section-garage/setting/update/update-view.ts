import './update.css';
import { paramType } from '../../../../../types/types';

class DivUpdateView {
    constructor() {
        this.createDivUpdate();
    }
    htmlTeg: paramType = {
        div: 'div',
        input: 'input',
        btn: 'button',
    };
    cssClasses: paramType = {
        divUpdate: 'update',
        inputText: 'update__input',
        inputColor: 'update__color',
        btnUpdate: 'btn-update',
    };

    htmlText: paramType = {
        btnUpdate: 'UPDATE',
    };

    createDivUpdate() {
        const divUpdate: HTMLElement | null = document.createElement(this.htmlTeg.div);
        divUpdate.classList.add(this.cssClasses.divUpdate);
        return divUpdate;
    }

    createInputTextUpdate() {
        const inputText: HTMLElement | null = document.createElement(this.htmlTeg.input);
        inputText.classList.add(this.cssClasses.inputText);
        inputText.setAttribute('type', 'text');
        return inputText;
    }

    createInputColorUpdate() {
        const inputColor: HTMLElement | null = document.createElement(this.htmlTeg.input);
        inputColor.classList.add(this.cssClasses.inputColor);
        inputColor.setAttribute('type', 'color');
        return inputColor;
    }

    createBtnUpdate() {
        const btnUpdate: HTMLElement | null = document.createElement(this.htmlTeg.btn);
        btnUpdate.classList.add(this.cssClasses.btnUpdate);
        btnUpdate.textContent = this.htmlText.btnUpdate;
        return btnUpdate;
    }

    appendDivUpdateView() {
        const divUpdate: HTMLElement = this.createDivUpdate();
        const inputText: HTMLElement = this.createInputTextUpdate();
        const inputColor: HTMLElement = this.createInputColorUpdate();
        const btnUpdate: HTMLElement = this.createBtnUpdate();
        divUpdate.append(inputText, inputColor, btnUpdate);
        return divUpdate;
    }
}
export default DivUpdateView;
