---
layout: page
title: dups
description: Fast concurrent duplicate file finder in Go with two-pass hashing, interactive deletion, and cross-platform builds.
img: assets/img/dups.png
importance: 1
category: Applications & Systems
github: https://github.com/Adi-UA/dups
---

A concurrent duplicate file finder with a two-pass hashing strategy (4KB partial hash for files over 1MB, full SHA-256 for confirmed candidates), channel-based worker pool, interactive per-group deletion, and cross-platform builds via goreleaser.
