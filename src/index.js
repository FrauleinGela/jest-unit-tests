import orderTotal from './order-total';
function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = ['Hello', 'webpack', orderTotal].join(' ');

    return element;
}

document.body.appendChild(component());
