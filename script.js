"use strict";
// Access question
const questionTxt = document.querySelector(".questionTxt");
// access answers individually
const answerTxt1 = document.querySelector(".answer--0");
const answerTxt2 = document.querySelector(".answer--1");
const answerTxt3 = document.querySelector(".answer--2");
// access answers in general
const answerBtnAll = document.querySelectorAll(".answer");
// select all nav buttons
const navTopicList = document.querySelectorAll(".topic-list");
// select wrong answer count
const wrongAnswerScore = document.querySelector(".wrong-score");
// select correct answer count
const rightAnswerScore = document.querySelector(".correct-score");
// select the hamburger button
const hamburgerButton = document.querySelector(".menu-button");
// select the off screen menu
const offScreenMenu = document.querySelector(".off-screen-menu");

// Make a variable that holds the current topic
let currentTopic = 0;

// Make a variable that holds the current wrong answers score
let wrongAnswers = 0;

// Make a variable that holds the current right answers score
let rightAnswers = 0;

// make arrays for all topics with question objects inside of them
const basicsQuestions = [
  {
    question: "What is a user agent?",
    answers: [
      "A computer that provides data, resources or other services to ohter computers over a network.",
      "A computer or software that requests resources or services from a server.",
      "A software application, like a web browser, that acts on behalf of a user to interact with websites and other online services.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is a server?",
    answers: [
      "A computer that provides data, resources or other services to ohter computers over a network.",
      "A computer or software that requests resources or services from a server.",
      "A software application, like a web browser, that acts on behalf of a user to interact with websites and other online services.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is a client?",
    answers: [
      "A computer that provides data, resources or other services to ohter computers over a network.",
      "A computer or software that requests resources or services from a server.",
      "A software application, like a web browser, that acts on behalf of a user to interact with websites and other online services.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is meta data?",
    answers: [
      "It is the process of adding code to a document to provide structure and context.",
      "It is giving meaning to something.",
      "It is data about other data.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is document markup?",
    answers: [
      "It is the process of adding code to a document to provide structure and context.",
      "It is giving meaning to something.",
      "It is data about other data.",
    ],
    corAnswer: 0,
  },
  {
    question: "What does semantic mean?",
    answers: [
      "It is the process of adding code to a document to provide structure and context.",
      "It is giving meaning to something.",
      "It is data about other data.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is a browsing context?",
    answers: [
      "It is the whole piece of code between the starting tag and the closing tag.",
      "It is a node in a tree structure that represents the root of a new section.",
      "It is an environment in which document objects are presented to the user, like a browser window.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is an element?",
    answers: [
      "It is the whole piece of code between the starting tag and the closing tag.",
      "It is a node in a tree structure that represents the root of a new section.",
      "It is an environment in which document objects are presented to the user, like a browser window.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is a sectioning root?",
    answers: [
      "It is the whole piece of code between the starting tag and the closing tag.",
      "It is a node in a tree structure that represents the root of a new section.",
      "It is an environment in which document objects are presented to the user, like a browser window.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is a HTML element category?",
    answers: [
      "It is the content model(s) that an HTML element belongs to.",
      "It is the content model(s) that an HTML element can contain.",
      "It is a collection of data / code which together represents something.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is an object?",
    answers: [
      "It is the content model(s) that an HTML element belongs to.",
      "It is the content model(s) that an HTML element can contain.",
      "It is a collection of data / code which together represents something.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is a HTML element content model?",
    answers: [
      "It is the content model(s) that an HTML element belongs to.",
      "It is the content model(s) that an HTML element can contain.",
      "It is a collection of data / code which together represents something.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is HyperText?",
    answers: [
      "It is a system of rules for two entities to communicate.",
      "It is text (documents) that references other text (documents) which the user agent can immediately access.",
      "A set of rules for how two entities (client and server) can transfer text between each other. Text which can link the user to other related text.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is HyperText Transfer Protocol?",
    answers: [
      "It is a system of rules for two entities to communicate.",
      "It is text (documents) that references other text (documents) which the user agent can immediately access.",
      "A set of rules for how two entities (client and server) can transfer text between each other. Text which can link the user to other related text.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is a protocol?",
    answers: [
      "It is a system of rules for two entities to communicate.",
      "It is text (documents) that references other text (documents) which the user agent can immediately access.",
      "A set of rules for how two entities (client and server) can transfer text between each other. Text which can link the user to other related text.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the Document Object Model?",
    answers: [
      "It is an object model that represents an HTML document, providing the ability to examine and change the documents as presented via the user agent.",
      "It is a collection of objects that represent a thing and provide access to examine and change that thing.",
      "It is a list of character combinations, that can be used to represent characters that can otherwise not be used because they are part of the coding syntax.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is an object model?",
    answers: [
      "It is an object model that represents an HTML document, providing the ability to examine and change the documents as presented via the user agent.",
      "It is a collection of objects that represent a thing and provide access to examine and change that thing.",
      "It is a list of character combinations, that can be used to represent characters that can otherwise not be used because they are part of the coding syntax.",
    ],
    corAnswer: 1,
  },
  {
    question: "What are named character references?",
    answers: [
      "It is an object model that represents an HTML document, providing the ability to examine and change the documents as presented via the user agent.",
      "It is a collection of objects that represent a thing and provide access to examine and change that thing.",
      "It is a list of character combinations, that can be used to represent characters that can otherwise not be used because they are part of the coding syntax.",
    ],
    corAnswer: 2,
  },
];
console.log("basics questions", basicsQuestions.length);

const contentQuestions = [
  {
    question: "What is flow content?",
    answers: [
      "Content that helps organizing and structuring your content, by dividing it into logical parts.",
      "Content that refers to everything to do with text and inline elements inside of the document.",
      "Contant that makes up most of the elements that go within the <body> element.",
    ],
    corAnswer: 2,
  },
  {
    question:
      "Which of the following listed elements is considered flow content?",
    answers: [
      "<title>, <meta>, <link>",
      "<input>, <button>, <form>",
      "<article>, <h1>, <section>",
    ],
    corAnswer: 2,
  },
  {
    question: "What is sectioning content?",
    answers: [
      "Content that helps organizing and structuring your content, by dividing it into logical parts.",
      "Content that refers to everything to do with text and inline elements inside of the document.",
      "Contant that makes up most of the elements that go within the <body> element.",
    ],
    corAnswer: 0,
  },
  {
    question:
      "Which of the following listed elements is considered sectioning content?",
    answers: [
      "<h1>, <h6>, <hgroup>",
      "<article>, <button>, <form>",
      "<article>, <aside>, <section>",
    ],
    corAnswer: 2,
  },
  {
    question: "What is phrasing content?",
    answers: [
      "Content that helps organizing and structuring your content, by dividing it into logical parts.",
      "Content that refers to everything to do with text and inline elements inside of the document.",
      "Contant that makes up most of the elements that go within the <body> element.",
    ],
    corAnswer: 1,
  },
  {
    question:
      "Which of the following listed elements is considered phrasing content?",
    answers: [
      "<h1>, <h6>, <hgroup>",
      "<article>, <button>, <form>",
      "<article>, <aside>, <section>",
    ],
    corAnswer: 1,
  },
  {
    question: "What is metadatat content?",
    answers: [
      "Content that imports or inserts another resource into the document.",
      "Content that defines the title of a section",
      "Content that modifies the presentation or behavior of the rest of the document.",
    ],
    corAnswer: 2,
  },
  {
    question:
      "Which of the following listed elements is considered metadata content?",
    answers: [
      "<title>, <meta>, <link>",
      "<input>, <button>, <form>",
      "<article>, <h1>, <section>",
    ],
    corAnswer: 0,
  },
  {
    question: "What is heading content?",
    answers: [
      "Content that imports or inserts another resource into the document.",
      "Content that defines the title of a section",
      "Content that modifies the presentation or behavior of the rest of the document.",
    ],
    corAnswer: 1,
  },
  {
    question:
      "Which of the following listed elements is considered heading content?",
    answers: [
      "<h1>, <h6>, <hgroup>",
      "<article>, <button>, <form>",
      "<article>, <aside>, <section>",
    ],
    corAnswer: 0,
  },
  {
    question: "What is embedded content?",
    answers: [
      "Content that imports or inserts another resource into the document.",
      "Content that defines the title of a section",
      "Content that modifies the presentation or behavior of the rest of the document.",
    ],
    corAnswer: 0,
  },
  {
    question:
      "Which of the following listed elements is considered embedded content?",
    answers: [
      "<embed>, <img>, <video>",
      "<select>, <button>, <details>",
      "<footer>, <img>, <p>",
    ],
    corAnswer: 0,
  },
  {
    question: "What is interactive content?",
    answers: [
      "Content that is specifically designed for user interaction.",
      "Content that is neither empty nor hidden. It is rendered and substantive.",
      "Content that is a form owner, exposed by a form attribute, and can be used everywhere flow content is expected.",
    ],
    corAnswer: 0,
  },
  {
    question:
      "Which of the following listed elements is considered interactive content?",
    answers: [
      "<embed>, <img>, <video>",
      "<select>, <button>, <details>",
      "<footer>, <img>, <p>",
    ],
    corAnswer: 1,
  },
  {
    question: "What is palpable content?",
    answers: [
      "Content that is specifically designed for user interaction.",
      "Content that is neither empty nor hidden. It is rendered and substantive.",
      "Content that is a form owner, exposed by a form attribute, and can be used everywhere flow content is expected.",
    ],
    corAnswer: 1,
  },
  {
    question:
      "Which of the following listed elements is considered palpable content?",
    answers: [
      "<embed>, <img>, <video>",
      "<select>, <button>, <details>",
      "<footer>, <img>, <p>",
    ],
    corAnswer: 2,
  },
  {
    question: "What is form-associated content?",
    answers: [
      "Content that is specifically designed for user interaction.",
      "Content that is neither empty nor hidden. It is rendered and substantive.",
      "Content that is a form owner, exposed by a form attribute, and can be used everywhere flow content is expected.",
    ],
    corAnswer: 2,
  },
  {
    question:
      "Which of the following listed elements is considered form-associated content?",
    answers: [
      "<title>, <meta>, <link>",
      "<input>, <button>, <form>",
      "<article>, <h1>, <section>",
    ],
    corAnswer: 1,
  },
];
console.log("content questions", contentQuestions.length);

const commonElementsQuestions = [
  {
    question: "What is the <!DOCTYPE html> declaration used for?",
    answers: [
      "It is an element that contains metadata elements. It should be the first element inside of your <html> element.",
      "It is a declaration that tells the browser which version of HTML to use. In this case that is HTML5.",
      "It is the root element of your HTML document, containing both the head and body element.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <html> element used for?",
    answers: [
      "It is an element that contains metadata elements. It should be the first element inside of your <html> element.",
      "It is a declaration that tells the browser which version of HTML to use. In this case that is HTML5.",
      "It is the root element of your HTML document, containing both the head and body element.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <head> element used for?",
    answers: [
      "It contains metadata elements. It should be the first element inside of your <html> element.",
      "It is a declaration that tells the browser which version of HTML to use. In this case that is HTML5.",
      "It is the root element of your HTML document, containing both the head and body element.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <title> element used for?",
    answers: [
      "It contains a piece of the document, that can make sense on its own, when taken outside of the context of the document.",
      "It thematically groups the content in your document.",
      "It is a metadata element that contains the title of the document. It will also show up in your browser title bar.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <article> element used for?",
    answers: [
      "It contains a piece of the document, that can make sense on its own, when taken outside of the context of the document.",
      "It thematically groups the content in your document.",
      "It is a metadata element that contains the title of the document. It will also show up in your browser title bar.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <section> element used for?",
    answers: [
      "It contains a piece of the document, that can make sense on its own, when taken outside of the context of the document.",
      "It thematically groups the content in your document.",
      "It is a metadata element that contains the title of the document. It will also show up in your browser title bar.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <aside> element used for?",
    answers: [
      "It contains content that adds to the topic of the rest of the section or document, rather than actually being part of the main topic.",
      "It contains introductory content to the page or the section it is in. Which can be headers, but also navigational links.",
      "It is used as a footer to a section or document, and usually contains things like legal information, contact information, and other concluding information.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <footer> element used for?",
    answers: [
      "It contains content that adds to the topic of the rest of the section or document, rather than actually being part of the main topic.",
      "It contains introductory content to the page or the section it is in. Which can be headers, but also navigational links.",
      "It is used as a footer to a section or document, and usually contains things like legal information, contact information, and other concluding information.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <header> element used for?",
    answers: [
      "It contains content that adds to the topic of the rest of the section or document, rather than actually being part of the main topic.",
      "It contains introductory content to the page or the section it is in. Which can be headers, but also navigational links.",
      "It is used as a footer to a section or document, and usually contains things like legal information, contact information, and other concluding information.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <body> element used for?",
    answers: [
      "It contains all content that should be experienced by the user.",
      "They are heading elements that contain the title name of a section.",
      "It represents the contact information belonging to the nearest article or body element.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <address> element used for?",
    answers: [
      "It is used as a link to other documents, or fragments within the current document.",
      "It is used for a section of the document that links to other pages or to fragments within the current document.",
      "It represents the contact information belonging to the nearest <article> or <body> element.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <a> element used for?",
    answers: [
      "It is used as a link to other documents, or fragments within the current document.",
      "It is used for a section of the document that links to other pages or to fragments within the current document.",
      "It represents the contact information belonging to the nearest <article> or <body> element.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <nav> element used for?",
    answers: [
      "It is used as a link to other documents, or fragments within the current document.",
      "It is used for a section of the document that links to other pages or to fragments within the current document.",
      "It represents the contact information belonging to the nearest <article> or <body> element.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <p> element used for?",
    answers: [
      "It represents a section that is quoted from another source.",
      "It is used to stress emphasis on its contents.",
      "It is used for paragraphs of text.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <blockquote> element used for?",
    answers: [
      "It represents a section that is quoted from another source.",
      "It is used to stress emphasis on its contents.",
      "It is used for paragraphs of text.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <em> element used for?",
    answers: [
      "It represents a section that is quoted from another source.",
      "It is used to stress emphasis on its contents.",
      "It is used for paragraphs of text.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <li> element used for?",
    answers: [
      "It is used to represent a list item element for a <ul> or <ol> element.",
      "It represents an ordered list, and announces that the following list elements should be ordered in a specified way.",
      "It represents an unordered list, and announces that the following list elements should not be presented in a specified order.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <ul> element used for?",
    answers: [
      "It is used to represent a list item element for a <ul> or <ol> element.",
      "It represents an ordered list, and announces that the following list elements should be ordered in a specified way.",
      "It represents an unordered list, and announces that the following list elements should not be presented in a specified order.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <ol> element used for?",
    answers: [
      "It is used to represent a list item element for a <ul> or <ol> element.",
      "It represents an ordered list, and announces that the following list elements should be ordered in a specified way.",
      "It represents an unordered list, and announces that the following list elements should not be presented in a specified order.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <dl> element used for?",
    answers: [
      "It represents the title or name for the description list item.",
      "It represents the description or value of the description list item.",
      "It represents a description list, which is a list consisting of name-value pairs.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <dd> element used for?",
    answers: [
      "It represents the title or name for the description list item.",
      "It represents the description or value of the description list item.",
      "It represents a description list, which is a list consisting of name-value pairs.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <dt> element used for?",
    answers: [
      "It represents the title or name for the description list item.",
      "It represents the description or value of the description list item.",
      "It represents a description list, which is a list consisting of name-value pairs.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <table> element used for?",
    answers: [
      "It represents data with more than one dimension, in the form of a table.",
      "It represents the head row of a table, where you can specify the topic names of the table contents.",
      "It represents the table head cells.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <th> element used for?",
    answers: [
      "It represents data with more than one dimension, in the form of a table.",
      "It represents the head row of a table, where you can specify the topic names of the table contents.",
      "It represents the table head cells.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <thead> element used for?",
    answers: [
      "It represents data with more than one dimension, in the form of a table.",
      "It represents the head row of a table, where you can specify the topic names of the table contents.",
      "It represents the table head cells.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <tr> element used for?",
    answers: [
      "It represents the table cell elements that go inside the table footer and table body.",
      "It represents the table body where all te table contents are displayed.",
      "It represents a table row, and should contain table cell elements.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <tbody> element used for?",
    answers: [
      "It represents the table cell elements that go inside the table footer and table body.",
      "It represents the table body where all te table contents are displayed.",
      "It represents a table row, and should contain table cell elements.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <td> element used for?",
    answers: [
      "It represents the table data cell elements that go inside the table footer and table body.",
      "It represents the table body where all te table contents are displayed.",
      "It represents a table row, and should contain table cell elements.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <tfoot> element used for?",
    answers: [
      "It represents the table footer, which can contain concluding information about the table contents.",
      "It is an element without any meaning, that is only used as a last resort when no other element is semantically suited.",
      "It is an element that forces a line break, which can only be used for content that still belongs together after the line break, like an address.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <span> element used for?",
    answers: [
      "It represents the table footer, which can contain concluding information about the table contents.",
      "It is an element without any meaning, that is only used as a last resort when no other element is semantically suited.",
      "It is an element that forces a line break, which can only be used for content that still belongs together after the line break, like an address.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <br> element used for?",
    answers: [
      "It represents the table footer, which can contain concluding information about the table contents.",
      "It is an element without any meaning, that is only used as a last resort when no other element is semantically suited.",
      "It is an element that forces a line break, which can only be used for content that still belongs together after the line break, like an address.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <strong> element used for?",
    answers: [
      "It represents a piece of text where strong urgency, seriousness or attention needs to be emphasized.",
      "It represents a piece of text which should be read in a different voice or mood than the other text.",
      "It represents a piece of text where you want to draw attention to, without making the text more important than the rest of the text.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <b> element used for?",
    answers: [
      "It represents a piece of text where strong urgency, seriousness or attention needs to be emphasized.",
      "It represents a piece of text which should be read in a different voice or mood than the other text.",
      "It represents a piece of text where you want to draw attention to, without making the text more important than the rest of the text.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <i> element used for?",
    answers: [
      "It represents a piece of text where strong urgency, seriousness or attention needs to be emphasized.",
      "It represents a piece of text which should be read in a different voice or mood than the other text.",
      "It represents a piece of text where you want to draw attention to, without making the text more important than the rest of the text.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <input> element used for?",
    answers: [
      "It represents a document section containing interactive controls for submitting information.",
      "It is used to create interactive controls for web-based forms in order to accept data from the user.",
      "It represents a caption for a form control item.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <label> element used for?",
    answers: [
      "It represents a document section containing interactive controls for submitting information.",
      "It is used to create interactive controls for web-based forms in order to accept data from the user.",
      "It represents a caption for a form control item.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <form> element used for?",
    answers: [
      "It represents a document section containing interactive controls for submitting information.",
      "It is used to create interactive controls for web-based forms in order to accept data from the user.",
      "It represents a caption for a form control item.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <button> element used for?",
    answers: [
      "It represents a control that provides a menu of options, the amount of options you can select is changeable through attributes.",
      "It is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element.",
      "It represents a button, labelled by it's contents. Meaning what's inside the button will describe the button and it's goal.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <select> element used for?",
    answers: [
      "It represents a control that provides a menu of options, the amount of options you can select is changeable through attributes.",
      "It is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element.",
      "It represents a button, labelled by it's contents. Meaning what's inside the button will describe the button and it's goal.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <option> element used for?",
    answers: [
      "It represents a control that provides a menu of options, the amount of options you can select is changeable through attributes.",
      "It is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element.",
      "It represents a button, labelled by it's contents. Meaning what's inside the button will describe the button and it's goal.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the <textarea> element used for?",
    answers: [
      "It creates a text field where users can freely input text.",
      "It is used to group a set of controls together.",
      "It is used to give a title to the <fieldset> element.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the <legend> element used for?",
    answers: [
      "It creates a text field where users can freely input text.",
      "It is used to group a set of controls together.",
      "It is used to give a title to the <fieldset> element.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the <fieldset> element used for?",
    answers: [
      "It creates a text field where users can freely input text.",
      "It is used to group a set of controls together.",
      "It is used to give a title to the <fieldset> element.",
    ],
    corAnswer: 1,
  },
];
console.log("element questions", commonElementsQuestions.length);

const attributesQuestions = [
  {
    question: "What is the id attribute used for?",
    answers: [
      "It gives an element an unique identifier. The identifier can only be used on one element.",
      "It determines where the page will open when you click the link. For instance in a new tab.",
      "It determines how many columns a cell spans.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the colspan attribute used for?",
    answers: [
      "It gives an element an unique identifier. The identifier can only be used on one element.",
      "It determines where the page will open when you click the link. For instance in a new tab.",
      "It determines how many columns a cell spans.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the target attribute used for?",
    answers: [
      "It gives an element an unique identifier. The identifier can only be used on one element.",
      "It determines where the page will open when you click the link. For instance in a new tab.",
      "It determines how many columns a cell spans.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the start attribute used for?",
    answers: [
      "It determines where a ordered list will start off.",
      "It reverses the list order.",
      "It lets you specify which character set you want to use.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the reversed attribute used for?",
    answers: [
      "It determines where a ordered list will start off.",
      "It reverses the list order.",
      "It lets you specify which character set you want to use.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the charset attribute used for?",
    answers: [
      "It determines where a ordered list will start off.",
      "It reverses the list order.",
      "It lets you specify which character set you want to use.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the action attribute used for?",
    answers: [
      "It is an attribute that goes inside of the <form> element. It determines the url where the form needs to be sent to.",
      "It is used on input elements to determine what kind of input field you want.",
      "It gives a name to the input element, which is used when the form data is sent to the server.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the type attribute used for?",
    answers: [
      "It is an attribute that goes inside of the <form> element. It determines the url where the form needs to be sent to.",
      "It is used on input elements to determine what kind of input field you want.",
      "It gives a name to the input element, which is used when the form data is sent to the server.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the name attribute used for?",
    answers: [
      "It is an attribute that goes inside of the <form> element. It determines the url where the form needs to be sent to.",
      "It is used on input elements to determine what kind of input field you want.",
      "It gives a name to the input element, which is used when the form data is sent to the server.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the autocomplete attribute used for?",
    answers: [
      "It links the label to the intended input element. It should contain the intended label ID name.",
      "Let's you turn on or off autocomplete on your input element.",
      "It sends a POST request instead of a GET request.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the for attribute used for?",
    answers: [
      "It links the label to the intended input element. It should contain the intended label ID name.",
      "Let's you turn on or off autocomplete on your input element.",
      "It sends a POST request instead of a GET request.",
    ],
    corAnswer: 0,
  },
  {
    question: 'What is the method="post" attribute used for?',
    answers: [
      "It links the label to the intended input element. It should contain the intended label ID name.",
      "Let's you turn on or off autocomplete on your input element.",
      "It sends a POST request instead of a GET request.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is the maxlength attribute used for?",
    answers: [
      "It specifies that a input is required to fill in",
      "It specifies how many characters you can use in your input field.",
      "It is used on input elements to determine what kind of input field you want.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is the required attribute used for?",
    answers: [
      "It specifies that a input is required to fill in",
      "It specifies how many characters you can use in your input field.",
      "It is used on input elements to determine what kind of input field you want.",
    ],
    corAnswer: 0,
  },
];
console.log("attribute questions", attributesQuestions.length);

// Add an event listener for the hamburger button
hamburgerButton.addEventListener("click", function () {
  offScreenMenu.classList.toggle("active");
});

// Make an array that holds all topic arrays
const topics = [
  basicsQuestions,
  contentQuestions,
  commonElementsQuestions,
  attributesQuestions,
];

// Make a function that returns a random number that chooses a questions array item
const questionNrFunc = function () {
  return Math.trunc(Math.random() * topics[currentTopic].length);
};

// Make a variable that stores the random number coming out of the function
let questionNr = questionNrFunc();

// Just to see what the current question number is
console.log("Current question number", questionNr);

// Make an empty array that can later hold all question numbers that have already been asked
let answers = [];

// Make a function that updates the question and answers text
const displayQuestions = function () {
  questionTxt.textContent = topics[currentTopic][questionNr].question;
  answerTxt1.textContent = topics[currentTopic][questionNr].answers[0];
  answerTxt2.textContent = topics[currentTopic][questionNr].answers[1];
  answerTxt3.textContent = topics[currentTopic][questionNr].answers[2];
};

// Call the function to display the first question and answers
displayQuestions();

// Make a function that generates a new random number that hasn't been used yet
const displayNextQuestions = function () {
  questionNr = questionNrFunc();
  while (
    answers.includes(questionNr) &&
    answers.length < topics[currentTopic].length
  ) {
    questionNr = questionNrFunc();
  }
  return questionNr;
};

const resetAnswerColor = function () {
  for (let i = 0; i < answerBtnAll.length; i++) {
    answerBtnAll[i].style.backgroundColor = "#cccccc";
  }
};

const updateScores = function () {
  rightAnswerScore.textContent = `${rightAnswers}/${topics[currentTopic].length}`;
  wrongAnswerScore.textContent = `${wrongAnswers}/${topics[currentTopic].length}`;
};
updateScores();

// Select nav topic and change current topic
for (let i = 0; i < navTopicList.length; i++) {
  navTopicList[i].addEventListener("click", function () {
    currentTopic = i;
    answers = [];
    rightAnswers = 0;
    wrongAnswers = 0;
    updateScores();
    questionNr = questionNrFunc();
    displayQuestions();
    for (let j = 0; j < navTopicList.length; j++) {
      navTopicList[j].style.color = "#7e7e7e";
    }
    navTopicList[i].style.color = "white";
    console.log(topics[currentTopic], topics[currentTopic][questionNr]);
    console.log(topics[currentTopic][questionNr].corAnswer);
    offScreenMenu.classList.toggle("active");
  });
}

// What happens when clicking the answers
for (let i = 0; i < answerBtnAll.length; i++) {
  answerBtnAll[i].addEventListener("click", function () {
    console.log("click");
    console.log("Answers length", answers.length);
    console.log("Current topic length", topics[currentTopic].length);
    if (
      answerBtnAll[i].classList.contains(
        `a${topics[currentTopic][questionNr].corAnswer}`
      )
    ) {
      console.log("right answer");
      answers.push(questionNr);
      rightAnswers += 1;
      updateScores();
      displayNextQuestions();
      displayQuestions();
      resetAnswerColor();
      console.log("Answers length", answers.length);
      console.log("Current topic length", topics[currentTopic].length);
    } else if (
      !answerBtnAll[i].classList.contains(
        `a${topics[currentTopic][questionNr].corAnswer}`
      )
    ) {
      console.log("Wrong answer");
      answerBtnAll[i].style.backgroundColor = "red";
      wrongAnswers += 1;
      updateScores();
      setTimeout(function () {}, 3000);
    } else if (answers.length === topics[currentTopic].length) {
      answers = [];
      alert("DONE!!");
    } else {
      displayQuestions;
    }
  });
}
