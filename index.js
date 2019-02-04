var shrinkagePercentages = {
  porcelain: 13.9,
  stoneware: 11.8
};

var ceramicBody = document.getElementById('ceramic-body');
var size = document.getElementById('size');
var outputContainer = document.getElementById('output-container');
var output = document.getElementById('output');

var calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', function (e) {
  var originalSize = ((size.value / (100 - shrinkagePercentages[ceramicBody.value])) * 100).toFixed(2);
  output.innerHTML = originalSize;
});
