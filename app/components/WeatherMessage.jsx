var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var location = this.props.location;
//     var temp = this.props.temp;
//
//     return(
//       <p>{temp} Is the weather in {location}.</p>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
    <p className="text-center">
      <span className="label">{temp}&deg;C</span> is the temp in {location}
    </p>
  );
}
module.exports = WeatherMessage;
