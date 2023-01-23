import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "info@elearningfoundation.ro", // Your email where you'll receive emails
      from: "info@elearningfoundation.ro", // your website email address here
      subject: `Mesaj nou E-LEARNING`,
      templateId: "d-2c51d5feeaae4686bacdca7329e665be",
      // bcc: {
      //   name: "Adrian Pascu E-LEARNING",
      //   email: "pascuadrianmihai@gmail.com",
      // },
      dynamicTemplateData: {
        name: req.body?.name || "",
        email: req.body?.email || "",
        phone: req.body?.phone || "",
        message: req.body?.message || "",
      },
      // asm: {
      //   groupId: 0 ,
      //   groupsToDisplay: 0,
      // }
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ message: "Vă mulțumim pentru cerere!", payload: req.body, error: null });
}

export default sendEmail;