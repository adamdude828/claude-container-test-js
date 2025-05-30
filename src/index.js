function authCheck(token) {
    if (!token) {
        return false;
    }
    
    return true;
}

console.log('Hello from simple test container!');

setInterval(() => {
    console.log('Container is running...');
}, 5000);