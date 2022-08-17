function classifyAnimal() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/ETXHEE6fx/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;

        Dog = 0;
        Cat = 0;
        Cow = 0;
        Lion = 0;
        Snake = 0;
        Elephant = 0;

        document.getElementById("identify_label").innerHTML = "Detected Dog : " + Dog + " Detected Cat : " + Cat + " Detected Cow : " + Cow + " Detected Lion : " + Lion + " Detected Snake : " + Snake + " Detected : Elephant " + Elephant;
        document.getElementById("result_label").innerHTML = 'I Can Hear - ' + results[0].label;
        document.getElementById("result_label").style.color = "rgb("+ random_r +","+ random_g +","+ random_b +")";
        document.getElementById("identify_label").style.color = "rgb("+ random_r +","+ random_g +","+ random_b +")";

        img1 = document.getElementById('dog.jpg');
        img2 = document.getElementById('cat.jpg');
        img3 = document.getElementById('cow.jpg');
        img4 = document.getElementById('lion.jpg');
        img5 = document.getElementById('snake.jpg');
        img6 = document.getElementById('elephant.jpg');

        if (results[0].label == "Dog") {
            document.getElementById("image").image.src = "dog.jpg";
        } else if (results[0].label == "Cat") {
            document.getElementById("image").image.src = "cat.jpg";
        } else if (results[0].label == "Cow") {
            document.getElementById("image").image.src = "cow.jpg";
        } else if (results[0].label == "Lion") {
            document.getElementById("image").image.src = "lion.jpg";
        } else if (results[0].label == "Snake") {
            document.getElementById("image").image.src = "snake.jpg";
        }else {
            document.getElementById("image").image.src = "elephant.jpg";
        }
    }
} 