 /* M A S T R O W A L L */
  $(window).on('selectstart', function (evt) {
    return (evt.target.contentEditable === 'true');
  });
  $("#addQ").click(function() {
    $('#qtstfalse').show();
    if(document.getElementById('qst').value ==''){
      document.getElementById('qtstfalse').innerHTML='** Required';
      document.getElementById('conq').style.border='2px solid #f75858';
    }
    else{
      $('#qtstfalse').hide();
      document.getElementById('conq').style.border='2px solid #6a67fa';
    }
    document.getElementById('formcontainer').scrollTop = '0px';
  });
  qst.addEventListener('input',(event) =>{
    $('#qtstfalse').hide();
  });

  conq.addEventListener('input',(event) =>{
      $('#qtstfalse').hide();
    document.getElementById('conq').style.border='2px solid #6a67fa';
    // var innerh = document.getElementById('conq').innerHTML;
    var innerh = $('#conq').val();
    document.getElementById('qst').value = innerh;
    });

    document.querySelector('#conq').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        var innerh = $('#qst').val() + "<br>";
        document.getElementById('conq').value = innerh;
      }
  });

    // $(document).ready(function(){
    //   document.querySelector('[contenteditable]').addEventListener('paste', function(event) {
    //     event.preventDefault();
  //     document.execCommand('inserttext', false, event.clipboardData.getData('text/plain'));
  //   });
  // });
  
  
    function readImage(input) {
      if ( input.files) {
          var FR= new FileReader();
          FR.onload = function(e) {
               $('#img').show().attr( "src", e.target.result );
               $('#base').show().text( e.target.result );
          };       
          FR.readAsDataURL( input.files[0] );
      }
  }
   
      $("#stimg").change(function(){
                readImage( this );
            });
  
      $("#opsimg").change(function(){
              readImage( this );
          });
      $('document').ready(function () {
            $('#stimg').on('change', function () {
              var $files = $(this).get(0).files;
                 readImage( this );
              if ($files.length) {
                // Reject big files
                if ($files[0].size > $(this).data('max-size') * 1024) {
                  return false;
                }
                var apiUrl = 'https://api.imgur.com/3/image';
                var apiKey = 'f1fb111ea7f4e5b';
                var settings = {
                  async: false,
                  crossDomain: true,
                  processData: false,
                  contentType: false,
                  type: 'POST',
                  url: apiUrl,
                  headers: {
                    Authorization: 'Client-ID ' + apiKey,
                    Accept: 'application/json',
                  },
                  mimeType: 'multipart/form-data',
                };
                var formData = new FormData();
                formData.append('image', $files[0]);
                settings.data = formData;
                $.ajax(settings).done(function (response) {
                var k = response;
                var url = JSON.parse(response);
                document.getElementById('qstimg').value = url.data.link ;
                });}});});
   $('document').ready(function () {
    $('#opsimg').on('change', function () {
      var $files = $(this).get(0).files;
      for(var k=0;k<=3;k++){
        document.getElementsByClassName('optionss')[k].removeAttribute('required');
        document.getElementsByClassName('optionss')[k].value="null";
      }
         readImage( this );
      if ($files.length) {
        // Reject big files
        if ($files[0].size > $(this).data('max-size') * 1024) {
          return false;
        }
        var apiUrl = 'https://api.imgur.com/3/image';
        var apiKey = 'f1fb111ea7f4e5b';
  
        var settings = {
          async: false,
          crossDomain: true,
          processData: false,
          contentType: false,
          type: 'POST',
          url: apiUrl,
          headers: {
            Authorization: 'Client-ID ' + apiKey,
            Accept: 'application/json',
          },
          mimeType: 'multipart/form-data',
        };
        var formData = new FormData();
        formData.append('image', $files[0]);
        settings.data = formData;
        $.ajax(settings).done(function (response) {
        var k = response;
        var url = JSON.parse(response);
        document.getElementById('opimg').value = url.data.link ;
        });}});});
  quesfrm.addEventListener('submit', (event) => { 
    document.getElementById('falsesecback-mq').style.display="block";
  var exid=$("#chexamidedu").val();
  var ekey=JSON.stringify($("#chkey").val());
  var quST=escape(JSON.stringify($("#qst").val()+"{qfin}"));
  var quSTimg=escape(JSON.stringify($("#qstimg").val()+"{qfin}"));
  var OPA=escape(JSON.stringify($("#opa").val()+"{qfin}"));
  var OPB=escape(JSON.stringify($("#opb").val()+"{qfin}"));
  var OPC=escape(JSON.stringify($("#opc").val()+"{qfin}"));
  var OPD=escape(JSON.stringify($("#opd").val()+"{qfin}"));
  var OPImg=escape(JSON.stringify($("#opimg").val()+"{qfin}"));
  var ANQST=escape(JSON.stringify($("#anqs").val().toUpperCase()+"{qfin}"));
  var url1="https://script.google.com/macros/s/";
  var url2 ="AKfycbx0ZZCXac0UZbHPbsR196JqKWadbYadinnrR4Mb86YVX_1KTJO3Zq7Ax3ocgL7dKYix0A";
  var urlgt = url1+ url2+"/exec"+"?callback=ctrlqs&chexid=" +exid+"&chkey="+ekey+"&qst="+quST+"&qstimg="+quSTimg+"&opa="+OPA+"&opb="+OPB+"&opc="+OPC+"&opd="+OPD+"&opimg="+OPImg+"&anqs="+ANQST+"&action=gentestup";
  
  var request = jQuery.ajax({
    crossDomain: true,
    url: urlgt,
    method: "GET",
    dataType: "jsonp"
  });
  
  setTimeout(function() {
    $('#falsesecback-mq').fadeOut('slow');
  }, 4000);
  quesfrm.reset();
  document.getElementById('conq').innerText = '';
  // previewqset();
  
  });
  
  function ctrlqs(e){
    var re = e.result;
  if(re === "Value updated successfully!"){
    document.getElementById('qupdated').style.display="block";
  
    setTimeout(function() {
      $('#qupdated').fadeOut('slow');
    }, 4000);
    quesfrm.reset();
    previewqset();
  }
  
  }
  
  
  function displayQST(){
    var QST = $("#qst").val();
    var QSTIMG = $("#qstimg").val();
    var OPSA = $("#opa").val();
    var OPSB = $("#opb").val();
    var OPSC = $("#opc").val();
    var OPSD = $("#opd").val();
    var OPSIMG = $("#opimg").val();
    var ANST = $("#anqs").val().toUpperCase();
  
    if(QST != "" && OPSA !="" && OPSB != ""  && OPSC != "" && OPSD != "" && ANST !="" && QSTIMG == "null" && OPSIMG == "null"){
      document.getElementById("displayqst").innerHTML= "<div style='padding:10px;padding-top:20px;font-size:16px;'><br><p style='font-size:16px;'>"
      +QST+"</p><br><div><div><p>A. "
      + OPSA +"</p></div><div><p>B. "
      + OPSB+"</p></div><div><p>C. "
      + OPSC+"</p></div><div><p>D. "
      +OPSD+"</p></div></div><div><p class='preans'>Answer: "
      + ANST+"</p></div></div>";
    }
    else if(QST != "" && QSTIMG != "null" && OPSA =="null" && OPSB == "null"  && OPSC == "null" && OPSD == "null" && OPSIMG !="null" && ANST !=""){
    
      document.getElementById("displayqst").innerHTML= "<div style='padding:10px;padding-top:20px;font-size:16px;'><br><p style='font-size:16px;'>"
      +QST+"</p><img class='preqimg' src='"
      + QSTIMG+"'><br><img class='propimg' src='"
      + OPSIMG+"'><div><p class='preans'>Answer: "
      + ANST+"</p></div></div>";
    
    }
    else if(QST != "" && QSTIMG != "null" && OPSA !="" && OPSB != ""  && OPSC != "" && OPSD != ""  && OPSIMG == "null" && ANST !=""){
      document.getElementById("displayqst").innerHTML= "<div style='padding:10px;padding-top:20px;font-size:16px;'><br><p style='font-size:16px;'>"
      +QST+"</p><img class='preqimg' src='"
      + QSTIMG+"'><br><div><div><p>A. "
      + OPSA +"</p></div><div><p>B. "
      + OPSB+"</p></div><div><p>C. "
      + OPSC+"</p></div><div><p>D. "
      +OPSD+"</p></div></div><div><p class='preans'>Answer: "
      + ANST+"</p></div></div>";
    
    }
    else if(QST != "" && QSTIMG == "null" && OPSA =="null" && OPSB == "null"  && OPSC == "null" && OPSD == "null"  && OPSIMG != "null" && ANST !=""){
      document.getElementById("displayqst").innerHTML= "<div style='padding:10px;padding-top:20px;font-size:16px;'><br><p style='font-size:16px;'>"
      +QST+"</p><br><img class='propimg' src='"
      + OPSIMG+"'><div><p class='preans'>Answer: "
      + ANST+"</p></div></div>";
    
    }
    
    else{
    
      document.getElementById("displayqst").innerHTML= "<center><h4 style='text-align:center;font-size:20px;padding-top:140px;'>Please complete all fields</h4></center>";
      return false;
    }
    }
  
  
  function previewqset() {
  $('#previewqset').empty();
    var exid=$("#chexamidedu").val();
  var ekey=JSON.stringify($("#chkey").val());
  var url1 = "https://script.google.com/macros/s/";
  var url2 = "AKfycbx0ZZCXac0UZbHPbsR196JqKWadbYadinnrR4Mb86YVX_1KTJO3Zq7Ax3ocgL7dKYix0A";
  document.getElementById('loaderCon').style.display = "block";
  var urlcp = url1+url2+"/exec"+ "?callback=prevqset&chexid="+exid+"&chkey="+ekey+"&action=chexid";
   var request = jQuery.ajax({
    crossDomain: true,
    url: urlcp,
    method: "GET",
    dataType: "jsonp"
  });}


function prevqset(e){
  var reslt = e.records;
  if(reslt != "ID not found!"){
    document.getElementById('loaderCon').style.display = "none";
    document.getElementById("eduexname").innerHTML = reslt[0].EducatorName;
    document.getElementById("eduextitle").innerHTML =reslt[0].ExamTitle;
    document.getElementById("eduexdescp").innerHTML =reslt[0].ExamDescp;
    document.getElementById("eduextimedur").innerHTML =reslt[0].TDuration;
var qststr = reslt[0].QuesSTFinal;
var qststrlen =qststr.length;
if(reslt[0].SubValue !="Active"){
$("#notifypay").fadeIn();
}else{$("#notifypay").hide();}
if(qststr != ""){
var qstoreused = (qststrlen/46000)*100;
document.getElementById("qststorage").innerHTML = qstoreused.toFixed(2)+"%";
}
else{document.getElementById("qststorage").innerHTML = "0%";}
if(qststrlen>46000){
document.getElementById("qststorage").innerHTML = "100%";
document.getElementById("addQ").disabled = true;
}
var enststr = reslt[0].EnrolledStuFinal;
var enstlimit = enststr.length;
var enstustr = JSON.parse(JSON.stringify(reslt[0].EnrolledStuFinal));
var enstusingle = enstustr.split(',');
var enstustrlen =enstusingle.length;
if(enststr != ""){
var numofstu = (enstustrlen-1)/3;
document.getElementById("enrolledstuall").innerHTML = numofstu;
}
else{document.getElementById("enrolledstuall").innerHTML = "0";}
var stuansstr = JSON.parse(JSON.stringify(reslt[0].StuAnsFinal));
var stuansstrlen =stuansstr.length;
if(stuansstr != "" && stuansstrlen<46000 ){
var troomsize = (stuansstrlen/46000)*100;
document.getElementById("troomsize").innerHTML = troomsize.toFixed(2)+"%";
}
else{document.getElementById("troomsize").innerHTML = "0%";}
if(stuansstrlen>46000){
document.getElementById("crtnewexid").value = "Create Another Exam ID";
document.getElementById("crtnewexid").disabled = false;
$("#crtnewexid").removeClass("btn-outline-primary");
$("#crtnewexid").addClass("btn-outline-warning");
document.getElementById("troomsize").innerHTML ="100%";
}
else{
document.getElementById("crtnewexid").value = "Test Room Size Health: GOOD!";
document.getElementById("crtnewexid").disabled = true;
}
    var qstate = JSON.parse(JSON.stringify(reslt[0].QuesSTFinal));
    var qstateimg = JSON.parse(JSON.stringify(reslt[0].QSTimgFinal));
    var qstateops = JSON.parse(JSON.stringify(reslt[0].OPfinal));
    var qstateopimg = JSON.parse(JSON.stringify(reslt[0].OPimgfinal));
    var qstateanst = JSON.parse(JSON.stringify(reslt[0].AnsSTfinal));
    var qstate2 = qstate.split('{qfin}"');
    var qstateimg2 = qstateimg.split('{qfin}"');
    var qstateops2 = qstateops.split('{qfin}"');
    var qstateopimg2 = qstateopimg.split('{qfin}"');
    var qstateanst2 = qstateanst.split('{qfin}"');
    var qstateanstprev = qstateanst.split('{qfin}",');
    var len = qstate2.length;
    var oplen = qstateops2.length;
    var opq= 4;
if(qstate ==""){
document.getElementById('loaderCon').style.display = "none";
document.getElementById('previewqset').innerHTML = '<div align="center" style="color:#d9d8db;margin-top:120px;">'+
'<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">'+
'<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>'+
'</svg></div>';
document.getElementById('qsetanst').innerHTML = "";
}
else{
$('#qsetanst').empty();
for(var ast=0;ast<qstateanstprev.length-1;ast++){
  document.getElementById('qsetanst').innerHTML += "Question No."+(ast+1)+": <b>"+qstateanstprev[ast].substring(1)+"</b> | ";
}
    for(var i = 0; i<len-2;i++){
      if(i == 0){
      var qs =qstate2[i].substring(1);
      var qsimg =qstateimg2[i].substring(1);
      var qsopsimg =qstateopimg2[i].substring(1);
      var qsanst =qstateanst2[i].substring(1);
if(qsopsimg =="null"){
var i1 = i+1;
       document.getElementById("previewqset").innerHTML = "<div style='font-size:16px;padding-top:20px;padding:10px;'>"+
       "<p style='font-size:14px;font-weight:bold;padding-bottom:20px;'>Question No."+i1+"</p><p>"+qs +"</p><div id='showqstimg' align='center'><img style='pointer-events:none;padding-bottom:10px;' "+
       "src='"+qsimg+"' onerror='this.onerror=null;this.src= `images/fakefu.png`;'></div>"+
       "<div><p>A. "+qstateops2[i].substring(1)+"</p></div>"+
       "<div><p>B. "+qstateops2[i+1].substring(2)+"</p></div>"+
       "<div><p>C. "+qstateops2[i+2].substring(2)+"</p></div>"+
       "<div><p>D. "+qstateops2[i+3].substring(2)+"</p></div>"+
       "<br><div id='showqstimg'><img style='pointer-events:none;' "+
       "src='"+qsopsimg+"' onerror='this.onerror=null;this.src= `images/fakefu.png`;'></div>"+
       "<hr></div>";
}
else{
var i1 = i+1;
document.getElementById("previewqset").innerHTML = "<div style='font-size:16px;padding-top:20px;padding:10px;'>"+
"<p style='font-size:14px;font-weight:bold;padding-bottom:20px;'>Question No."+i1+"</p><p>"+qs +"</p><div id='showqstimg' align='center'><img style='pointer-events:none;padding-bottom:10px;' "+
"src='"+qsimg+"' onerror='this.onerror=null;this.src= `images/fakefu.png`;'></div>"+
"<br><div id='showqstimg'><img style='pointer-events:none;' "+
"src='"+qsopsimg+"' onerror='this.onerror=null;this.src= `images/fakefu.png`;'></div>"+
"<hr></div>";
}
      }
       else{
        var iq = i +1;
        var qs = qstate2[i].substring(2);       
        var qsimg =qstateimg2[i].substring(2);
        var qsopsimg =qstateopimg2[i].substring(2);
        var qsanst =qstateanst2[i].substring(2);
        if(qsopsimg =="null"){
        document.getElementById("previewqset").innerHTML += "<div style='font-size:16px;padding-top:20px;padding:10px;'>"+
        "<p style='font-size:14px;font-weight:bold;padding-bottom:20px;'>Question No."+iq+"</p><p>"+qs +"</p><div id='showqstimg' align='center'><img style='pointer-events:none;padding-bottom:10px;' "+
        "src='"+qsimg+"' onerror='this.onerror=null;this.src= `images/fakefu.png`;'></div>"+
        "<div><p>A. "+qstateops2[opq].substring(2)+"</p></div>"+
        "<div><p>B. "+qstateops2[opq+1].substring(2)+"</p></div>"+
        "<div><p>C. "+qstateops2[opq+2].substring(2)+"</p></div>"+
        "<div><p>D. "+qstateops2[opq+3].substring(2)+"</p></div>"+
        "<br><div id='showqstimg'><img style='pointer-events:none;' "+
        "src='"+qsopsimg+"' onerror='this.onerror=null;this.src= `images/fakefu.png`;'></div>"+
        "<hr></div>";
         opq= opq +4;
        }
      else{
        document.getElementById("previewqset").innerHTML += "<div style='font-size:16px;padding-top:20px;padding:10px;'>"+
        "<p style='font-size:14px;font-weight:bold;padding-bottom:20px;'>Question No."+iq+"</p><p>"+qs +"</p><div id='showqstimg' align='center'><img style='pointer-events:none;padding-bottom:10px;' "+
        "src='"+qsimg+"' onerror='this.onerror=null;this.src= `images/fakefu.png`;'></div>"+
        "<br><div id='showqstimg'><img style='pointer-events:none;' "+
        "src='"+qsopsimg+"' onerror='this.onerror=null;this.src= `images/fakefu.png`;'></div>"+
        "<hr></div>";
         opq= opq +4;
      } }}
  }

  }
  else{
    document.getElementById('loaderCon').style.display = "none";
    document.getElementById('previewqset').innerHTML = '<div align="center" style="color:#d9d8db;margin-top:120px;">'+
    '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">'+
    '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>'+
    '</svg></div>';
  }

}

   function clrqsetcomplete(){
    document.getElementById('loader-clrq').style.display = "block";
    var exid=$("#chexamidedu").val();
    var ekey=JSON.stringify($("#chkey").val());
    var url1 = "https://script.google.com/macros/s/";
    var url2 = "AKfycbw65_6YtN5R7hahQB03D2J4pCbczCvcvLILqlxY-EISIfFbjDApoIqGcoTvCVkx-GPbXw";
    var url = url1+url2+"/exec"+ "?callback=ctrlqset&chexid=" +exid+"&chkey="+ekey+"&action=clrqdata";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });   }
   function ctrlqset(e) {
    previewqset();
    $("#clrqsetnotify").hide();
    $("#falsesecback-two").hide();
    document.getElementById('loader-clrq').style.display = "none";
   }
  
   $("#crtnewexid").click(function() {
    createnewexid();
  });
  
  function createnewexid(){
    document.getElementById("crtnewexid").disabled = true;
    var exid=$("#chexamidedu").val();
    var ekey=JSON.stringify($("#chkey").val());
    var url1 = "https://script.google.com/macros/s/";
    var url2 = "AKfycbx0ZZCXac0UZbHPbsR196JqKWadbYadinnrR4Mb86YVX_1KTJO3Zq7Ax3ocgL7dKYix0A";
    var urlcr = url1+url2+"/exec"+ "?callback=crnwexid&chexid="+exid+"&chkey="+ekey+"&action=chexid";
   var request = jQuery.ajax({
    crossDomain: true,
    url: urlcr,
    method: "GET",
    dataType: "jsonp"
  });}

function crnwexid(e){
  var reslt = e.records;
  var d = new Date();
  var day = d.getDate();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var currentTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
  document.getElementById('dateQ').value = currentTime;
  var timecrtex = $('#dateQ').val();
  var exid=$("#chexamidedu").val();
  var url1 = "https://script.google.com/macros/s/";
  var url3 = "AKfycbxO8NaomCMfuxi-gDCXZDPKZ-BdwNG241GHeqkxLGXWOgCj_CQE3GySZp9Nz_ffqrYFFQ";
  if(reslt != "ID not found!"){
    var k ="ep/"+Math.random().toString(26).substring(2, 7) + Math.random().toString(26).substring(2, 7);
    document.getElementById('examid').value = k;
    var newid = $('#examid').val();
    var name = reslt[0].EducatorName;
    var title = reslt[0].ExamTitle;
    var descp = reslt[0].ExamDescp;
    var youkey = JSON.parse(reslt[0].PKey);
    var examp = JSON.parse(reslt[0].ExamPass);
    var ttmstr = reslt[0].TDuration;
    document.getElementById('createid').style.zIndex = "4000";
    document.getElementById('exportalpromo').style.zIndex = "4000";
    $("#createid").show();
    $("#cridone").hide();
    $("#crtestthree").hide();
    $("#cridtwo").show();
    $("#crtestfour").show();
    $('#exportalpromo').show();
    document.getElementById("examidFin").innerHTML="Exam ID: "+"<span style='background-color:#0c29cd;padding:4px 6px;font-style:italic;'>"+newid+"</span>";
    document.getElementById("edunameFin").innerHTML="Name: " + "<span style='padding:4px 6px;font-style:italic;'>"+name+"</span>";
    document.getElementById("examtitleFin").innerHTML="Title: "+"<span style='padding:4px 6px;font-style:italic;'>"+title+"</span>";
    document.getElementById("examdescpFin").innerHTML="Description: "+"<span style='padding:4px 6px;font-style:italic;'>"+descp+"</span>";
    document.getElementById("mykeyFin").innerHTML="Your Key: "+"<span style='padding:4px 6px;font-style:italic;'>"+youkey+"</span>";
    document.getElementById("exampassFin").innerHTML="Exam Pass For Students: "+"<span style='padding:4px 6px;font-style:italic;'>"+examp+"</span>";
    document.getElementById("tsdur").innerHTML = "Test Duration: "+"<span style='padding:4px 6px;font-style:italic;'>"+ttmstr+"</span>";  
    document.getElementById("studentpassdoc").innerHTML ="<div style=padding:20px;>"+"Exam ID: "+"<span style='color:blue;font-style:italic;'>"+newid +"</span>"+
    "<span style='float:right;margin-left:10px;'>Test Duration: "+ttmstr+"</span>"+
    "<hr>"+"Name: " +"<span style='font-size:20px;'>"+ name+
    "</span><hr>"+"Title: "+"<span style='font-weight:bold;'>"+title+"</span><hr>"+
    "Description: "+"<span style='font-weight:bold;'>"+descp+"</span><hr>"+
    "Exam Pass For Students: "+"<span style='color:blue;'>"+examp+"</span>"+"<hr>"+
    "<span style='float:left;'>M A S T R O W A L L | <a href='https://exam-portal.mastrowall.com/' style='text-decoration:none;'>Exam Portal</a></span>"+
    "<span style='float:right;'>"+"<span style='font-size:16px;color:#0c29cd;padding:4px 6px;'>"+title+" </span> "+
    "By "+" "+"<span style='font-size:18px;color:#0c29cd;padding:4px 6px;'>"+name+" </span>"+
    "|||||||||||||||||||||||||||</span>"+"</div><hr><hr>";
    var url = url1+ url3+"/exec"+"?callback=ctrlcrtexid&chexid=" +exid+ "&examid="+newid+"&dateQ="+timecrtex+"&action=crtexid";
        var request = jQuery.ajax({
          crossDomain: true,
          url: url,
          method: "GET",
          dataType: "jsonp"
        });
  document.getElementById("crtnewexid").value = "New Exam ID: "+ newid;
  $("#crtnewexid").removeClass("btn-outline-warning");
  $("#crtnewexid").addClass("btn-outline-primary");
  }
}

  function ctrlcrtexid(e){}
   function downloadqset() {
    var elem1 = document.getElementById("previews");
    var elem2 = document.getElementById("eduinfofordqset");
    var elem3 = document.getElementById("qsetanst");
    var oPrntWin = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
        oPrntWin.document.open();
        oPrntWin.document.write("<!doctype html><html><head><title>M A S T R O W A L L - Exam Portal<\/title><link rel=\"stylesheet\" href=\"css/vendor/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"style.css\"><\/head><body onload=\"print();\" style=\"margin:40px;\"><center><div style=\"text-align:right;font-size:18px;font-weight:400;background-color:#d6d6d6;padding:10px;max-width:1000px;\">" + elem2.innerHTML + "<\/div><hr style=\"max-width:1000px;\"><div align=\"center\" style=\"max-width:1000px;\"><div>" + elem1.innerHTML + "<\/div><div align=\"left\" style=\"max-width:1000px;background-color:#d6d6d6;padding:10px;\">Answer Key:<br>"+elem3.innerHTML+"<\/div><hr style=\"max-width:1000px;\"><h4><a href=\"https://mastrowall.com\" style=\"text-decoration:none;color:#d6d6d6;\">M A S T R O W A L L<\/a><\/h4><\/div><\/center><\/body><\/html>");
        oPrntWin.document.close();
   }