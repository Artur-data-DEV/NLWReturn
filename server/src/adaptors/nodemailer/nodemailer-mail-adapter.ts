import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2fd71d0c714d86",
    pass: "67f5e246b528c2"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Artur Campos <arturcamposba@gmail.com>",
      subject,
      html: body
    });
  }
}
