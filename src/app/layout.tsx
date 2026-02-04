import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Value Gold - Best Gold Buyers in India | 120+ Years Trust",
  description: "Sell your gold at the best rates with complete transparency. 120+ years of heritage, instant payment, XRF testing. Branches across Hyderabad, Vijayawada, Visakhapatnam.",
  keywords: "gold buyers, sell gold, gold rate today, best gold buyers India, Value Gold, CapsGold",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth light ${inter.variable}`}>
      <body className="antialiased font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const html = document.documentElement;
                  
                  if (theme === 'dark') {
                    html.classList.remove('light');
                    html.classList.add('dark');
                    html.style.colorScheme = 'dark';
                  } else {
                    html.classList.remove('dark');
                    html.classList.add('light');
                    html.style.colorScheme = 'light';
                    if (!theme) {
                      localStorage.setItem('theme', 'light');
                    }
                  }
                } catch (e) {
                  console.error('Theme initialization error:', e);
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}


