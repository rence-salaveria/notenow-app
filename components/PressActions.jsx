class PressActions {
    static sayHello() {
        console.log('Hello World');
    }

    static clickMe() {
        // windows only / browsers
        // not compatible to virtual device api
        alert('Clicked button!');
    }

    static register() {
        alert('Register Screen');
    }
}

export default PressActions;
