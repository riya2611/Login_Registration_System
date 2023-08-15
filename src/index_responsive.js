const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");

burger = document.querySelector('.burger')
nav = document.querySelector('.nav')
logo = document.querySelector('.logo')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', () =>{
    nav.classList.toggle('hide-class-resp');
    logo.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
})