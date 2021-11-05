import React from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";
import PageTitle from "../Components/PageTitle";
import View from "../Components/View";

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
                <Card />
              </div>
              <div class="col">
                <Card />
              </div>
              <div class="col">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </View>
    </>
  );
}
