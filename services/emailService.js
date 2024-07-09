// Importing necessary modules and configurations
const nodemailer = require("nodemailer");
const { emailUser, emailPass } = require("../config/config");

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

// Send an OTP email
exports.sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: emailUser,
    to: email,
    subject: "OTP for account verification",
    text: `Your OTP is ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};
