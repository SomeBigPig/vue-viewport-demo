<template></template>

<script>
export default {
    created() {
        // this.linkInvoke()
        // this.allInvoke()
        // this.raceInvoke()
        this.runAsync4()
    },
    methods: {
        // all用法, 当所有异步任务都执行完后执行
        allInvoke: function() {
            let _this = this
            Promise.all([_this.runAsync1(), _this.runAsync3(), _this.runAsync2()]).then(results => {
                console.log(results)
            })
        },
        // race用法, 当第一个异步任务执行完后执行
        raceInvoke: function() {
            let _this = this
            Promise.race([_this.runAsync1(), _this.runAsync2(), _this.runAsync3()]).then(result => {
                console.log(result)
            })
        },
        // 链路调用
        linkInvoke: function() {
            let _this = this
            _this.runAsync1().then(data=>{
                console.log(data)
                return _this.runAsync2()
            }).then(data=>{
                console.log(data)
                return _this.runAsync3()
            }).then(data=>{
                console.log(data)
            })
        },
        runAsync1: function(){
            // 返回一个Promise对象
            // 传入两个方法,
            let p = new Promise(function(resolve, reject) {
                setTimeout(function(){
                    console.log('异步任务1执行完成');
                    resolve('异步任务返回数据1');
                }, 2000);
            })
            return p
        },
        runAsync2: function() {
            let p = new Promise(function(resolve, reject) {
                setTimeout(function(){
                    console.log('异步任务2执行完成');
                    resolve('异步任务返回数据2');
                }, 1000);
            })
            return p
        },
        runAsync3: function() {
            let p = new Promise(function(resolve, reject) {
                setTimeout(function(){
                    console.log('异步任务3执行完成');
                    resolve('异步任务返回数据3');
                }, 2000);
            })
            return p
        },
        // resolve参数为另一个promise(p2)则,Promise的reject和reslove根据p2的状态来invoke
        runAsync4: function() {
            let p1 = new Promise(function(resolve, reject) {
                console.log('p1')
                // resolve('p1 reslove')
                reject('p1 reject')
            })
            let p2 = new Promise(function(resolve, reject) {
                console.log('p2')
                resolve(p1)
            })
            p2.then(data => {
                console.log('p2:'+data)
            }, error => {
                console.log('p2 reject:' + error)
            })
            p1.then(data => {
                console.log('p1 resolve:' + data)
            },error => {
                console.log('p1 reject:' + error)
            })
        }
    }
}
</script>

<style>
</style>
