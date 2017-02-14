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
        <div className="columns large-4">
          <h3>
            A B O U T &nbsp;
            <span className="label alert"><strong>PUDS WEATHER</strong></span>
          </h3>
          <hr/>
          <div className="callout success">
            This is a simple <strong>practice app </strong>
          developed by <a href="https://www.facebook.com/supernanouser" target="_blak">Jan Viktor Adora</a>.
          </div>
        </div>
        <div className="columns large-8">
          <h3>TOOLS USED</h3>
          <div className="callout success">
            <a href="https://facebook.github.io/react" target="_blank">
              <img src="http://www.myfreax.com/content/images/2016/03/React-1-0.png" width="100px" />
            </a>
            <a href="https://webpack.github.io" target="_blank">
              <img src="https://camo.githubusercontent.com/f1d103872f836f33dbff7a74ed819004f792a4ad/687474703a2f2f7765627061636b2e6769746875622e696f2f6173736574732f6c6f676f2e706e67" width="100px" />
            </a>
            <a href="https://nodejs.org/en/" target="_blank">
              <img src="http://www.underconsideration.com/brandnew/archives/node_js_logo_detail.png" width="100px" />
            </a>
            <a href="https://atom.io/" target="_blank">
              <img src="http://www.korecky.org/wp-content/Atom_icon.png" width="100px" />
            </a>
            <a href="http://foundation.zurb.com/" target="_blank">
              <img src="http://quintagroup.com/cms/technology/Images/zurb-foundation.png" width="100px" />
            </a>
          </div>
        </div>
    </div>
  );
}
module.exports = About;
