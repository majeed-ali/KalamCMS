$("#upper").click(function() {
    var text =  $("#txt-convert-case").val();
    var result = text.toUpperCase();
    $("#txt-convert-case").val(result);
});
$("#lower").click(function() {
    var text =  $("#txt-convert-case").val();
    var result = text.toLowerCase();
    $("#txt-convert-case").val(result);
});

$("#titlecase").click(function() {
    var text =  $("#txt-convert-case").val();
    var result = text.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
    $("#txt-convert-case").val(result);
});

$("#reset-txt-convert-case").click(function() {
    $('#txt-convert-case').val('');
});

/********************** */

$('#word-count').keyup(function() {
    var len = $(this).val().length;
    var txt = $(this).val().match(/\S+/g).length;
    var lin = $(this).val().split(/\r*\n/).length;
    var ch = len;
    var wc = txt;
    var lc = lin;
    $('#cc_data').html('Total Characters: <mark>[<span class="number">' + ch + '</span>]</mark>, Total Words: <mark>[<span class="number">' + wc + '</span>]</mark> and Line Count: <mark>[<span class="number">' + lc + '</span>]</mark>');
    $(".number").formatNumber();
});

$("#reset-word-count").click(function() {
    $('#word-count').val('');
});
/********************** */

function insert(num) {
    document.frm.cal_id.value = document.frm.cal_id.value + num;
    document.frm.cal_id.focus();
}
function equal() {
    var exp = document.frm.cal_id.value;
    if (exp) {
        document.frm.cal_id.value = eval(exp);
    }
    document.frm.cal_id.focus();
    return false;
}
function clean() {
    document.frm.cal_id.value = "";
    document.frm.cal_id.focus();
}
function back() {
    var exp = document.frm.cal_id.value;
    document.frm.cal_id.value = exp.substring(0, exp.length - 1);
    document.frm.cal_id.focus();
}
function displayKeyCode(evt) {var textBox = getObject('input_txt'); var charCode = (evt.which) ? evt.which : event.keyCode; textBox.value = String.fromCharCode(charCode);
if (charCode==8) textBox.value="Backspace";if (charCode==9) textBox.value="Tab";if (charCode==13) textBox.value="Enter";if (charCode==16) textBox.value="Shift";if (charCode==17) textBox.value="Ctrl";if (charCode==18) textBox.value="Alt";if (charCode==19) textBox.value="pause/break";if (charCode==20) textBox.value="CapsLock";if (charCode==27) textBox.value="Esc";if (charCode==32) textBox.value="Space Bar";if (charCode==33) textBox.value="Page Up";if (charCode==34) textBox.value="Page Down";if (charCode==35) textBox.value="End";if (charCode==36) textBox.value="Home";if (charCode==37) textBox.value="Left Arrow";if (charCode==38) textBox.value="Up Arrow";if (charCode==39) textBox.value="Right Arrow";if (charCode==40) textBox.value="Down Arrow";if (charCode==45) textBox.value="Insert";if (charCode==46) textBox.value="Delete";if (charCode==91) textBox.value="Left Window";if (charCode==92) textBox.value="Right Window";if (charCode==93) textBox.value="Select Key";if (charCode==96) textBox.value="numpad 0";if (charCode==97) textBox.value="numpad 1";if (charCode==98) textBox.value="numpad 2";if (charCode==99) textBox.value="numpad 3";if (charCode==100) textBox.value="numpad 4";if (charCode==101) textBox.value="numpad 5";if (charCode==102) textBox.value="numpad 6";if (charCode==103) textBox.value="numpad 7";if (charCode==104) textBox.value="numpad 8";if (charCode==105) textBox.value="numpad 9";if (charCode==106) textBox.value="Multiply";if (charCode==107) textBox.value="Add";if (charCode==109) textBox.value="Subtract";if (charCode==110) textBox.value="Decimal Point";if (charCode==111) textBox.value="Divide";if (charCode==112) textBox.value="F1";if (charCode==113) textBox.value="F2";if (charCode==114) textBox.value="F3";if (charCode==115) textBox.value="F4";if (charCode==116) textBox.value="F5";if (charCode==117) textBox.value="F6";if (charCode==118) textBox.value="F7";if (charCode==119) textBox.value="F8";if (charCode==120) textBox.value="F9";if (charCode==121) textBox.value="F10";if (charCode==122) textBox.value="F11";if (charCode==123) textBox.value="F12";if (charCode==144) textBox.value="Num Lock";if (charCode==145) textBox.value="Scroll Lock";if (charCode==186) textBox.value=";";if (charCode==187) textBox.value="=";if (charCode==188) textBox.value=",";if (charCode==189) textBox.value="-";if (charCode==190) textBox.value=".";if (charCode==191) textBox.value="/";if (charCode==192) textBox.value="`";if (charCode==219) textBox.value="[";if (charCode==220) textBox.value="\\";if (charCode==221) textBox.value="]";if (charCode==222) textBox.value="'";
var lblCharCode=getObject('char_code');lblCharCode.innerHTML='KeyCode: <b class="text-danger">&nbsp;' + charCode + '</b>';return false}function getObject(obj){var theObj;if (document.all){if (typeof obj=='string'){return document.all(obj)}else{return obj.style}}if (document.getElementById){if (typeof obj=='string'){return document.getElementById(obj)}else{return obj.style}}return null}
(function($) {
    $.fn.extend({
        formatNumber: function(options) {
            var defaults = {
                cents: '.',
                decimal: ','
            }
            var o = $.extend(defaults, options);
            return this.each(function() {
                var thiz = $(this),
                    values, x, x1, x2;
                values = $.trim(thiz.html());
                values += '';
                x = values.split(o.cents);
                x1 = x[0];
                x2 = x.length > 1 ? o.cents + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + o.decimal + '$2');
                }
                thiz.html(x1 + x2);
            });
        }
    });
})(jQuery);
function echeck(str) {
    var at = "@";
    var dot = ".";
    var lat = str.indexOf(at);
    var lstr = str.length;
    var ldot = str.indexOf(dot);
    if (str.indexOf(at) == -1) {
        return false;
    }
    if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr - 1) {
        return false;
    }
    if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr - 1) {
        return false;
    }
    if (str.indexOf(at, (lat + 1)) != -1) {
        return false;
    }
    if (str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
        return false;
    }
    if (str.indexOf(dot, (lat + 2)) == -1) {
        return false;
    }
    if (str.indexOf(" ") != -1) {
        return false;
    }
    return true;
}
$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    $("#uploadcsv").focus();
});
$(document).ready(function() {
    $("#subscribe").click(function() {
		$("#nlMsg").html('<div class="alert alert-light text-center"><div class="spinner-border text-primary"></div><br>Loading...</div>');
        var email = $("input#signup").val();
        var myurl = $("input#signurl").val();
        if (email == "") {
            $("#nlMsg").html('<div class="alert alert-danger fade show"><i class="fas fa-exclamation-triangle mr-1"></i> Please Enter Your eMail Id...</div>');
            $("input#signup").addClass("border-danger");
            $("input#signup").focus();
            return false;
        }
        if (echeck(document.nlfrm.signup.value) == false) {
            $("#nlMsg").html('<div class="alert alert-danger fade show"><i class="fas fa-exclamation-triangle mr-1"></i> Please enter your valid eMail Id...</div>');
            $("input#signup").addClass("border-danger");
            $("input#signup").focus();
            return false;
        }
        $.ajax({
            type: "post",
            url: "/html/subscribe.php",
            data: {
                signurl: myurl,
                signup: email
            },
            cache: false,
            success: function() {
	            $("input#signup").removeClass("border-danger");
                $("#nlMsg").html('');
				$("#nlfrm").html('<div class="alert alert-success fade show"><h4><i class="fas fa-check-circle"></i> Thank you!!!</h4>Thank you for subscribing, you will be receiving our latest posts right in your inbox.</div>');
            }
        });
        return false;
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#top-btn').fadeIn('slow');
            $('#top-btn').removeClass('d-none');
        } else {
            $('#top-btn').fadeOut('slow');
        }
    });
    $('#top-btn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

	$("#fai").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#myTable tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
    $("#txt2binary").click(function() {
        var txt = $("#uInput").val();
        var del = '';
        var len = txt.length;
        if (len == 0) return;
        var bin = '';
        for (i = 0; i < len; i++) {
            var a = txt.charCodeAt(i);
            var b = a.toString(2);
            if (b.length < 8) b = '0' + b;
            if (b.length < 8) b = '0' + b;
            if (b.length < 8) b = '0' + b;
            bin += b;
            if (i < len - 1) bin += del;
        }
        $("#uOutput").val(bin);
        $("#uOutput").select();
    });
    $("#binary2txt").click(function() {
        var bin = $("#uInput").val();
        bin = bin.match(/[0-1]{8}/g);
        len = bin.length;
        if (len == 0) return;
        var txt = '';
        for (i = 0; i < len; i++) {
            b = bin[i];
            code = parseInt(b, 2);
            t = String.fromCharCode(code);
            txt += t;
        }
        $("#uOutput").val(txt);
        $("#uOutput").select();
    });
    $('#vheight').keyup(function() {
        $("#rheight").val($('#vheight').val());
        $("#uheight").val(($('#vheight').val() / 30).toFixed(2));
    });
    $('#uheight').keyup(function() {
        $("#rheight").val(($('#uheight').val() * 30).toFixed(0));
        $("#vheight").val(($('#uheight').val() * 30).toFixed(0));
    });
    $('#vweight').keyup(function() {
        $("#rweight").val($('#vweight').val());
        $('#uweight').val(($('#rweight').val() / 0.45359237).toFixed(2));
    });
    $('#uweight').keyup(function() {
        $('#vweight').val(($('#uweight').val() * 0.45359237).toFixed(0));
        $("#rweight").val($('#vweight').val());
    });
    $('#rheight').change(function() {
        $('#vheight').val($('#rheight').val());
        $('#uheight').val(($('#rheight').val() / 30).toFixed(2));
    });
    $('#rweight').change(function() {
        $('#vweight').val($('#rweight').val());
        $('#uweight').val(($('#rweight').val() / 0.45359237).toFixed(2));
    });
    $('#bt-bmi').click(function() {
        var w = $("#rweight").val();
        var h = ($('#rheight').val() / 100) * ($('#rheight').val() / 100);
        var calbmi = (w / h).toFixed(1);
        $('#c-bmi').val(calbmi);
        if (calbmi < 18.5) {
            $('#bmi, #c-bmi').attr('class', '');
            $("#bmi").val('Under Weight');
            $('#bmi, #c-bmi').addClass("form-control text-center bg-info text-light");
        } else
        if (calbmi > 18.6 && calbmi < 24.9) {
            $('#bmi, #c-bmi').attr('class', '');
            $("#bmi").val('Normal');
            $('#bmi, #c-bmi').addClass("form-control text-center bg-success text-light");
        } else
        if (calbmi > 25 && calbmi < 29.9) {
            $('#bmi, #c-bmi').attr('class', '');
            $("#bmi").val('Over Weight');
            $('#bmi, #c-bmi').addClass("form-control text-center bg-warning text-dark");
        } else
        if (calbmi > 30 && calbmi < 34.9) {
            $('#bmi, #c-bmi').attr('class', '');
            $("#bmi").val('Obese');
            $('#bmi, #c-bmi').addClass("form-control text-center bg-danger text-light");
        } else
        if (calbmi > 35) {
            $('#bmi, #c-bmi').attr('class', '');
            $("#bmi").val('Extremely Obese');
            $('#bmi, #c-bmi').addClass("form-control text-center bg-danger text-light");
        }
        return false;
    });
    /******************** */

    $("#celsius").keyup(function() {
        var inputdata = $("#celsius").val();
        var calculat = ((9 / 5) * inputdata + 32);
        $("#farenheit").val(calculat);
    });
    $("#farenheit").keyup(function() {
        var inputdata = $("#farenheit").val();
        var calculat = ((5 / 9) * (inputdata - 32));
        $("#celsius").val(calculat);
    });
    var counter = 4;
    $("#addbtn").click(function() {
        if (counter > 50) {
            alert("Only 50 textboxes allowed");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div')).attr({
            id: 'TextBoxDiv' + counter,
            class: 'row mb-3'
        });
        newTextBoxDiv.after().html('<label class="col-lg-2 control-label">Find #' + counter + '</label>' + '<div class="col-lg-4"><input type="text" class="border rounded input-sm pl-1" placeholder="Find #' + counter + '" id="findbox' + counter + '"></div>' + '<label class="col-lg-2 control-label">Replace #' + counter + '</label>' + '<div class="col-lg-4"><input type="text" class="border rounded input-sm pl-1" placeholder="Replace #' + counter + '" id="replacebox' + counter + '"></div>');
        newTextBoxDiv.appendTo("#TextBoxesGroup");
        counter++;
    });
    $("#repbtn").click(function() {
        if (counter == 4) {
            alert("No more textbox to can be removed");
            return false;
        }
        counter--;
        $("#TextBoxDiv" + counter).remove();
    });
    RegExp.escape = function(str) {
        return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    };
    $("#fnrbtn").click(function() {
        var InputBox = $("#uInput").val();
        msg = '';
        for (i = 1; i < counter; i++) {
            FindWhat = $('#findbox' + i).val();
            ReplaceWhat = $('#replacebox' + i).val();
            InputBox = InputBox.replace(new RegExp(RegExp.escape(FindWhat), "gi"), ReplaceWhat);
        }
		var regf = $("#regf").val();
		var regr = $("#regr").val();
		if ($('input[name=rgx]:checked').val() == "fnwr")
		{
			InputBox = InputBox.replace(/\r\n|\n|\r/g, ' ');
		}
		if ($('input[name=rgx]:checked').val() == "frwn")
		{
			InputBox = InputBox.replace(/(\r\n|\r|\n)\s+/g, "R0rfSZb");
			InputBox = InputBox.replace(/R0rfSZb/g, "\n");
		}
		if ($('input[name=rgx]:checked').val() == "ftwn")
		{
			var re = new RegExp(regf,"g");
			InputBox = InputBox.replace(re, regr);
		}
		$("#uOutput").val(InputBox);
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#uOutput').select());
        document.execCommand("copy");
        $temp.remove();
    });
    $('#unicode').click(function() {
        var tstr = $("#uInput").val();
        var bstr = '';
        for (i = 0; i < tstr.length; i++) {
            if (tstr.charCodeAt(i) > 127) {
                bstr += '&#' + tstr.charCodeAt(i) + ';';
            } else {
                bstr += tstr.charAt(i);
            }
        }
        $("#uInput").val(bstr);
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#uInput').select());
        document.execCommand("copy");
        $temp.remove();
    });
	$("#driver").click(function(event) {
		$("#umd").addClass("d-none");
		$("#result").removeClass("d-none");
		$("#result").html('<p class="text-center"><span class="spinner-border text-primary" role="status" aria-hidden="true"></span><br>Loading...</p>');
		var myString = $("#page_vidid").val();
		var stringArray = myString.split('v=');
		var vidid = stringArray[1];
		var YouResult = '';
		$.getJSON('https://www.googleapis.com/youtube/v3/videos?id=' + vidid + '&key=AIzaSyBoBPDY0FDMMj01-USffDKQSJ_4KSjpNK8&part=snippet,contentDetails,statistics,status', function(jd) {
			YouResult = '<h2 class="text-success">Report Generated</h2><hr>'+
			'<div class="row">'+
    '	<div class="form-group col-md-6"><img class="img-fluid lazyload" src="' + jd.items[0].snippet.thumbnails.standard.url + '" alt="Thumbnail"></div>'+
    '	<div class="col-md-6">'+
    '		<ul class="list-group small">'+
    '			<li class="list-group-item"><i class="text-primary fas fa-eye mr-1"></i> <span class="number">' + jd.items[0].statistics.viewCount + '</span> Views</li>'+
    '			<li class="list-group-item"><i class="text-success fas fa-thumbs-up mr-1"></i> <span class="number">' + jd.items[0].statistics.likeCount + '</span> Likes</li>'+
    '			<li class="list-group-item"><i class="text-danger fas fa-thumbs-down mr-1"></i> <span class="number">' + jd.items[0].statistics.dislikeCount + '</span> Dislikes</li>'+
    '			<li class="list-group-item"><i class="text-info fas fa-comment mr-1"></i> <span class="number">' + jd.items[0].statistics.commentCount + '</span> Comments</li>'+
    '		</ul>'+
    '	</div>'+
    '</div><hr>'+
    '<dl class="row">'+
    '	<dt class="col-md-3">Youtube URL</dt>'+
    '	<dd class="col-md-9"><a href="https://www.youtube.com/watch?v=' + jd.items[0].id + '" target="_blank">https://www.youtube.com/watch?v=' + jd.items[0].id + '</a></dd>'+
    '	<dt class="col-md-3">Video Title</dt>'+
    '	<dd class="col-md-9">' + jd.items[0].snippet.title + '</dd>'+
    '	<dt class="col-md-3">Video Description</dt>'+
    '	<dd class="col-md-9"><textarea class="form-control" rows="5">' + jd.items[0].snippet.description + '</textarea></dd>'+
    '	<dt class="col-md-3">Tag(s)</dt>'+
    '	<dd class="col-md-9"><textarea class="form-control" rows="3">' + jd.items[0].snippet.tags + '</textarea></dd>'+
    '	<dt class="col-md-3">Video ID</dt>'+
    '	<dd class="col-md-9">' + jd.items[0].id + '</dd>'+
    '	<dt class="col-md-3">Channel Name</dt>'+
    '	<dd class="col-md-9">' + jd.items[0].snippet.channelTitle + '</dd>'+
    '	<dt class="col-md-3">Channel ID</dt>'+
    '	<dd class="col-md-9">' + jd.items[0].snippet.channelId + '</dd>'+
    '	<dt class="col-md-3">Published Date</dt>'+
    '	<dd class="col-md-9">' + jd.items[0].snippet.publishedAt + '</dd>'+
    '	<dt class="col-md-3">Duration</dt>'+
    '	<dd class="col-md-9">' + jd.items[0].contentDetails.duration + '</dd>'+
    '</dl>';
//			$('#result').html("<pre>" + JSON.stringify(jd, undefined, 2) + "</pre>");
			$('#result').html(YouResult);
			$('.number').formatNumber();
		});
		return false;
	});
    $("#wrptxt").click(function() {
        var lbn = $("#lnbrk").val();
        var text = $("#uInput").val(),
            text = text.replace(/(\r\n|\n|\r)/g, " "),
            tempArray = text.split("\n"),
            outputArray = [];
        for (var i = 0, len = tempArray.length; i < len; i++) {
            var line = tempArray[i].split(" "),
                num = 0;
            for (var j = 0, jLen = line.length; j < jLen; j++) {
                if (num + line[j].length + 1 >= lbn) {
                    outputArray[outputArray.length];
                }
                num += line[j].length + 1;
                if (num >= lbn) {
                    num = 0;
                    outputArray[outputArray.length] = "\n";
                } else {
                    outputArray[outputArray.length] = " ";
                }
                outputArray[outputArray.length] = line[j];
            }
            outputArray[outputArray.length] = "\n";
        }
        $("#uInput").val(outputArray.join(""));
        $("#uInput").val($("#uInput").val().replace(' ', ''));
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#uInput').select());
        document.execCommand("copy");
        $temp.remove();
        return false;
    });
	$('#viewsource').click(function() {
		var lines = $('#uInput').val().split(/\n/);
		for (var i = 0; i < lines.length; i++) {
			if (/\S/.test(lines[i])) {
				window.open('/tools/support/print-code.html?v=' + lines[i]);
			}
		}
		return false;
	});
    $('#encode').click(function() {
        var htmlcode = $("#uInput").val();
        var res = encodeURIComponent(htmlcode);
        $("#uInput").val(res);
        var $temp = $("<input>");
        $("body").append($temp);
        $("#uInput").val($("#uInput").val().replace(/%0A/g, '\n'));
        $temp.val($('#uInput').select());
        document.execCommand("copy");
        $temp.remove();
    });
    $('#decode').click(function() {
        var htmlcode = $("#uInput").val();
        var res = decodeURIComponent(htmlcode);
        $("#uInput").val(res);
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#uInput').select());
        document.execCommand("copy");
        $temp.remove();
    });
    $("#cms").keyup(function() {
        var inputdata = $("#cms").val();
        var cal_ins = (inputdata / 2.54);
        var cal_fts = (inputdata / 30.48);
        var cal_kms = (inputdata / 100000);
        var cal_mis = (inputdata / 160934);
        $("#ins").val(cal_ins.toFixed(2));
        $("#fts").val(cal_fts.toFixed(2));
        $("#kms").val(cal_kms.toFixed(2));
        $("#mis").val(cal_mis.toFixed(2));
    });
    $("#ins").keyup(function() {
        var inputdata = $("#ins").val();
        var cal_cms = (inputdata * 2.54);
        var cal_fts = (inputdata / 12);
        var cal_kms = (inputdata / 39370.1);
        var cal_mis = (inputdata / 63360);
        $("#cms").val(cal_cms.toFixed(2));
        $("#fts").val(cal_fts.toFixed(2));
        $("#kms").val(cal_kms.toFixed(2));
        $("#mis").val(cal_mis.toFixed(2));
    });
    $("#fts").keyup(function() {
        var inputdata = $("#fts").val();
        var cal_cms = (inputdata * 30.48);
        var cal_ins = (inputdata * 12);
        var cal_kms = (inputdata / 3280.84);
        var cal_mis = (inputdata / 5280);
        $("#cms").val(cal_cms.toFixed(2));
        $("#ins").val(cal_ins.toFixed(2));
        $("#kms").val(cal_kms.toFixed(2));
        $("#mis").val(cal_mis.toFixed(2));
    });
    $("#kms").keyup(function() {
        var inputdata = $("#kms").val();
        var cal_cms = (inputdata * 100000);
        var cal_fts = (inputdata * 3280.84);
        var cal_ins = (39370.1 / inputdata);
        var cal_mis = (inputdata * 0.621371);
        $("#cms").val(cal_cms.toFixed(2));
        $("#ins").val(cal_ins.toFixed(2));
        $("#fts").val(cal_fts.toFixed(2));
        $("#mis").val(cal_mis.toFixed(2));
    });
    $("#mis").keyup(function() {
        var inputdata = $("#mis").val();
        var cal_cms = (inputdata * 160934);
        var cal_ins = (inputdata * 63360);
        var cal_fts = (inputdata * 5280);
        var cal_kms = (inputdata * 1.60934);
        $("#cms").val(cal_cms.toFixed(2));
        $("#ins").val(cal_ins.toFixed(2));
        $("#fts").val(cal_fts.toFixed(2));
        $("#kms").val(cal_kms.toFixed(2));
    });
    var len = $('#uInput').text().length;
    var lin = $('#uInput').text().split(/\r*\n/).length;
    var ch = len;
    var lc = lin;
    $('#mini_count').html('[' + ch + ']');
    $('#line_count').html('[' + lc + ']');
    $('.number').formatNumber();
    $("#mini").click(function() {
        var text = $("#uInput").val(),
            text = text.replace(/\r\n|\n|\r/g, ''),
            text = text.replace(/  /g, ' '),
            text = text.replace(/; /g, ';'),
            text = text.replace(/: /g, ':'),
            text = text.replace(/{ /g, '{'),
            text = text.replace(/ {/g, '{'),
            text = text.replace(/} /g, '}'),
            text = text.replace(/ }/g, '}'),
            text = text.replace(/;}/g, '}'),
            text = text.replace(/= /g, '='),
            text = text.replace(/ =/g, '='),
            text = text.replace(/	/g, '');
        $("#uInput").val(text);
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#uInput').select());
        document.execCommand("copy");
        $temp.remove();
        var len = $('#uInput').val().length;
        var lin = $('#uInput').val().split(/\r*\n/).length;
        var ch = len;
        var lc = lin;
        $('#mini_count').html('[' + ch + ']');
        $('#line_count').html('[' + lc + ']');
        $('.number').formatNumber();
    });
    $('#uInput').keyup(function() {
        var len = $('#uInput').val().length;
        var lin = $('#uInput').val().split(/\r*\n/).length;
        var ch = len;
        var lc = lin;
        $('#mini_count').html('[' + ch + ']');
        $('#line_count').html('[' + lc + ']');
        $('.number').formatNumber();
    });
    $('#mulwind').click(function() {
        var lines = $('#uInput').val().split(/\n/);
        var texts = [];
        for (var i = 0; i < lines.length; i++) {
            if (/\S/.test(lines[i])) {
                window.open($("#starturl").val() + lines[i] + $("#endurl").val());
            }
        }
        var txtval = $("#uInput").val(),
            ua = navigator.userAgent,
            tool_name = "Multiple URLs Opener";
        $.ajax({
            type: "get",
            url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
            data: {
                tool_name: tool_name,
                textbox: txtval,
                browser: ua
            },
            dataType: "json",
            cache: false,
            success: function() {}
        });
        return false;
    });
    $("#per_cal").click(function() {
        var inputcv = $("#cv").val();
        var inputev = $("#ev").val();
        var pc_diff = (inputev - inputcv);
        var pc_per = (inputcv / inputev * 100);
        var pc_val = (pc_diff / inputcv * 100);
        var ch = pc_diff;
        var wc = pc_per.toFixed(2);
        var lc = pc_val.toFixed(2);
        $('#pc_data').html('The difference is <code><span class="number">' + ch + '</span></code>, percentage change is <code><span class="b">' + lc + '%</span></code> and percentage of <code><span class="number">' + wc + '%</span></code>.');
        $(".number").formatNumber();
        return false;
    });
    $("#addrule").click(function() {
        var unam = $("#useragent").val();
        var ueml = $("#botaction").val();
        var umsg = $("#boturl").val();
        if ((unam != "") && (ueml != "") && (umsg != "")) 
        {
            $("#uInput").val($("#uInput").val() + 'User-agent: ' + unam + '\n' + ueml + umsg + '\n\n');
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($('#uInput').select());
            document.execCommand("copy");
            $temp.remove();
            return false;
        }
        else
        {
            alert('Please fill all mandatory fields.');
        }
        return true;
    });
    $('#addxml').click(function() {
        var myxml = $("#xmlsitemap").val();
        if (myxml == "") {
            alert('Please provide XML Sitemap path.');
            $("#xmlsitemap").focus();
            return false;
        }
        $("#uInput").val($("#uInput").val() + 'Sitemap: ' + $("#xmlsitemap").val() + '\n\n');
        $('#uInput').select();
        return false;
    });
    $('#downtxt').click(function() {
        var text = $("#uInput").val();
        if (text == "") {
            alert('Please create the file first.');
        } else {
            text = text.replace(/\n/g, "\r\n");
            var blob = new Blob([text], {
                type: "text/plain;charset=utf-8"
            });
            saveAs(blob, "robots.txt");
        }
    });
    $("#addfeed").click(function() {
        $("#pre_feed").val($("#pre_feed").val() + '		<item>' + '\n' + '			<title>' + $("#feed_title").val() + '</title>' + '\n' + '			<link>' + $("#feed_url").val() + '</link>' + '\n' + '			<pubDate>' + $("#feed_day").val() + ', ' + $("#feed_date").val() + ' ' + $("#feed_month").val() + ' ' + $("#feed_year").val() + ' 12:00:00 GMT</pubDate>' + '\n' + '			<author>' + $("#feed_author").val() + '</author>' + '\n' + '			<category>' + $("#feed_cat").val() + '</category>' + '\n' + '			<description><![CDATA[ ' + '\n' + '			<h1>' + $("#feed_title").val() + '</h1>' + '\n' + '			' + $("#feed_description").val() + '\n' + '			]]></description>' + '\n' + '		</item>' + '\n');
        alert('Current Feed Added:' + '\n\n' + 'Title: ' + $("#feed_title").val() + '\n' + 'URL: ' + $("#feed_url").val() + '\n' + 'Description: ' + $("#feed_description").val() + '\n\n' + 'You can add more...');
        $("#feed_title, #feed_url, #feed_description, #feed_author, #feed_cat, #feed_day, #feed_date, #feed_month, #feed_year").val('');
        $("#feed_title").focus();
    });
    $("#genfeed").click(function() {
        $("#head_feed").val('<\?xml version="1.0" encoding="UTF-8"\?>' + '\n' + '<rss version="2.0">' + '\n' + '	<channel>' + '\n' + '		<title>' + $("#rss_title").val() + '</title>' + '\n' + '		<link>' + $("#rss_website").val() + '</link>' + '\n' + '		<description>' + $("#rss_description").val() + '</description>' + '\n' + '		<language>en-us</language>' + '\n' + '		<copyright><![CDATA[ ' + $("#rss_copyright").val() + ' ]]></copyright>' + '\n' + '		<image>' + '\n' + '			<url>' + $("#rss_logo").val() + '</url>' + '\n' + '			<title>' + $("#rss_title").val() + '</title>' + '\n' + '			<link>' + $("#rss_website").val() + '</link>' + '\n' + '		</image>' + '\n');
        $("#uInput").val($("#head_feed").val() + $("#pre_feed").val() + '	</channel>' + '\n' + '</rss>');
        $('#uInput').select();
        var txtval = $("#rss_website").val(),
            ua = navigator.userAgent,
            tool_name = "Generated RSS Feed";
        $.ajax({
            type: "get",
            url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
            data: {
                tool_name: tool_name,
                textbox: txtval,
                browser: ua
            },
            dataType: "json",
            cache: false,
            success: function() {}
        });
    });
    $("#rss_reset").click(function() {
        $("#pre_feed").val('');
    });
    $('#downrss').click(function() {
        var text = $("#uInput").val();
        if (text == "") {
            alert('Please create the file first.');
        } else {
            text = text.replace(/\n/g, "\r\n");
            var blob = new Blob([text], {
                type: "text/xml;charset=utf-8"
            });
            saveAs(blob, "rss.xml");
        }
    });
	$("#pingxml").click(function() {
		$('#postping').html('<p class="text-center"><span class="spinner-border text-primary" role="status" aria-hidden="true"></span><br>Loading...</p>');
		var url_id = $("#url_id").val();
		$.ajax({
			type: "post",
			url: "/tools/support/ping-print.html",
			data: {
				url_id: url_id
			},
			cache: false,
			success: function(data) {
				$('#postping').html(data);
			}
		});
		return false;
	});
    $("#search").submit(function() {
        var q = $("#q").val();
        var u = $("#signurl").val();
        $.ajax({
            type: "post",
            url: "/search/search.html",
            data: {
                q: q,
                u: u
            },
            cache: false,
            success: function() {
            }
        });
        return true;
    });
    $("#body_search").submit(function() {
        var q = $("#bq").val();
        var u = $("#signurl").val();
        $.ajax({
            type: "post",
            url: "/search/search.html",
            data: {
                q: q,
                u: u
            },
            cache: false,
            success: function() {
            }
        });
        return true;
    });
	$('#utmurl, #utmcampaign, #utmsource, #utmmedium, #utmterm, #utmcontent').keyup(function() {
		var gaurl = '',
			ga = '',
			gacampaign = '',
			gasource = '',
			gamedium = '',
			gaterm = '',
			gacontent = '';
			gaurl = $("#utmurl").val();
		if ($("#utmurl").val().indexOf("?") != -1) {
			ga = '&';
		} else {
			ga = '?';
		}
		if ($("#utmcampaign").val() == "") {
			gacampaign = '';
		} else {
			gacampaign = 'utm_campaign=' + $("#utmcampaign").val();
		}
		if ($("#utmsource").val() == "") {
			gasource = '';
		} else {
			gasource = '&utm_source=' + $("#utmsource").val();
		}
		if ($("#utmmedium").val() == "") {
			gamedium = '';
		} else {
			gamedium = '&utm_medium=' + $("#utmmedium").val();
		}
		if ($("#utmterm").val() == "") {
			gaterm = '';
		} else {
			gaterm = '&utm_term=' + $("#utmterm").val();
		}
		if ($("#utmcontent").val() == "") {
			gacontent = '';
		} else {
			gacontent = '&utm_content=' + $("#utmcontent").val();
		}
		$("#uInput").val(gaurl + ga + gacampaign + gasource + gamedium + gaterm + gacontent);
		return false;
	});
	$('#json_person, #json_product, #json_website').hide();
	$('#website_name, #website_alt_name, #website_url').keyup(function() {
		var website_name = $("#website_name").val(),
			website_alt_name = $("#website_alt_name").val(),
			website_url = $("#website_url").val();
		$("#gen_schema_code").val('<script type="application/ld+json">' +
			'\n {' +
			'\n  "@context": "https:\/\/www.schema.org",' +
			'\n  "@type": "WebSite",' +
			'\n  "name": "' + website_name + '",' +
			'\n  "alternateName": "' + website_alt_name + '",' +
			'\n  "url": "' + website_url + '"' +
			'\n }' +
			'\n<\/script>');
	});
	$('#product_brand, #product_name, #product_url, #product_description, #product_rating, #product_reviews').keyup(function() {
		var product_brand = $("#product_brand").val(),
			product_name = $("#product_name").val(),
			product_url = $("#product_url").val(),
			product_description = $("#product_description").val(),
			product_rating = $("#product_rating").val(),
			product_reviews = $("#product_reviews").val();
		$("#gen_schema_code").val('<script type="application/ld+json">' +
			'\n {' +
			'\n   "@context": "https://www.schema.org",' +
			'\n   "@type": "product",' +
			'\n   "brand": "' + product_brand + '",' +
			'\n   "name": "' + product_name + '",' +
			'\n   "image": "' + product_url + '",' +
			'\n   "description": "' + product_description + '",' +
			'\n   "aggregateRating": {' +
			'\n     "@type": "aggregateRating",' +
			'\n     "ratingValue": "' + product_rating + '",' +
			'\n     "reviewCount": "' + product_reviews + '"' +
			'\n   }' +
			'\n }' +
			'\n<\/script>');
	});
	$('#person_name, #person_job, #person_phone, #person_email, #person_url, #person_address, #person_city, #person_state, #person_zip, #person_country, #person_dob').keyup(function() {
		var person_name = $("#person_name").val(),
			person_job = $("#person_job").val(),
			person_phone = $("#person_phone").val(),
			person_email = $("#person_email").val(),
			person_url = $("#person_url").val(),
			person_address = $("#person_address").val(),
			person_city = $("#person_city").val(),
			person_state = $("#person_state").val(),
			person_zip = $("#person_zip").val(),
			person_country = $("#person_country").val(),
			person_dob = $("#person_dob").val();
		$("#gen_schema_code").val('<script type="application/ld+json"> ' +
			'\n{' +
			'\n  "@context": "https:\/\/www.schema.org", ' +
			'\n  "@type": "person", ' +
			'\n  "name": "' + person_name + '", ' +
			'\n  "jobTitle": "' + person_job + '", ' +
			'\n  "telephone": "' + person_phone + '", ' +
			'\n  "email": "' + person_email + '", ' +
			'\n  "url": "' + person_url + '", ' +
			'\n  "address": { ' +
			'\n    "@type": "PostalAddress", ' +
			'\n    "streetAddress": "' + person_address + '", ' +
			'\n    "addressLocality": "' + person_city + '", ' +
			'\n    "addressRegion": "' + person_state + '", ' +
			'\n    "postalCode": "' + person_zip + '", ' +
			'\n    "addressCountry": "' + person_country + '" ' +
			'\n  }, ' +
			'\n  "birthDate": "' + person_dob + '" ' +
			'\n}' +
			'\n<\/script>');
	});
	$("#schema_type").change(function() {
		if ($(this).val() == "person") {
			$("#json_product, #json_website").hide();
			$("#json_person").fadeIn();
			return false;
		}
		if ($(this).val() == "product") {
			$("#json_person, #json_website").hide();
			$("#json_product").fadeIn();
			return false;
		}
		if ($(this).val() == "website") {
			$("#json_person, #json_product").hide();
			$("#json_website").fadeIn();
			return false;
		}
	});
	$('#copyjson').click(function() {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#gen_schema_code').select());
		document.execCommand("copy");
		$temp.remove();
	});
	$("#uploadcsv").click(function() {
		var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
		if (regex.test($("#userfile").val().toLowerCase())) {
			if (typeof(FileReader) != "undefined") {
				var reader = new FileReader();
				reader.onload = function(e) {
					var rows = e.target.result.split("\n");

					$("#CSVInput").append(rows);
					$("#uploadcsv").addClass("disabled");
					$("#uploadcsv").text("File Uploaded");
					var IBox = $("#CSVInput").val();
					IBox = IBox.replace(/(\r\n|\r|\n)\s+/g, "R0rfSZb");
					IBox = IBox.replace(/R0rfSZb/g, "\n");
					IBox = IBox.replace(/\n$/g, "");
					$("#CSVInput").val(IBox);
					var string = $('#CSVInput').val();
					var array = string.split('\n');
					for ($i = 0; $i < array.length; $i++) {
						var dateAndText = array[$i].split(',');
						FindWhat = dateAndText[0];
						ReplaceWhat = dateAndText[1];
						var newrow = "<tr><td>" + FindWhat + "</td><td>" + ReplaceWhat + "</td></tr>";
						document.getElementById('mytable').innerHTML += newrow;
						$('#result').removeClass('d-none');
					}
				}
				reader.readAsText($("#userfile")[0].files[0]);
			} else {
				alert("This browser does not support HTML5.");
			}
		} else {
			alert("Please Upload a valid .CSV file.");
		}
	});
	$('#formMeta').submit(function() {
//        $("#result).html('<p class="text-center p-4"><span class="spinner-border text-primary" role="status" aria-hidden="true"></span><br>Loading...</p>');
		$('#result').removeClass('d-none');
		var lines = $('#uInput').val().split(/\n/);
		var texts = [];
		for (var i = 0; i < lines.length; i++) {
			if (/\S/.test(lines[i])) {
				var xhr = new XMLHttpRequest();
				var params = "?url_id="+lines[i];
				xhr.open('POST', 'support/get-meta.html' + params, true);
				xhr.onload = function(){
					if(this.status == 200){
						var data = JSON.parse(this.responseText);
						var newrow = '<tr><td>' + data.URL + '</td><td>' + data.Response + '</td><td>' + data.Title + '</td><td>' + data.Description + '</td><td>' + data.Canonical + '</td><td>' + data.AMP + '</td><td>' + data.Keywords + '</td><td>' + data.Robots + '</td></tr>';
						document.getElementById('mytable').innerHTML += newrow;
					}
				}
				xhr.send();		
			}
		}
		return false;
	});
    $('#formRedirect').submit(function() {
		$('#result').removeClass('d-none');
        var lines = $('#uInput').val().split(/\n/);
        var texts = [];
        for (var i = 0; i < lines.length; i++) {
            if (/\S/.test(lines[i])) {
				var xhr = new XMLHttpRequest();
				var params = "?url_id="+lines[i];
                xhr.open('POST', 'support/get-redirect.html' + params, true);
                xhr.onload = function(){
                    if(this.status == 200){
						var data = JSON.parse(this.responseText);
                        if(data.Response.indexOf('200') != -1){var newrow = "<tr class='table-success'><td>" + data.URL + "</td><td>" + data.Response + "</td><td>" + data.Location + "</td></tr>";}
                        if(data.Response.indexOf('3') != -1){var newrow = "<tr class='table-warning'><td>" + data.URL + "</td><td>" + data.Response + "</td><td>" + data.Location + "</td></tr>";}
                        if(data.Response.indexOf('4') != -1){var newrow = "<tr class='table-danger'><td>" + data.URL + "</td><td>" + data.Response + "</td><td>" + data.Location + "</td></tr>";}
                        if(data.Response.indexOf('5') != -1){var newrow = "<tr class='table-danger'><td>" + data.URL + "</td><td>" + data.Response + "</td><td>" + data.Location + "</td></tr>";}
						
						document.getElementById('mytable').innerHTML += newrow;
                    }
                }
                xhr.send();		
            }
        }
        return false;
    });
	$("#screenshot").click(function(event) {
		var url = $("#url_id").val();
		var api = 'AIzaSyDc3GoegdNG8JZvAWVyGCt2o5KdiZd_BN8';
		if (url == "") {
            $("#errorMsg").html('<div class="alert alert-danger fade show"><i class="fas fa-exclamation-triangle mr-1"></i> Please Enter Your URL...</div>');
            $("#url_id").addClass("border-danger");
            $("#url_id").focus();
            return false;
        }
		else
		{
            $("#url_id").removeClass("border-danger");
			$("#errorMsg").hide();
			$("#result_MB").html('<p class="text-center p-4"><span class="spinner-border text-primary" role="status" aria-hidden="true"></span><br>Loading...</p>');
			$("#result_DT").html('<p class="text-center p-4"><span class="spinner-border text-primary" role="status" aria-hidden="true"></span><br>Loading...</p>');
			$.getJSON('https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=' + url + '&strategy=DESKTOP&prettyPrint=true&key=' + api, function(dt) {
				DtResult = dt.lighthouseResult.audits['full-page-screenshot'].details.screenshot.data;
				$('#result_DT').html('<h3><i class="fas fa-desktop mr-2"></i> Desktop</h3><img src="' + DtResult + '" class="img-fluid border rounded shadow">');
			});
			$.getJSON('https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=' + url + '&strategy=MOBILE&prettyPrint=true&key=' + api, function(mb) {
				MbResult = mb.lighthouseResult.audits['full-page-screenshot'].details.screenshot.data;
				$('#result_MB').html('<h3><i class="fas fa-mobile-alt"></i> Mobile</h3><img src="' + MbResult + '" class="img-fluid border rounded shadow">');
			});
		}
		return false;
	});
	$("#csvsplit").click(function() {
		if ($('#CSVInput').val() == "") {
			alert('Please Upload Your .CSV file.');
		} else {
			var InputBox = $("#uInput").val();
			var string = $('#CSVInput').val();
			var array = string.split('\n');
			for ($i = 0; $i < array.length; $i++) {
				var dateAndText = array[$i].split(',');
				FindWhat = dateAndText[0];
				ReplaceWhat = dateAndText[1];
//				InputBox = InputBox.replace(new RegExp(RegExp.escape(FindWhat), "gi"), ReplaceWhat);
				var re = new RegExp(FindWhat,"gi");
				InputBox = InputBox.replace(re, ReplaceWhat);
			}
			$("#uInput").val(InputBox);
		}
	});
});
