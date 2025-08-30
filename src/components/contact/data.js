export const contactData = {
  page: {
    title: "Contact Page",
    description: "Get in touch with us!",
    formTitle: "Send us a message"
  },
  form: {
    fields: [
      {
        id: "name",
        type: "text",
        label: "Name:",
        placeholder: "Your name",
        required: true
      },
      {
        id: "email",
        type: "email",
        label: "Email:",
        placeholder: "Your email",
        required: true
      },
      {
        id: "message",
        type: "textarea",
        label: "Message:",
        placeholder: "Your message",
        rows: 4,
        required: true
      }
    ],
    submitButton: "Send Message"
  }
};
