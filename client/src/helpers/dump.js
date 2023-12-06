export default function dump(value, message) {
    console.log('Value dumped[' + message + '] --> \n' + value);
}

export function dumpObject(object, message = '') {
    console.log('Object dumped [' + message + '] --> \n' + JSON.stringify(object));
}