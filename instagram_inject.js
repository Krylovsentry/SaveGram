/*
 * Created by ankr0416 on 13.05.2016.
 */
(function () {
    function createLink(img,count) {

        var url = img.getAttribute('src');
        var id = img.getAttribute('id');
        var link = document.createElement('a');
        //create link
        link.className = 'download_link';
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
        //Take all images from document
        var images = document.images;

        for(var j = 0 ; j < images.length; j ++) {
            var id = images[j].getAttribute('id');
            var image = images[j]
            if (id) {
                if (checkOldImg(image)) {
                    image.parentNode.parentNode.parentNode.parentNode.appendChild(createLink(image, j));
                }
            }
        }
    }
    setInterval(createNewImg,10000);
})();