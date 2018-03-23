/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var name1Elem = document.getElementById("name1");
name1Elem.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var position2Elem = document.getElementById("position2");
position2Elem.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
var alias3Elem = document.getElementById("alias3");
alias3Elem.innerHTML = "Concatenation";



/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var profileElem = document.getElementsByClassName("profile");
profileElem[0].innerHTML = "Raspberry Beret";


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
var profileElem1 = document.getElementsByClassName("profile");
profileElem1[1].innerHTML = "Adapt what is useful, reject what is useless, and add what is specifically your own.";


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var aElem = document.getElementsByClassName("alias");
aElem[2].innerHTML = "Nick Fury";


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
var nameParentElem = document.getElementById("nameParent");
var name7Elem = document.createElement("div");
name7Elem.id = "name7";
name7Elem.innerHTML = "Peter Griffin";
nameParent.appendChild(name7Elem);
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
var aliasParentElem = document.getElementById("aliasParent");
var alias8Elem = document.createElement("div");
alias8Elem.id = "alias8";
alias8Elem.innerHTML = "Old Man Riverwalk";
aliasParentElem.appendChild(alias8Elem);

//Final Boss
/*9. Create your own profile.*/
var myProfile = document.getElementsByClassName("block3");
//create image
document.getElementById("myImg").src = "http://rs261.pbsrc.com/albums/ii49/jepara-camfrog/Gif/comunication_101.gif~c200";
//create name 
var myNameElem = document.createElement("div");
myNameElem.id = "name9";
myNameElem.innerHTML = "Abby Zhang";
myProfile[2].appendChild(myNameElem);
//create position
var myPositionElem = document.createElement("div");
myPositionElem.id = "position9";
myPositionElem.innerHTML = "Student";
myProfile[2].appendChild(myPositionElem);
//create bio
var myBioElem = document.createElement("div");
myBioElem.id = "bio9";
myBioElem.innerHTML = "Fake it 'til you become it";
myProfile[2].appendChild(myBioElem);
