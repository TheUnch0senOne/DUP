
(() => {
  window.compressor = {}; 
  compressor.urlprocess = (str) => {
    return str.replace(/\!/g, "A").replace(/#/g, "B").replace(/\$/g, "C").replace(/%/g, "D").replace(/&/g, "E").replace(/\(/g, "F").replace(/\)/g, "G").replace(/\*/g, "H").replace(/\+/g, "I").replace(/,/g, "J").replace(/\./g, "K").replace(/\//g, "L").replace(/\:/g, "M").replace(/;/g, "N").replace(/\</g, "O").replace(/\=/g, "P").replace(/\>/g, "Q").replace(/\?/g, "R").replace(/@/g, "S").replace(/\[/g, "T").replace(/\]/g, "U").replace(/\^/g, "V").replace(/_/g, "W").replace(/`/g, "X").replace(/\{/g, "Y").replace(/\|/g, "Z").replace(/\}/g, "z");
  };
  compressor.depress = (str) => {
    return str.replace(
  }
})();
