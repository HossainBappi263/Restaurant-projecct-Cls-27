let color = [ "red", "green", "blue" , "violet", "indigo"]
color.push("blue")
console.log(color)

let colors =[ "red", "green", "blue" , "violet", "indigo"]
colors.pop()
console.log(colors)

let teal = [ "red", "green", "blue" , "violet", "indigo"]
teal.unshift("orange")
console.log(teal)

let teals = [ "red", "green", "blue" , "violet", "indigo"]
teals.shift()
console.log(teals)

// push, pop, unshift, shift 

let text= "Hello World"
console.log(text.toLowerCase())

let name ="Hossain Bappi"
console.log(name.split(" "))

let names= "Bappi"
console.log(names.slice(0, 3))


// Restaurant 

let orders =[
    {dish: "kaluvona", price: 100, spicy: true, qty:5 },
    {dish: "vorta", price: 30, spicy: false, qty:3 }

]
let myForeach= orders.forEach((orders, index)=>{
console.log(`#${index+1}: ${orders.qty}x ${orders.dish}`);
})

let myMap= orders.map((orders)=>`${orders.dish}: $${orders.qty * orders.price}`)
console.log(myMap)

let myFilter= orders.filter((orders)=>orders.spicy+orders.price)
console.log(myFilter)