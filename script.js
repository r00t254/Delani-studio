<form id="form34A" action="https://gmail.us3.list-manage.com/subscribe/post" method="POST">
<input type="hidden" name="u" value="e71bed4d6ae5a7c984dfe28b0">
<input type="hidden" name="id" value="dbf7e27685"> -->
<form id="form34A">
<input type="hidden" name="id" value="dbf7e27685">
<div class="form-group form-inline">
  <input type="text" class="form-control" placeholder = "Name...." name="MERGE1" id="MERGE1" size="25" value="">
  <input type="email" class="form-control"  placeholder = "Email...." autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="">
  $(document).ready(function(){
  $("form#form34A").submit(function(event){
    event.preventDefault();
    // event.preventDefault();
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();