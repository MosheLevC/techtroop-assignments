const exercise1 = () => {
    (5 > 2) && false // false
    !("knife" === "sword") // true
    (1 < 2) || (-1 > -1) || !false // true
    "" // false
    (31 % 5) == "1" // true
    !!true //true
    "5th Avenue" != "5th Avenue" // false
    52 !== "52" //true
    (undefined || null) //false
}

const exercise2 = () => {
    let a = 3
    let c = 0
    let b = a //a === 3, c === 0, b === 3
    b = a //b === 3
    c = a //c === 3
    b = c //b === 3
    a = b //a === 3
}
