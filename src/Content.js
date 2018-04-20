import React from "react";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

import EventForm from "./EventForm";
import dummyContent from "./Demo/dummyData";

const Content = () => (
  <Row>
    <Col md="12">
      <EventForm
        title={dummyContent.title}
        description={dummyContent.content}
      />
    </Col>
  </Row>
);

export default Content;
