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
      var hr = $('#timedurhr').val();
      var min = $('#timedurmin').val();
      var tmsec = ((hr*3600) + (min*60))*1000;
      if(tmsec!==0){
        $("#cridtwo").show();
        $("#cridone").hide();
        var str = hr+" "+"Hour"+" "+min+" "+"Minutes";
        document.getElementById('totalsec').value= tmsec;
        document.getElementById('timestr').value= str;
      }
     });
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
    document.getElementById("studentpassdoc").innerHTML ="<div style='padding:40px 40px;font-family:verdana;background-color: #f5f5f5;border:1px dashed black;'><div style='display:block;text-align: left;line-height:160%;'><p><span style='float:left;'><img src='https://mastrowall.com/images/logoRecBWsvg.svg' style='width:25px;'></span><span style='margin-left:5px;font-size:16px;color:#666666;'><b>M A S T R O W A L L | <a target='_blank' href='https://exam-portal.mastrowall.com/' style='text-decoration:none;color:#0c29cd;'>Exam Portal</a></b></a></span></p>"+
    "<p style='text-align: left;display:block;line-height:200%;width:100%;'>"+"<span style='font-size:16px;color:#0c29cd;'>"+title+" </span> "+
    "By "+" "+"<span style='font-size:18px;color:#0c29cd;line-height:160%;'>"+name+" </span>"+
    "</p></div><hr><div><p>"+"Name: " +"<span style='font-size:16px;line-height:160%;'><b>"+ name+
      "</b></span></p><hr><p>Exam ID: "+"<span style='color:#0c29cd;font-style:italic;line-height:160%;'>"+examid +"</span></p>"+
    "<p style='width:100%;text-align:right;margin-left:10px;display:block;margin:0px;'>Test Duration: "+"<span style='line-height:160%;color:#0c29cd;font-style:italic;'>"+ttmstr+"</span></p>"+
    "<hr><p>"+"Exam Title: "+"<span style='font-weight:bold;line-height:160%;'>"+title+"</span></p><hr><p>"+
    "Description: "+"<span style='font-weight:bold;line-height:160%;'>"+descp+"</span></p><hr><p>"+
    "Exam Pass For Students: "+"<span style='color:#0c29cd;line-height:160%;'>"+examp+"</span></p><hr><hr></div><p style='width:100%;text-align: center;font-size:14px;'>©️ M A S T R O W A L L</p></div>";
    sendEdmail();});
    function sendEdmail() {
    var elemed = document.getElementById("studentpassdoc").innerHTML;
    var mailat = $('#edueid').val(); var passk = $('#confirmpasskey').val();
    var embody = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta name="x-apple-disable-message-reformatting"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <title></title> <style type="text/css"> @media only screen and (min-width: 620px) { .u-row { width: 600px !important; } .u-row .u-col { vertical-align: top; } .u-row .u-col-100 { width: 600px !important; } } @media (max-width: 620px) { .u-row-container { max-width: 100% !important; padding-left: 0px !important; padding-right: 0px !important; } .u-row .u-col { min-width: 320px !important; max-width: 100% !important; display: block !important; } .u-row { width: 100% !important; } .u-col { width: 100% !important; } .u-col>div { margin: 0 auto; } } body { margin: 0; padding: 0; } table, tr, td { vertical-align: top; border-collapse: collapse; } p { margin: 0; } .ie-container table, .mso-container table { table-layout: fixed; } * { line-height: inherit; } a[x-apple-data-detectors='true'] { color: inherit !important; text-decoration: none !important; } table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 87% !important; } #u_content_heading_1 .v-container-padding-padding { padding: 40px 10px 0px !important; } #u_content_text_2 .v-container-padding-padding { padding: 5px 10px 10px !important; } #u_content_text_deprecated_1 .v-container-padding-padding { padding: 40px 10px 10px !important; } } </style> <link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet" type="text/css"> </head> <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ecf0f1;color: #000000"> <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ecf0f1;width:100%" cellpadding="0" cellspacing="0"> <tbody> <tr style="vertical-align: top"> <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"> <div class="u-row-container" style="padding: 0px;background-color: transparent"> <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"></div> </div> <div class="u-row-container" style="padding: 0px;background-color: transparent"> </div> <div class="u-row-container" style="padding: 0px;background-color: transparent"> <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"> <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;"> <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;"> <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"> <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"> <table id="u_content_text_deprecated_1" style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 20px 10px;font-family:'Raleway',sans-serif;" align="left"> <div style="font-size: 14px; line-height: 100%; text-align: left; word-wrap: break-word;"> <div style="background-color: #e0e0e0;">`+ elemed +`</div> </div> </td> </tr> </tbody> </table> <p style='text-align:right;margin:10px;font-size:14px;'>Your Key / Password: <em style="color:#0c29cd;"><b>`+passk+`</b></em></p> <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 0px;font-family:'Raleway',sans-serif;" align="left"> <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%"> <tbody> <tr style="vertical-align: top"> <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%"> <span>&nbsp;</span> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:'Raleway',sans-serif;" align="left"> <div style="font-size: 14px; line-height: 160%; text-align: center; word-wrap: break-word;"> <p style="font-size: 14px; line-height: 160%;">N.B: Do not reply to this email.</p> <p style="font-size: 14px; line-height: 160%;"><br>Contact: <a rel="noopener" href="mailto:mail@mastrowall.com" target="_blank">mail@mastrowall.com</a><br>Arambagh. Hooghly. WB. India.<br>PIN: 712601</p> <p style="font-size: 14px; line-height: 160%;"> </p> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> </td> </tr> </tbody> </table> </body></html>`;
      Email.send({
        SecureToken : "dce269d4-508e-4b89-bc50-2201fb9f60a8",
        To: mailat,
        From: "MASTROWALL<examportal@mastrowall.com>",
          Subject: "Exam Portal - MASTROWALL",
          // Body:  elemed+"<p style='text-align:right;margin:10px;font-size:14px;'>Your Key/Password: "+passk+"</p><br><span style='float:left;font-size:14px;'>N.B. Do not reply to this email</span>",
          Body:  embody,
      })
          .then(function (message) {
            if(message =="OK"){
              document.getElementById('mailsented').style.display= 'block';
              document.getElementById('mailsented').innerHTML= 'Credentials sent to your email. Check Junk folder also. Do not forget to save or take a print.';
              setTimeout(function() {
                jQuery('#mailsented').fadeOut('fast');
              }, 20000);
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
    var epass =encodeURIComponent(JSON.stringify($('#confirmpasskey').val()));
    var spass =encodeURIComponent(JSON.stringify($('#exampass').val()));
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

    document.getElementById('stdassign').addEventListener('click', function() {
      var button =document.getElementById('stdassign');
      var exmid = document.getElementById('chexamidedu').value;
      var exps = document.getElementById('eduexmpss').innerText;
      var aslnk = 'https://exam-portal.mastrowall.com' + "?e=" + encodeURIComponent(exmid) + "&p=" + encodeURIComponent(exps) + "&valid=true";
      var tempTextArea = document.createElement('textarea');
      tempTextArea.value = aslnk; console.log(aslnk);
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      try {
        document.execCommand('copy'); 
        button.innerText = "Copied!";
        setTimeout(function() {
          button.innerText = "Get link: Student Enroll";
        }, 10000); 
      } catch (err) {
        console.error('Unable to copy link to clipboard');
      }
      document.body.removeChild(tempTextArea); 
    });

var url_string = window.location.href;
var url = new URL(url_string);
var dig = url.searchParams.get("e");
var key = url.searchParams.get("p");
var rtv = url.searchParams.get("valid");
if (rtv == "true") {
  setTimeout(function(){
  document.getElementById('navicon').click();
  document.getElementById('assgntst').click();
  document.getElementById('exid').value = decodeURIComponent(dig); 
  document.getElementById('exid').disabled =true;
  document.getElementById('expass').value = key; 
  document.getElementById('expass').disabled =true;
},2000);
}
$('#dwnqstexend').click(function(){dwnldqsetaftrexend()});