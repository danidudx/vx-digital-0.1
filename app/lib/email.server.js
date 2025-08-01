// Email template function
export async function sendContactEmail(formData) {
  // Dynamic import to avoid SSR issues
  const nodemailer = await import("nodemailer");

  // FIXED: Use createTransport (not createTransporter)
  const transporter = nodemailer.default.createTransport({
    host: "visionexdigital.xyz",
    port: 465,
    secure: true,
    auth: {
      user: "system@visionexdigital.xyz",
      pass: "bp&R}VOE;kqm",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const { name, email, company, phone, datetime } = formData;

  const mailOptions = {
    from: "system@visionexdigital.xyz",
    to: "projectfiles201@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FF6E1F;">New Contact Form Submission</h2>
       
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
         
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
              <td style="padding: 8px 0; color: #333;">${
                company || "Not provided"
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #333;">${
                phone || "Not provided"
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Preferred Date/Time:</td>
              <td style="padding: 8px 0; color: #333;">${
                datetime || "Not specified"
              }</td>
            </tr>
          </table>
        </div>
       
        <p style="color: #666; font-size: 14px;">
          This email was sent from the Visionex Digital contact form.
        </p>
      </div>
    `,
    text: `
      New Contact Form Submission
     
      Name: ${name}
      Email: ${email}
      Company: ${company || "Not provided"}
      Phone: ${phone || "Not provided"}
      Preferred Date/Time: ${datetime || "Not specified"}
     
      This email was sent from the Visionex Digital contact form.
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}
