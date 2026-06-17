import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn("RESEND_API_KEY not configured")
      return Response.json({ success: true })
    }

    const resend = new Resend(apiKey)
    const body = await request.json()
    const { name, email, phone, institution, students, message } = body

    const studentRange = students || "Not specified"

    await resend.emails.send({
      from: "Maktab One <noreply@atlassolutionshq.com>",
      to: ["atlassolutionshq@gmail.com"],
      subject: `New Demo Request - ${institution}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0;padding:0;background:#f5f7f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7f6;padding:40px 20px">
            <tr>
              <td align="center">
                <table role="presentation" width="540" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)">
                  <tr>
                    <td style="background:#1a8a5c;padding:32px 40px;text-align:center">
                      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px">New Demo Request</h1>
                      <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:14px">${institution}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:32px 40px">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="120" style="padding:12px 0;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #f0f0f0">Name</td>
                          <td style="padding:12px 0;font-size:15px;color:#111827;border-bottom:1px solid #f0f0f0">${name}</td>
                        </tr>
                        <tr>
                          <td width="120" style="padding:12px 0;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #f0f0f0">Email</td>
                          <td style="padding:12px 0;font-size:15px;color:#111827;border-bottom:1px solid #f0f0f0"><a href="mailto:${email}" style="color:#1a8a5c;text-decoration:none">${email}</a></td>
                        </tr>
                        <tr>
                          <td width="120" style="padding:12px 0;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #f0f0f0">Phone</td>
                          <td style="padding:12px 0;font-size:15px;color:#111827;border-bottom:1px solid #f0f0f0"><a href="tel:${phone}" style="color:#1a8a5c;text-decoration:none">${phone}</a></td>
                        </tr>
                        <tr>
                          <td width="120" style="padding:12px 0;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #f0f0f0">Institution</td>
                          <td style="padding:12px 0;font-size:15px;color:#111827;border-bottom:1px solid #f0f0f0">${institution}</td>
                        </tr>
                        <tr>
                          <td width="120" style="padding:12px 0;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #f0f0f0">Students</td>
                          <td style="padding:12px 0;font-size:15px;color:#111827;border-bottom:1px solid #f0f0f0">${studentRange}</td>
                        </tr>
                        ${message ? `
                        <tr>
                          <td width="120" style="padding:12px 0;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #f0f0f0;vertical-align:top">Message</td>
                          <td style="padding:12px 0;font-size:15px;color:#111827;border-bottom:1px solid #f0f0f0;line-height:1.5">${message}</td>
                        </tr>
                        ` : ""}
                      </table>

                      <div style="margin-top:28px;padding:16px 20px;background:#f0f9f4;border-radius:10px;border-left:3px solid #1a8a5c">
                        <p style="margin:0;font-size:13px;color:#166543;line-height:1.5">
                          <strong style="display:block;margin-bottom:2px">Quick actions</strong>
                          Reply to this email or click the recipient's email address above to reach out.
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:20px 40px;background:#fafbfa;border-top:1px solid #f0f0f0">
                      <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center">Maktab One · School Management Software</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error("Failed to send demo email:", error)
    return Response.json({ error: "Failed to send request" }, { status: 500 })
  }
}
