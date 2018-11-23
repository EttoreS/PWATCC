import React, { Component } from "react";

class List extends Component{

    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }

    componentWillMount(){
        this.getDataLocal()
    }
    
    render() {
        console.log('LIST', this.state.list)
        console.log("props",this.props.items)
        return(
            <ul>{
                this.buildList()
            }</ul>
        )
        
    }

    getDataLocal(){
        let list = JSON.parse( localStorage.getItem('list'))
        console.log('list local', list)
        if(list){
            this.setState({
                list: [...list]
            })
        }else{
            this.setState({
                list: [...this.props.items]
            })
        }
    }

    buildList(){
        console.log('build')
        if(this.props.items.length > 0){
            console.log('if')
            return this.props.items.map((data, index)=>{
                return(
                    <li key={index}>{data}</li>
                )
            })
        }else{
            console.log('else porra')
            return this.state.list.map((data, index)=>{
                return(
                    <li key={index}>{data}</li>
                )
            })
        }
    }
}

export default List;