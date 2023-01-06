import nodemailer from "nodemailer";

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "user.2801@outlook.com",
      password: "Jubileeschool",
    },
  });

  transporter.sendMail(options, (err, info) => {
    if (err) console.log(err);
    return;
  });
};

const emailSender = ({ name, email, phoneNumber, message }) => {
  const options = {
    from: "user.2801@outlook.com",
    to: "shardul.zende@gmail.com",
    subject: "Sending this mail via nodemailer",
  };
};

export default { sendEmail, emailSender };
