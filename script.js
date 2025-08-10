arr = [
    { test: ['a', 'b', 'c', 'd'] },
    { test: ['a', 'b', 'c'] },
    { test: ['a', 'b', 'd'] },
    { test: ['a', 'c', 'd'] },
    { test: ['a', 'b'] },
    { test: ['a', 'c'] },
    { test: ['a', 'd'] },
    { test: ['a', 'b', 'k', 'e', 'e'] },
]
// output: [a,b,c,d,e,k]

const fl = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].test.length; j++) {
        if (fl.indexOf(arr[i].test[j]) === -1) {
            fl.push(...arr[i].test[j])
        }
    }
}
const func = [...new Set(fl)].sort();

console.log(func);