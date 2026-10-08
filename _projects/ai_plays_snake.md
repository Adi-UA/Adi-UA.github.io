---
layout: page
title: AI Plays Snake
description: Neural networks evolved with NEAT learn to play a Pygame version of Snake, comparing binary adjacency inputs against raycast distance sensors.
img: assets/img/snake.png
importance: 1
category: Applications & Systems
github: https://github.com/Adi-UA/AI-Plays-Snake
---

A Snake game in Pygame with NEAT training that evolves networks to play it. Two input encodings are available: a legacy mode with 11 binary inputs for nearby free cells and food direction, and a raycast mode with 16 continuous distance sensors. The game logic has no Pygame dependency, so training runs headless across multiple CPU cores, and a pytest suite covers the game source.

[View on GitHub](https://github.com/Adi-UA/AI-Plays-Snake)
