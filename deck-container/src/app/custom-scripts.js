define(["dojo/topic"], function(topic) {
    /*
    * Custom Javascript to be executed while the application is initializing goes here
    */
    var getParameterByName = function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    // The application is ready
    topic.subscribe("tpl-ready", function(){
        /*
        * Custom Javascript to be executed when the application is ready goes here
        */

        if(getParameterByName("hideTitle") != null){
            document.getElementById('headerDesktop').style.display='none';
        }
        var activeSection = getParameterByName("activeSection");
        if(activeSection != null){
            activeSection = parseInt(activeSection);
            app.ui.mainStage.updateMainMediaWithStoryMainMedia(activeSection,false)
            app.ui.navBar.showEntryIndex(activeSection)
            app.data.setCurrentSectionIndex(activeSection)
        }

    });
});
