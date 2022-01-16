$("#upper").click(function() {
    $('#txt-convert-case').removeClass('text-capitalize');
    $('#txt-convert-case').val($('#txt-convert-case').val().toUpperCase());
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#txt-convert-case').select());
    document.execCommand("copy");
    document.getElementById("txt-convert-case").innerHTML =$temp;
    $temp.remove();
});
$("#lower").click(function() {
    $('#txt-convert-case').removeClass('text-capitalize');
    $('#txt-convert-case').val($('#txt-convert-case').val().toLowerCase());
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#txt-convert-case').select());
    document.execCommand("copy");
    $temp.remove();
});
$("#titlecase").click(function() {
    $('#txt-convert-case').val($('#txt-convert-case').val().toLowerCase());
    $('#txt-convert-case').addClass('text-capitalize');
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#txt-convert-case').select());
    document.execCommand("copy");
    $temp.remove();
});
$('#txt-convert-case').keyup(function() {
    var len = $(this).val().length;
    var txt = $(this).val().match(/\S+/g).length;
    var lin = $(this).val().split(/\r*\n/).length;
    var ch = len;
    var wc = txt;
    var lc = lin;
    $('#cc_data').html('Total Characters: <mark>[<span class="number">' + ch + '</span>]</mark>, Total Words: <mark>[<span class="number">' + wc + '</span>]</mark> and Line Count: <mark>[<span class="number">' + lc + '</span>]</mark>');
    $(".number").formatNumber();
});