import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import { PageBanner } from "./About";
import emailjs from "emailjs-com";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   const errs = validate()
  //   if (Object.keys(errs).length) { setErrors(errs); return }
  //   setSent(true)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_j4o4uz4", // ✅ your service ID
        "template_7trishb", // ✅ your template ID
        {
          user_name: form.name,
          user_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "ThEDZZoojJ7WX2TH0", // ✅ your PUBLIC KEY
      )
      .then(() => {
        setSent(true);
        setForm(initialForm);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const inputClass = (name) =>
    `w-full px-4 py-3 rounded-xl border font-sans text-sm bg-white text-gray-800 transition-all outline-none
     focus:ring-2 focus:ring-forest-900/20 focus:border-forest-900
     ${errors[name] ? "border-red-400 bg-red-50" : "border-gray-200 hover:border-gray-300"}`;

  const labelClass =
    "block text-xs font-semibold font-mono uppercase tracking-wider text-gray-600 mb-1.5";

  const contacts = [
    {
      icon: "✉️",
      label: "General Enquiries",
      value: "info@entomology.org",
      sub: "Response within 48 hours",
    },
    {
      icon: "📝",
      label: "Abstract Submissions",
      value: "papers@entomology.org",
      sub: "For all submission queries",
    },
    {
      icon: "💳",
      label: "Registration Support",
      value: "register@entomology.org",
      sub: "Fees, invoices & receipts",
    },
    {
      icon: "🏨",
      label: "Accommodation",
      value: "travel@entomology.org",
      sub: "Hotels & travel assistance",
    },
    // { icon: '🤝', label: 'Sponsorship',           value: 'sponsors@entomology.org',   sub: 'Partnership opportunities' },
    // { icon: '📸', label: 'Media & Press',         value: 'press@entomology.org',      sub: 'Accreditation & interviews' },
  ];

  return (
    <>
      <PageBanner
        emoji="📬"
        badge="Get in Touch"
        title="Contact Us"
        subtitle="Our conference secretariat is happy to assist with any queries about registration, submissions, or travel."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-10">
              <SectionReveal>
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Dedicated Contacts
                </h2>
                <div className="grid gap-4">
                  {contacts.map((c, i) => (
                    <div
                      key={c.label}
                      className="flex items-start gap-3 p-4 bg-forest-50 rounded-xl border border-forest-100 hover:bg-forest-100 transition-colors"
                    >
                      <span className="text-xl mt-0.5">{c.icon}</span>
                      <div className="min-w-0">
                        <p className="text-xs font-mono uppercase tracking-wider text-gray-500">
                          {c.label}
                        </p>
                        <a
                          href={`mailto:${c.value}`}
                          className="text-forest-900 font-semibold text-sm hover:underline break-all"
                        >
                          {c.value}
                        </a>
                        <p className="text-xs text-gray-400 font-sans mt-0.5">
                          {c.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              {/* Address card */}
              {/* <SectionReveal delay={0.1}>
                <div className="bg-forest-900 text-white rounded-2xl p-6">
                  <p className="text-green-300 text-xs font-mono uppercase tracking-wider mb-3">📍 Conference Secretariat</p>
                  <p className="font-serif font-bold text-lg mb-2">ICISZ 2026 Office</p>
                  <address className="not-italic text-sm text-green-100/80 font-sans leading-relaxed">
                    International Entomological Society<br />
                    Vienna International Centre<br />
                    Wagramer Strasse 5<br />
                    1220 Vienna, Austria
                  </address>
                  <div className="mt-4 pt-4 border-t border-white/10 text-sm font-sans text-green-100/70">
                    <p>📞 +43 1 26060 – 0</p>
                    <p className="mt-1">🕐 Mon–Fri, 09:00–17:00 CET</p>
                  </div>
                </div>
              </SectionReveal> */}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <SectionReveal delay={0.1}>
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-forest-50 border border-forest-200 rounded-2xl p-10 text-center"
                    >
                      <div className="text-5xl mb-4">📨</div>
                      <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600 font-sans text-sm mb-6">
                        Thank you, <strong>{form.name}</strong>. We'll reply to{" "}
                        <strong>{form.email}</strong> within 48 hours.
                      </p>
                      <button
                        onClick={() => {
                          setSent(false);
                          setForm(initialForm);
                        }}
                        className="btn-outline"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClass}>Your Name *</label>
                          <input
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full name"
                            className={inputClass("name")}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className={labelClass}>Email Address *</label>
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className={inputClass("email")}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Subject *</label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className={inputClass("subject")}
                        >
                          <option value="">Select a subject…</option>
                          <option value="registration">
                            Registration Enquiry
                          </option>
                          <option value="abstract">
                            Abstract / Paper Submission
                          </option>
                          <option value="accommodation">
                            Accommodation & Travel
                          </option>
                          <option value="sponsorship">
                            Sponsorship & Exhibition
                          </option>
                          <option value="visa">Visa Support Letter</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.subject && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className={labelClass}>Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={6}
                          placeholder="Write your message here…"
                          className={`${inputClass("message")} resize-none`}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* <button type="submit" className="btn-primary w-full justify-center py-4">
                        Send Message →
                      </button> */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center py-4 flex items-center gap-2"
                      >
                        {loading ? "Sending..." : "Send Message →"}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder / Vienna info */}
      <section className="py-16 bg-forest-50 border-t border-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-10">
              <span className="section-badge">✈️ Getting There</span>
              <h2 className="section-title mt-2">Vienna, Austria</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "✈️",
                title: "By Air",
                desc: "Vienna International Airport (VIE) connects to 190+ cities. Direct rail link to city centre in 16 minutes.",
              },
              {
                icon: "🚆",
                title: "By Rail",
                desc: "Vienna Hauptbahnhof links all major European cities. Conference centre is 10 min by metro (U1 line).",
              },
              {
                icon: "🏨",
                title: "Accommodation",
                desc: "We have negotiated rates at 5 partner hotels within 1km of the venue. Book via our travel portal.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import emailjs from "emailjs-com"
// import { PageBanner } from './About'

// const initialForm = { name: '', email: '', subject: '', message: '' }

// export default function Contact() {
//   const [form, setForm] = useState(initialForm)
//   const [sent, setSent] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const handleChange = e => {
//     const { name, value } = e.target
//     setForm(prev => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setLoading(true)

//     emailjs.send(
//       "service_j4o4uz4",
//       "template_7trishb",
//       {
//         user_name: form.name,
//         user_email: form.email,
//         subject: form.subject,
//         message: form.message,
//       },
//       "ThEDZZoojJ7WX2TH0"
//     )
//     .then(() => {
//       setSent(true)
//       setForm(initialForm)
//     })
//     .catch(() => alert("Failed ❌"))
//     .finally(() => setLoading(false))
//   }

//   return (
//     <>
//       <PageBanner
//         emoji="📬"
//         badge="Get in Touch"
//         title="Contact Us"
//         subtitle="Our conference secretariat is happy to assist with any queries."
//       />

//       <section className="py-20 bg-[#f8faf8]">
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">

//           {/* LEFT SIDE (CONTACT CARDS) */}
//           <div className="lg:col-span-2 space-y-4">

//             {[
//               ["General Enquiries", "info@icisz2026.org"],
//               ["Abstract Submissions", "papers@icisz2026.org"],
//               ["Registration Support", "register@icisz2026.org"],
//               ["Accommodation", "travel@icisz2026.org"],
//               ["Sponsorship", "sponsors@icisz2026.org"],
//               ["Media & Press", "press@icisz2026.org"],
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-green-50 border border-green-100 rounded-xl p-4 hover:shadow-sm transition"
//               >
//                 <p className="text-xs text-gray-500 uppercase tracking-wide">
//                   {item[0]}
//                 </p>
//                 <p className="text-sm font-semibold text-gray-800">
//                   {item[1]}
//                 </p>
//               </div>
//             ))}

//             {/* OFFICE CARD */}
//             <div className="bg-green-700 text-white rounded-xl p-5 mt-6">
//               <h3 className="font-semibold text-sm mb-2">ICISZ 2026 Office</h3>
//               <p className="text-xs opacity-90">
//                 International Entomological Society<br />
//                 Vienna International Centre<br />
//                 Vienna, Austria
//               </p>
//             </div>

//           </div>

//           {/* RIGHT SIDE (FORM) */}
//           <div className="lg:col-span-3 bg-white p-8 rounded-2xl border">

//             <h2 className="text-xl font-semibold mb-6">
//               Send Us a Message
//             </h2>

//             <AnimatePresence mode="wait">
//               {sent ? (
//                 <motion.div
//                   key="success"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-center py-10"
//                 >
//                   <h3 className="text-2xl font-bold mb-2">Message Sent 🎉</h3>
//                   <p className="text-gray-600 mb-4">
//                     We’ll get back to you soon.
//                   </p>
//                   <button
//                     onClick={() => setSent(false)}
//                     className="border px-4 py-2 rounded-lg"
//                   >
//                     Send Another
//                   </button>
//                 </motion.div>
//               ) : (
//                 <motion.form
//                   key="form"
//                   onSubmit={handleSubmit}
//                   className="space-y-5"
//                 >

//                   {/* NAME + EMAIL */}
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <input
//                       name="name"
//                       placeholder="Full name"
//                       value={form.name}
//                       onChange={handleChange}
//                       className="input-style"
//                     />
//                     <input
//                       name="email"
//                       placeholder="Email address"
//                       value={form.email}
//                       onChange={handleChange}
//                       className="input-style"
//                     />
//                   </div>

//                   {/* SUBJECT */}
//                   <select
//                     name="subject"
//                     value={form.subject}
//                     onChange={handleChange}
//                     className="input-style"
//                   >
//                     <option value="">Select subject</option>
//                     <option>Accommodation & Travel</option>
//                     <option>Registration</option>
//                     <option>Paper Submission</option>
//                   </select>

//                   {/* MESSAGE */}
//                   <textarea
//                     name="message"
//                     rows="5"
//                     placeholder="Write your message here..."
//                     value={form.message}
//                     onChange={handleChange}
//                     className="input-style"
//                   />

//                   {/* BUTTON */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-green-700 text-white py-3 rounded-full font-medium"
//                   >
//                     {loading ? "Sending..." : "Send Message →"}
//                   </button>

//                 </motion.form>
//               )}
//             </AnimatePresence>

//           </div>
//         </div>
//       </section>

//       {/* VIENNA SECTION */}
//       <section className="bg-[#eef3ef] py-16 text-center">
//         <h2 className="text-2xl font-bold mb-8">Vienna, Austria</h2>

//         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
//           {["By Air", "By Rail", "Accommodation"].map((item, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl border">
//               <h3 className="font-semibold">{item}</h3>
//               <p className="text-sm text-gray-600 mt-2">
//                 Travel information details here.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }
