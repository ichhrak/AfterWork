// src/index.ts
import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.post('/login', (req: Request, res: Response) => {
    const { email, password } = req.body;
    const validEmailAndPassword = [
        { email: 'customer', password: 'password' },
        { email: 'poster', password: 'password' }
    ];

    const user = validEmailAndPassword.find(
        user => user.email === email && user.password === password
    );

    if (user) {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
