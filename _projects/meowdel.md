---
layout: page
title: MEOWDEL
description: A DCGAN built from scratch in PyTorch and Lightning that generates 64x64 cat faces, comparing a baseline against spectral norm and an R1 penalty.
img: assets/img/meowdel.png
importance: 1
category: Applications & Systems
github: https://github.com/Adi-UA/MEOWDEL
---

A DCGAN-style generator and discriminator trained for 50 epochs on the Kaggle 64x64 cat faces dataset, with a manual-optimization Lightning training loop and a single YAML config. The repo compares three runs side by side (baseline, spectral norm, R1 penalty) and documents a first attempt that mode-collapsed and how it was fixed.

[View on GitHub](https://github.com/Adi-UA/MEOWDEL)
