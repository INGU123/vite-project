<?php
// Creation de crenaux:
function temps($crenaux){
while(true){
$start=readline("Put the Opening time: ");
$end=readline("Put the ending time: ");
    if($start>$end){
        echo"The ending time could be less than than the opening \n";
    }elseif($start<0 && $end>24){
        echo"between 0 and 24\n";
    }elseif(!is_numeric($start)||!is_numeric($end)){
        echo"It should be a number\n";
    }else{
        echo"So the vailabla time is between $start and $end? \n";
        return $crenaux;
    }

}
}
// Recapitulation of the old knowledge:
function char(){
    $charactere=[
        "firsName"=>["Eren","Mikasa","Armin "],
        "Name"=>["Yeager","Ackerman ","Harlet "],
        "Old"=>[19,19,18],
        "Sexe"=>["Masculin","Feminin","Masculin"]
        ];
    echo"Colone 1:";
    foreach($charactere as $k=> $char){
        echo"\n-";print_r($char[0]);
    };
    echo"\n\n\n Colone 2:";
    foreach($charactere as $k=> $char){
        echo"\n-";print_r($char[1]);
    };
    echo"\n\n\n Colone 3:";
    foreach($charactere as $k=> $char){
    }
    echo"\n-";print_r($char[2]);
}


// Function of greetings:
function Profil(){
    while(true){
        $character=[
            $name=readline("Put your name here: "),
            $firtName=readline("Put your firstname here: "),
            $Old=readline("Put your Old here: "),
            $Sexe=readline("Put your Sexe here: ")
        ];
        if(strlen($name)<=2){
            echo"Error in name\n";
        }elseif(strlen($firtName)<=2){echo"Error in firstname\n";}
        elseif(!is_numeric($Old)||$Old<15||$Old>120){
            echo"Error in Old\n";
        }elseif($Sexe!=="Masculin"&&$sexe!=="Feminin"){
            echo"Error in Sexe\n";
        }else{
            return $character;
        }
    };
};

// Tableau:
$array=[
     [
        "Name"=>"Eren",
        "FirstName"=>"Yeager",
        "Old"=>19,
        "Sexe"=>"Masculin"
     ],[
        "Name"=>"Mikasa",
        "FirstName"=>"Ackerman",
        "Old"=>19
     ],[
        "Name"=>"Armin",
        "FirstName"=>"Harlet",
        "Old"=>18,
        "Sexe"=>"Masculin"
     ],[
        "Name"=>"Conny",
        "FirstName"=>"Springer",
        "Old"=>17,
        "Sexe"=>"Masculin"
     ],[
        "Name"=>"Shasa",
        "FirstName"=>"Brausse",
        "Old"=>18,
        "Sexe"=>"Feminin"
    ]
];


?>

