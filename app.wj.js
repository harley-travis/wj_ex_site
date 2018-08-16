var WJ = {
    Init: function() {
    },
    Widget: { 
        GetJobs: function() {
			var company_id = 1;
            $.ajax({
                url: 'http://localhost:3000/api/jobs/'+company_id,
                dataType: "json",
                crossDomain: true,
                success: function(data) {

                    $('#wj').html('<table id="wj-table" class="table table-hover"><tr><th scope="col">Position</th><th scope="col">Department</th><th scope="col">Location</th><th scope="col"></th></tr>');
                        
                    for(var i = 0; i < data.length; i++) {
                        var job = data[i];
                        var html = "<tr><td>"+job.title+"</td><td>"+job.department+"</td><td>"+job.location+"</td><td><a href='#' class='btn btn-success btn-sm'>View Job</a></td></tr>"
                        $("#wj-table").find('tbody').append(html);
                    }
                },
                error: function() {
                    console.log('nope');
                }
            });
        }
    }
}

$(document).ready(function(){
    WJ.Widget.GetJobs();
});
