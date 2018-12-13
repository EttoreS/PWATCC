import React from "react";

class Binary extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            item: '',
            time: null, 
            msg: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('item', this.state.item)

        console.log(this.props.array)
        
        
        this.triggerFunc()
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
                <p>Result time Binary {this.state.time}</p>
                <p>{this.state.msg}</p>
            </div>
        )
    }
    binarySearch(arr, i) {
        console.log('array',arr)
            var mid = Math.floor(arr.length / 2);
            console.log(arr[mid], i);
            
            if (arr[mid] == i) {
                console.log('match', arr[mid], i);
                this.setState({
                    msg: `encontrou  ${i}`
                })
                return arr[mid];
            } else if (arr[mid] < i && arr.length > 1) {
                console.log('mid lower', arr[mid], i);
                return this.binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
            } else if (arr[mid] > i && arr.length > 1) {
                console.log('mid higher', arr[mid], i);
                return this.binarySearch(arr.splice(0, mid), i);
            } else {
                console.log('not here', i);
                this.setState({
                    msg: `não encontrou  ${i}`
                })
                return -1;
            }  
    }
    triggerFunc(){
        let t0 = performance.now();

        this.binarySearch(this.props.array, this.state.item)

        let t1 = performance.now();
        this.setState({
            time: (t1 - t0)
        })
    }
}



export default Binary;