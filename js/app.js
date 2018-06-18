/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
newName1 = document.getElementById('name1');
newName1.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var newPosition2 = document.getElementById('position2');
newPosition2.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var newAlias3 = document.getElementById('alias3');

newAlias3.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var profileNew = document.getElementsByClassName('profile');
profileNew[0].innerHTML = '1999';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
profileNew[1].innerHTML = 'Knowing is not enough, we must apply. Willing is not enough, we must do.'


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var aliasNew = document.getElementsByClassName('alias');
aliasNew[2].innerHTML = 'Nick Fury';


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
var name7Elem = document.createElement('div');
name7Elem.id = 'name7';
name7Elem.innerHTML = 'Peter Griffin';
var nameParentElem = document.getElementById('nameParent');
nameParentElem.appendChild(name7Elem);

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var alias8Elem = document.createElement('div');
alias8Elem.id = 'alias8';
alias8Elem.innerHTML = 'Old Man Riverwalk';
var aliasParentElem = document.getElementById('aliasParent');
aliasParentElem.appendChild(alias8Elem);

//Final Boss
/*9. Create your own profile.*/
//create Image
var myProfile = document.getElementsByClassName('block3');
document.getElementById('profileImg').src = 'https://vignette.wikia.nocookie.net/justdance/images/9/9f/Smiley-Face-7.jpg/revision/latest?cb=20150825191621';
//create name
var myProfileName = document.createElement('div');
myProfileName.id = 'name9';
myProfileName.innerHTML = 'Abby';
myProfile[2].appendChild(myProfileName);

//create position
var myPosition =  document.createElement('div');
myPosition.id = 'position9';
myPosition.innerHTML = 'Student';
myProfile[2].appendChild(myPosition);

//create alias
var myAlias  = document.createElement('div');
myAlias.id = 'alias9';
myAlias.innerHTML = 'The Best One';
myProfile[2].appendChild(myAlias);

//create bio
var myBio = document.createElement('div');
myBio.id = 'bio9';
myBio.innerHTML = 'If my mind can conceive it, and my heart can believe it - then I can achieve it.';
myProfile[2].appendChild(myBio);