'use strict';

var React = require('react');

var boxStyle = {
    height: 100,
    width: 100
};

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
        <div>
            <button style={boxStyle}>{this.props.value}</button>
        </div>
    );
  }
});

React.render(<Box value ='X'/>, document.body);
