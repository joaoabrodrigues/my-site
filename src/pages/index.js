import React from "react";
import {
  HeroSection,
  Page,
  Seo
} from "gatsby-theme-portfolio-minimal";


export default function IndexPage() {
  return (
    <>
      <Seo title="João Rodrigues" />
      <Page>
        <HeroSection sectionId="hero" />
      </Page>
    </>
  );
}
