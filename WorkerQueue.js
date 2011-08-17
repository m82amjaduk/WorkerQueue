/**
 * WorkerQueue.js
 * Class to handle long-running, asynchronous tasks.
 */
WorkerQueue = function(frequency) {

  this.queue = [];
  this.timeout = 0;
  this.current = null;
  this.frequency = frequency;

  this.pop = function() {
    if (!this.queue.length) {
      window.clearInterval(this.timeout);
      this.timeout = 0;
      return;
    }
    if (!this.current) {
      this.current = this.queue.shift();
    }
    if (this.current()) {
      this.current = null;
    }
  }

  this.push = function(task) {
    var self = this;
    this.queue.push(task);
    if (!this.timeout) {
      this.timeout = window.setInterval(function(){ self.pop(); }, this.frequency);
    }
    this.pop();
  }
}

