# Hello, World!

# React Test

```bash
cd client 
npm i
npm start
```

# Client-side POST Requests

```js
sendRequest(
    'POST',
    'http://localhost:8080/login',
    {
        username: username,
        password: password
    }
)

sendRequest(
    'POST',
    'http://localhost:8080/buy-pages',
    {
        studentId: getUser(),
        numOfPages: 100,
        unitPrice: 10,
        paymentMethod: paymentMethod
    }
)
```