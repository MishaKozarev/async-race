import './footer.css';
import { paramType } from '../../types/types';

class FooterView {
    constructor() {
        this.createFooter();
    }
    htmlTeg: paramType = {
        footer: 'footer',
    };
    cssClasses: paramType = {
        footer: 'footer',
    };
    createFooter() {
        const footer: HTMLElement | null = document.createElement(this.htmlTeg.footer);
        footer.classList.add(this.cssClasses.footer);
        return footer;
    }
}
export default FooterView;
