var sigmanautApp = angular.module('SigmanautApp', []);

sigmanautApp.controller('SigmanautController', function(){
  console.log('Sigmanaut controller loaded');

  var self = this; // holds the value of this

  self.people = [
    {
  		"firstName": "Chris",
      "lastName": "Mattox",
  		"git_username": "ChrisMattox",
  		"shoutout": "Thank you to everyone in Sigma! My cohort members continue to be a wonderful resource to learn from, as well as inspiring me to continue growing my skillz as a budding developer. Also, the instructors, I guess :/ Luke is cool, but I don't know about that Kris guy…"
    },
    {
      "firstName": "Isaac",
      "lastName": "Halvorson",
      "git_username": "hisaac",
      "shoutout": "I'd like to shout out to my wife for being supportive of her husband even while his attention and time is so focused on school."
    },
    {
      "firstName": "Brian",
      "lastName": "Matney",
      "git_username": "bmatney",
      "shoutout": "¯\\_(ツ)_/¯"
    },
    {
      "firstName": "Liz Swabey",
      "lastName": "Keith",
      "git_username": "erswabeykeith",
      "shoutout": "Huge thank you to everyone in my Sigma Cohort for getting me through this week!"
    },
    {
      "firstName": "Luke",
      "lastName": "Schlangen",
      "git_username": "LukeSchlangen",
      "shoutout": "Isaac! For showing me that creating an id creates a global javascript variable. Crazy! I was so excited that I made a JSFiddle about it! <a href=\"https://jsfiddle.net/yg5rgkvr/\">Fiddle</a>"
    },
    {
      "firstName": "Joe",
      "lastName": "Giwoyna",
      "git_username": "jgiwoyna",
      "shoutout": "Chris, Andy, Andrew, Hien"
    },
    {
      "firstName": "Jeff",
      "lastName": "Kealy",
      "git_username": "jeffkealy",
      "shoutout": "Casey helped me!"
    },
    {
      "firstName": "Jason",
      "lastName": "Sunde",
      "git_username": "jasunde",
      "shoutout": "Mad props to Emily for making our fruit stand look great!!"
    },
    {
      "firstName": "Steve",
      "lastName": "Larsen",
      "git_username": "SMLarsen",
      "shoutout": "Thanks to instructors, staff, pod-mates, teammates, and the entire Sigma cohort!  I am impressed with the group on a daily basis and can't imagine going through this journey with anyone else."
    },
    {
      "firstName": "Jake",
      "lastName": "Iwen",
      "git_username": "JakeIwen",
      "shoutout": "Thank you to Fred for being such a positive energy force!"
    },
    {
      "firstName": "Emily",
      "lastName": "Keenan",
      "git_username": "emilykeenan",
      "shoutout": "Shout out to Isaac for always trying to take it to the next level!"
    },
    {
      "firstName": "Oliver",
      "lastName": "Alexander",
      "git_username": "oliver0",
      "shoutout": "Thanks to everyone for their fear speeches!"
    },
    {
      "firstName": "Casey",
      "lastName": "Hyde",
      "git_username": "caseyhyde",
      "shoutout": "Big ups to the dog. He ate a bite of my pizza during our in-person live chat, but we have since made amends. I thought he was very mature about the whole experience."
    },
    {
      "firstName": "Alex",
      "lastName": "Hermundson",
      "git_username": "ahermundson",
      "shoutout": "Thanks fellow Sigmanauts for being the best cohort in the building."
    },
    {
      "firstName": "Michael",
      "lastName": "Brannan",
      "git_username": "MBrannan",
      "shoutout": "Thanks Scott, Luke, Kris, Huck"
    },
    {
      "firstName": "Phil",
      "lastName": "Gebauer",
      "git_username": "philgebauer",
      "shoutout": "HELLO WORLD!"
    },
    {
      "firstName": "Andrew",
      "lastName": "Froiland",
      "git_username": "afroiland",
      "shoutout": "Thanks to all my classmates and instructors for, you know, just generally being cool people."
    },
    {
      "firstName": "Andy",
      "lastName": "Wolff",
      "git_username": "airwolff",
      "shoutout": "Hien, thanks a ton for being so patient and helpful when you work with us."
    },
    {
      "firstName": "Kris",
      "lastName": "Szafranski",
      "git_username": "kdszafranski",
      "shoutout": "Thank you to all of Sigma for being so attentive and keeping things fun! It's been an amazing first couple weeks!"
    }
  ];

  self.newPerson = {};

  self.createPerson = function(){
    console.log(self.newPerson);
    self.people.push(angular.copy(self.newPerson));
  };

});
