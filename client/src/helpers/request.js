// export default async function submitForm(data) {
//     try {
//         const response = await fetch('http://localhost:8080/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)        
//         });

//         return response;
//     } catch(error) {
//         console.error('Error submitting form:', error);
//     }
// };

export async function sendGetRequest(path) {
    try {
        const host = 'http://localhost:8080';
        const response = await fetch(host + path, {
            method: 'GET',
            headers: {  
            }
        });

        return response;
    } catch (error) {
        console.error('Cannot send request:' + error);
    }
}

export default async function sendRequest(method, path, data) {
    try {
        const host = 'http://localhost:8080';

        const response = await fetch (host + path, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return response;
    } catch(error) {
        console.error('Cannot send request: ' + error);
    }
}