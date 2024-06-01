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

<div class="total-expense"> Dear ${firstName} ${secondName} Your total expense is KSH ${expenseTotal}</div>


  
  `;

  await sendEmail(subject, html, recieverEmail);
}
