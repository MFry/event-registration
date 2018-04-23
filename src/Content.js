import React from "react";
import EventForm from "./EventForm";
import dummyContent from "./Demo/dummyData";

const Content = () => (
  <EventForm title={dummyContent.title} description={dummyContent.content} />
);

export default Content;
