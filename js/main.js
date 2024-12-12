window.onload = function() {
  document.getElementById('copyright').innerHTML = '&copy;2020-' + new Date().getFullYear() + ' Cooltipz.css';
}

function programmaticallyShowTooltip(elementToApplyTooltip) {
  document.getElementById(elementToApplyTooltip).classList.toggle('cooltipz--visible');
}