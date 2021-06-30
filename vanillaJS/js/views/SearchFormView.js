import View from './View.js';
import { qs, on } from '../helpers.js';

export default class SearchFormView extends View {
    constructor() {
        super(qs('#search-form-view'));

        this.inputElement = qs('[type=text]', this.element);
        this.resetElement = qs('[type=reset]', this.element);

        this.showResetbtn(false);
        this.bindEvent();
    }

    showResetbtn(visible = true) {
        this.resetElement.style.display = visible ? "block" : "none";
    }

    // view가 생성되었을 때 event를 binding
    bindEvent() {
        on(this.inputElement, "keyup", () => {
            this.handleKeyup();
        })
    }

    handleKeyup() {
        // console.log(this.inputElement.value)
        const {value} = this.inputElement;
        this.showResetbtn(value.length > 0);
    }
}