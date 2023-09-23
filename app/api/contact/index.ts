"use server";


import prisma from "@/lib/prisma";
import { FormData } from "@/components/shared/contact";
import { InquiryProps } from "@/components/shared/inquiry";

export const savedContact = async (formData: FormData): Promise<void> => {
    try {
        await prisma.contact.create({
            data: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            },
        });
        return Promise.resolve();
    } catch (error) {
        console.error("Error saving contact data:", error);
        return Promise.reject(error);
    }
};

export const savedInquiry = async (inquiryData: InquiryProps): Promise<void> => {
    try {
        await prisma.inquiry.create({
            data: {
                names: inquiryData.names,
                email: inquiryData.email,
                groupSize: inquiryData.groupSize,
                phone: inquiryData.phone,
                inquiry: inquiryData.inquiry,
                info: inquiryData.info,
            },
        });
        return Promise.resolve();
    } catch (error) {
        console.error("Error saving inquiry data:", error);
        return Promise.reject(error);
    }
};
