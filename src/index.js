import styles from './index.css'
console.log(styles) // { red: '...' }
window.onload = () => document.body.classList.add(styles.red)

const obj = { a: 1, b:2, c:3 }
const { a, ...rest } = obj
const spread = { ...rest, d: 4 }
console.log(rest) // { b:2, c: 3}
console.log(spread) // { b:2, c: 3, d: 4 }
