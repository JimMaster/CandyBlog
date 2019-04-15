import lodash from 'lodash';
import './style.css'
import imgICon from '../image/test.png'
import printMe from './print.js'
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button')
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');
  var icon = new Image();
  icon.src = imgICon
  element.appendChild(icon)
  btn.innerHTML = 'Click'
  btn.onclick = printMe
  element.appendChild(btn)
  return element;
}

document.body.appendChild(component());
// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accetpp the update')
//     printMe()
//   })
// }