/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let temp = [];
        arr.push(temp);
    }

    let answersArray = [];
    let lastAnswer = 0;

    for (let i = 0; i < queries.length; i++) {
        let idx = (queries[i][1] ^ lastAnswer) % n;
        if (queries[i][0] === 1) {
            arr[idx].push(queries[i][2]);
        } else {
            lastAnswer = arr[idx][queries[i][2] % arr[idx].length];
            answersArray.push(lastAnswer);
        }
    }
    return answersArray;
}

///////////////////////////////////////////////////////////////////////////////
const dynamicArray = (n, queries) => {
    const arr = [...Array(n)].map(() => Array())
    const res = []
    let ans = 0
    
    for (let [q, x, y] of queries) {
        const idx = (x ^ ans) % n
        
        if (q === 1)
            arr[idx].push(y)
        else {
            ans = arr[idx][y % arr[idx].length]
            res.push(ans)
        }
    }
    
    return res
}
