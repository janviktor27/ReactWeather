var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function (){
    return {
      isLoading: false
    };
  },
  handleSearch: function (location){
    var detoy = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(
      function (temp){
        detoy.setState({
          location: location,
          temp: temp,
          isLoading : false
        });
    },function (errorMessage){
      alert(errorMessage);
      detoy.setState({isLoading: false});
    });
  },
  render: function () {
      var {location, temp, isLoading} = this.state;
      function renderMessage(){
        if(isLoading){
          return <img  width="90px" src="https://www.groundwala.in/media/imgs/balls_loading.gif" />;
        }else if(temp && location){
          return <WeatherMessage location={location} temp={temp}/>;
        }
      }
    return(
      <div className="column large-6 text-center">
        <div className="callout">
            <h3>GET WEATHER</h3>
            <WeatherForm onSearch={this.handleSearch} />
            {renderMessage()}
          </div>
      </div>
    );
  }
});
module.exports = Weather;
