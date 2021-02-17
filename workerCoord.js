onmessage = function() {
  console.log('Worker: Message received from main script');
  const workerResult = 'Coord: ' + getRandomInt(200);
  console.log('Worker: Posting message back to main script');
  postMessage(workerResult);
}
