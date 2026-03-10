export interface Policy {
  id: string
  title: string
  content: string
  updatedAt: string
}

export const DEFAULT_POLICIES = {
  privacy: {
    id: "policy-privacy",
    title: "Privacy Policy",
    content: `# Privacy Policy

Mahadev Aromatics ("we", "us", "our", or "Company") operates the mahadevaromatics.com website (hereinafter referred to as the "Service").

## 1. Introduction

This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.

## 2. Information We Collect

### Personal Data

While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:

- Email address
- First name and last name
- Phone number
- Address, State, Province, ZIP/Postal code, City
- Cookies and Usage Data

### Usage Data

We may also collect information about how the Service is accessed and used ("Usage Data"). This may include information such as:

- Your computer's Internet Protocol address (e.g. IP address)
- Browser type and version
- The pages you visit
- The time and date of your visit
- The time spent on those pages

## 3. Use of Data

Mahadev Aromatics uses the collected data for various purposes:

- To provide and maintain the Service
- To notify you about changes to our Service
- To allow you to participate in interactive features of our Service when you choose to do so
- To provide customer care and support
- To gather analysis or valuable information so that we can improve our Service
- To monitor the usage of our Service
- To detect, prevent and address technical issues

## 4. Security of Data

The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

## 5. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.

## 6. Contact Us

If you have any questions about this Privacy Policy, please contact us at:
- Email: info@mahadevromatics.com
- Phone: +91 8868861665
- Address: Plot No. 69, Phase-3, Sector-24, HSIIDC Industrial Estate, Barhi, Sonipat, Haryana 131101, India`,
    updatedAt: new Date().toISOString(),
  },
  
  terms: {
    id: "policy-terms",
    title: "Terms and Conditions",
    content: `# Terms and Conditions

Welcome to Mahadev Aromatics. These terms and conditions outline the rules and regulations for the use of our website.

## 1. License to Use Website

Unless otherwise stated, Mahadev Aromatics and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may access this from the website for personal use, subject to restrictions set in these terms and conditions.

## 2. User Responsibilities

You are responsible for maintaining the confidentiality of your account information and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password. You must notify Mahadev Aromatics immediately of any unauthorized use of your account or any other breaches of security.

## 3. Content Restrictions

You must not use our website for any illegal or unauthorized purpose. You must comply with all laws, rules, and regulations applicable to your use of our website.

Specifically, but without limitation, you may not:

- Harass or cause distress or inconvenience to any person
- Transmit obscene or offensive content or disrupt the normal flow of dialogue within our website
- Disrupt the normal flow of dialogue within our website
- Attempt to gain unauthorized access, or damage the website or its related systems

## 4. Limitation of Liability

In no event shall Mahadev Aromatics, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract, tort or otherwise.

## 5. Indemnification

You hereby indemnify to the fullest extent possible Mahadev Aromatics from and against any and all liabilities, costs, demands, causes of action, damages, or expenses arising out of or incurred by reason of your breach of any promise, representation, warranty, or covenant, or any other violation by you of these terms and conditions.

## 6. Severability

If any provision of these terms and conditions is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.

## 7. Variation of Terms

Mahadev Aromatics is permitted to revise these terms and conditions for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms and conditions.

## 8. Assignment

Mahadev Aromatics is allowed to assign, transfer, and subcontract its rights and/or obligations under these terms without any notification to you.

## 9. Entire Agreement

These terms and conditions, including any legal notices and disclaimers contained on this website, constitute the entire agreement between you and Mahadev Aromatics, and supersede all prior negotiations, representations, and agreements, whether written or oral.

## 10. Governing Law

These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Haryana.`,
    updatedAt: new Date().toISOString(),
  }
}
