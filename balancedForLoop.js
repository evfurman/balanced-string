const balance = (str) => {

    const stack = [];

    for ( let x=0; x<str.length; x++) {
        let val = str[x];

        if (val === '{') {
            stack.push(x);

        } else if (val === '}' && stack.length > 0) {
            stack.pop();

        } else if (val === '}' && stack.length === 0) {
            stack.push(x);
	}	
    }

    if (stack.length === 0) {
        return -1;

    }
    return stack[0];
}

const str = process.argv[2];

console.log(balance(str));
