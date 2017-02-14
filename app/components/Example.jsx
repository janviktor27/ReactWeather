var React = require('react');

// OLD WAY
// var Example = React.createClass({
//   render: function () {
//     return(
//       <h3>Example Component</h3>
//     );
//   }
// });

var Example = (props) => {
  return (
    <div>
      <h3>Example Component !</h3>
      <p>Welcome to example page</p>
    </div>
  );
}
module.exports = Example;
