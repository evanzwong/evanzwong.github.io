---
title: "Projects"
permalink: /projects/
layout: single
author_profile: true
---
*This page is under construction. Check back soon for updates!* 

**Fully-Bypassed 4-Stage RV32I CPU with Caches (Apple New Silicon Initiative Design Contest Winner)** [(Private GitHub)](https://github.com/evanzwong)
Designed fully-bypassed 4-stage RISC-V CPU in Verilog from specification to place-and-route on SkyWater130 PDK. Devised direct-mapped I$ and D$ with write-back + write-allocate policies using a Mealy FSM. Improved CPI with forwarding and a BHT + BTB branch predictor, yielding >99% accuracy on certain benchmarks. Guided design and debugging of new modules, handshake signals, and hazard handling with SystemVerilog covers and assertions.

**Formal Specification of Branch Prediction Using CTL** [(GitHub)](https://github.com/evanzwong/ArchitectureFormalSpec)
Formulated process to apply Computation Tree Logic to model branch prediction in simple ISAs for use in formal specifications (this project used RV32I). Wrote RISC-V assembly tests to train custom branch predictors to mispredict into harmful architectural states. Interfaced custom configurations and tests with Spike simulator and emitted files for JasperGold formal checking.
