import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
        state: {
            token: '',
            cararry: JSON.parse(localStorage.getItem('cararry')) || [], //存储购物车商品的数据
        },
        mutations: {
            //设置vuex的token
            settoken(state, token) {
                state.token = token
            },
            //添加商品到购物车
            tocar(state, tag) {
                let goods = state.cararry.find(v => v.title == tag.label)
                if (goods) {
                    goods.carCount += 1
                } else
                    state.cararry.push({ title: tag.label, carCount: 1 })

            },
            //增加商品
            caradd(state, index) {

                if (state.cararry[index].carCount != 'undefined') {
                    state.cararry[index].carCount++
                }

            },
            //减少商品

            carremove(state, index) {
                if (state.cararry[index].carCount > 1) {
                    state.cararry[index].carCount--
                } else {
                    if (window.confirm('确定从购物车移出商品吗'))
                        state.cararry.splice(1)
                }
            },
            //清空购物车
            carclear(state) {
                state.cararry = []
            }

        },
        actions: {},
        //modules: {},
        //相当于vue的计算属性compute
        getters: {
            countsum: state => {
                let num = 0
                state.cararry.forEach(v => {
                    num += v.carCount
                })
                return num
            }
        }
    })
    //监听每次调用mutations的时候，都会进入这个方法，然后我们可以做一些我们自己喜欢做的事情
store.subscribe((mutations, state) => { localStorage.setItem('cararry', JSON.stringify(state.cararry)) })

export default store