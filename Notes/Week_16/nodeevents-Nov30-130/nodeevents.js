// node.js makes an extensive of asynchronous methods
// logic doesn't always execute linear/sequential top-down manner

// event-driven applications
// events happen independently
// event handlers "handle" the events
// they are executed after an event happens
// event handlers are just methods

// events "fired" all the time

// click event is predefined
// we can also have custom-defined events

// we will implement a custom event
// we will require the events module

// load the events module
let events = require("events");

// we need something to be able to fire or raise events
// node.js "emits" events
// we need an event emitter

// can you insantiate an instance of EventEmitter (you must get it from events object)
let eventEmitter = new events.EventEmitter();

// talk about event handlers
// event handlers are just methods
// when an event happens an event handler executes

// the relationship between event and event handler
// "event-wiring" / wire the event
// "bind" the event to the handler

// this is the connection or the event-wiring which establishes the relationship
// when randomCustomEvent happens, execute myOwnEventHandler method
eventEmitter.on("randomCustomEvent", myOwnEventHandler);

// Raise or fire or emit the event
eventEmitter.emit("randomCustomEvent");
eventEmitter.emit("randomCustomEvent");
eventEmitter.emit("randomCustomEvent");

function myOwnEventHandler(){
    // this function will be executed when the event happens
    console.log("Event is being handled");
}
