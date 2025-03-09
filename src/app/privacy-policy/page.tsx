import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div>
      <h1 className="text-4xl mb-4"> Privacy Policy</h1>
      <p>
        This Privacy Policy describes how Bridge Productivity Booster (&#34;the
        App&#34;) collects, uses, and protects your information.
      </p>
      <h2 className="text-2xl my-2">Information Collection</h2>
      <b>Email Address:</b> We collect your email address when you create an
      account. This is used for account management and communication purposes.
      <br />
      <br />
      <b>Name (Optional)</b> You have the option to provide your name. If
      provided, it is used for personalization within the App.
      <br />
      <br />
      <b>Usage Data</b> The app stores data regarding your usage of the app,
      this includes saved websites, created notes, created tasks, pomodoro
      settings, theme settings, and mode settings. This data is stored to our
      servers.
      <br />
      <br />
      <b>No Personal Data Collection</b> Apart from the email address and
      optional name, the App does not collect any other personally identifiable
      information. Use of Information
      <br />
      <br />
      <b>Your email address is used for</b>
      Account creation and management. Communication related to the App, such as
      updates or important notices, if only you sign up.
      <br />
      <br />
      <b>Your optional name is used for</b>
      Personalizing your experience within the App.
      <h2 className="text-2xl mt-6 mb-4">Data Storage and Security</h2>
      <b>Data</b>: Data contains only Sites, Sites Group, Tasks, Notes, Theme,
      App config, Tags, Modes and Pomodoro config Your email address, optional
      name and data are stored securely. All other user data is stored locally
      on your device. We take reasonable measures to protect your information
      from unauthorized access, use, or disclosure. However, no method of
      transmission over the internet or method of electronic storage is 100%
      secure.
      <h3 className="text-lg my-2"> Data Sharing</h3>
      We do not share your personal information (email address or name) with
      third parties, except as required by law.
      <h3 className="text-lg my-2"> User Rights</h3>
      You have the right to access, correct, or delete your personal information
      (email address and name) by contacting us. Right now once your account is
      deleted, we will delete all the data related to your account. It is not
      possible to recover once data is gone.
      <h3 className="text-lg my-2">Changes to This Privacy Policy</h3>
      We may update this Privacy Policy from time to time. We will notify you of
      any changes by posting the new Privacy Policy on this page. You are
      advised to review this Privacy Policy periodically for any changes.
      Contact Us If you have any questions about this Privacy Policy, please
      contact us at contact@bridgeproductivity.com
      <Footer className="fixed bottom-0" />
    </div>
  );
}
