import React from 'react'
import ToDoItem from './ToDoItem'
import todoData from './todoData'
class MainContent extends React.Component{
    constructor(){
        super();
        this.state ={
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
            this.setState(prevState => {
                const todosWithChangeHandled = prevState.todos.map(item => {
                    if(item.id === id) {
                        item.completed = !item.completed
                    }
                    return item
                })
                return {
                    todos: todosWithChangeHandled
                }
            })
    }
    render(){
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />)
        return(
            <div className='App-main'>
                {todoItems}
            </div>
        )
    }
}
export default MainContent