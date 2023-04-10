let Tom = {
    age : 16,
    id : 12345,
    number : +380681234567,
    mail : "tom.johnson@gmail.com",
    MailIsConfirmed : true,
    orders : [
        {
            name : "Tablet",
            price : 2000,
            ammount : 1
        }
    ],
    sum : 2000
}
let newOrder = {
    name : "TV",
    price : 4444,
    ammount : 1,
    discount : 444
}
user = {
    ...Tom,
    orders: [
        Tom.orders,
        newOrder
    ],
    sum: Tom.sum + newOrder.price * newOrder.ammount - newOrder.discount
}
console.log(user)
