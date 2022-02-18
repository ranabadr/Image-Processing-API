# Image Processing API

## Table of Contents

* [Description](#description)
* [Features](#features)
* [Usage](#usage)
* [Languages](#languages)

## Description

An **API** that can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. 

## Features

* Provided endpoint should open in the browser with status 200
* Resize an image and save it to thumb.

## Usage

### Endpoint to resize images

   http://localhost:3000/api/pics

###  Available filenames are:

   * encenadaport
   * fjord
   * icelandwaterfall
   * palmtunnel
   * santamonica

### Example

   http://localhost:3000/api/images?filename=fjord&width=200&height=200 Will scale the fjord image to 200 by 200 pixels and store the resulting image

## Languages

**javascrip** and **typescript** have been used to create this progect.