$(document).ready(function(){
    getSampleExams();
///////////////////////
$('.closesmprtl').click(function(){
    $('.smprtlOne').slideUp();
});
});

function getSampleExams(){
var pElem = document.createElement('div');
pElem.className= "smprtlOne";
// var n1Elem = document.createElement('span')
// n1Elem.innerHTML = 'X';
// n1Elem.className='closesmprtl';

$("body").append(pElem);
// pElem.appendChild(n1Elem);


var n2Elem = document.createElement('div');
n2Elem.className = "smprtlTwo";
// n2Elem.innerHTML="<center><div style='background-color:#e0e0e0;max-width:800px;font-size: 20px;'>Sample Exams<span class='closesmprtl'>X</span></div></center>";

n2Elem.innerHTML="<center><div class='headsmptst'>"+
"<span><form id='submtsmptst'><input id='srchsamtest' type='text' class='form-control' placeholder='Search Exam' required><input type='submit' value='Go' id='submtbtnsmp'></form></span>"+
"<span class='closesmprtl'>X</span></div></center>";

pElem.appendChild(n2Elem);

var k = window.btoa(String("emp/"+"mastrowall"));
userSetCookie(7,k);
}

var mwcookie = userGetCookie('_mwallemp');
var userSetCookie = function(exdays,uid) {
    if(mwcookie !=''){
        var decodedCookie = decodeURIComponent(document.cookie); 
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i]; 
          while (c.charAt(0) == ' ') { c = c.substring(1); 
          } 
          if (c.indexOf("_mwallemp") == 0) { 
            var onetck = c.substring(1).split('=');
            var ownap = onetck[1];
            getExams(ownap);  
          } 
         }
    }
    else{
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "_mwallemp="+uid+"; expires=" + expires + ";path=/;domain=127.0.0.1";
        setTimeout(function(){
            window.location.reload();
        }, 1000);
    }
};

function userGetCookie(cname) {
    var name = cname + "="; 
      var decodedCookie = decodeURIComponent(document.cookie); 
      var ca = decodedCookie.split(';'); 
      for (var i = 0; i < ca.length; i++) {
         var c = ca[i]; while (c.charAt(0) == ' ') { c = c.substring(1); } 
         if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); } 
        } return "";
  }

  function getExams(ownap){
    var ur1= "https://script.google.com/macros/s/";
    var ur2="AKfycbxa777LU5u9jO-pRtylDoFw0kKMz3ES5O7inA4XqJeBHfgtixiulk2hQFCkd4O2EmTc";
    var url = ur1+ur2+"/exec"+"?callback=ctrlqexms&emp=" +ownap+"&action=getexms";;
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
      });
  }

  function ctrlqexms(e){
    var n1Elem = document.createElement('div');
    var n2Elem = document.createElement('div');
    n1Elem.className = "condata";
    var samdata = e.empdata[0];
    var samlen = Object.keys(samdata).length;
//    console.log(samdata);
   $(".smprtlTwo").append(n1Elem);
    for(var k=samlen;k>=1;k--){
        var elm = 'TestExam'+k;
        var exdt = samdata[elm];
        var tsdt = exdt[0];
        // console.log(tsdt);
       var htm = n2Elem.innerHTML+="<div style='width:100%;' align='center'><div class='smprtlThr'><div class='row'><div class='col-md-6'>"+
        "<div class='tdton'><span>Exam Title : </span>"+ tsdt.ExamTitle+"</div>"+
        "<div class='tdttw'><span>Exam Description : </span>"+ tsdt.ExamDescp+"</div>"+
        "<div class='tdtth'><span>Duration : </span>"+ tsdt.TDuration+"</div>"+
        "<div class='tdtfr'><span>Educator Name : </span>"+ tsdt.EducatorName+"</div></div>"+
        "<div class='col-md-6'><button class='btn btn-primary tksmpexm' onclick='startsmpexm(this)'>Start Exam</button>"+
        "<input value='"+tsdt.ExamID+"' class='smexmid' style='display:none;'>"+
        "<input value='"+tsdt.PKey+"' class='smexmpk' style='display:none;'>"+
        "<input value='"+tsdt.ExamPass+"' class='smexmps' style='display:none;'>"+
        "</div>"+"</div></div></div>";
        }
        n1Elem.innerHTML="<center><div style='max-width:800px;'>"+htm+"</div></center>";
        
      
  }

function startsmpexm(label){
    var list=document.getElementsByClassName("tksmpexm");
    list = [].slice.call(list); 
    var posof = list.indexOf(label);
    // console.log(posof);
}