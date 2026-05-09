---
title: "Projects"
permalink: /projects/
layout: single
author_profile: true
---

<style>
  article.page__body .project-entry {
    margin-bottom: 2em;
  }
  article.page__body .project-entry h2 {
    margin-bottom: 0.2em;
    margin-top: 0.5em;
  }
  article.page__body .project-entry .project-meta {
    margin-bottom: 0.5em;
    color: #888;
    font-size: 0.9em;
  }
  article.page__body .project-entry .description {
    margin-top: 0.5em;
  }
</style>

<div class="project-entry">
  <h2>Vector Processing Unit (VPU)</h2>
  <div class="project-meta"><em>Chisel, Scala, Hammer</em> &nbsp;·&nbsp; 2026</div>
  <div class="description">
    <p>Designed a 16-lane VPU to be taped-out on an NPU for VLA robotics workloads in TSMC 16C from RTL to signoff, targeting 500 MHz. Implemented floating-point operations used in the π₀ model from a custom ISA to form neural network passes in Chisel. Integrated into SoC with a control sequencer to issue vectors and memory handshakes, enabling VLIW-style utilization. Optimized VPU for PPA with dual-vector instruction issuing, unpipelining, and shared LUTs for linear interpolation. Final metrics were 500 MHz (0 ps slack) frequency with 125,062.441 µm² area.</p>
  </div>
</div>

<div class="project-entry">
  <h2>RV32I CPU with Caches</h2>
  <div class="project-meta"><em>Verilog, SystemVerilog, VCS, DVE, Innovus, Hammer</em> &nbsp;·&nbsp; 2025 &nbsp;·&nbsp; <a href="https://github.com/evanzwong">Private GitHub</a></div>
  <div class="description">
    <p>Designed a fully-bypassed 4-stage RISC-V CPU in Verilog from specification to place-and-route on SkyWater130 PDK, earning 2nd place in the Apple New Silicon Initiative Design Contest for optimization of performance and area. Devised direct-mapped I$ and D$ with write-back + write-allocate policies via Mealy FSM, enabling single-cycle hits. Improved CPI with forwarding and a BHT + BTB branch predictor, yielding >99% accuracy on certain benchmarks. Guided design of new modules, handshake signals, and hazard-handling with SystemVerilog covers and assertions.</p>
  </div>
</div>

<div class="project-entry">
  <h2>Formally Modeling Branch Prediction in Microarchitecture</h2>
  <div class="project-meta"><em>Chipyard, Scala, C++, JasperGold</em> &nbsp;·&nbsp; 2025 &nbsp;·&nbsp; <a href="https://github.com/evanzwong/ArchitectureFormalSpec">GitHub</a></div>
  <div class="description">
    <p>Developed a process to apply Computation Tree Logic to model projected branch prediction behavior in simple ISAs. Formulated RISC-V assembly tests to train custom branch predictors to mispredict into harmful architectural states. Interfaced custom configurations and tests with Spike simulator and emitted files for JasperGold formal checking.</p>
  </div>
</div>
