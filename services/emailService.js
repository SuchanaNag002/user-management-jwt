// Importing necessary modules and configurations
const nodemailer = require("nodemailer");
const { emailUser, emailPass } = require("../config/config");

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

// Function to send OTP email
exports.sendOtpEmail = async (email, otp) => {
  try {
    const mailOptions = {
      from: emailUser,
      to: email,
      subject: "OTP for account verification",
      text: `Your OTP is ${otp}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error("Failed to send OTP email");
  }
};
