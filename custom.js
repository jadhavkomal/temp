jQuery(document).ready(function(){
  
 
    $("#menu-icon").click(function(){
        $(".header-menu").slideToggle("slow"); 
        
   
        
        
    });
    /*----------------------for FAQ--------------------------*/
    
    $(".faq").click(function(){  
              if($(".faq-body").is(':visible')){  /* check the condition accordion-body is visible or not */
                  $(".faq-body").slideUp(600);  /*if content is visible then close accordion-body with specific time duration */
                $(".plusminus").text('+')    /* add plus sign */
            }
            else{
                $(this).next(".faq-body").slideDown(600); /*if content not visible then 
                                                                                                            show the accordion-body */
                $(this).children(".plusminus").text('-');  /* add minus sign */
            }
        });
        
        
        
        
 });
    

    