"use client";

import React, { useState } from 'react';
import { LoadingDots } from "@/components/shared/icons";

export interface FormData {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string,
}

interface Props {
    savedContact: (data: FormData) =>  Promise<void>;
}

const Contact = ({ savedContact }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.firstName || !formData.email || !formData.phone) {
            setError("All Fields are required");
            return;
        }

        try {
            setIsLoading(true);

            await savedContact(formData);

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });

            setIsLoading(false);

        } catch (error) {
            setError("Oops something went wrong");
        }
    };

    return (
        <div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Form</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                        Your Names *
                    </label>
                    <div className="flex flex-col sm:flex-row">
                        <input
                            className="w-full mb-2 sm:w-1/2 sm:mr-2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstName"
                            type="text"
                            placeholder="First"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        <input
                            className="w-full mb-2 sm:w-1/2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastName"
                            type="text"
                            placeholder="Last"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Your Email *
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Your Phone
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="tel"
                        placeholder="Your Phone"
                        maxLength={15}
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Your Message
                    </label>
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        rows={4}
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleTextareaChange}
                    ></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        {isLoading ? <LoadingDots color="#808080" /> : "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;
