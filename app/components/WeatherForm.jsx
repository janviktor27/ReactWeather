var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e){
    e.preventDefault();

    var location = this.refs.inpLocation.value;

    if(location.length > 0){
      this.refs.inpLocation.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="inpLocation"/>
            <button type="submit">Get Weather</button>
        </form>
      </div>
    );
  }
});
module.exports = WeatherForm;
