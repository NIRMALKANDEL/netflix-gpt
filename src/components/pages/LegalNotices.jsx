import StaticPageLayout from "./StaticPageLayout";

const LegalNotices = () => {
  return (
    <StaticPageLayout title="Legal Notices">
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">
          Disclaimer
        </h2>
        <p>
          This application is an independent, non-commercial clone project
          created for educational purposes only. It is not affiliated with,
          endorsed by, or connected to Netflix, Inc. in any way. "Netflix" and
          its associated logos are trademarks of Netflix, Inc.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">
          Third-Party Content
        </h2>
        <p>
          Movie titles, posters, and related metadata displayed in this
          application are sourced from third-party APIs (such as TMDB) and
          remain the property of their respective owners.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">
          Data & Privacy
        </h2>
        <p>
          User authentication is handled through Firebase. No personal data
          collected in this demo is sold or shared with third parties beyond
          what is required for the application to function.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">
          Limitation of Liability
        </h2>
        <p>
          This application is provided "as is" without warranties of any
          kind. The creator is not liable for any damages arising from the
          use of this application.
        </p>
      </section>
    </StaticPageLayout>
  );
};

export default LegalNotices;
