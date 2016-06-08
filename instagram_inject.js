/*
 * Created by ankr0416 on 13.05.2016.
 */
(function () {



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
        var id = images[1].getAttribute('id');
        var number = id.substr(7);

        if (id != "null") {
            for (var i = +number; i < 1000 + +number; i++) {

                if (document.getElementById('pImage_' + i) != null) {

                    var img = document.getElementById('pImage_' + i);
                    if (checkOldImg(img)) {

                        img.parentNode.parentNode.parentNode.parentNode.appendChild(createLink(img, i));

                    }
                }
            }


        }
    }

    setInterval(createNewImg,10000);





})();