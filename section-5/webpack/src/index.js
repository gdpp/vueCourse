import style from './style.css';

const arr = [1, 2, 3],
    codeNext = () => console.log(...arr);

console.log('Hello, World! without webpack config');

codeNext();

alert('Hola');
