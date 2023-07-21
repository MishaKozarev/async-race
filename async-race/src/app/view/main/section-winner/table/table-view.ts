import './table.css';
import { paramType } from '../../../../types/types';

class TableView {
    constructor() {
        this.createTable();
    }

    htmlTeg: paramType = {
        table: 'table',
        th: 'th',
    };
    cssClasses: paramType = {
        table: 'table',
    };

    htmText: paramType = {
        number: 'number',
        car: 'car',
        name: 'winner',
        best: 'best',
        time: 'time',
    };

    createTable() {
        const table: HTMLElement | null = document.createElement(this.htmlTeg.table);
        table.classList.add(this.cssClasses.table);

        const thNumber: HTMLElement | null = document.createElement(this.htmlTeg.th);
        thNumber.textContent = this.htmText.number;

        const thCar: HTMLElement | null = document.createElement(this.htmlTeg.th);
        thCar.textContent = this.htmText.car;

        const thName: HTMLElement | null = document.createElement(this.htmlTeg.th);
        thName.textContent = this.htmText.name;

        const thBest: HTMLElement | null = document.createElement(this.htmlTeg.th);
        thBest.textContent = this.htmText.best;

        const thTime: HTMLElement | null = document.createElement(this.htmlTeg.th);
        thTime.textContent = this.htmText.time;

        table.append(thNumber, thCar, thName, thBest, thTime);
        return table;
    }

    appendTableView() {
        const table: HTMLElement = this.createTable();
        return table;
    }
}
export default TableView;
