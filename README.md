# Meteor Blaze Boilerplate

Installation guide:

`meteor npm install;`
`meteor;`

## Meteor concepts and tips:

Meteor parses HTML files and identifies three top-level tags: `<head>, <body>, and <template>`.

Everything inside any `<head>` tags is added to the head section of the HTML sent to the client, and everything inside `<body>` tags is added to the body section, just like in a regular HTML file.

Everything inside `<template>` tags is compiled into Meteor templates, which can be included inside HTML with {{> templateName}} or referenced in your JavaScript with Template.templateName.

Also, the body section can be referenced in your JavaScript with Template.body. Think of it as a special "parent" template, that can include the other child templates.

## Extensions and third-party libs used:

### ReactiveDict: 
- is like a normal JS object with keys and values, but with built-in reactivity.
`meteor add reactive-dict`

### Bootstrap 3
- `meteor add twbs:bootstrap`

--

Project based on meteor blaze official site tutorial: https://www.meteor.com/tutorials/blaze/creating-an-app
