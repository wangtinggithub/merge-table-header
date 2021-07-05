import mergeTableHeader from './components/index'
const coms = [mergeTableHeader]
const install=(Vue)=>{
    coms.forEach(com=>{
        Vue.component(com.name,com)
    })
}
export default install
