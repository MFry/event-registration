import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import EventForm from "./EventForm";
import dummyContent from "./demo/dummyData";

const Event = () => (
  <ContentDesktopMobile>
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
  </ContentDesktopMobile>
);

class ContentDesktopMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.responsiveRender();
    });
  }

  responsiveRender() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    if (this.state.width > 980) {
      return (
        <div className="mobile-desktop-container">
          <Paper elevation={1}>{this.props.children}</Paper>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default Event;
