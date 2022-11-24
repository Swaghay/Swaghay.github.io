var iteratedInput = 'https://www.youtube-nocookie.com/embed/';
//var once = false;

function buttonPress(){

    var input = document.getElementById('text1').value;
    iteratedInput = 'https://www.youtube-nocookie.com/embed/';
    let bean = false;

    for(var i = 0; i < input.length; i++){

        if(input.charAt(i) == '='){

            bean = true;
            continue;

        }

        if(bean == true){

            iteratedInput = iteratedInput + input.charAt(i);

        }

    }

    document.getElementById('test').innerHTML = iteratedInput;
    document.getElementById('vid').setAttribute("src",iteratedInput);

};

function buttonPress2(){

    //if(once == false){

        iteratedInput += '?start=';
        //once = true;
    //}
    var input2 = document.getElementById('text2').value;
    let fTime = 0;
    let bean = false;
    let minS = '';
    let secS = '';

    for(var j = 0; j < input2.length; j++){

        if(input2.charAt(j) != ':' && bean == false){

            minS = minS + input2.charAt(j);

        } else if(input2.charAt(j) != ':' && bean == true){

            secS = secS + input2.charAt(j)

        } else if(input2.charAt(j) == ':'){

            bean = true;

        }

    }

    let min = parseInt(minS);
    let sec = parseInt(secS);

    fTime = (min*60) + sec;

    iteratedInput += fTime.toString();
    iteratedInput = iteratedInput + "&autoplay=1";

    //document.getElementById('test2').innerHTML = fTime.toString();
    document.getElementById('test').innerHTML = iteratedInput;
    document.getElementById('vid').setAttribute("src",iteratedInput);

    
    var input3 = document.getElementById('text3').value;
    let fTime1 = 0;
    let bean1 = false;
    let minS1 = '';
    let secS1 = '';

    for(var j = 0; j < input3.length; j++){

        if(input3.charAt(j) != ':' && bean1 == false){

            minS1 = minS1 + input3.charAt(j);

        } else if(input3.charAt(j) != ':' && bean1 == true){

            secS1 = secS1 + input3.charAt(j)

        } else if(input3.charAt(j) == ':'){

            bean1 = true;

        }

    }

    let min1 = parseInt(minS1);
    let sec1 = parseInt(secS1);
    fTime1 = (min1*60) + sec1;

    fTime1 = fTime1 * 1000;

    let epic = fTime1 - (fTime*1000);

    document.getElementById('test2').innerHTML = epic.toString();

    setInterval(swag, epic);
    

};

function swag(){

    document.getElementById('vid').setAttribute("src",iteratedInput);

};