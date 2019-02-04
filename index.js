const shrinkagePercentages = {
  porcelain: 13.9,
  stoneware: 11.8
};

const ceramicBody = document.getElementById('ceramic-body');
const size = document.getElementById('size');
const outputContainer = document.getElementById('output-container');
const output = document.getElementById('output');

const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', (e) => {
  const originalSize = ((size.value / (100 - shrinkagePercentages[ceramicBody.value])) * 100).toFixed(2);
  output.innerHTML = originalSize;
});
