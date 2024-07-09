// Importing necessary modules and configurations
const nodemailer = require("nodemailer");
const { emailUser, emailPass } = require("../config/config");

// Setup the nodemailer transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

// Send OTP email
exports.sendOtpEmail = async (email, otp) => {
  // Set up email options
  const mailOptions = {
    from: emailUser,
    to: email,
    subject: "OTP for account verification",
    text: `Your OTP is ${otp}`,
  };

  // Send the OTP email
  await transporter.sendMail(mailOptions);
};
