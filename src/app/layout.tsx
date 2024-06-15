import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";





const inter = Inter({ subsets: ["latin"] });



const navbar = [
  {"name":"Home","url":"/"},
  {"name":"Sign up","url":"/sign-up"},
  {"name":"Messages","url":"/messages"},
  {"name":"","url":""},

]






const navbar2 = [
  {"name":"Todays Deal","url":"/todaysdeal"},
  {"name":"Customer Service","url":"/cutomerservice"},
  {"name":"Registry","url":"/registry"},
  {"name":"Gift Cards","url":"/giftcards"},
]
interface navbarProps {
  id:string
  name:string
  url:string
}
export const metadata: Metadata = {
  title: "Green Market",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex items-center justify-between p-4 sticky top-0 mx-auto bg-slate-900">
            <div className="mx-auto">
                <img src="" width={125} height={40} alt="" />
                </div>
                <div className="w-[600px] inline-flex gap-1">
                  <Input type="search"/>
                  <Button variant={'secondary'}>
                    Search
                  </Button>
                </div>
                <ul className="hidden sm:inline-flex gap-4 mx-auto text-xs text-zinc-100">
                    {
                        navbar.map((items) =>(
                            <li>
                                <Link href={items.url}>{items.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                    <div className="mx-auto">
                    <Button variant={'destructive'}>
                    My kart
                </Button>
         
                    </div>
        </div>  
        <div className="flex items-center justify-between bg-slate-950 p-3">
            <ul className="hidden sm:inline-flex gap-6 text-zinc-100 text-sm">
              {
                navbar2.map((items) =>(
                  <li>
                    <Link href={items.url}>
                        {items.name}
                    </Link> 
                  </li>
                ))  
              }
            </ul>
        </div>
        {children}</body>
    </html>
  );
}