---
title: "Projects"
permalink: /projects/
layout: single
author_profile: true
---

**TSMC 16C Vector Processing Unit (VPU) in Neural Processing ASIC** | *Chisel, Scala, Hammer* &nbsp; 2026

Designed a 16-lane VPU to be taped-out on an NPU for VLA robotics workloads from RTL to signoff, targeting 500 MHz. Implemented floating-point operations used in the π₀ model from a custom ISA to form neural network passes in Chisel. Integrated into SoC with a control sequencer to issue vectors and memory handshakes, enabling VLIW-style utilization. Optimized VPU for PPA with dual-vector instruction issuing, unpipelining, and shared LUTs for linear interpolation.

---

**Fully-Bypassed 4-Stage RV32I CPU with Caches (Apple New Silicon Initiative Design Contest Winner)** | *Verilog, SystemVerilog, VCS, DVE, Innovus, Hammer* &nbsp; [(Private GitHub)](https://github.com/evanzwong) &nbsp; 2025

Designed a fully-bypassed 4-stage RISC-V CPU in Verilog from specification to place-and-route on SkyWater130 PDK. Devised direct-mapped I$ and D$ with write-back + write-allocate policies via Mealy FSM, enabling single-cycle hits. Improved CPI with forwarding and a BHT + BTB branch predictor, yielding >99% accuracy on certain benchmarks. Guided design of new modules, handshake signals, and hazard-handling with SystemVerilog covers and assertions.

---

**Formally Modeling Branch Prediction in Microarchitecture** | *Chipyard, Scala, C++, JasperGold* &nbsp; [(GitHub)](https://github.com/evanzwong/ArchitectureFormalSpec) &nbsp; 2025

Developed a process to apply Computation Tree Logic to model projected branch prediction behavior in simple ISAs. Formulated RISC-V assembly tests to train custom branch predictors to mispredict into harmful architectural states. Interfaced custom configurations and tests with Spike simulator and emitted files for JasperGold formal checking.
