const mongoose = require("mongoose");

const IntroSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const AboutSchema = new mongoose.Schema({
  lottieURL: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("Intro", IntroSchema),
  About: mongoose.model("About", AboutSchema),
  Experience: mongoose.model("Experience", experienceSchema),
  Project: mongoose.model("Project", projectSchema),
  Course: mongoose.model("Course", coursesSchema),
  Contact: mongoose.model("Contact", contactSchema),
};
