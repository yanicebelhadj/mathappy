import React, { useState } from "react";

import LateralNavbar from "../components/lateral-navbar/lateral-navbar";

import Categories from "../components/categorie/categorie";
import CompetencesList from "../components/competence-list/competence-list";
import ContentPresentation from "../components/content-presentation/content-presentation";
import Header from "../components/header/header.component";
import "../css/HomePage.css";

function HomePage() {
  const [filteredCategory, updateFilteredCatgory] = useState("sixieme");
  const [filteredCompetences, updateFilteredCompetences] =
    useState("Nombres et calculs");
  const [filteredContentPresentation, updateFilteredContentPresentation] =
    useState("");

  const onFilterCategorySelected = (filterCategories) => {
    if (filterCategories === undefined) {
      return null;
    }
    updateFilteredCatgory(filterCategories);
  };

  const onFilterCompetencesSelected = (filterCompetences) => {
    if (filterCompetences === undefined) {
      return null;
    }
    updateFilteredCompetences(filterCompetences);
  };

  const onFilterContentPresentationSelected = (filterContentPresentation) => {
    if (filterContentPresentation === undefined) {
      return null;
    }
    updateFilteredContentPresentation(filterContentPresentation);
  };

  return (
    <div className="HomePage">
      <LateralNavbar filterCategories={onFilterCategorySelected} />

      <Header />

      <div className="HomePageContainer">
        <h1>Les cours</h1>

        <div className="Line">
          <Categories
            level={filteredCategory}
            filterCompetences={onFilterCompetencesSelected}
          />
          <CompetencesList
            level={filteredCategory}
            filterCategories={filteredCompetences}
            filterContentPresentation={onFilterContentPresentationSelected}
          />
          <ContentPresentation
            level={filteredCategory}
            filterCategories={filteredCompetences}
            filterContentPresentation={filteredContentPresentation}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
