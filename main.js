
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classififer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zhBCYKVho/model.json', modelReady);
}
function modelReady() {
    classififer.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal');

    if (results[0].label == "bark") {
      img.src = 'bark.gif';
      dog = dog+1;
    } else if (results[0].label == "meow") {
      img.src = 'cat.gif';
      cat = cat + 1;
    } else{
      img.src = 'ear.gif';
    }
  }
}
