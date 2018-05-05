function generateSkills(){
let imageArray = [ 'ajax.jpg',
  'c++.png',
  'css.jpg',
  'flask.png',
  'git.jpg',
  'html5.png',
  'index.png',
  'jasmine.png',
  'java.png',
  'javascript.jpg',
  'jenkin.png',
  'mongodb.png',
  'selenium.jpg',
  'sql.png',
  'typescript.jpg' ]

  var i = -1;
  var elementName = '';
  imageArray.forEach((imgSrc, index) =>{
	  if(index %5 == 0){
		i++;
		 document.getElementById('hasText').innerHTML +='<div class="w3-row-padding myRowPadding w3-center">'
	  }
    elementName = 'mySkill' + i
    // onclick="addDetails('+index+')"
document.getElementById(elementName).innerHTML +=  
	'<div class="card-header">' +
        '<a class="card-link" onclick="addDetails('+index+')" data-toggle="collapse" href="#collapse' +index+'">'+
          '<img src="../images/rskills/' + imgSrc + '" class="ui medium image">' +
        '</a>'+
      '</div>'
	 if(index %5 == 0){
		 document.getElementById('hasText').innerHTML +='</div>'
    }
  //   document.getElementById('mySkill99').innerHTML = '<div id="collapse0" class="transitionCollapse" data-parent="#accordion">'+
  //   '<div class="card-body">'+
  //  getSkill(0)
  // ' </div>'+
  // '</div>'
});

}
var currentSkillIndex  = [-1, -1, -1];

function addDetails(index){
  let indexOfDetails
   = index > 9 ? 2: index > 4? 1 : 0;
  if(!(currentSkillIndex[indexOfDetails] == index)){
      currentSkillIndex[indexOfDetails] = index;
      document.getElementById('mySkillDetails'+ indexOfDetails).removeAttribute('style');
      document.getElementById('mySkillDetails'+ indexOfDetails).innerHTML = '<div id="collapse show"' + index + ' class="transitionExpand" data-parent="#accordion">'+
          '<div class="card-body">'+
         getSkill(index)
        ' </div>'+
        '</div>'
    }
  else{
    if(document.getElementById('mySkillDetails'+ indexOfDetails).innerHTML.indexOf('collapse') > -1){
      // document.getElementById('mySkill99').innerHTML = '<div id="hide"' + index + ' class="transitionCollapse" ></div>';
         $( "#mySkillDetails"+ indexOfDetails ).slideUp();
        document.getElementById('mySkillDetails'+ indexOfDetails).innerHTML = '';
      }
      currentSkillIndex[indexOfDetails] = -1;
  }
}


function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function getSkill(index){
  var skillText = ['Ajax: Experienced in using native ajax as well jquery ajax to manage single page application data flow.'
  +'<br> Used in projects : \n Agent Console, \n '+
  '2 years of work involving a single page application for Oracle Service cloud',
  'C++ : Learned Basics of Programming and Algorithms and did numerous projects like : Telephone Directory Management, Flight cost minimizer using graphs and dijikstras algorithm',
  'CSS3: Hands-on Experience in solving complex template based projects in Oracle. Designing single Page applications where the UI is completely customizable and browser rendering based on design',
  'Python: Flask based service alongside a simple interactive UI to collect and list Tags of failed jobs from failed automation jobs to make life easier for developers \n' +
  '<br> Bookmyshow Ticket availability notifier which scraps through movie page and notifies through mail when booking starts for movie' + 
  '<br>Various Jenkins services to aid jenkins job',
  'GIT: Daily use for code management, Handled it effectively for projects involving millions of lines of code and files. Also familiar with git web hooks and writing services to take actions based on git changes.',
  'HTML5: Experienced in using all types of components and its manipulation. Front End for Oracle Service cloud, Memory Leak Monitor UI analytics, '+
  'Audio capture and voice command based hackathon, Video rendering with cacheing using indexeddb and service workers',
  'IndexedDB: A side project based Progressive web app concept to improve performance of application using offline capabilities of service workers and indexeddb to store latest data on client side and faster access',
  'Jasmine: Testing framework used extensively to write javascript and typescript unit test which have more than 80% coverage. Experienced writing complex cases such as pub-sub, promises flow',
  'Java: Handling server side as well as midtier layer of projects. Projects done: Traffic management system and Blood bank database based on Swing, SQL.' +
  'Oracle service cloud: Apis using JAX-RS, Serialization of XML and deserialization using JAXB, handling complex data and performing operations on it, Servlets.' ,
  'Javascript: Personal favourite. 2+ years of hands-on experience in various javascript applications. Oracle service cloud front end for single page application using knockout js, jquery, pure javascript. '+
  'Nodes js based service for parsing heapSnapshots and generate charts for analysis, Node js(Express framework) weather service using openweather apis. '+
'Managing service workers, Node Js based services for scraping movie details, Web hooks for git hub.\n I Closely follow all developments associated - familiar with core concepts and es6 , es+',
'Jenkins: Scripts to trigger builds, manage children, adding plugins, writing pipelines for automations tasks, Auto Branch Update Jobs - A generic job which helps anyone to keep updating their branch on a daily basis until they have merged it.',
 'MongoDB: Experimental projects like Weather fetcher, Simple nodejs + mongodb based forum module of an application for discussion',
'Selenium: 2Years of automating hundreds of UI components/Scenarios for Oracle products(both in python and java). Experienced in using cucumber as well',
'SQL: Regularly use it in work for querying database. A number of mini projects in college and company level which extensively depended on sql database. ( Traffic management system, Blood bank database)',
'TypeScript: Daily user. Most of the UI development work I have done involved using typescript to make most of the latest developments in es6, es6+ and for easier debugging']
return skillText[index];
}

window.onload = function(){
	generateSkills();
}
// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white" ;
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-bar-white", "");
    }
	 
}

