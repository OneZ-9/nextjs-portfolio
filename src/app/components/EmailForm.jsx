function EmailForm() {
  return (
    <form
      className="flex flex-col"
      action="https://formspree.io/f/xqazdzwe"
      method="POST"
    >
      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-white block mb-2 text-sm font-medium"
        >
          Your email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="jacob@google.com"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="subject"
          className="text-white block text-sm mb-2 font-medium"
        >
          Subject
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Let's Discuss How We Can Work Together"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="text-white block text-sm mb-2 font-medium"
        >
          Message
        </label>
        <textarea
          disabled
          name="message"
          id="message"
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed"
          placeholder="Let's talk about..."
        />
      </div>
      <button
        disabled
        type="submit"
        className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-not-allowed"
      >
        Send Message
      </button>
      {/* <p className="text-[#9CA2A9] text-xs mt-2">
        *This form functionality is still in-development, please contact me via
        email provided.
      </p> */}
    </form>
  );
}

export default EmailForm;
