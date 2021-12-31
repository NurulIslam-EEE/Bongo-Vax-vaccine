let arr = [
    { name: 'Rana', age: 50, temperature: 98 },
    { name: 'Rana', age: 41, temperature: 98 },
    { name: 'Rana', age: 51, temperature: 98 },
    { name: 'Rana', age: 40, temperature: 98 },
    { name: 'Rana', age: 77, temperature: 98 },
    { name: 'Rana', age: 45, temperature: 98 },
    { name: 'Rana', age: 31, temperature: 98 },
    { name: 'Rana', age: 88, temperature: 98 },
    { name: 'sunil', age: 20, temperature: 98 },
    { name: 'Biplap', age: 31, temperature: 98 },
    { name: 'Rana', age: 35, temperature: 98 },
    { name: 'sunil', age: 20, temperature: 98 },
    { name: 'Biplap', age: 30, temperature: 98 },

];

function vaxTrail(numbers) {
    let result2 = {
        A: [],
        B: [],
        C: [],
        D: []
    }
    let m = [];
    let x = [];
    let y = [];
    let z = [];
    //looping the given array
    numbers.map(a => {

        if (a.age >= 20 && a.age <= 30) {
            m.push(a)

        } else if (a.age >= 31 && a.age <= 40) {
            x.push(a)
        } else if (a.age >= 41 && a.age <= 50) {
            y.push(a)
        } else if (a.age > 50) {
            z.push(a)
        }
    })
    //sorting small age to big 
    const i = m.sort((a, b) => a.age - b.age);
    result2.A = i;
    const j = x.sort((a, b) => a.age - b.age);
    result2.B = j;
    const k = y.sort((a, b) => a.age - b.age);
    result2.C = k;
    const l = z.sort((a, b) => a.age - b.age);
    result2.D = l;
    return result2

}

const result = vaxTrail(arr)
console.log(result);




