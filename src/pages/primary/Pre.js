import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre; // this preloader is used to show the loading screen when the page is loading. It is used in the App.js file. It is a functional component that takes props as an argument and returns a div element with an id of preloader or preloader-none depending on the value of the load prop. If the load prop is true, the id is set to preloader, otherwise it is set to preloader-none. The preloader class is used to style the loading screen. The preloader-none class is used to hide the loading screen.// Path: src/pages/primary/Pre.js
