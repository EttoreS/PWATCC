import React from "react";

class Binary extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            item: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('item', this.state.item)

        console.log(this.props.array)
        
        
        binarySearch(this.props.array, this.state.item)
    }

    handleChange = (event) => {
        this.setState({
            item: event.target.value
        });
    }

    componentDidMount(){
        this.props.array.sort(function (a, b) {
            return a - b;
        });
    }

    render(){
        return(
            <div>
                <h3>BUSCA BINARIA</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" value={this.state.item} onChange={this.handleChange}/>
                    <button>Procurar</button>
                </form>
            </div>
        )
    }
}


function binarySearch(arr, i) {
    console.log('array',arr)
        var mid = Math.floor(arr.length / 2);
        console.log(arr[mid], i);
        
        if (arr[mid] == i) {
            console.log('match', arr[mid], i);
            return arr[mid];
        } else if (arr[mid] < i && arr.length > 1) {
            console.log('mid lower', arr[mid], i);
            return binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
        } else if (arr[mid] > i && arr.length > 1) {
            console.log('mid higher', arr[mid], i);
            return binarySearch(arr.splice(0, mid), i);
        } else {
            console.log('not here', i);
            return -1;
        }
        
}

export default Binary;