import React, {Component} from 'react';
import List from "./List"


class TodoList extends Component {

    constructor(props){
        super(props)

        this.state = {
            todo:'',
            items:[]
        }
    }

    handleChangeTodo = (event) => {
        this.setState({
            todo: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            todo: '',
            items: [...this.state.items, this.state.todo]
        });
        setTimeout(()=>{
            localStorage.setItem("list", JSON.stringify(this.state.items)),500
        })
    }
    render() {
        return(
            <section>
                <header>
                    <h1>TodoList</h1>
                </header>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.todo} onChange={this.handleChangeTodo} />
                        <button>add</button>
                    </form>
                </div>
                <div>
                    <button onClick={this.removeOfList.bind(this)}>
                        remover
                    </button>
                </div>
                <div>
                    <List items={this.state.items}  />
                </div>
            </section>
        )
    }

    removeOfList(e){
        //ver pq ta removendo tudo
        let array = [...this.state.items]
        var index = array.indexOf(e.target.value)
        array.splice(index, 1);
        this.setState({items: array});
        setTimeout(()=>{
            localStorage.setItem("list", JSON.stringify(this.state.items)),500
        })
    }

}

export default TodoList;