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
          <div className="row">
            <div className="large-12 columns">
              <div className="row collapse">
                <div className="small-10 columns">
                  <input placeholder="Search City" type="text" ref="inpLocation"/>
                </div>
                <div className="small-2 columns">
                  <button className="button postfix hollow" type="submit">Search</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
});
module.exports = WeatherForm;
