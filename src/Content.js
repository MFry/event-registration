import React from "react";
import Paper from "material-ui/Paper";
import EventForm from "./EventForm";
import dummyContent from "./demo/dummyData";

const Content = () => (
  <div className="mobile-desktop-container">
    <Paper elevation={1}>
      <EventForm
        title={dummyContent.title}
        description={dummyContent.content}
        startDateTime={dummyContent.startDate}
        endDateTime={dummyContent.endDate}
        address={dummyContent.address}
        openSlots={dummyContent.openSlots}
        maxSlots={dummyContent.maxSlots}
        courses={dummyContent.courses}
      />
    </Paper>
  </div>
);

export default Content;
