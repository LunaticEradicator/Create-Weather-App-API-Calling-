import './style.css';

function comp() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    // element.textContent = _.join(['Hello', 'webpack'], ' ');
    element.textContent = 'Sike';
    return element;
}
document.body.append(comp());
