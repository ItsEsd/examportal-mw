
expone.addEventListener('submit', (event) => {
    $('#troomlimit').empty();
      var exid=$("#chexid").val();
     var ekey=JSON.stringify($("#chpass").val());
    var url1 = "https://script.google.com/macros/s/";
    var url2 = "AKfycbx0ZZCXac0UZbHPbsR196JqKWadbYadinnrR4Mb86YVX_1KTJO3Zq7Ax3ocgL7dKYix0A";
    var url = url1+url2+"/exec"+ "?action=gentestrd";
    document.getElementById('loader-vq').style.display = "block";
    var urlexpo = url1+url2+"/exec"+ "?callback=ldalqset&chexid="+exid+"&chstpa="+ekey+"&action=chexps";
    var request = jQuery.ajax({
      crossDomain: true,
      url: urlexpo,
      method: "GET",
      dataType: "jsonp"
    });

 });
    
function ldalqset(e){
  var res = e.records;
  document.getElementById('empinf').value=JSON.stringify(res);
  if(res != "ID not found!"){
    var testroom = res[0].StuAnsFinal;
    var testroomsize = testroom.length;
    if(testroomsize>46000){
    document.getElementById('troomlimit').innerHTML="Test Room Exceeded Limit!";
    document.getElementById('loader-vq').style.display = "none";
    }
    document.getElementById('loader-vq').style.display = "none";
    document.getElementById('expone').style.display = "none";
    document.getElementById('enrollid').style.display = "block";
    document.getElementById('right-block').style.marginTop = "140px";
    document.getElementById('expdetails').innerHTML = "<div align='left' style='margin-bottom:10px;color:white;border-bottom:1px solid yellow;'>"+
    "<p style='font-size:16px;'>Educator Name: <span style='font-style: italic;font-size:18px;'>"+res[0].EducatorName+"</span></p>"+
    "<p style='font-size:16px;'>Exam Title: <span style='font-style: italic;font-size:18px;'>"+res[0].ExamTitle+"</span></p>"+
    "<p style='font-size:16px;'>Description: <span style='font-style: italic;font-size:18px;'>"+res[0].ExamDescp+"</span></p>"+
    "<p style='font-size:16px;'>Test Duration: <span style='font-style: italic;font-size:18px;'>"+res[0].TDuration+"</span></p>"+
    "</div>"
    var qstate = JSON.parse(JSON.stringify(res[0].QuesSTFinal));
    var qstateimg = JSON.parse(JSON.stringify(res[0].QSTimgFinal));
    var qstateops = JSON.parse(JSON.stringify(res[0].OPfinal));
    var qstateopimg = JSON.parse(JSON.stringify(res[0].OPimgfinal));
    var qstateanst = JSON.parse(JSON.stringify(res[0].AnsSTfinal));
    var timedur = res[0].TDuration;
    var qstate2 = qstate.split('{qfin}"');
    var qstateimg2 = qstateimg.split('{qfin}"');
    var qstateops2 = qstateops.split('{qfin}"');
    var qstateopimg2 = qstateopimg.split('{qfin}"');
    var qstateanst2 = qstateanst.split('{qfin}"');
    
    var len = qstate2.length;
    var oplen = qstateops2.length;
    var opq= 4;
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
      "<input type='button' class='opoptions' onclick='document.getElementById(`ops"+k1+"`).value=`A`;document.getElementById(`opchoice"+k1+"`).value=`A`;' value='A'/>"+
      "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+k1+"`).value=`B`;document.getElementById(`opchoice"+k1+"`).value=`B`;' value='B'/>"+
      "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+k1+"`).value=`C`;document.getElementById(`opchoice"+k1+"`).value=`C`;' value='C'/>"+
      "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+k1+"`).value=`D`;document.getElementById(`opchoice"+k1+"`).value=`D`;' value='D'/>"+
      "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+k1+"`).value=`Not Answered`;document.getElementById(`opchoice"+k1+"`).value=`Not Answered`;' value='Clear'/>"+
      "</form></div></div><hr></div>";

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
      "<input type='button' class='opoptions' onclick='document.getElementById(`ops"+k1+"`).value=`A`;document.getElementById(`opchoice"+k1+"`).value=`A`;' value='A'/>"+
      "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+k1+"`).value=`B`;document.getElementById(`opchoice"+k1+"`).value=`B`;' value='B'/>"+
      "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+k1+"`).value=`C`;document.getElementById(`opchoice"+k1+"`).value=`C`;' value='C'/>"+
      "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+k1+"`).value=`D`;document.getElementById(`opchoice"+k1+"`).value=`D`;' value='D'/>"+
      "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+k1+"`).value=`Not Answered`;document.getElementById(`opchoice"+k1+"`).value=`Not Answered`;' value='Clear'/>"+
      "</form></div></div><hr></div>";
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
     "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+kq+"`).value=`A`;document.getElementById(`opchoice"+kq+"`).value=`A`;' value='A'/>"+
    "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+kq+"`).value=`B`;document.getElementById(`opchoice"+kq+"`).value=`B`;' value='B'/>"+
    "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+kq+"`).value=`C`;document.getElementById(`opchoice"+kq+"`).value=`C`;' value='C'/>"+
    "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+kq+"`).value=`D`;document.getElementById(`opchoice"+kq+"`).value=`D`;' value='D'/>"+
     "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+kq+"`).value=`Not Answered`;document.getElementById(`opchoice"+kq+"`).value=`Not Answered`;' value='Clear'/>"+
     "</form></div></div><hr></div>";
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
        "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+kq+"`).value=`A`;document.getElementById(`opchoice"+kq+"`).value=`A`;' value='A'/>"+
       "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+kq+"`).value=`B`;document.getElementById(`opchoice"+kq+"`).value=`B`;' value='B'/>"+
       "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+kq+"`).value=`C`;document.getElementById(`opchoice"+kq+"`).value=`C`;' value='C'/>"+
       "<input type='button'  class='opoptions' onclick='document.getElementById(`ops"+kq+"`).value=`D`;document.getElementById(`opchoice"+kq+"`).value=`D`;' value='D'/>"+
        "<input type='button' class='opoptions'  onclick='document.getElementById(`ops"+kq+"`).value=`Not Answered`;document.getElementById(`opchoice"+kq+"`).value=`Not Answered`;' value='Clear'/>"+
        "</form></div></div><hr></div>";
        document.getElementById("quesindex").innerHTML +="<button class='qstindex' onclick='showqsec(this);'>"+kq+"</button>";
         opq= opq +4;
      }
        
        
    }
      }

  }
else{
document.getElementById('loader-vq').style.display = "none";
}

}




function showqsec(label){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var list=document.getElementsByClassName("qstindex");
  list = [].slice.call(list); 
  var posofq = list.indexOf(label);
  var $container = $("html,body");
  var posofdiv = posofq+1;
  var $scrollTo = $('.qsecdiv-'+posofdiv);
  
  $container.animate({
    scrollTop: $scrollTo.offset().top-60},0000); 

}


    $.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
        if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
            o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
        } else {
          o[this.name] = this.value || '';
        }
      });
      return o;
    };
    $(function() {
      $('form').submit(function() {
        document.getElementById("jsonqnst").value = JSON.stringify($('form').serializeObject());
        return false;
      });
    });

exptwo.addEventListener('submit', (event)=> {
      var res = JSON.parse($('#empinf').val());
      var enid=$("#chenid").val();
      document.getElementById('loader-vq').style.display = "block";
      // document.getElementById('loader-vq').style.display = "none";
      var timedurmili = res[0].TDurMili;
      document.getElementById('tmili').value = timedurmili;
      var stustring = JSON.parse(JSON.stringify(res[0].EnrolledStuFinal));
      var sstring = stustring.split(',');
      var lenstr = sstring.length;

      for(var k =0; k<lenstr;k++){
if(enid==JSON.parse(sstring[k])){
document.getElementById('stuinfo').style.display = 'block';
document.getElementById('flsback').style.display = 'none';
document.body.style.backgroundImage = "linear-gradient(0deg,white,white)";
document.body.style.backgroundSize = "100% 100%";
document.getElementById('stubio').innerHTML = "<div style='text-align:left;'>"+
"<p style='font-size:20px;'>Name: <span style='font-size:24px;font-style: italic;'>"+JSON.parse(sstring[k-2])+"</span></p>"+
"<p style='font-size:20px;'>Registered Email: <span style='font-size:24px;font-style: italic;'>"+JSON.parse(sstring[k-1])+"</span></p></div>";
document.getElementById('enrname').innerHTML = "Name: "+ JSON.parse(sstring[k-2]);
document.getElementById('enrmail').innerHTML = "<span style='font-size:14px;'>"+res[0].ExamTitle+" - "+res[0].ExamDescp+"</span>";
document.getElementById('expdash').style.display ="none";

}
else{
  document.getElementById('loader-vq').style.display = "none";
}     
}

  });

var h1 = document.getElementById('timer'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function timer() {
    var ttime =parseInt($("#tmili").val());
    countdown();
setTimeout(submitans,ttime);
}

function showTimeleft(){
  document.getElementById('timer').style.display = 'block';

}
  function submitans(){
    $('#qnstfrm').submit();
    var exid = $('#chexid').val();
    var expass =JSON.stringify($('#chpass').val());
    var enid = JSON.stringify($('#chenid').val());
    var jsonans =$('#jsonqnst').val();
    var url1 = "https://script.google.com/macros/s/";
    var url2 = "AKfycbyf8ZN_wYToG0ElRVSrGMvNslyr0hyPnUCbEt4SbnkLH20hMOUZS-L6HQwIrqS_vdYV";
    var url = url1+url2+"/exec"+"?callback=ctrlqus&chexid=" +exid+ "&chpass=" +expass+ "&chenid=" +enid +"&jsonqnst=" +jsonans + "&action=initans";
   
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
    document.getElementById('textcomp').style.display = 'block';
  }
  
function ctrlqus(){
  document.getElementById('textcomp').style.display = 'none';
  document.getElementById('qcontainer').style.display = 'none';
  document.getElementById('feedback').style.display = 'block';

}

function checkresult(){
  var exid=$("#chexid").val();
  var ekey=JSON.stringify($("#chpass").val());
var url1 = "https://script.google.com/macros/s/";
var url2 = "AKfycbx0ZZCXac0UZbHPbsR196JqKWadbYadinnrR4Mb86YVX_1KTJO3Zq7Ax3ocgL7dKYix0A";
var urlrs = url1+url2+"/exec"+ "?callback=ldstrslt&chexid="+exid+"&chstpa="+ekey+"&action=chexps";
document.getElementById('loader-res').style.display = "block";
var request = jQuery.ajax({
  crossDomain: true,
  url: urlrs,
  method: "GET",
  dataType: "jsonp"
});}

function ldstrslt(e){
  var rec = e.records;
  var enid=JSON.stringify($("#chenid").val());
  if(res != "ID not found!"){
    var restr = JSON.parse(JSON.stringify(rec[0].StuAnsFinal));
    var sprestr = restr.split('{anst},');
    var lenstr = sprestr.length;
    var ansk = JSON.parse(JSON.stringify(rec[0].AnsSTfinal));
    var anskey = ansk.split('{qfin}",');
    var lenstrkey = anskey.length;
for(var k =0; k<lenstr;k+=2){
if(enid==sprestr[k]){
var res = sprestr[k+1];
var resone = JSON.parse(res);
var count = 0;var ntansd =0;var wrng =0;
for(var j=0; j<lenstrkey-1;j++){
if(resone.qnst[j] === anskey[j].substring(1)){
count = count+1;}
else{count = count;}
if(resone.qnst[j] =="Not Answered"){ntansd=ntansd+1;}else{ntansd=ntansd}
if(resone.qnst[j] !="Not Answered" && resone.qnst[j] !=anskey[j].substring(1)){
 wrng = wrng +1;}else{wrng = wrng}
}
document.getElementById('crtans').style.display = "block";
document.getElementById('crtans').innerHTML= "<p style='font-size:20px;color:green;'>Correct Answer: "+ count+"</p>"
}
  }
  
var xValues = ["Correct", "Not Answered","Wrong"];
var yValues = [count, ntansd,wrng];
var barColors = [
  "#1e7145",
  "#e8c3b9",
  "#b91d47"
];

new Chart("anchartans2", {
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
});
  document.getElementById('loader-res').style.display = "none";
  }
  else{
    document.getElementById('loader-res').style.display = "none";
  }
}

onselectstart = (e) => {e.preventDefault()}

const idelem = {"id":["stuname","stueid"]}
idelem.donotdowrd = function(){
  for(var ion=0;ion<idelem.id.length;ion++){
  var nam = '#'+this.id[ion];
  var inp = $(nam).val();
  var dndw = inp.indexOf(",");
  var funelem = document.getElementById(this.id[ion]);
      if(dndw >= 0){
        funelem.value = inp.split(',')[0];
      }
  }
}

function genenrollid(){
  var k =Math.random().toString(26).substring(2, 7) + Math.random().toString(26).substring(2, 7);
  document.getElementById('enrollid').value = k;
}

$("#conwexid").click(function() {
  document.getElementById('continueexamid').style.display='block';
  $('.otservice').hide();
});


$("#chperfexp").click(function() {
  $('#continueeducator').show();$('.otservice').hide();
});


$("#assgntst").click(function() {
  $('#assignstuexam').show();$('.otservice').hide();
});


$("#chresexam").click(function() {
  document.getElementById('resbrd').style.display='block';
  $('.otservice').hide();
});

$('#sgconwexid').click(function(){
  window.open('https://educator.mastrowall.com', '_blank', 'location=center,height=570,width=1200,left=80,top=100,scrollbars=yes,status=yes');
});


$("#clsanrpt").click(function() {
  $('#anrprt').hide();
});


$("#opanrpt").click(function() {
  $('#anrprt').show();
});

$("#clsanrpt2").click(function() {
  $('#anrprt2').hide();
});

$("#opanrpt2").click(function() {
  checkresult();
  $('#anrprt2').show();
});