let vm = Vue.createApp({
    data() {
        return {
            message: 'Hello world!',
        };
    },
    // template: ``,
});

vm.mount('#app');

// let vm2 = Vue.createApp({
//     data() {
//         return {
//             message: 'Hello world!',
//         };
//     },
//     render() {
//         return Vue.h('h1', this.message);
//     },
// });

// vm2.mount('#app2');
