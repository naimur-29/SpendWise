import React from "react";

import SearchBar from "../Components/SearchBar/SearchBar";
import Card from "../Components/Card/Card";

export default function HomePage() {
  return (
    <section className="px-[50px] py-[40px]">
      <SearchBar />
      <Card />
    </section>
  );
}
