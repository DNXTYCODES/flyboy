import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className=" text-center">
      <p className="text-2xl font-medium text-gray-800 bg-golden-brown bg-clip-text text-transparent bg-to-b">
        Subscribe now to stay in the loop
      </p>
      <p className="text-gray-400 mt-3">
        Join our newsletter and be the first to discover exclusive offers, the
        latest arrivals, and insider news on the world of luxury watches. Sign
        up today and elevate your style with Flyboy!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none text-black"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-[#333333] text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
