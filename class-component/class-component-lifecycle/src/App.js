import React from 'react';
import './App.css';
import User from './components/User';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
  }

  handleToggle = () => {
    this.setState({ isShow: !this.state.isShow })
  }

  render() {
    return (
      <div className="App" >
        <button onClick={this.handleToggle}>{this.state.isShow ? "Hide" : "Show"}</button>
        {/* {this.state.isShow && <User />} */}
        <User email={"hien@techmaster.vn"}/>
      </div>
    );
  }
}

export default App;
