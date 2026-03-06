"use client";

import { useState } from "react";
import { CodoModal } from "@/components/ui/codo-modal";
import { CodoButton } from "@/components/ui/codo-button";
import { PhoneCall, Mail } from "lucide-react";

interface SalesAdvisorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SalesAdvisorModal({ isOpen, onClose }: SalesAdvisorModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Simulating an async form submission for the SOP button loading state
    const handleRequestCall = async () => {
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Fake network request
        setIsSubmitting(false);
        onClose();
    };

    return (
        <CodoModal
            isOpen={isOpen}
            onClose={() => onClose()}
            title="Talk to an Advisor"
            description="Leave your details below and a CODO AI Agency specialist will contact you shortly."
            size="md"
        >
            <div className="flex flex-col gap-4 mt-2">
                <div className="grid gap-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input type="text" className="flex h-11 w-full rounded-codo border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-codo-green disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input type="tel" className="flex h-11 w-full rounded-codo border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-codo-green disabled:cursor-not-allowed disabled:opacity-50" placeholder="+91 88486 76627" />
                </div>

                <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-border">
                    <CodoButton variant="ghost" onClick={onClose}>
                        Cancel
                    </CodoButton>
                    <CodoButton variant="default" onClick={handleRequestCall} className="gap-2">
                        <PhoneCall size={16} />
                        Request Callback
                    </CodoButton>
                </div>
            </div>
        </CodoModal>
    );
}
