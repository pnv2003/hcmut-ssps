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

export default async function sendRequest(method, url, data) {
    try {
        const response = await fetch (url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return response;
    } catch(error) {
        console.error('>>> ' + error + ' <<<');
    }
}