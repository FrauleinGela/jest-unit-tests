const orderTotal = require('./order-total')

describe('orderTotal', () => {
    fakeFetchUrl = (url) => {
        expect(url).toBe('http://localhost:3000/vat');
        return Promise.resolve({
            rates: {
                standard: {
                    value: 19
                }
            }
        })
    }
    it('sum total of orders', () => {
        orderTotal(fakeFetchUrl, {
            items: [{ name: 'Bag', quantity: 2, price: 20 }]
        }).then(result => expect(result).toBe(20 * 2 * 1.19));
    })

    it('sum total of orders without quantity', () => {
        orderTotal(fakeFetchUrl, {
            items: [{ name: 'T-shirt', price: 40 }]
        }).then(result => expect(result).toBe(40 * 1.19));
    })
})

