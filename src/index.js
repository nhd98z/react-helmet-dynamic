import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>React App - HomePage</title>
        <meta name="twitter:title" content="React App - HomePage" />
      </Helmet>
      <div>HomePage</div>
      <div>
        Không bao giờ làm được dynamic twitter card với create-react-app, bởi vì
        twitter card generator chỉ đọc file html của trang web.
      </div>
      <div>Server side rendering là giải pháp duy nhất.</div>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>React App - AboutPage</title>
        <meta name="twitter:title" content="React App - AboutPage" />
      </Helmet>
      <div>AboutPage</div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
