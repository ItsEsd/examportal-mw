/* M A S T R O W A L L */

$(document).ready(function(){
    getSampleExams();
$('.closesmprtl').click(function(){
    $('.smprtlOne').slideUp();
});
$('.clsexmscrn').click(function(){
    $('#exmscrn').slideUp();
});
});

function getSampleExams(){
var pElem = document.createElement('div');
pElem.className= "smprtlOne";
$("body").append(pElem);
var n2Elem = document.createElement('div');
n2Elem.className = "smprtlTwo";

n2Elem.innerHTML="<center><div class='headsmptst'>"+
"<span><form id='submtsmptst'><input id='srchsamtest' type='text' class='form-control' placeholder='Search Exam' required disabled><input type='submit' value='Go' id='submtbtnsmp'></form></span>"+
"<span class='closesmprtl'>Close</span></div></center>";

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
        document.cookie = "_mwallemp="+uid+"; expires=" + expires + ";path=/;domain=mastrowall.com";
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
   $(".smprtlTwo").append(n1Elem);
    for(var k=samlen;k>=1;k--){
        var elm = 'TestExam'+k;
        var exdt = samdata[elm];
        var tsdt = exdt[0];
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
      var dtelm = document.createElement('input');
      dtelm.id="smdt";dtelm.value = JSON.stringify(samdata); 
     $("body").append(dtelm); 
      
  }

function startsmpexm(label){
    var list=document.getElementsByClassName("tksmpexm");
    list = [].slice.call(list); 
    var posof = list.indexOf(label);
    var exid = document.getElementsByClassName('smexmid')[posof].value;
    var expass = document.getElementsByClassName('smexmps')[posof].value;
    $('#exmscrn').slideDown();
    loadqsetall(posof,exid,expass);
}

function loadqsetall(pos,eid,eps){
     var samdt = JSON.parse(document.getElementById('smdt').value);
     var samlen = Object.keys(samdt).length;
     var getdtpos = "TestExam"+(samlen-pos);
    var res = samdt[getdtpos];

    var getexd = document.createElement('input');
    getexd.id='smpexidb';
    getexd.value= JSON.stringify(res);
    $('body').append(getexd);
     var qstate = JSON.parse(JSON.stringify(res[0].QuesSTFinal));
     var qstateimg = JSON.parse(JSON.stringify(res[0].QSTimgFinal));
     var qstateops = JSON.parse(JSON.stringify(res[0].OPfinal));
     var qstateopimg = JSON.parse(JSON.stringify(res[0].OPimgfinal));
     var qstateanst = JSON.parse(JSON.stringify(res[0].AnsSTfinal));
     var qstate2 = qstate.split('{qfin}"');
     var qstateimg2 = qstateimg.split('{qfin}"');
     var qstateops2 = qstateops.split('{qfin}"');
     var qstateopimg2 = qstateopimg.split('{qfin}"');
     var qstateanst2 = qstateanst.split('{qfin}"');
     
     var len = qstate2.length;
     var oplen = qstateops2.length;
     var opq= 4;
     document.getElementById('enrname').innerHTML = "Sample Exam";
     document.getElementById('enrmail').innerHTML = "<span style='font-size:14px;'>"+res[0].ExamTitle+" - "+res[0].ExamDescp+"</span>";
     var timedurmili = res[0].TDurMili;
     document.getElementById('tmili').value = timedurmili;
     for(var k = 0; k<len-2;k++){
 
       if(k == 0){
       var qs =qstate2[k].substring(1);
       var qsimg =qstateimg2[k].substring(1);
       var qsopsimg =qstateopimg2[k].substring(1);
       var qsanst =qstateanst2[k].substring(1);
     if(qsopsimg =="null"){ var k1 = k+1;
       document.getElementById("viewqset").innerHTML = "<div class='qsecdiv-"+k1+"'  style='font-size:16px;padding:20px;'><div style='background-color:white;padding:20px;'>"+
       "<p style='font-size:14px;font-weight:bold;'>Question No."+k1+"</p><p>"+qs +"</p><div class='showqstimg' align='center'><img class='qrefimg' style='pointer-events:none;' "+
       "src='"+qsimg+"' onerror='this.onerror=null;this.src= `/images/fakefu.png`;'></div>"+
       "<div><p>A. "+qstateops2[k].substring(1)+"</p></div>"+
       "<div><p>B. "+qstateops2[k+1].substring(2)+"</p></div>"+
       "<div><p>C. "+qstateops2[k+2].substring(2)+"</p></div>"+
       "<div><p>D. "+qstateops2[k+3].substring(2)+"</p></div>"+
       "<div class='showopsimg'><img class='oprefimg' style='pointer-events:none;' "+
       "src='"+qsopsimg+"' onerror='this.onerror=null;this.src= `/images/fakefu.png`;'></div>"+
       "<br><div align='right'><form>"+
       "<input type='text' name='qnst' id='ops"+k1+"' value='Not Answered' style='display:none;'/>"+
       "<input type='text' class='opch' id='opchoice"+k1+"' value='Not Answered' disabled/>"+
       "<input type='button' class='opoptions' onclick='document.getElementById(`ops"+k1+"`).value=`A`;document.getElementById(`opchoice"+k1+"`).value=`A`;ansrdclrch(this);' value='A'/>"+
       "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+k1+"`).value=`B`;document.getElementById(`opchoice"+k1+"`).value=`B`;ansrdclrch(this);' value='B'/>"+
       "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+k1+"`).value=`C`;document.getElementById(`opchoice"+k1+"`).value=`C`;ansrdclrch(this);' value='C'/>"+
       "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+k1+"`).value=`D`;document.getElementById(`opchoice"+k1+"`).value=`D`;ansrdclrch(this);' value='D'/>"+
       "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+k1+"`).value=`Not Answered`;document.getElementById(`opchoice"+k1+"`).value=`Not Answered`;ansrdclrch(this);' value='Clear'/>"+
       "</form></div><p class='newpmrk'><button class='btn btn-dark mrkbtn' onclick='mrkfrrev(this)'>Mark for review</button></p></div><hr></div>";
 
       document.getElementById("quesindex").innerHTML ="<button class='qstindex' onclick='showqsec(this);'>"+k1+"</button>";
     }
      else{
       var k1 = k+1;
       document.getElementById("viewqset").innerHTML = "<div  class='qsecdiv-"+k1+"' style='font-size:16px;padding:20px;'><div style='background-color:white;padding:20px;'>"+
       "<p style='font-size:14px;font-weight:bold;'>Question No."+k1+"</p><p>"+qs +"</p><div class='showqstimg' align='center'><img class='qrefimg' style='pointer-events:none;' "+
       "src='"+qsimg+"' onerror='this.onerror=null;this.src= `/images/fakefu.png`;'></div>"+
      
       "<div class='showopsimg'><img class='oprefimg' style='pointer-events:none;' "+
       "src='"+qsopsimg+"' onerror='this.onerror=null;this.src= `/images/fakefu.png`;'></div>"+
       "<br><div align='right'><form>"+
       "<input type='text' name='qnst' id='ops"+k1+"' value='Not Answered' style='display:none;'/>"+
       "<input type='text' class='opch' id='opchoice"+k1+"' value='Not Answered' disabled/>"+
       "<input type='button' class='opoptions' onclick='document.getElementById(`ops"+k1+"`).value=`A`;document.getElementById(`opchoice"+k1+"`).value=`A`;ansrdclrch(this);' value='A'/>"+
       "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+k1+"`).value=`B`;document.getElementById(`opchoice"+k1+"`).value=`B`;ansrdclrch(this);' value='B'/>"+
       "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+k1+"`).value=`C`;document.getElementById(`opchoice"+k1+"`).value=`C`;ansrdclrch(this);' value='C'/>"+
       "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+k1+"`).value=`D`;document.getElementById(`opchoice"+k1+"`).value=`D`;ansrdclrch(this);' value='D'/>"+
       "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+k1+"`).value=`Not Answered`;document.getElementById(`opchoice"+k1+"`).value=`Not Answered`;ansrdclrch(this);' value='Clear'/>"+
       "</form></div><p class='newpmrk'><button class='btn btn-dark mrkbtn' onclick='mrkfrrev(this)'>Mark for review</button></p></div><hr></div>";
       document.getElementById("quesindex").innerHTML ="<button class='qstindex' onclick='showqsec(this);'>"+k1+"</button>";
      }
       
       }
        else{
         
       var kq = k +1;
       var qs = qstate2[k].substring(2);       
       var qsimg =qstateimg2[k].substring(2);
       var qsopsimg =qstateopimg2[k].substring(2);
       var qsanst =qstateanst2[k].substring(2);
      if(qsopsimg=="null"){document.getElementById("viewqset").innerHTML += "<div class='qsecdiv-"+kq+"' style='font-size:16px;padding:20px;'><div style='background-color:white;padding:20px;'>"+
      "<p style='font-size:14px;font-weight:bold;'>Question No."+kq+"</p><p>"+qs +"</p><div class='showqstimg' align='center'><img class='qrefimg' style='pointer-events:none;' "+
      "src='"+qsimg+"' onerror='this.onerror=null;this.src= `/images/fakefu.png`;'></div>"+
      "<div><p>A. "+qstateops2[opq].substring(2)+"</p></div>"+
      "<div><p>B. "+qstateops2[opq+1].substring(2)+"</p></div>"+
      "<div><p>C. "+qstateops2[opq+2].substring(2)+"</p></div>"+
      "<div><p>D. "+qstateops2[opq+3].substring(2)+"</p></div>"+
      "<div class='showopsimg'><img class='oprefimg' style='pointer-events:none;' "+
      "src='"+qsopsimg+"' onerror='this.onerror=null;this.src= `/images/fakefu.png`;'></div>"+
      "<br><div align='right'><form>"+
      "<input type='text' name='qnst' id='ops"+kq+"' value='Not Answered' style='display:none;'/>"+
      "<input type='text' class='opch' id='opchoice"+kq+"' value='Not Answered' disabled/>"+
      "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+kq+"`).value=`A`;document.getElementById(`opchoice"+kq+"`).value=`A`;ansrdclrch(this);' value='A'/>"+
     "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+kq+"`).value=`B`;document.getElementById(`opchoice"+kq+"`).value=`B`;ansrdclrch(this);' value='B'/>"+
     "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+kq+"`).value=`C`;document.getElementById(`opchoice"+kq+"`).value=`C`;ansrdclrch(this);' value='C'/>"+
     "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+kq+"`).value=`D`;document.getElementById(`opchoice"+kq+"`).value=`D`;ansrdclrch(this);' value='D'/>"+
      "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+kq+"`).value=`Not Answered`;document.getElementById(`opchoice"+kq+"`).value=`Not Answered`;ansrdclrch(this);' value='Clear'/>"+
      "</form></div><p class='newpmrk'><button class='btn btn-dark mrkbtn' onclick='mrkfrrev(this)'>Mark for review</button></p></div><hr></div>";
      document.getElementById("quesindex").innerHTML +="<button class='qstindex' onclick='showqsec(this);'>"+kq+"</button>";
       opq= opq +4;}
       else{
         document.getElementById("viewqset").innerHTML += "<div class='qsecdiv-"+kq+"'  style='font-size:16px;padding:20px;'><div style='background-color:white;padding:20px;'>"+
         "<p style='font-size:14px;font-weight:bold;'>Question No."+kq+"</p><p>"+qs +"</p><div class='showqstimg' align='center'><img class='qrefimg' style='pointer-events:none;' "+
         "src='"+qsimg+"' onerror='this.onerror=null;this.src= `/images/fakefu.png`;'></div>"+
       
         "<div class='showopsimg'><img class='oprefimg' style='pointer-events:none;' "+
         "src='"+qsopsimg+"' onerror='this.onerror=null;this.src= `/images/fakefu.png`;'></div>"+
         "<br><div align='right'><form>"+
         "<input type='text' name='qnst' id='ops"+kq+"' value='Not Answered' style='display:none;'/>"+
         "<input type='text' class='opch' id='opchoice"+kq+"' value='Not Answered' disabled/>"+
         "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+kq+"`).value=`A`;document.getElementById(`opchoice"+kq+"`).value=`A`;ansrdclrch(this);' value='A'/>"+
        "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+kq+"`).value=`B`;document.getElementById(`opchoice"+kq+"`).value=`B`;ansrdclrch(this);' value='B'/>"+
        "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+kq+"`).value=`C`;document.getElementById(`opchoice"+kq+"`).value=`C`;ansrdclrch(this);' value='C'/>"+
        "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+kq+"`).value=`D`;document.getElementById(`opchoice"+kq+"`).value=`D`;ansrdclrch(this);' value='D'/>"+
         "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+kq+"`).value=`Not Answered`;document.getElementById(`opchoice"+kq+"`).value=`Not Answered`;ansrdclrch(this);' value='Clear'/>"+
         "</form></div><p class='newpmrk'><button class='btn btn-dark mrkbtn' onclick='mrkfrrev(this)'>Mark for review</button></p></div><hr></div>";
         document.getElementById("quesindex").innerHTML +="<button class='qstindex' onclick='showqsec(this);'>"+kq+"</button>";
          opq= opq +4;
       }
     }
       }
}
document.getElementById('strtmexmfin').addEventListener('click',strtmpexmfn);
function strtmpexmfn(){
    timersmp();
    document.getElementById('qcontainer').style.display ='block';
    document.getElementById('qcontainer').style.zIndex = '100000';
    $('#navicon,#expdash,#exmscrn,.smprtlOne,.otservice,#falsesecback,#flsback').hide();
}

function sbmtsmpans(){
$('#qnstfrm').submit();
document.getElementById('qcontainer').style.display = 'none';
$('#feedbacksmp').slideDown('slow');
}

function checkresultsmp(){
    var qstsmpns = $('#jsonqnst').val();
    var rec = JSON.parse($('#smpexidb').val());
    var sprestr = JSON.parse(JSON.stringify(qstsmpns));
      var ansk = rec[0].AnsSTfinal;
      var anskey = ansk.split('{qfin}",');
      var lenstrkey = anskey.length;
  var resone = JSON.parse(sprestr);
  var count = 0;var ntansd =0;var wrng =0;
  for(var j=0; j<lenstrkey-1;j++){
  if(resone.qnst[j] === anskey[j].substring(1)){
  count = count+1;}
  else{count = count;}
  if(resone.qnst[j] =="Not Answered"){ntansd=ntansd+1;}else{ntansd=ntansd}
  if(resone.qnst[j] !="Not Answered" && resone.qnst[j] !=anskey[j].substring(1)){
   wrng = wrng +1;}else{wrng = wrng}}
  document.getElementById('crtanssmp').style.display = "block";
  document.getElementById('crtanssmp').innerHTML= "<p style='font-size:20px;color:green;'>Correct Answer: "+ count+"</p>"
  var xValues = ["Correct", "Not Answered","Wrong"];
  var yValues = [count, ntansd,wrng];
  var barColors = [
    "#1e7145",
    "#e8c3b9",
    "#b91d47"
  ];
  
  new Chart("anchartans2smp", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Overall Performance"
      }
    }
  });}