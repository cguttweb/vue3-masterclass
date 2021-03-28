import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const myApp = createApp(App) // create new independent instances so each instance is isolated and can have its own plugins etc
myApp.use(router)

// How to config all base components to be globally registered?
const requireComponent = require.context('./', true, /Base[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  myApp.component(baseComponentName, baseComponentConfig)
})

// globally register a base component using app.component method accepts 2 arguments first is the name 2nd is the component we've just imported
// myApp.component('BaseDate', BaseDate)

myApp.mount('#app')
