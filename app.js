const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: '',
        };
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        submitForm() {
            alert('test form!');
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
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
