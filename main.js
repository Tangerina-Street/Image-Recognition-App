Webcam.set(
{
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    camera = document.getElementById("camera");
    Webcam.attach('#camera');


function photograph()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="taken_pic" src="'+data_uri+'">';
    });
} 

console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/b_tq_SQ6j/model.json',modelLoaded);

function modelLoaded()
{
    console.log("Model is loaded");
}

function identify()
{
    img = document.getElementById("taken_pic");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
   if (error)
   {
      console.error(error); 
   }
   else 
   {
       console.log(results);
       document.getElementById("object").innerHTML = results[0].label;
       document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
   }
   
}

