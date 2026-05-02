"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { sendContactMessage } from "@/app/actions";

const initialState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="button-hover-soft theme-outline-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const formRef = useRef(null);
  const isSuccess = state.status === "success";
  const isError = state.status === "error";

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="contact-input-label text-sm font-medium">Your Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="contact-input rounded-2xl border px-4 py-3 text-sm outline-none transition"
            placeholder="Nafiz Alam"
          />
        </label>
        <label className="grid gap-2">
          <span className="contact-input-label text-sm font-medium">Your Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="contact-input rounded-2xl border px-4 py-3 text-sm outline-none transition"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="contact-input-label text-sm font-medium">Subject</span>
        <input
          type="text"
          name="subject"
          required
          autoComplete="off"
          className="contact-input rounded-2xl border px-4 py-3 text-sm outline-none transition"
          placeholder="Project inquiry"
        />
      </label>

      <label className="grid gap-2">
        <span className="contact-input-label text-sm font-medium">Message</span>
        <textarea
          name="message"
          rows="6"
          required
          className="contact-input rounded-[1.5rem] border px-4 py-3 text-sm outline-none transition"
          placeholder="Write your message here..."
        />
      </label>

      <div className="contact-form-footer flex flex-col gap-3 pt-3 sm:flex-row sm:items-center sm:justify-end">
        {state.message ? (
          <p
            className={`text-sm sm:mr-auto ${
              isError ? "text-rose-300" : "text-emerald-300"
            }`}
            aria-live="polite"
          >
            {state.message}
          </p>
        ) : null}
        <div className="sm:ml-auto">
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}
