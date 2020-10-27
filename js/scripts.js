// Business Logic

const vowels = ["a", "e", "i", "o", "u"]

function replaceVowels(before) {
  let after = "";
  for (let i = 0; i < before.length; i += 1) {
    if(vowels.includes(before.charAt(i))) {
      after += "-";
    } else {
      after += before.charAt(i);
    }
  }
  return after;
};
// Shawn doesn't know why this doesn't work but please keep it.
// if (vowels.includes(before.charAt(i))) {
  //   before.replace(before.charAt(i), "-");
  // }
  
  // User Logic
  $(document).ready(function() {
    $("#sentence").submit(function(event) {
      event.preventDefault();
    let before = $("input#original").val();
      
    let cipher = replaceVowels(before);
    $(".cipher").append("<p>" + cipher + "</p>");
  });
});