import PageView from './view/viewPage';
import SelectPages from './control/select-pages';

class App {
    viewPage: PageView;
    selectPages: SelectPages;
    constructor() {
        this.viewPage = new PageView();
        this.selectPages = new SelectPages();
    }
    start(): void {
        this.viewPage.appendViewPage();
        this.selectPages.setSelect();
    }
}
export default App;
