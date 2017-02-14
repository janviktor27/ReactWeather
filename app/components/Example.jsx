var React = require('react');
var {Link} = require('react-router');
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
      <h3 className="text-center">Examples</h3>
      <p>Here are few locations to search.</p>
      <ol>
        <li>
          <Link to='/?location=laoag'>Laoag City</Link>
        </li>
        <li>
          <Link to='/?location=tokyo japan'>Tokyo, Japan</Link>
        </li>
      </ol>
    </div>
  );
}
module.exports = Example;
