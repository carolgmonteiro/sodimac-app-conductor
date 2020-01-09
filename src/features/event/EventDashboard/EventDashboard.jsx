import React, { Component, Fragment } from "react";
import { Grid, Button, Segment } from "semantic-ui-react";
import EventList from "../EventList/EventList";
//import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
const eventsFromDashboard = [
  {
    id: "1",
    title: "18257568466495938556",
    //date: "2018-03-27",
    //category: "culture",
    //description:
    // "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Santiago",
    venue: "Juanito Perez 10547, La florida",
    hostedBy: "Dharma Herrera"
    //hostPhotoURL: "https://randomuser.me/api/portraits/lego/1.jpg",
    //attendees: [
    //{
    //id: "a",
    //name: "Bob",
    //photoURL: "https://randomuser.me/api/portraits/lego/1.jpg"
    //},
    //{
    //id: "b",
    //name: "Tom",
    //photoURL: "https://randomuser.me/api/portraits/lego/6.jpg"
    //}
    //]
  },
  {
    id: "2",
    title: "739448260264854063",
    //date: "2018-03-28",
    //category: "drinks",
    //description:
    //"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Santiago",
    venue: "Hernando de Aguirre 2153",
    hostedBy: "Carolina Ribeiro"
    //hostPhotoURL: "https://randomuser.me/api/portraits/lego/2.jpg",
    //attendees: [
    //{
    //id: "b",
    //name: "Tom",
    //photoURL: "https://randomuser.me/api/portraits/lego/6.jpg"
    //},
    //{
    //id: "a",
    //name: "Bob",
    //photoURL: "https://randomuser.me/api/portraits/lego/1.jpg"
    //}
    //]
  }
];

class EventDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: eventsFromDashboard,
      isOpen: false
    };
    // this.handleIsOpenToggle = this.handleIsOpenToggle.bind(this);
    // this.cancelFormOpen = this.cancelFormOpen.bind(this);
  }

  //open and close in the same button "Create Event"
  // handleIsOpenToggle = () => {
  //   this.setState(prevState => ({
  //     isOpen: !prevState.isOpen
  //   }));
  // };

  //abrir formulario
  //handleCreateFormOpen = () => {
  //this.setState({
  //isOpen: true,
  //selectedEvent: null
  //});
  //};
  //cancelar y cerrar el formulario
  //handleFormCancel = () => {
  //isOpen: false
  //});
  //};

  //update del evento
  //handleUpdateEvent = updatedEvent => {
  //this.setState(({ events }) => ({
  //events: events.map(event => {
  //if (event.id === updatedEvent.id) {
  //return { ...updatedEvent };
  //} else {
  //return event;
  //}
  //}),
  //isOpen: false,
  //selectedEvent: null
  //}));
  //};

  //handleDeleteEvent = id => {
  //this.setState(({ events }) => ({
  //events: events.filter(e => e.id !== id)
  //}));
  //};

  //crear e, evento con id proprio (cuid)
  //handleCreateEvent = newEvent => {
  //newEvent.id = cuid();
  //newEvent.hostPhotoURL = "/assets/user.png";
  //this.setState(({ events }) => ({
  //create a new array of events
  //events: [...events, newEvent],
  //isOpen: false,
  //selectedEvent: null
  //}));
  //};

  //elijir el evento
  //handleSelectEvent = event => {
  //this.setState({
  //selectedEvent: event,
  //isOpen: true
  //});
  //};
  render() {
    const { events, isOpen, selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={14}>
          <EventList
            events={events}
            //selectEvent={this.handleSelectEvent}
            //deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
