import Vue from 'vue'
import App from './App.vue'
import { Table, TableColumn,} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import mergeTableHeader from 'merge-table-header'
Vue.config.productionTip = false
Vue.use(Table)
// Vue.use(mergeTableHeader)
Vue.use(TableColumn)
new Vue({
  render: h => h(App),
}).$mount('#app')
