# Overview

This is a minimal reproducible example of a bug with Chromedriver where CPU throttling doesn't work after calling `Emulation.setCPUThrottlingRate()` via the Chrome DevTools Protocol.

# Usage

Run `npm ci` to install dependencies (including Chromedriver) and run the example via `node index.js <throttle_rate>`, with `<throttle_rate>` replaced with the CPU throttle rate. The example will load the Wikipedia homepage and then dump out navigation timing metrics, and write a verbose log file to `log.txt`. Try varying the throttle rate and notice it has no effect on the reported metrics.
