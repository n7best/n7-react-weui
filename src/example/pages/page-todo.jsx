import React from 'react';
import { createStore } from 'redux';
import Page from '../components/page';
import InputCell from '../../style/components/cells/input-cell';
import CheckboxCell from '../../style/components/cells/checkbox-cell';
import Cells from '../../style/components/cells/cells';
/*inital state for todo */
const initialState = [
	{
		text:'WeUI Simple Todo',
		completed: false,
		id: 0
	}
];

/*reducer for simple todos
addtodo = add item
complete todo = complete*/
function todo(state = initialState, action) {
  switch (action.type) {
  case 'ADD_TODO':
    return [
		{
			id:state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
			completed:false,
			text: action.text
		},
		...state
    ]
  case 'COMPLETE_TODO':
    return state.map((todo) => {
    	return todo.id === action.id ? Object.assign({},todo,{completed: !todo.completed}) : todo;
    });
    	
  default:
    return state
  }
}

/*simple actions*/
function addTodo(text){
	return { type: 'ADD_TODO', text};
}

function completeTodo(id){
	return { type: 'COMPLETE_TODO', id};
}

/*single simple store*/
let store = createStore(todo,initialState);

//views
class TodoPage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TodoPage';
        this.state = {
        	todos:store.getState(),
        	newtext: '',
        }
        this.renderTodos = this.renderTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
    }
	
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({todos:store.getState()});
        });
    }

    completeTodo(event,todo){
		store.dispatch(completeTodo(todo.props.dataid));
    }

    addTodo(event){
    	let text = event.target.value.trim();
    	
    	if(event.key === 'Enter'){
			store.dispatch(addTodo(text));
			this.refs.todoinput.setState({value:''});
    	}
		
    }
	
	renderTodos(){
    	let todos = this.state.todos.map((todos)=>{
    		let completeStyle = todos.completed ? {
			color: '#808080',
			textDecoration: 'line-through'
			} : null;
			return <CheckboxCell key={todos.id} dataid={todos.id} style={completeStyle} label={todos.text} checked={todos.completed} onChange={this.completeTodo}/>
    	});
        
    	return (
			<Cells title="记事列表" form split checkbox>
				{todos}
			</Cells>
    		);
    }

    render() {
        return (
        	<Page title="WEUI 记事本" desc="为微信Web服务量身设计" className="weuiTodo">
				<Cells title="添加记事" form>
					<InputCell name="todoinput" type="text" ref="todoinput" id="todoinput" placeholder="今天需要做什么呢？" autoFocus="true" onKeyDown={this.addTodo}/>
				</Cells>
				{this.renderTodos()}
			</Page>
        	);
    }
}


export default TodoPage;
