const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Gustavo',
            middleName: '',
            lastName: 'Perez',
            url: 'https://google.com',
            raw_url: '<a href="http://google.com" target="_blank">Google </a>',
            age: 31,
        };
    },
    methods: {
        increment() {
            this.age++;
        },
        updateLastName(message, event) {
            console.log(message);
            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value;
        },
    },
    computed: {
        fullName() {
            return `${this.firstName} ${
                this.middleName
            } ${this.lastName.toUpperCase()}`;
        },
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 31;
            }, 3000);
        },
    },
}).mount('#app');
