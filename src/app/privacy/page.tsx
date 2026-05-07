import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | illumios",
  description:
    "How illumios collects, uses, and protects information submitted through illumios websites, services, and apps including PDF Scanner + OCR.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="May 7, 2026"
      intro={[
        "This Privacy Policy describes how illumios collects, uses, and protects information when you visit illumios.com, apply through our website, complete our fit quiz, complete payment or account setup, book your onboarding time, request an optional phone call, use PDF Scanner + OCR, or otherwise engage with our programs, apps, and services.",
        "illumios currently uses a website application, fit quiz, payment and account setup, and calendar booking path. A phone call may be offered as optional support. This policy explains what information may be collected across that path and how we handle it.",
        "PDF Scanner + OCR is a local-first iOS app. Documents, scans, OCR text, folders, tags, and exported files are processed and stored on your device unless you choose to share, print, export, or back them up through tools provided by iOS or another service you select.",
      ]}
      sections={[
        {
          heading: "1. Information We Collect",
          paragraphs: [
            "We collect information you provide directly, including your name, email address, phone number, business name, application details, fit quiz responses, scheduling details, payment-related status, and messages you submit through our website or related forms.",
            "We may also collect information automatically when you use our website, including your IP address, browser type, referring pages, pages visited, and device information.",
          ],
        },
        {
          heading: "2. How We Use Your Information",
          paragraphs: [
            "We use collected information to review applications, assess fit for our programs, personalize quiz outcomes and recommendations, process payment and account setup, coordinate calendar booking, handle optional phone support, deliver purchased services, send operational and educational communications, and improve our website, curriculum, and enrollment experience.",
            "We may also use your information to follow up on incomplete applications, confirm onboarding steps, and maintain records related to program participation and support.",
          ],
        },
        {
          heading: "3. PDF Scanner + OCR App",
          paragraphs: [
            "PDF Scanner + OCR does not require an account and illumios does not collect documents, scanned images, OCR text, file names, folders, tags, signatures, redactions, search activity, or document contents from the app.",
            "The app may request access to device features such as the camera, photo library, Face ID or passcode authentication, printing, sharing, and local file storage so you can scan, import, protect, organize, and export documents. These permissions are used on device for the features you choose.",
            "If you purchase Lifetime Unlock, Apple processes the in-app purchase through the App Store. illumios receives purchase status needed to unlock paid features, but does not receive your full payment card details from Apple.",
            "If you send a bug report, suggestion, support email, exported PDF, backup, or other file from the app, the information you choose to include will be handled by the email, sharing, cloud, printing, or support provider you select, and may be received by illumios if you send it to us.",
          ],
        },
        {
          heading: "4. SMS Communications",
          paragraphs: [
            "If you provide your phone number, you may receive SMS messages related to your application, scheduling, reminders, onboarding, and service-related communications. Message and data rates may apply. Reply STOP to opt out at any time. Reply HELP for assistance or contact info@illumios.com.",
          ],
        },
        {
          heading: "5. Sharing of Information",
          paragraphs: [
            "We do not sell, rent, or trade your personal information. We may share information with service providers that help us operate our business and deliver our programs, including CRM, scheduling, form, communication, payment, email, and hosting providers.",
            "We may also disclose information when required by law, to protect our rights, or to support fraud prevention, security, or compliance efforts.",
          ],
        },
        {
          heading: "6. Third-Party Tools",
          paragraphs: [
            "Our website and enrollment process may use third-party tools such as GoHighLevel for CRM and communications, scheduling tools, payment processors, analytics or hosting providers, and Google Fonts or similar web services. PDF Scanner + OCR may use Apple frameworks and App Store services for device permissions, scanning, OCR, local authentication, printing, sharing, and in-app purchases. Those providers may process data according to their own privacy policies and terms.",
          ],
        },
        {
          heading: "7. Cookies and Analytics",
          paragraphs: [
            "We may use cookies and similar technologies to support core website functionality, remember preferences, understand traffic patterns, and improve site performance. You can manage cookie settings through your browser. PDF Scanner + OCR does not use cookies.",
          ],
        },
        {
          heading: "8. Data Retention",
          paragraphs: [
            "We retain your information for as long as reasonably necessary to operate our business, deliver services, support program administration, comply with legal obligations, resolve disputes, and enforce our agreements.",
            "If you want us to delete information you previously submitted, contact info@illumios.com. We may retain certain records when required for legal, tax, accounting, security, or operational reasons.",
          ],
        },
        {
          heading: "9. Security",
          paragraphs: [
            "We use reasonable administrative, technical, and organizational safeguards to protect your information. No method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.",
          ],
        },
        {
          heading: "10. Your Rights and Choices",
          paragraphs: [
            "Depending on your location, you may have rights to request access to, correction of, or deletion of your personal information, and to opt out of certain communications. You can unsubscribe from marketing emails at any time using the link in the message or by contacting info@illumios.com.",
          ],
        },
        {
          heading: "11. Children’s Privacy",
          paragraphs: [
            "Our services are not directed to individuals under 18, and we do not knowingly collect personal information from children.",
          ],
        },
        {
          heading: "12. Changes to This Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. When we do, we will update the effective date on this page. Your continued use of our website or services after changes become effective constitutes acceptance of the updated policy.",
          ],
        },
        {
          heading: "13. Contact",
          paragraphs: [
            "For privacy questions or requests, contact illumios at 135 Thomas Ave, Maple Shade, NJ 08052, (856) 329-3539, or info@illumios.com.",
          ],
        },
      ]}
    />
  );
}
