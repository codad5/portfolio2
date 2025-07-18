import { config } from '@fortawesome/fontawesome-svg-core'
import { Analytics } from "@vercel/analytics/react"
import { Next13NProgress, Link } from "nextjs13-progress";
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/app/globals.css'
config.autoAddCss = false


export const metadata = {
  title: "Chibueze Michael Aniezeofor - Codad5",
  description:
    "Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student.",
  generator: "Next.js",
  applicationName: "Codad5",
  themeColor: "#ECF5F8",
  referrer: "origin-when-cross-origin",
  keywords: [
    "codad5",
    "CHIBUEZE MICHAEL ANIEZEOFOR",
    "Software Developer",
    "Engineer",
    "PHP",
    "NODE",
    "LARAVEL",
    "REACT",
    "NEXTJS",
    "VUEJS",
    "ANGULAR",
    "MECHANICAL ENGINEERING",
    "WEB DEVELOPER",
    "WEB DESIGNER",
    "GRAPHIC DESIGNER",
    "UI/UX DESIGNER",
    "MOBILE APP DEVELOPER",
    "MOBILE",
  ],
  authors: [{ name: "Chibueze Michael Aniezeofor", url: "https://codad5.me" }],
  // colorScheme: 'dark',
  creator: "Chibueze Michael Aniezeofor",
  publisher: "Chibueze Michael Aniezeofor",
  alternates: {},
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "CHibeze Michael Aniezeofor - Codad5",
    description:
      "Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student.",
    url: "https://codad5.me",
    phoneNumbers: ["+234 814 257 2488"],
    siteName: "Codad5: A Software Enginner",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg",
        width: 800,
        height: 600,
        alt: "Chibueze Michael Aniezeofor | Software Developer | Engineer | PHP | NODE",
      },
      {
        url: "https://avatars.githubusercontent.com/u/66634814?v=41",
        width: 1800,
        height: 1600,
        alt: "Chibueze Michael Aniezeofor | Software Developer | Engineer | PHP | NODE",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "standard",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Next13NProgress color="red" height={5} />
        <div id="root">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
