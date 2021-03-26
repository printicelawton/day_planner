$("#currentDay").text(moment().format("LLL"));
    function timeFrame() {
        var currentHours = moment().hours();
    };

     //Color coding schedule dependant upon hour
     function colorchng(){
        $("input").each(function(){
            var rowHour = $(this).attr("id");
            var rowNumber = parseInt(rowHour);
            if (rowNumber === hour){
                $(this).addClass("present");
            } else if (rowNumber < hour){
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            };
        });
    };

    //Display inputs after browser refresh
    function renderStoredInputs(){
        $(".form-control").each(function(){
            var inputId = $(this).attr("id");
            $(this).val(localStorage.getItem(inputId));
        });
    };

    //Click event to save user input in local storage
    $(".saveBtn").click(function(){
        var scheduleInputs = $(this).siblings(".form-control").val();
        var inputsLocation = $(this).siblings(".form-control").attr("id");
        localStorage.setItem(inputsLocation,scheduleInputs);
    });
    
    setInterval(getDate,1000);
    colorchng();
    setInterval(colorchng,1000);
    renderStoredInputs();

});