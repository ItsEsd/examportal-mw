 /* M A S T R O W A L L */
    $(".closeotserv").click(function() {
    $('.otservice').slideUp('fast');
    $('#falsesecback').hide();
    $('.otserviceinfo').hide('fast');
    });
    $("#exmpcreatid").click(function() {
    $('#contactdesk').hide();
    $('#exportalpromo').show();
    $('#prereq').hide();$('#createid').show('fast');
    });
    $("#exmpprereq").click(function() {
    $('#contactdesk').hide();
    $('#exportalpromo').show();
    $('#prereq').show('fast');$('#createid').hide();
    });
    $("#exampconmasd").click(function() {
    $('#contactdesk').show('fast');
    $('#exportalpromo').show();
    $('#prereq').hide();$('#createid').hide();
    });
    $('.closeot').on('click', function() {
    $('.otserviceinfo').hide("fast");
    $('#exportalpromo').fadeOut("fast");
    $('#exportalpromo').fadeOut("fast");
    });
    $("#navicon").click(function() {
        $('.otservice').slideDown('fast');
        $('#falsesecback').show();});
    $(document).ready(function(){
        var exptimg =["../images/examportal/exmpt-1.jpg",
        "../images/examportal/exmpt-2.jpg",
        "../images/examportal/exmpt-3.jpg",
        "../images/examportal/exmpt-4.jpg",
        "../images/examportal/exmpt-5.jpg",
        "../images/examportal/exmpt-6.jpg",
        "../images/examportal/exmpt-7.jpg",
        "../images/examportal/exmpt-8.jpg",
        "../images/examportal/exmpt-9.jpg",
        "../images/examportal/exmpt-10.jpg"];
        var exmplen =exptimg.length;
        for(var k=0;k<=exmplen-1;k++){
          document.getElementById('exportalpromo').innerHTML +="<img class='exmpproimg' src='"+exptimg[k]+"' onclick='enlargeempimg(this)'>";
        }});
    function enlargeempimg(label){
    var list=document.getElementsByClassName("exmpproimg");
    list = [].slice.call(list); 
    var posofimg = list.indexOf(label);
    var srcimg = document.getElementsByClassName("exmpproimg")[posofimg].src;
    $('#enlrgimg').show('fast');
    document.getElementById('emprimgenlrg').src= srcimg;
    }
    $("#enlrgimg").click(function() {
    $('#enlrgimg').hide();});
    cridone.addEventListener('submit', (event) => {
    $("#cridtwo").show();
    $("#cridone").hide();
    var hr = $('#timedurhr').val();
    var min = $('#timedurmin').val();
    var tmsec = ((hr*3600) + (min*60))*1000;
    var str = hr+" "+"Hour"+" "+min+" "+"Minutes";
    document.getElementById('totalsec').value= tmsec;
    document.getElementById('timestr').value= str; });
    cridtwo.addEventListener('submit', (event) => {
    var examid = $("#examid").val();
    var name = $("#eduname").val();
    var title = $("#extitle").val();
    var descp = $("#exdescp").val();
    var youkey = $("#confirmpasskey").val();
    var examp = $("#exampass").val();
    var ttmstr = $("#timestr").val();
      $("#crtestfour").show();
      $("#crtestthree").hide();
    document.getElementById("examidFin").innerHTML="Exam ID: "+"<span style='background-color:#0c29cd;padding:4px 6px;font-style:italic;'>"+examid+"</span>";
    document.getElementById("edunameFin").innerHTML="Name: " + "<span style='padding:4px 6px;font-style:italic;'>"+name+"</span>";
    document.getElementById("examtitleFin").innerHTML="Title: "+"<span style='padding:4px 6px;font-style:italic;'>"+title+"</span>";
    document.getElementById("examdescpFin").innerHTML="Description: "+"<span style='padding:4px 6px;font-style:italic;'>"+descp+"</span>";
    document.getElementById("mykeyFin").innerHTML="Your Key: "+"<span style='padding:4px 6px;font-style:italic;'>"+youkey+"</span>";
    document.getElementById("exampassFin").innerHTML="Exam Pass For Students: "+"<span style='padding:4px 6px;font-style:italic;'>"+examp+"</span>";
    document.getElementById("tsdur").innerHTML = "Test Duration: "+"<span style='padding:4px 6px;font-style:italic;'>"+ttmstr+"</span>";  
    document.getElementById("studentpassdoc").innerHTML ="<div style=padding:20px;>"+"Exam ID: "+"<span style='color:blue;font-style:italic;'>"+examid +"</span>"+
    "<span style='float:right;margin-left:10px;'>Test Duration: "+ttmstr+"</span>"+
    "<hr>"+"Name: " +"<span style='font-size:20px;'>"+ name+
    "</span><hr>"+"Title: "+"<span style='font-weight:bold;'>"+title+"</span><hr>"+
    "Description: "+"<span style='font-weight:bold;'>"+descp+"</span><hr>"+
    "Exam Pass For Students: "+"<span style='color:blue;'>"+examp+"</span>"+"<hr>"+
    "<span style='float:left;'>M A S T R O W A L L | <a href='https://exam-portal.mastrowall.com/' style='text-decoration:none;'>Exam Portal</a></span>"+
    "<span style='float:right;'>"+"<span style='font-size:16px;color:#0c29cd;padding:4px 6px;'>"+title+" </span> "+
    "By "+" "+"<span style='font-size:18px;color:#0c29cd;padding:4px 6px;'>"+name+" </span>"+
    "|||||||||||||||||||||||||||</span>"+"</div><hr><hr>";
    sendEdmail();});
    function sendEdmail() {
    var elemed = document.getElementById("studentpassdoc").innerHTML;
    var mailat = $('#edueid').val(); var passk = $('#confirmpasskey').val();
      Email.send({
        SecureToken : "dce269d4-508e-4b89-bc50-2201fb9f60a8",
        To: mailat,
        From: "MASTROWALL<examportal@mastrowall.com>",
          Subject: "Exam Portal - MASTROWALL",
          Body:  elemed+"<p style='text-align:right;margin:10px;font-size:14px;'>Your Key/Password: "+passk+"</p><br><span style='float:left;font-size:14px;'>N.B. Do not reply to this email</span>",
      })
          .then(function (message) {
            if(message =="OK"){
              document.getElementById('mailsented').style.display= 'block';
              document.getElementById('mailsented').innerHTML= 'Credentials sent to your email.';
              setTimeout(function() {
                jQuery('#mailsented').fadeOut('fast');
              }, 10000);
            }
          else{
              document.getElementById('mailsented').style.display= 'none';
            }
          });
      }
    cridtwo.addEventListener('submit', (event) => {
    var name =$('#eduname').val();
    var title =$('#extitle').val();
    var descp =$('#exdescp').val();
    var emid =$('#edueid').val();
    var tmilisec = $("#totalsec").val();
    var tmstr = $("#timestr").val();
    var epass =escape(JSON.stringify($('#confirmpasskey').val()));
    var spass =escape(JSON.stringify($('#exampass').val()));
    var examid =$('#examid').val();
    var time =$('#dateQ').val();
    var url1="https://script.google.com/macros/s/";
    var url2 ="AKfycbx0ZZCXac0UZbHPbsR196JqKWadbYadinnrR4Mb86YVX_1KTJO3Zq7Ax3ocgL7dKYix0A";
    var url3 =url1+url2+"/exec";
    if (name != 0 && title != 0 && descp != 0 && emid != 0 && epass != 0 && examid != 0 && time != 0 && spass != 0 ) {
      var url = url3 + "?callback=ctrlq&examid=" + examid + "&eduname=" + name + "&extitle=" + title + "&exdescp=" + descp + "&edueid=" + emid + 
      "&confirmpasskey=" + epass +  "&exampass=" + spass + "&dateQ=" + time +
      "&totalsec=" + tmilisec + "&timestr=" + tmstr +"&action=gentestin";
      var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
      });}
      else {return false;}});
    function dateUp() {
    var d = new Date();
    var day = d.getDate();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
    document.getElementById('dateQ').value = currentTime;
    }
    $("#svprtstpass").click(function() {
    infoexampdf();});
    function infoexampdf() {
    var elem = document.getElementById("studentpassdoc");
    var oPrntWin = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
        oPrntWin.document.open();
        oPrntWin.document.write("<!doctype html><html><head><title>M A S T R O W A L L - Exam Portal<\/title><link rel=\"stylesheet\" href=\"css/vendor/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"style.css\"><\/head><body onload=\"print();\">" + elem.innerHTML + "<\/body><\/html>");
        oPrntWin.document.close();}

    //  mquearytest.addEventListener('submit', (event) => {
    //   $("#qmsgsent").show();
    //   $("#mquearytest").hide();});


    jQuery('#confirmpasskey').on('keyup', function() {
    if (jQuery('#createpasskey').val() == jQuery('#confirmpasskey').val()) {
      jQuery('#matched').html('Matching').css('font-size', '12px');
      document.getElementById('psconfirmed').disabled = false;
    } else {
      jQuery('#matched').html('Not Matching').css('font-size', '12px');
      document.getElementById('psconfirmed').disabled = true;
    }
    var k ="ep/"+Math.random().toString(26).substring(2, 7) + Math.random().toString(26).substring(2, 7);
    document.getElementById('examid').value = k;
    });