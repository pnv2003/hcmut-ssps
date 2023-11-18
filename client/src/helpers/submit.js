export default async function submitForm(data) {
    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)        
        });

        if (response.ok) {
            console.log('Form submitted!');
        } else {
            console.error('Failed to submit!');
        }
    } catch(error) {
        console.error('Error submitting form:', error);
    }
};