<!DOCTYPE html>
<html>
<style>
.button-clicked {
  background: red;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<body>

<p>Click on the w3schools logo to download the image:<p>

<a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" download>
 <button id="button">Download</button>
</a>

<p><b>Note:</b> The download attribute is not supported in Edge version 12, IE, Safari 10 (and earlier), or Opera version 12 (and earlier).</p>

<script>
  $("#button").click(function() {
    $("#button").addClass('button-clicked');
  });
</script>

</body>
</html>
