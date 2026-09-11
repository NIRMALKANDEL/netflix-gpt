import StaticPageLayout from "./StaticPageLayout";

const TermsAndConditions = () => {
  return (
    <StaticPageLayout title="Terms and Conditions">
      <p>
        Welcome to our Netflix-GPT clone. By accessing or using this
        application, you agree to be bound by the following terms and
        conditions. This is a demo project built for learning purposes and is
        not affiliated with Netflix, Inc.
      </p>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">
          1. Use of the Service
        </h2>
        <p>
          This application is provided for educational and demonstration
          purposes only. Content, movie data, and recommendations are fetched
          from third-party APIs and are used solely to showcase application
          functionality.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">
          2. Account Registration
        </h2>
        <p>
          Users may sign up using an email and password. You are responsible
          for maintaining the confidentiality of your account credentials and
          for any activity that occurs under your account.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">
          3. Intellectual Property
        </h2>
        <p>
          All trademarks, logos, and movie data displayed belong to their
          respective owners. This project does not claim ownership of any
          third-party content.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">
          4. Changes to Terms
        </h2>
        <p>
          These terms may be updated from time to time without prior notice.
          Continued use of the application constitutes acceptance of any
          changes.
        </p>
      </section>
    </StaticPageLayout>
  );
};

export default TermsAndConditions;
