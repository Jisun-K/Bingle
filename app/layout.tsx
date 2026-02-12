import type { Metadata } from "next";
import "./globals.css";

import Modal from "@/components/common/Modal";

import { Toaster } from "sonner";
import { Confetti } from "@/components/common/Confetti";
import ClientLayout from "@/components/common/ClientLayout";

export const metadata: Metadata = {
    title: "Bingle",
    description: "'하고 싶은 일'을 하나씩, 빙고로 완성해 봐요!"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-[Freesentation] antialiased">
                <ClientLayout>
                    {/* <ThemeProvider> */}
                        {children}
                        <Modal />
                        <Toaster position="top-center" />
                        <Confetti />
                    {/* </ThemeProvider> */}
                </ClientLayout>
            </body>
        </html>
    );
}
