function orderTotal(fetch, order) {
    const sumOrders = order =>
        order.items.reduce((accu, cur) =>
            cur.price * (cur.quantity || 1) + accu
            , 0);
    return fetch('http://localhost:3000/vat')
        .then((data) => data.rates.standard.value)
        .then((vat) =>
            sumOrders(order) * (1 + vat / 100)
        );
}
module.exports = orderTotal;
