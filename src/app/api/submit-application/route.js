// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { writeFile } from "fs/promises";
// import path from "path";

// export async function POST(request) {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const position = formData.get("position");
//   const message = formData.get("message");
//   const resume = formData.get("resume");

//   try {
//     // Save the resume file
//     const buffer = Buffer.from(await resume.arrayBuffer());
//     const filename = resume.name;
//     const filepath = path.join(process.cwd(), "public", "uploads", filename);
//     await writeFile(filepath, buffer);

//     // Create a Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       // host: process.env.SMTP_HOST,
//       service: "gmail",
//       // port: parseInt(process.env.SMTP_PORT || "587"),
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     // Send email to admin
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: process.env.SMTP_USER,
//       subject: `New Job Application: ${position}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Position: ${position}
//         Message: ${message}
//         Resume: ${filename}
//       `,
//       attachments: [
//         {
//           filename: filename,
//           path: filepath,
//         },
//       ],
//     });

//     // Send thank you email to applicant
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: email,
//       subject: "Thank You for Your Application",
//       text: `
//         Dear ${name},

//         Thank you for applying for the ${position} position at our company. We appreciate your interest in joining our team.

//         We have received your application and will review it carefully. If your qualifications match our requirements, we will contact you to schedule an interview.

//         Thank you again for your interest in our company.

//         Best regards,
//         The Hiring Team
//       `,
//     });

//     return NextResponse.json(
//       { message: "Application submitted successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error submitting application:", error);
//     return NextResponse.json(
//       { message: "Error submitting application" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const position = formData.get("position");
  const message = formData.get("message");
  const resume = formData.get("resume");

  try {
    // Convert resume to buffer for email attachment
    const buffer = Buffer.from(await resume.arrayBuffer());
    const filename = resume.name;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to admin with resume attached
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Job Application: ${position}`,
      text: `
        Name: ${name}
        Email: ${email}
        Position: ${position}
        Message: ${message}
      `,
      attachments: [
        {
          filename: filename,
          content: buffer,
        },
      ],
    });

    // Send thank-you email to applicant
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank You for Your Application",
      text: `
        Dear ${name},

        Thank you for applying for the ${position} position at our company. We appreciate your interest in joining our team.

        We have received your application and will review it carefully. If your qualifications match our requirements, we will contact you to schedule an interview.

        Thank you again for your interest in our company.

        Best regards,
        The Hiring Team
      `,
    });

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { message: "Error submitting application" },
      { status: 500 }
    );
  }
}
