---
layout: page
title: dups
description: A fast duplicate file finder in Go. Concurrent two-pass SHA-256 hashing finds copies, then lets you review and delete them group by group.
img: assets/img/dups.png
importance: 1
category: Applications & Systems
github: https://github.com/Adi-UA/dups
---

A concurrent duplicate file finder with a two-pass hashing strategy (4KB partial hash for files over 1MB, full SHA-256 for confirmed candidates), channel-based worker pool, interactive per-group deletion, and cross-platform builds via goreleaser.
