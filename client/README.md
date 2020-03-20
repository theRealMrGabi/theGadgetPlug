# Project Name
## theGadgetPlug!

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General info
this React e-commerce project was created as a demo project to conglomerate my React knowledge into a fully functional app.

## Screenshots
![Example screenshot](./img/screenshot.png)

## Technologies
* React - version 16.11.0
* Bootstrap - version 4.4.1
* Firebase - version 7.7.0
* Redux  - version 4.0.5'
* Redux-saga  - version 1.1.3
* Reselect - version 4.0.0

## Setup
Want to improve on this project? 
Clone this project into a directory, and run *npm build* from your cli in the cloned directory.

## Code Examples
Show examples of usage:
>
const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsProductLoaded(state)
})

const CategoryPatternContainer = compose(
    connect(mapStateToProps),
    LoadingSpinner
)(CategoryPage)

export default CategoryPatternContainer
>

## Features
List of features ready and TODOs for future development
* Sign in with Google
* Sign up with email and password
* Add items to cart and checkout

## Status
Project is in progress .

## Contact
Created by [@theRealMrGabi](https://www.linkedin.com/in/ibrahimadegabi/) - feel free to contact me!
