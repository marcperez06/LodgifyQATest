export default class Page {

    constructor() { }

    open(path) {
        browser.url(path)
    }

    refresh() {
    	browser.execute("location.reload();", null);
    }
    
}