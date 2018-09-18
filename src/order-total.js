function orderTotal(fetch, order) {
    return fetch("http://localhost:3000/vat")
        .then((data) => data.rates.standard.value)
        .then((vat) => {
            return order.items.reduce((accu, cur) => {
                return cur.price * (cur.quantity || 1) + accu
            }, 0) * (1 + vat / 100)
        }
        )
}
module.exports = orderTotal;
