import PageView from './view/viewPage';
import SelectPages from './control/select-pages';
import AddTrack from './control/addTrack';

class App {
    viewPage: PageView;
    selectPages: SelectPages;
    addTrack: AddTrack;
    constructor() {
        this.viewPage = new PageView();
        this.selectPages = new SelectPages();
        this.addTrack = new AddTrack();
    }
    start(): void {
        this.viewPage.appendViewPage();
        this.selectPages.setSelect();
        this.addTrack.addTrack();
    }
}
export default App;
