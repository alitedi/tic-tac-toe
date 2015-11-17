'use strict';

var React = require('react');

var boxStyle = {
    height: 100,
    width: 100
};

var timerValue=300;


var Box = React.createClass({

'componentWillMount':function onComponentWillMount(){
        var self=this;
        this.timer=setInterval(function onTimer(){
            self.setState({
            'value': self.state.value==='X' ? 'O' : 'X'
        });
        },timerValue );
    },
    /*componentWillMount: function(){
        var old_this = this;
        this.timer = setInterval(function(){
        var oldValue = old_this.state.value;
        var newValue = oldValue === 'X' ? 'O': 'X';
        old_this.setState({
        value: newValue
        });
        }, timerValue);
    },*/
    componentWillUnmount: function(){
        clearInterval(this.timer);
    },
    getInitialState: function() {
        return {value: this.props.initialValue};
    },
    'render': function onRender () {
    return (
        <div>
            <button style={boxStyle}>{this.state.value}</button>
        </div>
    );
   }
});

React.render(<Box initialValue ={'X'}/>, document.body);
