import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "./Context/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import DataProvider from "./Context/DataProvider";
import UsersProvider from "./Context/UsersProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empluy - Create ATS certified resumes in seconds",
  description: "Create ATS certified resume and connect to a wider outreach with our platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <DataProvider>
            <UsersProvider>
              {children}
            </UsersProvider>
          </DataProvider>
        </SessionProvider>
      </body>
    </html>

  );
}
