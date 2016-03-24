var noTasksLeft;
$(document).ready(function () {
  var allTasks = [];
  var todoTasks = [];
  var i;
  i = 0;
  
  $('#tasks-div').empty();
  $("#tasks-div").hide();
  $("#organiser-div").hide();
   $('#todo-div').find('input[type="checkbox"]').prop('disabled', 'true');

 $('#dummy-cross span').css({"visibility":"hidden"});
 
  $("#task-input").keypress(function (event) {

    if (event.which == 13 && $('#task-input').val().length > 1) {

      var newTask;
      newTask = $('#task-input').val();

      allTasks[i] = newTask;
      todoTasks[i] = newTask;


      addRow(newTask);
      
      i++;
      updateTasksLeft();
      $('#task-input').val(" ");
      $("#tasks-div").show();
      $("#organiser-div").show();
    }
  });
// mark all tasks as completed

$("#todo-div").click(function (e) {
  
   e.stopPropagation(); 
   $('#tasks-div').find('input[type="checkbox"]').prop('checked', true);
   $('#tasks-div').find('input[type="checkbox"]').parent().parent().attr('data-status',"completed");
   updateTasksLeft();
   
  });


//Check if the checkbox is clicked
  $("#tasks-div").click(function (e) {
    
     e.stopPropagation(); 
     $(e.target).parent().parent().attr("data-status","completed");
     updateTasksLeft();
  
  });

  // Clear completed tasks
  $("#btn-clear").click(function () {
      
    // $("input:checked").parent().parent().hide();
    $("#tasks-div input:checked").parent().parent().empty();
    $("#tasks-div input:checked").parent().parent().remove();
    $('#todo-div').find('input[type="checkbox"]').prop('checked', false);
    if(noTasksLeft==0){
       $("#tasks-div").hide();
       $("#organiser-div").hide();
       $('#todo-div').find('input[type="checkbox"]').prop('disabled', 'true');
    }
  });
     
  // Show Completed tasks 
     
  $("#btn-completed").click(function () {
   $('#tasks-div>div[data-status="completed"]').show();
   $('#tasks-div>div[data-status="todo"]').hide();
    
    }); 
     
  // Show all tasks  
     
  $("#btn-all").click(function () {

     $('#tasks-div>div[data-status="todo"]').show();
     $('#tasks-div>div[data-status="completed"]').show();
  }); 
    
     
  // Show active tasks 
      
  $("#btn-active").click(function () {
   
    $('#tasks-div>div[data-status="todo"]').show();
     $('#tasks-div>div[data-status="completed"]').hide();

  });





});

function addRow(task) {
  var rowPrefix, rowSuffix;
  rowPrefix = '<div  data-status="todo"><div class="todo-checkbox"><input class="dyn-checkbox"  type="checkbox"></div><div class="todo-text">';
  rowSuffix = '</div><div class="todo-cross"><button class="btn-cross"><span class="glyphicon glyphicon-remove"></span></button></div></div>';

  $("#tasks-div").append(rowPrefix + task + rowSuffix);
  $('#todo-div').find('input[type="checkbox"]').removeAttr("disabled");
  
}

function updateTasksLeft(){

    noTasksLeft=$('#tasks-div>div[data-status="todo"]').length;
   $("#lbl-items-left").text(noTasksLeft+"  items left");
}
     