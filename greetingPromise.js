function greet(name){
    return new Promise((resolve)=>{
        const greeting = `Hello, ${name}!`;
        resolve(greeting);
    });
};

greet("Hanish").then((message)=> console.log(message));