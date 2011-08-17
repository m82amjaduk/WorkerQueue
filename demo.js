// WorkerQueue demo.
window.onload = function() {
  var count = 0;
  var box1 = document.getElementById('box1');
  var q1 = new WorkerQueue(2000);
  q1.push(function() { 
    moveBox(box1);
    count++;
    return count >= 10;
  });
  q1.push(function() {
    box1.innerHTML = 'Done!';
    return true;
  });
  var box2 = document.getElementById('box2');
  var q2 = new WorkerQueue(1000);
  q2.push(function() {
    moveBox(box2);
    count++;
    return count >= 10;
  });
  q2.push(function() {
    box2.innerHTML = 'Fini!';
    return true;
  });
}

function moveBox(box) {
  box.style.top = Math.random() * 640;
  box.style.left = Math.random() * 400;
}

