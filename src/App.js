import React, {Component} from 'react';

export class App extends Component {
  constructor(){
    super()
    this.state = {
      words: 0
    }
    this.onKeyPress = this.onKeyPress.bind(this)
  }
  onKeyPress(){
    var text = this.refs.input.getDOMNode().innerHTML,
    words = text.split(' ').length;
    this.setState({words: text==[]?0:words});
  }
  componentDidMount(){
    this.refs.input.getDOMNode().focus()
  }
  render () {
    return (
      <div style={{fontFamily: 'monospace'}}>
        <div style={{fontWeight: 500, fontSize: '1.8rem', textAlign: 'center'}}>word count</div>
        <div ref='input' onKeyUp={this.onKeyPress} style={{backgroundColor: 'rgba(236, 235, 189, 0.41)', color:'#961936', fontSize: '1.6rem', height:'55%', margin: '20px auto', overflow: 'auto', padding: '20px', width: '80%'}} contentEditable='true'></div>
        <div style={{width: '80%', margin: '0 auto'}}>
          <span style={{fontSize: '1.8rem', fontWeight:'600'}}>{this.state.words}</span>
          <span>{this.state.words==1?' word':' words'}</span>
        </div>
    </div>
    );
  }
}
