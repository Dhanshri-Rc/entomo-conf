import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import emailjs from "emailjs-com";
import { registrationTiers, importantDates } from "../assets/data";
import { PageBanner } from "./About";

/* Registration form state machine */
const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  affiliation: "",
  country: "",
  tier: "academic",
  dietary: "",
  comments: "",
};

export default function Registration() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Invalid email address";
    if (!form.affiliation.trim()) errs.affiliation = "Affiliation is required";
    if (!form.country.trim()) errs.country = "Country is required";
    return errs;
  };

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   const errs = validate()
  //   if (Object.keys(errs).length) { setErrors(errs); return }
  //   setSubmitted(true)
  //   window.scrollTo({ top: 0, behavior: 'smooth' })
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
        "template_7trishb", // ⚠️ better create NEW template (explained below)
        {
          user_name: form.firstName + " " + form.lastName,
          user_email: form.email,
          subject: "New Registration",
          message: `
Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Affiliation: ${form.affiliation}
Country: ${form.country}
Category: ${form.tier}
Dietary: ${form.dietary}
Comments: ${form.comments}
      `,
        },
        "ThEDZZoojJ7WX2TH0", // ✅ your public key
      )
      .then(() => {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        console.error(error);
        alert("Registration failed ❌");
      })
      .finally(() => setLoading(false));
  };

  const inputClass = (name) =>
    `w-full px-4 py-3 rounded-xl border font-sans text-sm text-gray-800 bg-white transition-all duration-200 outline-none
    focus:ring-2 focus:ring-forest-900/20 focus:border-forest-900
    ${errors[name] ? "border-red-400 bg-red-50" : "border-gray-200 hover:border-gray-300"}`;

  const labelClass =
    "block text-xs font-semibold font-mono uppercase tracking-wider text-gray-600 mb-1.5";

  return (
    <>
      <PageBanner
        emoji="📋"
        badge="Join Us"
        title="Registration"
        subtitle="Secure your place at ICISZ 2026. Early bird rates available until May 31, 2026."
      />

      {/* Success state */}
      <AnimatePresence>
        {submitted && (
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-24 bg-white"
          >
            <div className="max-w-xl mx-auto px-4 text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Registration Received!
              </h2>
              <p className="text-gray-600 font-sans leading-relaxed mb-6">
                Thank you, <strong>{form.firstName}</strong>! Your registration
                for Entomology has been submitted successfully. You will receive
                a confirmation email at <strong>{form.email}</strong> within 24
                hours.
              </p>
              <div className="bg-forest-50 rounded-2xl p-6 border border-forest-100 text-left mb-7">
                <p className="text-xs font-mono uppercase tracking-wider text-forest-900 mb-3">
                  Your Registration Summary
                </p>
                <div className="space-y-1.5 text-sm font-sans text-gray-700">
                  <p>
                    <strong>Name:</strong> {form.firstName} {form.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {form.email}
                  </p>
                  <p>
                    <strong>Affiliation:</strong> {form.affiliation}
                  </p>
                  <p>
                    <strong>Category:</strong>{" "}
                    {registrationTiers.find((t) => t.id === form.tier)?.label}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialForm);
                }}
                className="btn-outline"
              >
                Register Another Delegate
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {!submitted && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Pricing table */}
              <div className="lg:col-span-1">
                <SectionReveal>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                    Registration Fees
                  </h2>
                </SectionReveal>

                <div className="space-y-5">
                  {registrationTiers.map((tier, i) => (
                    <SectionReveal key={tier.id} delay={i * 0.1}>
                      <div
                        onClick={() =>
                          setForm((prev) => ({ ...prev, tier: tier.id }))
                        }
                        className={`rounded-2xl p-5 border-2 cursor-pointer transition-all duration-200 ${
                          form.tier === tier.id
                            ? "border-forest-900 bg-forest-50 shadow-md"
                            : "border-gray-200 bg-white hover:border-forest-300"
                        } ${tier.highlighted ? "relative overflow-hidden" : ""}`}
                      >
                        {tier.highlighted && (
                          <div className="absolute top-3 right-3 bg-forest-900 text-white text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                            Most Popular
                          </div>
                        )}

                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-serif font-bold text-gray-900">
                            {tier.label}
                          </h3>
                          <div
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                              form.tier === tier.id
                                ? "border-forest-900 bg-forest-900"
                                : "border-gray-300"
                            }`}
                          >
                            {form.tier === tier.id && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                          {[
                            {
                              label: "Early Bird",
                              price: tier.earlyBird,
                              highlight: true,
                            },
                            {
                              label: "Regular",
                              price: tier.regular,
                              highlight: false,
                            },
                            {
                              label: "Late",
                              price: tier.late,
                              highlight: false,
                            },
                          ].map((p) => (
                            <div
                              key={p.label}
                              className={`rounded-lg p-2 ${p.highlight ? "bg-forest-900 text-white" : "bg-gray-50"}`}
                            >
                              <p
                                className={`text-base font-bold font-sans ${p.highlight ? "text-white" : "text-gray-900"}`}
                              >
                                {p.price}
                              </p>
                              <p
                                className={`text-[9px] uppercase font-mono ${p.highlight ? "text-green-300" : "text-gray-400"}`}
                              >
                                {p.label}
                              </p>
                            </div>
                          ))}
                        </div>

                        <ul className="space-y-1">
                          {tier.includes.map((item) => (
                            <li
                              key={item}
                              className="text-xs text-gray-600 font-sans flex items-start gap-1.5"
                            >
                              <span className="text-forest-900 font-bold mt-0.5">
                                ✓
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>

              {/* Registration form */}
              <div className="lg:col-span-2">
                <SectionReveal delay={0.1}>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                    Delegate Details
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* First name */}
                      <div>
                        <label className={labelClass}>First Name *</label>
                        <input
                          name="firstName"
                          type="text"
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="Jane"
                          className={inputClass("firstName")}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1 font-sans">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      {/* Last name */}
                      <div>
                        <label className={labelClass}>Last Name *</label>
                        <input
                          name="lastName"
                          type="text"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Smith"
                          className={inputClass("lastName")}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1 font-sans">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane.smith@university.edu"
                        className={inputClass("email")}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 font-sans">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Affiliation */}
                    <div>
                      <label className={labelClass}>
                        Affiliation / Institution *
                      </label>
                      <input
                        name="affiliation"
                        type="text"
                        value={form.affiliation}
                        onChange={handleChange}
                        placeholder="University of Vienna"
                        className={inputClass("affiliation")}
                      />
                      {errors.affiliation && (
                        <p className="text-red-500 text-xs mt-1 font-sans">
                          {errors.affiliation}
                        </p>
                      )}
                    </div>

                    {/* Country */}
                    <div>
                      <label className={labelClass}>Country *</label>
                      <input
                        name="country"
                        type="text"
                        value={form.country}
                        onChange={handleChange}
                        placeholder=" Austria"
                        className={inputClass("country")}
                      />
                      {errors.country && (
                        <p className="text-red-500 text-xs mt-1 font-sans">
                          {errors.country}
                        </p>
                      )}
                    </div>

                    {/* Dietary */}
                    <div>
                      <label className={labelClass}>Dietary Requirements</label>
                      <select
                        name="dietary"
                        value={form.dietary}
                        onChange={handleChange}
                        className={inputClass("dietary")}
                      >
                        <option value="">None / No preference</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="gluten-free">Gluten-free</option>
                        <option value="halal">Halal</option>
                        <option value="kosher">Kosher</option>
                        <option value="other">
                          Other (specify in comments)
                        </option>
                      </select>
                    </div>

                    {/* Comments */}
                    <div>
                      <label className={labelClass}>Additional Comments</label>
                      <textarea
                        name="comments"
                        value={form.comments}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Accessibility needs, paper submission ID, etc."
                        className={`${inputClass("comments")} resize-none`}
                      />
                    </div>

                    {/* Selected tier summary */}
                    <div className="bg-forest-50 rounded-xl p-4 border border-forest-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-mono text-forest-900 uppercase tracking-wider">
                          Selected Category
                        </p>
                        <p className="font-serif font-bold text-gray-900 mt-0.5">
                          {
                            registrationTiers.find((t) => t.id === form.tier)
                              ?.label
                          }
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 font-sans">
                          Early Bird Rate
                        </p>
                        <p className="font-serif font-bold text-forest-900 text-xl">
                          {
                            registrationTiers.find((t) => t.id === form.tier)
                              ?.earlyBird
                          }
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-base py-4"
                    >
                      {loading ? "Submitting..." : "Complete Registration →"}
                    </button>

                    <p className="text-xs text-gray-400 font-sans text-center">
                      By registering you agree to the Entomology Terms &amp;
                      Conditions. Payment details will be sent via email.
                    </p>
                  </form>
                </SectionReveal>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
