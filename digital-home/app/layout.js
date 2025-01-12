import "./globals.css";
import { Playfair_Display } from "next/font/google";

const APP_NAME = "DigitalHome";
const APP_DEFAULT_TITLE = "DigitalHome";
const APP_TITLE_TEMPLATE = "%s - Manage items at home";
const APP_DESCRIPTION = "Manage your items at home!";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

const playfairDisplay = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfairDisplay.className}>{children}</body>
    </html>
  );
}
