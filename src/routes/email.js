const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async(req, res) => {
    const { name, email, phone, message } = req.body;
    contentHTML = `
    <h1>Informacion del usuario</h1>
    <ul>
        <li>Username: ${name}</li>
        <li>User Email: ${email}</li>
        <li>Phone: ${phone}</li>
    </ul>
    <p>${message}</p>
    `;

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "47a0bac592217d",
            pass: "601a7f26e36c97",
        }
    });

    const info = await transport.sendMail({
        from: "'Tinda'<anthonyricse3@gmail.com>",
        to: 'libroestanteria@gmail.com',
        subject: 'servicio en contacto',
        html: contentHTML
    });
    console.log('Message send', info.messageId);
    res.send('Mensaje recibido');
});
module.exports = router;