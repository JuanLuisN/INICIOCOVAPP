(function($){
    $(function(){

        $(document).ready(function(){
            $('.collapsible').collapsible();
        });

        $(document).ready(function(){
            $('.modal').modal();
        });

        $(document).ready(function(){
            $('#modal1').modal();
            $('#modal1').modal('open'); 
        });
          $(document).ready(function(){
            $('.tooltipped').tooltip();
          });
        

    });
})(jQuery);
