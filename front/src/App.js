import React from 'react';
import axios from 'axios';
import './App.css';
class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      id:0,
      firstTask:''
    }
  }
  componentDidMount(){
    axios.get("http://localhost:8080/api/")
    .then((res)=>{
      this.setState({
        users:res.data
       
      })
    })
  }
  submit(evenet,id){
    console.log(id)
    evenet.preventDefault();
    if(id===0){
      axios.post("http://localhost:8080/api/",{
        firstTask:this.state.firstTask
      }).then(()=>{
        this.componentDidMount();
      })
    }else{
      axios.put("http://localhost:8080/api/",{
        id:id,
        firstTask:this.state.firstTask
      }).then(()=>{
        this.componentDidMount();
      })
    }
  }
  delete(id){
    axios.delete("http://localhost:8080/api/"+id)
    .then(()=>{
      this.componentDidMount();
    })
  }
  render(){
    return (
      
      <div className="App">
         <header>
                 <form id="to-do-form" onSubmit={(e)=>this.submit(e,this.state.id)}>
                    <input value={this.state.firstTask} onChange={(e)=>this.setState({firstTask:e.target.value})} type="text"/>
                    <button type="submit" name="action" >Add 
                  </button>
                </form>
        </header>          
          
        <div className="table">
        <table>
          <thead>
            <tr>
            </tr>
        </thead>

        <tbody>
            {
              this.state.users.map(user =>
                  <tr key={user.id}>
                      <td>{user.firstTask}</td>
                      <td>
                        <button onClick={(e)=>this.delete(user.id)} className="btn waves-effect waves-light " type="submit" name="action">
                          <i className="material-icons ">delete</i>
                        </button>       
                      </td>
                  </tr>
                )
            }
        </tbody>
      </table>
    </div>                             
  </div>
    );
  }
}

export default App;
