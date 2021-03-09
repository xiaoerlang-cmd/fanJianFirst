import logo from './assets/imgs/logo.png'
import './assets/css/my.css'

const image = new Image()
image.src = logo
document.body.appendChild(image)
console.log('webpack自动启动成功');
document.getElementById('root').innerHTML = '<h1>Hello444</h1>'