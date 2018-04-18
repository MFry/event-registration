import React from "react";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

import EventForm from "./EventForm";

const Content = () => (
  <Row>
    <Col md="12">
      <EventForm title="Tango Beginner Workshop" />
    </Col>
  </Row>
);

export default Content;
