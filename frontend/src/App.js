import React from 'react';
import axios from 'axios';
  
class App extends React.Component {
  
    state = {
        details : [],
    }
  
    componentDidMount() {
  
        let data ;
  
        axios.get('http://localhost:8000/welcome')
        .then(res => {
            data = res.data;
            this.setState({
                details : data    
            });
        })
        .catch(err => {})
    }
  
  render() {
    return(
      <div>
            <div>
            <div >
                  <div >
                        <h1>{this.state.details.message} </h1>
                  </div>
            </div>
            </div>
      </div>
      );
  }
}
  
export default App;