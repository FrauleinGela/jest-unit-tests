const orderTotal = require('./order-total');
const fakeFetchUrl = jest.fn((url) => {
	expect(url).toBe('http://localhost:3000/vat');
	return Promise.resolve({
		rates: {
			standard: {
				value: 19
			}
		}
	});
});

describe("right orderTotal call", () => {
	it('sum total of orders without quantity', () => {
		orderTotal(fakeFetchUrl, {
			items: [{ name: 'T-shirt', price: 40 }]
		}).then(result => {
			expect(result).toBe(40 * 1.19);
			expect(fakeFetchUrl).toBeCalledWith('http://localhost:3000/vat');
		});

	})
})
describe('orderTotal', () => {
	it('sum total of orders', () => {
		orderTotal(fakeFetchUrl, {
			items: [{ name: 'Bag', quantity: 2, price: 20 }]
		}).then(result => {
			expect(result).toBe(20 * 2 * 1.19);
		});
	});

	it('sum total of orders without quantity', () => {
		orderTotal(fakeFetchUrl, {
			items: [{ name: 'T-shirt', price: 40 }]
		}).then(result => expect(result).toBe(40 * 1.19));
	});
});

