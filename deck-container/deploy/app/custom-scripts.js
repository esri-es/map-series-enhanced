define(["dojo/topic"], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe("tpl-ready", function(){
    /*
     * Custom Javascript to be executed when the application is ready goes here
     */

     if(window.location.href.indexOf("hideTitle") != -1){
         document.getElementById('headerDesktop').style.display='none';
     }
  });
});
