import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      items: []
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      value: value
    });
  }

  
  handleSubmit = () => {
    const newItem = {
      value: this.state.value
    }
    
    if(newItem.value !== ''){
      this.setState(state => ({
        items: state.items.concat(newItem),
        value: ''
      }));
    }
  }

  handleRemove = (i) => {
    this.state.items.splice(i,1)
    this.setState({items: this.state.items})
  }


  render(){
    return(
      <React.Fragment>
        <input type="text" name="value" placeholder="タスクを入力してください" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>追加する</button>
        <TodoList items={this.state.items} handleRemove={this.handleRemove}/>
      </React.Fragment>
    )
  }
}

class TodoList extends React.Component {
  render(){
    return(
      <React.Fragment>
        <ul>
          {this.props.items.map((item,i) =>(
            <li key={i}>{item.value}<button onClick={this.props.handleRemove}>削除する</button></li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}


export default App;
