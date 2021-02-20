/*
 * @Author: zaqvil
 * @Date: 2021-01-14 16:05:07
 * @FilePath: \projects\prerender-spa-plugin\examples\vue2-webpack-simple\src\main.js
 * @LastEditTime: 2021-01-19 14:01:42
 * @LastEditors: zaqvil
 */
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    // document.dispatchEvent(new Event('render-event'))
  }
})
