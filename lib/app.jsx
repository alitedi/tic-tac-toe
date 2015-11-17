'use strict';

var React = require('react');

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
        <div>
            <button>{this.props.value}</button>
        </div>
    );
  }
});

React.render(<Box value ='X'/>, document.body);
