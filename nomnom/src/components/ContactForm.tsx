import React from 'react';

export default function ContactForm() {
  return (
    <form className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border px-3 py-2 rounded"
      />
      <textarea
        placeholder="Message"
        className="w-full border px-3 py-2 rounded"
        rows={4}
      />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded-md">
        Send Message
      </button>
    </form>
  );
}
