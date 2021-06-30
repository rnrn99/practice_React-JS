import View from './View.js';
import { qs } from '../helpers.js';

export default class SearchFormView extends View {
    constructor() {
        super(qs('#search-form-view'));

        this.resetElement = qs('[type=reset]', this.element);
        this.showResetbtn(false);
    }

    showResetbtn(visible = true) {
        this.resetElement.style.display = visible ? "block" : "none";
    }
}