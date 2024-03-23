import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import Experiences from "./AdminExperiences";
import Projects from "./AdminProjects";
import Courses from "./AdminCourses";
import Contact from "./AdminContact";

const { TabPane } = Tabs;
function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      <h1 className="text-2xl px-5 py-2 text-primary">Portfolio Admin</h1>
      {portfolioData && (
        <div className="p-5">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
            <TabPane tab="Experiences" key="3">
              <Experiences />
            </TabPane>
            <TabPane tab="Projects" key="4">
              <Projects />
            </TabPane>
            <TabPane tab="Courses" key="5">
              <Courses />
            </TabPane>
            <TabPane tab="Contact" key="6">
              <Contact />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;
