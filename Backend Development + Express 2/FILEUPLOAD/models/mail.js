const nodemailer = require('nodemailer')

exports.sendEmail = async (recipientEmail, imageUrl) =>{
    try{
        //transporter
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })

        //send mail
        let info = await transporter.sendMail({
            from:`vishal`,
            to:recipientEmail,
            subject:"New file uploaded on cloudinary",
            html:`<h2>Hello jee</h2> <p>File uploaded  view here : <a href="${imageUrl}">${imageUrl}</a></p>`
        })
    }
    catch (err) {
        console.error("Error sending email:", err);
    }
}