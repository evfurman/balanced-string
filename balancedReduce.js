const balance = (str) => {

    const strArr = str.split('');

    const locs = strArr.reduce((acc,val,index) => {

    if (val === '{') {
        acc.push(index);

    } else if (val === '}' && acc.length > 0 ) {
        acc.pop();

    }
    return acc;

},[]);

    if (locs.length === 0) {
        return -1;

    }
    return locs[0];
}

const str = process.argv[2];

console.log(balance(str));
