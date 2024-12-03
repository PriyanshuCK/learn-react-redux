import React, { FC } from "react";
import "./LearningNextJS.css";

interface LearningNextJSProps {}

const LearningNextJS: FC<LearningNextJSProps> = () => (
  <>
    <div id="plan-container">
      <h1 className="plan-title">Learning Next.js</h1>
      <p className="plan-description">
        We’ll be following the{" "}
        <a
          href="https://nextjs.org/learn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>{" "}
        section from the official Next.js documentation. We'll be building a
        simple full-stack financial dashboard that has:
      </p>
      <ul className="plan-list">
        <li>A public home page.</li>
        <li>A login page.</li>
        <li>Dashboard pages that are protected by authentication.</li>
        <li>The ability for users to add, edit, and delete invoices.</li>
      </ul>
      <img
        src="https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fdashboard.png&w=1920&q=75&dpl=dpl_6xxKuH4jJ4oKS29i2wEZWsB5Fyot"
        alt="Financial Dashboard"
        id="financial-demo-img"
      />

      <div className="day-section" id="day-1">
        <h2 className="day-title">Day 1</h2>
        <p className="steps-title">Steps covered & concepts learned:</p>
        <ul className="steps-list">
          <li>Getting Started</li>
          <li>CSS Styling</li>
          <li>Optimizing Fonts & Images</li>
          <li>Creating Layouts & Pages</li>
        </ul>
      </div>

      <div className="day-section" id="day-2">
        <h2 className="day-title">Day 2</h2>
        <p className="steps-title">Steps covered & concepts learned:</p>
        <ul className="steps-list">
          <li>Navigating Between Pages</li>
          <li>Setting Up Your Database</li>
          <li>Fetching Data</li>
        </ul>
      </div>

      <div className="day-section" id="day-3">
        <h2 className="day-title">Day 3</h2>
        <p className="steps-title">Steps covered & concepts learned:</p>
        <ul className="steps-list">
          <li>Static & Dynamic Rendering</li>
          <li>Streaming</li>
          <li>Partial Prerendering</li>
        </ul>
      </div>

      <div className="day-section" id="day-4">
        <h2 className="day-title">Day 4</h2>
        <p className="steps-title">Steps covered:</p>
        <ul className="steps-list">
          <li>Adding Search & Pagination</li>
          <li>Mutating Data</li>
          <li>Handling Errors</li>
        </ul>
        <p className="concepts-title">Concepts learned:</p>
        <ul className="concepts-list">
          <li>URL search params, Debouncing, useRouter, usePathname</li>
          <li>
            React Server Actions (React.JS concept), revalidation and
            redirection, creating dynamic routes
          </li>
        </ul>
      </div>

      <div className="day-section" id="day-5">
        <h2 className="day-title">Day 5</h2>
        <p className="steps-title">Steps covered:</p>
        <ul className="steps-list">
          <li>Improving Accessibility</li>
          <li>Adding Authentication</li>
          <li>Adding Metadata</li>
        </ul>
        <p className="concepts-title">Concepts learned:</p>
        <ul className="concepts-list">
          <li>useActionState (React Hook)</li>
          <li>NextAuth.js</li>
        </ul>
      </div>
    </div>
  </>
);

export default LearningNextJS;
