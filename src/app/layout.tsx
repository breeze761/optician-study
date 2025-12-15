import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OpticianStudy - ABO & NCLE Exam Prep",
  description: "Master the ABO and NCLE exams with our comprehensive optician training program. Free first chapter, interactive lessons, quizzes, and progress tracking.",
  keywords: "optician certification, ABO exam, NCLE exam, optician training, optical career, eyewear dispensing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
