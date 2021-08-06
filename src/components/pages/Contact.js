import React from 'react';

export default function Contact() {
    return (
        <div>
            <h1>Connect with me!</h1>

            <div className="contact-me-container row">
                <div className="address-card col-sm-6">
                    <div className="card-body">
                        <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                            EMAIL
                        </h2>
                        <p><a href="mailto:grgprashant95@gmail.com">
                            grgprashant95@gmail.com
                        </a>
                        </p>
                        <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                            PHONE
                        </h2>
                        <p>4443-813-6156</p>
                    </div>
                </div>

                <div className="contact-card col-sm-6">
                    <div className="card-body">
                        <form className="connect-form">
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-black-400">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-black-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="message"
                                    className="leading-7 text-sm text-black-400">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button
                                type="submit"
                                className="border-0 py-2 px-6 focus:outline-none rounded text-lg">
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
};