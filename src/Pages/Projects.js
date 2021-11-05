import React from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";
import PageTitle from "../Components/PageTitle";
import View from "../Components/View";
import { projects } from "../data/projects";
export default function Projects() {
  return (
    <>
      <View>
        <Header />
        <div className="container">
          <PageTitle>Projects </PageTitle>

          <div class="container">
            <div class="row align-items-center">
              <div class="col">
                <Card project={projects[0]} />
              </div>
            </div>
          </div>
        </div>
      </View>
    </>
  );
}
