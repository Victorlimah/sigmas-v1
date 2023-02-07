import dotenv from "dotenv";
import { MailService } from "@sendgrid/mail";
dotenv.config();
export function sendEmail(userData) {
    var emailData = {
        email: userData.email,
        code: userData.code
    };
    sendAuthenticationEmail(emailData);
}
export function sendAuthenticationEmail(_a) {
    var email = _a.email, code = _a.code;
    var sgMail = new MailService();
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    var msg = {
        to: email,
        from: process.env.EMAILSENDLER,
        subject: 'Código de autorização LinkedRooms',
        text: "Seu c\u00F3digo de autentica\u00E7\u00E3o \u00E9: ".concat(code),
        html: "<h2>Seu c\u00F3digo de autentica\u00E7\u00E3o \u00E9: ".concat(code, "<h2>")
    };
    if (msg.to.includes('dcx.ufpb.br')) {
        sgMail
            .send(msg)
            .then(function () {
            console.log('Email sent');
        })["catch"](function (error) {
            console.error(error);
        });
    }
    else {
        throw { type: "unauthorized", message: "email inválido" };
    }
    ;
}
export function processUserName(email) {
    var atLocation = email.indexOf("@");
    var dotLocation = email.indexOf(".");
    var unseparatedName = email.slice(0, atLocation);
    var separatedName = unseparatedName.replace(".", " ");
    var processedName = separatedName[0].toUpperCase() + separatedName.slice(1, dotLocation + 1) +
        separatedName[dotLocation + 1].toUpperCase() + separatedName.slice(dotLocation + 2);
    return processedName;
}
