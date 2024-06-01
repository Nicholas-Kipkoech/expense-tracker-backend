import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nickey968@gmail.com",
    pass: "xzyrddaulefhtnch",
  },
});

export async function sendEmail(subject, html, recieverEmail) {
  const info = await transporter.sendMail({
    from: "nickey968@gmail.com",
    html: html,
    subject: subject,
    to: recieverEmail,
  });
  console.log(info.messageId);
}

export async function sendTotalExpenseToday(
  subject,
  firstName,
  secondName,
  expenseTotal
) {
  const html = `

<div style={{ont-family: Arial, sans-serif;
font-size: 24px;
color: #333;
background-color: #f9f9f9;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
width: "auto";
text-align: center;}}> Dear ${firstName} ${secondName} Your total expense is KSH ${expenseTotal}</div>


  
  `;

  await sendEmail(subject, html, recieverEmail);
}
