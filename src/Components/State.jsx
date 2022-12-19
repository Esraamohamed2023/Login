import React, { Component } from 'react'

export default class State extends Component {
state={
name:"esraa",
age:24,

};
Change=()=>{
this.setState({name:"shimaa",age:30});
};
Unchange=()=>{
this.setState({name:"esraa",age:24});;
};
  render() {
    return (
<React.Fragment>
<div>{this.state.name}</div>
<div>{this.state.age}</div>
<button onClick={this.Change}>Change</button>
<button onClick={this.Unchange}>Change</button>
</React.Fragment>
    )
  }
}
