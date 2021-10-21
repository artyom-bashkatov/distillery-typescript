import React from "react"

// example if handleClick is fire from button element
// this event handler show error, if we use it on <a> element for example
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.info(e);
}

// example handler, which we can to use on button and anchor elements
// extend generic
const handleClickSecond = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
  console.info(e);
}

// focus event example
const handleFocus = (e: React.FocusEvent<HTMLInputElement>):void => {
  console.info(e.currentTarget);
}

// submit form handler with specify type for Form element
const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
  e.preventDefault();
}

const handleCopy = (e: React.ClipboardEvent<HTMLInputElement>):void => {
  e.preventDefault();
}

export {}

