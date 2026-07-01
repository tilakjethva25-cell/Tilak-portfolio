import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Contact() {
  const validationSchema = Yup.object({
    user_name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Full Name is required"),

    user_email: Yup.string()
      .email("Invalid Email")
      .required("Email is required"),

    subject: Yup.string().required("Subject is required"),

    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const sendEmail = async (values, { resetForm, setSubmitting }) => {
    try {
      console.log("Sending:", values);

      console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: values.user_name,
          user_email: values.user_email,
          subject: values.subject,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log(result);

      alert("Message Sent Successfully!");

      resetForm();
    } catch (error) {
      console.error(error);

      alert(`
Status : ${error.status}
Message : ${error.text || error.message}
      `);
    }

    setSubmitting(false);
  };

  return (
    <section className="min-h-screen bg-[#050816] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl bg-slate-800 rounded-xl p-8">

        <h1 className="text-4xl text-white font-bold text-center mb-8">
          Contact Me
        </h1>

        <Formik
          initialValues={{
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">

              <div>
                <Field
                  name="user_name"
                  placeholder="Full Name"
                  className="w-full p-4 rounded bg-slate-700 text-white outline-none"
                />
                <ErrorMessage
                  name="user_name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="w-full p-4 rounded bg-slate-700 text-white outline-none"
                />
                <ErrorMessage
                  name="user_email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-4 rounded bg-slate-700 text-white outline-none"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  className="w-full p-4 rounded bg-slate-700 text-white outline-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </Form>
          )}
        </Formik>

      </div>
    </section>
  );
}

export default Contact;