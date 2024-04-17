
let Vue
class Store {
    constructor(options) {
        this.vm = new Vue({
            data: {
                state: options.state || {}
            }
        })


        let getters = options.getters || {}
        this.getters = {}
        Object.keys(getters).forEach(item => {
            Object.defineProperty(this.getters, item, {
                get: () => {
                    return getters[item](this.state)
                }
            })
        })

        let mutations = options.mutations || {}
        this.mutations = {}
        Object.keys(mutations).forEach(item => {
            this.mutations[item] = (args) => {
                mutations[item](this.state, args)
            }
        })


        let actions = options.actions || {}
        this.actions = {}
        Object.keys(actions).forEach(item => {
            this.actions[item] = (args) => {
                actions[item](this, args)
            }
        })


        const store = this
        const { commit } = this
        this.commit = function (type, payload) {
            // this指向绑定住了
            commit.call(store, type, payload)
        }
    }

    get state() {
        return this.vm.state
    }

    dispatch(type, payload) {
        this.actions[type](payload)
    }


    // commit = (type, payload) => {
    //     this.mutations[type](payload)
    // }

    commit(type, payload) {
        console.log('==>Get this', this);
        this.mutations[type](payload)
    }
}

// 定义install方法 Vue.use 需要用到
function install(_Vue) {
    console.log('111');
    if (Vue && Vue === _Vue) {
        console.error('只能vue.use一次');
        return
    }
    Vue = _Vue
    _Vue.mixin({
        beforeCreate() {
            console.log('==>Get this.$options', this.$options);
            // 根组件存在store 
            if (this.$options && this.$options.store) {
                this.$store = this.$options.store
            } else {
                // 从父组件获取
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}


export default {
    Store,
    install
}