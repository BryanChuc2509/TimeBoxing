import * as React from "react";
import './index.css'
import NavBar from "./components/NavBar";

// 1. import `NextUIProvider` component
import { defaultLayout, Navbar, NextUIProvider } from "@nextui-org/react";
import TableActivity from "./components/TableActivity";
import SectionSchedule from "./components/SectionSchedule";

function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <NavBar />
      <div style={{backgroundColor: "#222222", height: "260px", paddingTop: "50px", padding: "20px"}}>
        <TableActivity/>
      </div>
      <SectionSchedule/>
    </NextUIProvider>
  );
}

export default App;