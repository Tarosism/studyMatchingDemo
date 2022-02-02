import MainContainer from "./components/MainContainer";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import StudyMatchingSection from "./pages/StudyMatchingSection";

import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [navCheck, setNavCheck] = useState(false);

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Nav />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route
          path="/studyMatchingSection"
          element={<StudyMatchingSection />}
        />
      </Routes>
      <Footer />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
 html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
}
`;

export default App;
