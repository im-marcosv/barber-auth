import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";

const imbPlexSans = localFont({
    src: [
        { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
        { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
        { path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
        { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
    ],
});

const bebasNeue = localFont({
    src: [{ path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" }],
    variable: "--bebas-neue",
});

export const metadata: Metadata = {
    title: "Barber Auth",
    description: "Tu mamá",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="es">
            <body className={`${imbPlexSans.className} ${bebasNeue.variable}`}>{children}</body>
        </html>
    );
};

export default RootLayout;
