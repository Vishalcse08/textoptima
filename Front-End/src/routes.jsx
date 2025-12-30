import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Smarttext from "./pages/Smarttext";
import GrammarCheck from "./pages/GrammarCheck";
import EmailGenerator from "./pages/EmailGenerator";
import QuickReply from "./pages/QuickReply";

const routes = () => {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}>
          <Route index element={<Smarttext />} />
          <Route path="grammar" element={<GrammarCheck />} />
          <Route path="email" element={<EmailGenerator />} />
          <Route path="reply" element={<QuickReply />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default routes