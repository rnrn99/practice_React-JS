class App extends React.Component {

    constructor() {
        super();

        this.state = {
            searchKeyword: '',
        };
    }

    handleSearchKeyword(event){
        this.setState({
            searchKeyword: event.target.value
        });
    };

    render() {

        let resetBtn = null;

        if(this.state.searchKeyword.length > 0) {
            resetBtn = <button type="reset" className="btn-reset"></button>
        }

        return (
            <>
                <header>
                    <h2 className="container">검색</h2>
                </header>

                <div className="container">
                    <form>
                        <input 
                            type="text" 
                            placeholder="검색어를 입력하세요" 
                            autoFocus 
                            value={this.state.searchKeyword}
                            onChange={event => this.handleSearchKeyword(event)}
                        />
                        {resetBtn}
                    </form>
                </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
