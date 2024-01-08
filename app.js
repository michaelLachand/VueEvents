const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
        };
    },
    watch: {
        counter(value) {
            if (value > 4) {
                this.counter = 0;
            }
        }
    },
    computed: {
        fullname() {
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Smith';
        },
    },
    methods: {
        setName(event) {
            this.name = event.target.value;
        },
        add() {
            this.counter++;
        },
        reduce() {
            this.counter--;
        },
        resetInput() {
            this.name = '';
        }
    }
});

app.mount('#events');
