import StaticPageLayout from "./StaticPageLayout";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Click on Sign In on the login page and toggle to 'New to Netflix? Sign Up Now' to create an account with your email and password.",
  },
  {
    question: "How does GPT Search work?",
    answer:
      "GPT Search lets you describe the kind of movie you want to watch in plain language. Our AI suggests matching titles from our catalog based on your description.",
  },
  {
    question: "Why can't I sign in?",
    answer:
      "Make sure your email and password are correct. If you've forgotten your password, try resetting it or creating a new account.",
  },
  {
    question: "Is this application affiliated with Netflix?",
    answer:
      "No. This is a clone project built for educational purposes to demonstrate React, Firebase, and AI integration skills.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Since this is a demo project, there is no live support team. Feel free to check the project's repository for more details.",
  },
];

const HelpCenter = () => {
  return (
    <StaticPageLayout title="Help Centre">
      <p>
        Find answers to the most common questions about using this
        application below.
      </p>

      <div className="flex flex-col divide-y divide-gray-800 border-t border-b border-gray-800">
        {faqs.map((faq, index) => (
          <details key={index} className="group py-4">
            <summary className="cursor-pointer list-none flex items-center justify-between text-white font-medium">
              {faq.question}
              <span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-400">{faq.answer}</p>
          </details>
        ))}
      </div>
    </StaticPageLayout>
  );
};

export default HelpCenter;
