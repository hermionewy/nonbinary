$(document).ready(function() {
    function isTablet() {
        if (('ontouchstart' in window) || // FF, Chrome, Safari
            (navigator.maxTouchPoints > 0) ||  // >= IE 10
            (navigator.msMaxTouchPoints > 0)) {

            // tablet orientation portrait or landscape
            if (window.innerWidth < window.innerHeight) {
                // Bootstrap sizes for sm/md
                return (window.innerWidth > 767 && window.innerWidth < 993);
            } else {
                return (window.innerHeight > 767 && window.innerHeight < 993);
            }
        }
        return false;
    }

    if(isTablet()) {
        window.navigate('index_tab.html');
    }

    var videoOpen = document.getElementById('ratDressVideo');
    var videoRoom = document.getElementById('ratRoom');
    var videoBoth = document.getElementById('bothRat');
    var videoBeautiful = document.getElementById('ratBeautiful');
    var audioHope = document.getElementById('ratHope');
    var audioFuture = document.getElementById('ratFuture');

    $('#fullpage').fullpage({
        anchors: ['1stPage', '2ndPage', '3rdPage','4thPage','5thPage','6thPage','7thPage',
            '8thPage','9thPage','10thPage','11thPage','12thPage','13thPage','14thPage','15thPage'],
        // sectionsColor: ['#000', '#fff', '#fff'],
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        navigationTooltips: ['Start', 'Second page', 'Third page', 'Forth Page', 'Fifth Page', 'Sixth Page','Seventh Page',
            'Eighth Page','Ninth Page','10th Page','11th Page','12th Page','13th Page','14th Page','End'],
        afterLoad: function(anchorLink, index){
            if(index==1){
                videoOpen.play();
            }
            if(index==2){
                videoRoom.play();
            }
            if(index == 3){

                $('#audioPlay1').attr('src','./imgs/audioplay.png');
                document.getElementById('ratPoem_body').play();
            }
            if(index ==4){
                videoBoth.play();
            }
            if(index==7){
                $('#audioPlay2').attr('src','./imgs/audioplay.png');
                document.getElementById('ratComeout').play();
            }
            if(index==9){
                $('#audioPlay3').attr('src','./imgs/audioplay.png');
                document.getElementById('ratMisd').play();
            }
            if(index==12){
                $('#audioPlay4').attr('src','./imgs/audioplay.png');
                audioHope.play();
            }
            if(index==14){
                videoBeautiful.play();
            }
            if(index==15){
                $('#audioPlay5').attr('src','./imgs/audioplay.png');
                audioFuture.play();
            }

        },
        onLeave: function (anchorLink, index) {
            if(index==1){
                videoOpen.currentTime = 0;
            }
            if(index==2){
                videoRoom.currentTime = 0;
            }
            if(index==3){
                document.getElementById('ratPoem_body').currentTime = 0;
                document.getElementById('audioPlay1').src='./imgs/audio.png';
            }
            if(index==4){
                videoBoth.currentTime = 0;
            }
            if(index==7){
                document.getElementById('ratComeout').currentTime=0;
            }
            if(index==9){
                document.getElementById('ratMisd').currentTime=0;
            }
            if(index=12){
                audioHope.currentTime =0;
            }
            if(index=14){
                videoBeautiful.currentTime =0;
            }
            if(index=15){
                audioFuture.currentTime =0;
            }
        },
        afterSlideLoad: function (anchorLink, slideIndex) {
            if(slideIndex==1){
                videoRoom.play();
            } else{
                videoRoom.currentTime = 0;
            }
        },
        //responsiveWidth: 900,
        afterResponsive: function(isResponsive){

        }

    });

    $('#audioPlay1').on('click', function () {
            if(isPlaying('ratPoem_body')){
                this.src='./imgs/audioPause.png';
                document.getElementById('ratPoem_body').pause()
            }else{
                this.src='./imgs/audioplay.png';
                document.getElementById('ratPoem_body').play()
            }
    });

    $('#audioPlay2').on('click', function () {
        if(isPlaying('ratComeout')){
            this.src='./imgs/audioPause.png';
            document.getElementById('ratComeout').pause()
        }else{
            this.src='./imgs/audioplay.png';
            document.getElementById('ratComeout').play()
        }
    });
    $('#audioPlay3').on('click', function () {
        if(isPlaying('ratMisd')){
            this.src='./imgs/audioPause.png';
            document.getElementById('ratMisd').pause()
        }else{
            this.src='./imgs/audioplay.png';
            document.getElementById('ratMisd').play()
        }
    });
    $('#audioPlay4').on('click', function () {
        if(isPlaying('ratHope')){
            this.src='./imgs/audioPause.png';
            document.getElementById('ratHope').pause()
        }else{
            this.src='./imgs/audioplay.png';
            document.getElementById('ratHope').play()
        }
    });
    $('#audioPlay5').on('click', function () {
        if(isPlaying('ratFuture')){
            this.src='./imgs/audioPause.png';
            document.getElementById('ratFuture').pause()
        }else{
            this.src='./imgs/audioplay.png';
            document.getElementById('ratFuture').play()
        }
    });


    document.getElementById('ratPoem_body').addEventListener("ended", function(){
        this.currentTime = 0;
        console.log("ended");
        document.getElementById('audioPlay1').src='./imgs/audio.png';
    });

    function isPlaying(playerId) {
        var player = document.getElementById(playerId);
        return !player.paused && !player.ended && 0 < player.currentTime;
    }

});