var React = require('react');
// OLD WAY
// var About = React.createClass({
//   render: function () {
//     return(
//       <h3>About Component</h3>
//     );
//   }
// });
var About = (props) => {
  return (
    <div>
      <h3>About Component</h3>
      <p>Welcom to about page.</p>
    </div>
  );
}
module.exports = About;
