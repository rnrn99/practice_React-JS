import View from './View.js';
import { qs, on } from '../helpers.js';

export default class SearchFormView extends View {
    constructor() {
        super(qs('#search-form-view'));

        this.inputElement = qs('[type=text]', this.element);
        this.resetElement = qs('[type=reset]', this.element);

        this.showResetbtn(false);
        this.bindEvents();
    }

    showResetbtn(visible = true) {
        this.resetElement.style.display = visible ? "block" : "none";
    }

    // view가 생성되었을 때 event를 binding
    bindEvents() {
        on(this.inputElement, "keyup", () => {
            this.handleKeyup();
        });

        on(this.element, "submit", (event) => {
            this.handleSubmit(event);
        })

        on(this.resetElement, "click", () => {
            this.handleReset()
        })
    }

    handleKeyup() {
        // console.log(this.inputElement.value)
        const {value} = this.inputElement;
        this.showResetbtn(value.length > 0);

        if( value.length <= 0) {
            this.handleReset();
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(event);
        const { value } = this.inputElement
        this.emit("@submit", { value })
    }

    handleReset() {
        this.emit("@reset")
    }
}