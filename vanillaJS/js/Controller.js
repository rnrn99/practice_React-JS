const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(tag, 'controller')
    this.store = store;

    this.searchFormView = searchFormView
  }
}
