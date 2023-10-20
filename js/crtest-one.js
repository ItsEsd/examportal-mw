 /* M A S T R O W A L L */

   checkexid.addEventListener('submit', (event) => {
    var exid =$("#chexamidedu").val();
    var pkey =JSON.stringify($("#chkey").val());
    var url1 = "https://script.google.com/macros/s/";
    var url2 = "AKfycbx0ZZCXac0UZbHPbsR196JqKWadbYadinnrR4Mb86YVX_1KTJO3Zq7Ax3ocgL7dKYix0A";
    var url = url1+url2+"/exec"+"?callback=ctrlqexeditin&chexid=" +exid+"&chkey="+pkey+"&action=chexid";
    document.getElementById('loader-exid').style.display = "block";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
    
      });
    
    function ctrlqexeditin(e){
      var res = e.records;
    if(res != "ID not found!"){
      document.getElementById('continueexamid').style.display = "none";
      document.getElementById('otserviceexamid').style.display = "block";
      document.getElementById('loader-exid').style.display = "none";
      previewqset();
    }
    else{
      document.getElementById('loader-exid').style.display = "none";
    }
    }


    conexeducator.addEventListener('submit', (event) => { 
     var exid=$("#cpexid").val();
     var expass=JSON.stringify($("#cppass").val());
     document.getElementById('sbmtchprm').disabled= true;
   var url1 = "https://script.google.com/macros/s/";
   var url2 = "AKfycbx0ZZCXac0UZbHPbsR196JqKWadbYadinnrR4Mb86YVX_1KTJO3Zq7Ax3ocgL7dKYix0A";
   var urlcp = url1+url2+"/exec"+ "?callback=ldalrslt&chexid="+exid+"&chstpa="+expass+"&action=chexps";
   document.getElementById('loader-cp').style.display = "block";
   var request = jQuery.ajax({
    crossDomain: true,
    url: urlcp,
    method: "GET",
    dataType: "jsonp"
  });    });

function ldalrslt(e){
  var res = e.records; 
  if(res != "ID not found!"){
    var exmhd = `<div class="row"><div class="col-md-6">
<p>Educator Name: <b><span class="exeduinfoid">`+res[0].EducatorName+`</span></b></p>
<p>Exam Title: <b><span class="exeduinfoid">`+res[0].ExamTitle+`</span></b></p>
<p>Description: <b><span class="exeduinfoid">`+res[0].ExamDescp+`</span></b></p>
<p>Test Duration: <b><span class="exeduinfoid">`+res[0].TDuration+`</span></b></p>
<p>Exam Pass: <b><span class="exeduinfoid">`+JSON.parse(res[0].ExamPass)+`</span></b></p>
</div><div class="col-md-6"><img src="https://mastrowall.com/images/logoRecBWsvg.svg" style="width:80px;float:right;display:block;"></div></div><hr>`;
    $('#stresultall').empty();
    var restren = JSON.parse(JSON.stringify(res[0].EnrolledStuFinal));
    var sprestren = restren.split(',');
    var lenstren = sprestren.length;
    var restr = JSON.parse(JSON.stringify(res[0].StuAnsFinal));
    var sprestr = restr.split('{anst},');
    var lenstr = sprestr.length;
    var ansk = JSON.parse(JSON.stringify(res[0].AnsSTfinal));
    var anskey = ansk.split('{qfin}",');
    var lenstrkey = anskey.length;
    for(var k =0; k<lenstr-1;k+=2){
      var stenid = JSON.parse(sprestr[k]);
      var res = sprestr[k+1];
      var resone = JSON.parse(res);
      var count = 0;
      for(var j=0; j<lenstrkey-1;j++){
      if(resone.qnst[j] === anskey[j].substring(1)){
      count = count+1;
      }
      else{
        count = count;
      }
      }
    for(var v=0;v<lenstren;v++){
           if(stenid == JSON.parse(sprestren[v+2])){
            var stname = sprestren[v];break;
        }
    }
    document.getElementById('eduexloginform').style.display = "none";
    document.getElementById('loadercp').style.display = "block";
    document.getElementById('stresultall').innerHTML +="<p style='font-size:14px;color:black;text-align:left;'>("+(k+2)/2+") Enrollment ID: "+JSON.parse(sprestr[k])+"</p><br><p style='font-size:14px;color:black;'><span style='float:left;'>Name: <span style='text-transform:uppercase;color:blue;'>"+JSON.parse(stname)+"</span></span><span <span style='float:right;color:green;'>Correct Answer: <span style='font-weight:bold;'>"+ count+"</span></span></p><br><hr>" ;   
    document.getElementById('backcp').style.display = "block";
    document.getElementById('loader-cp').style.display = "none";
    document.getElementById('sbmtchprm').disabled= false;
    }
    document.getElementById('exmdscrpprfn').innerHTML = exmhd;
  }

  else{
    document.getElementById('loader-cp').style.display = "none";
    document.getElementById('sbmtchprm').disabled= false;
  }
}



   function examresultpdf() {
    var elem = document.getElementById("d365eqw");
    var oPrntWin = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
        oPrntWin.document.open();
        oPrntWin.document.write("<!doctype html><html><head><title>M A S T R O W A L L - Test Result<\/title><link rel=\"stylesheet\" href=\"css/vendor/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/css/style.css\"><\/head><body style=\"width:100%;padding:10px;\" onload=\"print();\"><div align=\"center\"><div style=\"max-width:800px;padding:10px;border:1px solid #e2e2e2;text-align:left;background-color:white;\">" + elem.innerHTML + "<h4 style=\"width:100%;text-align:center;color:#0c29cd;\"><a style=\"text-decoration:none;color:#0c29cd;\" target=\"_blank\" href=\"https://mastrowall.com\">M A S T R O W A L L<\/a><\/h4><\/div><\/div><\/body><\/html>");
        oPrntWin.document.close();
   }

chresult.addEventListener('submit', (event) => { 
  var exid=$("#checkexamid").val();
  var enid=JSON.stringify($("#chechenid").val());
var url1 = "https://script.google.com/macros/s/";
var url2 = "AKfycbxGHxUc-rfFOPKqRZr9GCLY7kWm3j1Aw5E9ejlT_8_HrQL2HPImBo-bcZ_4vUeiidh_";
var url = url1+url2+"/exec"+ "?callback=chkldrslt&chexid="+exid+"&chenid="+enid+"&action=chrslt";
document.getElementById('loader-resch').style.display = "block";
var request = jQuery.ajax({
  crossDomain: true,
  url: url,
  method: "GET",
  dataType: "jsonp"
});});

function chkldrslt(e){
  var reslt = e.records;
  var enid=JSON.stringify($("#chechenid").val());
  if(reslt != "ID not found!"){
    var stustring = JSON.parse(JSON.stringify(reslt[0].EnrolledStuFinal));
    var sstring = stustring.split(',');
    var lenstrk = sstring.length;
  var restr = JSON.parse(JSON.stringify(reslt[0].StuAnsFinal));
  var sprestr = restr.split('{anst},');
  var lenstr = sprestr.length;
  var ansk = JSON.parse(JSON.stringify(reslt[0].AnsSTfinal));
  var anskey = ansk.split('{qfin}",');
  var lenstrkey = anskey.length;
for(var k =0; k<lenstr;k+=2){
if(enid==sprestr[k]){ 
var res = sprestr[k+1];
var resone = JSON.parse(res);
var count = 0;var ntansd =0;var wrng =0;
for(var j=0; j<lenstrkey-1;j++){
if(resone.qnst[j] === anskey[j].substring(1)){
count = count+1;
}else{
  count = count;}
 if(resone.qnst[j] =="Not Answered"){ntansd=ntansd+1;}else{ntansd=ntansd}
 if(resone.qnst[j] !="Not Answered" && resone.qnst[j] !=anskey[j].substring(1)){
  wrng = wrng +1;}else{wrng = wrng}
}}}
for(var h =0; h<lenstrk;h++){
if(enid==sstring[h]){
document.getElementById('chresform').style.display = "none";
document.getElementById('scrbrd').style.display = "block";
document.getElementById('crtans2').style.display = "block";
document.getElementById('crtans2').innerHTML= "<div><p style='text-align:left;font-size:14px;'>Educator: "+reslt[0].EducatorName+
"<br>Exam Title: "+reslt[0].ExamTitle+"<br>Description: "+reslt[0].ExamDescp+"</p></div>"+
"<p style='font-size:20px;color:green;'>Correct Answer: "+ count+"</p>";
  document.getElementById('stunamek').style.display = "block";
document.getElementById('stunamek').innerHTML="<p style='color:black;font-size:20px;'>Name: <span style='color:blue;font-style:italic;'>"+JSON.parse(sstring[h-2])+"</span></p>";
break;}else{
  document.getElementById('stunamek').style.display = "none";
}}

var xValues = ["Correct", "Not Answered","Wrong"];
var yValues = [count, ntansd,wrng];
var barColors = [
  "#1e7145",
  "#e8c3b9",
  "#b91d47"
];

new Chart("anchartans", {
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
// var xValues2 = ["Correct", "Wrong"];
// var yValues2 = [5, 49];
// var barColors2 = [
//   "#2b5797",
//   "#b91d47"
// ];
// new Chart("anchartcrt", {
//   type: "pie",
//   data: {
//     labels: xValues2,
//     datasets: [{
//       backgroundColor: barColors2,
//       data: yValues2
//     }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: "Correct"
//     }
//   }
// });

document.getElementById('loader-resch').style.display = "none";
}
  else{
    document.getElementById('loader-resch').style.display = "none";
  }
}

  stuassign.addEventListener('submit', (event) => { 
    document.getElementById('loader-enst').style.display="block";
  var namestu = encodeURIComponent(JSON.stringify($('#stuname').val()));
  var eid  =encodeURIComponent(JSON.stringify($('#stueid').val()));
  var examid  =$('#exid').val();
  var epass  =JSON.stringify($('#expass').val());
  var enid  =encodeURIComponent(JSON.stringify($('#enrollid').val()));
  var url1 = "https://script.google.com/macros/s/";
  var url2 = "AKfycbx0ZZCXac0UZbHPbsR196JqKWadbYadinnrR4Mb86YVX_1KTJO3Zq7Ax3ocgL7dKYix0A";
  var url = url1+url2+"/exec"+"?callback=ctrlqstex&exid=" +examid+"&expass="+epass+"&stuname="+namestu+"&stueid="+eid+"&enrollid="+enid+"&action=gentestenroll";
  
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
  
  });

function ctrlqstex(e) {
document.getElementById('loader-enst').style.display="none";
var d = new Date();
var day = d.getDate();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var currentTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
var namestu = $('#stuname').val();
var eid  =$('#stueid').val();
var examid  =$('#exid').val();
var enid  =$('#enrollid').val();
var cat = e.result;
if(cat === "Value updated successfully!"){
document.getElementById('stuassign').style.display ="none";
document.getElementById('assignstuexform').style.backgroundImage="linear-gradient(0deg,white,white)";
document.getElementById('enrolledinfo').innerHTML = "<div style='padding:20px;min-height:300px;font-family: verdana;' align='center'><div style='max-width:1000px;text-align:left;'>"+
"<hr><p><span style='float:left;'><img src='https://mastrowall.com/images/logoRecBWsvg.svg' style='width:25px;'></span><span style='margin-left:5px;font-size:16px;color:#666666;'><b>M A S T R O W A L L | <a target='_blank' href='https://exam-portal.mastrowall.com/' style='text-decoration:none;color:#0c29cd;'>Exam Portal</a></b></a></span><span style='float:right;font-size:12px;'>"+currentTime+"</span></p><hr>"+
"<br><p style='font-size:16px;'>Enrollment ID: <span style='color:#0c29cd;'><b>" +enid+"</b></span></p>" +
"<p style='font-size:16px;'>Name: <b>" +namestu+"</b></p>" +
"<p style='font-size:16px;'>Exam ID: <b>" +examid+"</b></p>" +
"<p style='font-size:16px;'>Registered Email ID: <em>" +eid+"</em></p><br><hr>"+
"<div><p style='font-size:14px;width:100%;line-height:160%;display:block;'><span style='float:left;line-height:160%;display:block;'>©️ M A S T R O W A L L</span><a style='font-size:16px;color:#0c29cd;text-decoration:none;float:right;line-height:160%;display:block;' target='_blank' href='https://exam-portal.mastrowall.com/'>Go to Portal >></a></p></div><br></div></div>";
document.getElementById('actionbtnenroll').style.display="block";
sendStmail();
}
else{
}
return false;
}
function enrollmentinfo() {
var elem = document.getElementById("enrolledinfo");
var oPrntWin = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
    oPrntWin.document.open();
    oPrntWin.document.write("<!doctype html><html><head><title>Exam Portal<\/title><link rel=\"stylesheet\" href=\"css/vendor/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"style.css\"><\/head><body onload=\"print();\">" + elem.innerHTML + "<\/body><\/html>");
    oPrntWin.document.close();
}
function sendStmail() {
var elemed = document.getElementById("enrolledinfo").innerHTML;
var mailat = $('#stueid').val(); 
Email.send({
SecureToken : "dce269d4-508e-4b89-bc50-2201fb9f60a8",
To: mailat,
From: "MASTROWALL<examportal@mastrowall.com>",
  Subject: "Exam Portal - MASTROWALL",
  Body:  elemed+"<br><p style='text-align:center;font-size:14px;'>N.B. Do not reply to this email</p>",
})
  .then(function (message) {
    if(message="OK"){
      document.getElementById('mailsentstu').style.display= 'block';
      document.getElementById('mailsentstu').innerHTML= 'Credentials sent to your email. Check Junk folder also. Do not forget to save or take a print.';
      setTimeout(function() {
        jQuery('#mailsentstu').fadeOut('fast');
      }, 20000);
    }
else{
document.getElementById('mailsentstu').style.display= 'none';
}
  });
}

var optionsS = {
  "key": "rzp_live_LTmvi7swL9EliZ",
  "amount": "10000",
  "currency": "INR",
  "name": "MASTROWALL",
  "image": "https://cdn.jsdelivr.net/gh/ItsEsd/mastrowall-com@77f1e6b1852364b586c8c3eca51ef492fbc259c6/images/favicon-logos/logoRecBW.png",
  "handler": function(response) {
      var rzres = JSON.stringify(response);
      var exid = $('#chexamidedu').val();
      var rzpid= response.razorpay_payment_id;
      var refid = "emp"+Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 10);
      var d = new Date(); var currentTime = d.toLocaleString();
      var ur1='https://script.google.com/macros/s/';
var ur2='AKfycbwdJvI9tIbOZH6dzaSUjzot2NBIwYb0y_cM1iNAPYiMTJB6yIn7L7N2T0H7uBCruG5YQg';
var url= ur1+ur2+'/exec'+'?callback=ctrlqpcheck&tostamp='+currentTime+ '&torzres='+rzres+  '&toexid='+exid+ 
'&torzpid='+rzpid+ '&torfid='+refid+  '&action=paycheckexm';
var request = jQuery.ajax({
crossDomain: true,
url: url,
method: "GET",
dataType: "jsonp"
}); 
  },
  "notes": {
    "address": "Razorpay Corporate Office"
  },
  "theme": {
    "color": "#ffffff"
  }
};
var rzp4 = new Razorpay(optionsS);
rzp4.on('payment.failed', function(response) {
  alert(response.error.code);
  alert(response.error.description);
  alert(response.error.source);
  alert(response.error.step);
  alert(response.error.reason);
  alert(response.error.metadata.order_id);
  alert(response.error.metadata.payment_id);
});

$('#cmpltpay').click(function(e) {
  rzp4.open();
  e.preventDefault();
});

function ctrlqpcheck(e){
if(e.result=="active"){
  previewqset();
}
}