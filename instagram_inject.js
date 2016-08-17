/*
 * Created by ankr0416 on 13.05.2016.
 */
chrome.browserAction.onClicked.addListener((function () {


   

    var articles = document.getElementsByTagName('a');





    for(var i = 0 ; i < 1000 ; i++){

        if(document.getElementById('pImage_' + i) != null) {

            var img = document.getElementById('pImage_' + i);
            img.parentNode.parentNode.parentNode.parentNode.appendChild(createLink(img,i));
        }

    }


    function createLink(img,count) {

        var url = img.getAttribute('src');
        var id = img.getAttribute('id');
        var link = document.createElement('a');
        //create link
        link.className = 'downloadLink';
        link.setAttribute('href', url);
        link.setAttribute('title', "Download");
        link.setAttribute('download', 'FILE_DOWNLOAD_' + count);
        link.setAttribute('id','link_' + id);
        link.textContent = "Download";

        return link;
    }

    
    function checkOldImg(img){

        var id = img.getAttribute('id');
        if (document.getElementById('link_' + id)){
           return false;
        } else return true;

    }

    function createNewImg() {

        var images = document.getElementsByTagName('img');


        for(var j = 0 ; j < images.length; j ++) {

            var id = images[j].getAttribute('id');
            if (id != null) {
                var number = id.substr(7);


                    if (document.getElementById('pImage_' + number) != null) {

                        var img = document.getElementById('pImage_' + number);
                        if (checkOldImg(img)) {

                            img.parentNode.parentNode.parentNode.parentNode.appendChild(createLink(img, i));

                        }
                    }



            }
        }
    }

    setInterval(createNewImg,10000);





})());