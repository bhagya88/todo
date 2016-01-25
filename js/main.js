$(document).ready(function () {
  var allTasks = [];
  var todoTasks = [];
  var i;
  i = 0;
  $('#tasks-div').empty();
  $("#tasks-div").hide();
  $("#organiser-div").hide();

  $("#task-input").keypress(function (event) {

    if (event.which == 13 && $('#task-input').val().length > 1) {

      var newTask;
      newTask = $('#task-input').val();

      allTasks[i] = newTask;
      todoTasks[i] = newTask;


      addRow(newTask);
      i++;

      $('#task-input').val(" ");
      $("#tasks-div").show();
      $("#organiser-div").show();
    }
  });

  $("#btn-clear").click(function () {
       alert("clear");
     $("input:checked").parent().parent().empty(); 
    /*if( $(".todo-checkbox").is(':checked') ){
      alert("clear");
      deleteRows();*/
    
  });

});

function addRow(task) {
  var rowPrefix, rowSuffix;
  rowPrefix = '<div id="tasks-div" class="todo-note"><div class="todo-checkbox"><input type="checkbox"></div><div class="todo-text">';
  rowSuffix = '</div><div class="todo-cross"><button class="btn-cross"><span class="glyphicon glyphicon-remove"></span></button></div></div>';
  $("#tasks-div").append(rowPrefix + task + rowSuffix);
}

function deleteRows() {
$(".todo-checkbox:checked").parent().remove();
}