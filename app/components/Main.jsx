var React = require('react');
var Nav = require('Nav');

/*
var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});
*/

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row text-center">
        <div className="medium-6 large-6 columns">
          {props.children}
        </div>
      </div>
    </div>
  );
};


module.exports = Main;
