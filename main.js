$(document).ready(function() {


    var videoOpen = document.getElementById('ratDressVideo');
    var videoRoom = document.getElementById('ratRoom');
    var videoBoth = document.getElementById('bothRat');
    var videoBeautiful = document.getElementById('ratBeautiful');
    var audioHope = document.getElementById('ratHope');
    var audioFuture = document.getElementById('ratFuture');
    var bouncyArrow =  document.getElementById('bouncyArrow1');

    var anchorsLink = ['1stPage', '2ndPage', '3rdPage','4thPage','5thPage','6thPage','7thPage',
        '8thPage','9thPage','10thPage','11thPage','12thPage','13thPage','14thPage','15thPage'];

    $('#fullpage').fullpage({
        anchors: anchorsLink,
        // sectionsColor: ['#000', '#fff', '#fff'],
        scrollingSpeed: 1000,
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        autoScrolling: true,
        fitToSection: true,
        scrollOverflow: false,
        fixedElements:'#bouncyArrow1，#nb-note, #nb-audiobtn',
        bigSectionsDestination: 'top',
        navigationTooltips: ['Start', 'Second page', 'Third page', 'Forth Page', 'Fifth Page', 'Sixth Page','Seventh Page',
            'Eighth Page','Ninth Page','10th Page','11th Page','12th Page','13th Page','14th Page','End'],
        afterLoad: function(anchorLink, index){
            if(index==1){
                videoOpen.play();
                bouncyArrow.style.opacity = 1;
            }
            if(index==2){
                console.log('ratRoom show!');
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
                bouncyArrow.style.opacity = 1;
            }
            if(index==15){
                $('#audioPlay5').attr('src','./imgs/audioplay.png');
                audioFuture.play();
                bouncyArrow.style.opacity = 0;
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
                console.log('left');
                if($('#nb-note').hasClass('noteActive')){
                    console.log('has class');
                    $('#nb-note').removeClass('noteActive');
                }
            }
            if(index==7){
                document.getElementById('ratComeout').currentTime=0;
            }
            if(index==9){
                console.log('left9');
                document.getElementById('ratMisd').currentTime=0;
                if($('#nb-note').hasClass('noteActive')){
                    console.log('has class');
                    $('#nb-note').removeClass('noteActive');
                }
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
        // afterSlideLoad: function (anchorLink, slideIndex) {
        //     if(slideIndex==1){
        //         videoRoom.play();
        //     } else{
        //         videoRoom.currentTime = 0;
        //     }
        // },
        //responsiveWidth: 900,
        afterResponsive: function(isResponsive){

        }

    });

    // bouncyArrow.addEventListener("click", function () {
    //     console.log('clicked');
    //     var linkElement = document.getElementById('arrowNext');
    //     var getHref = linkElement.getAttribute('href').split('#')[1];
    //     var index = anchorsLink.indexOf(getHref);
    //     console.log(getHref);
    //     console.log(index);
    //     document.getElementById('arrowNext').setAttribute('href','#'+anchorsLink[index+1]);
    // });
    //

    $('#nb-btn1').on('click', function () {
        $('#nb-note').toggleClass('noteActive');
        console.log('toggleclass noteActive');
        $('.noteTitle').text('Non-binary');
        $('.noteText').text('“Non-binary” is a term unfamiliar to many, but it has been adopted by a subset of transgender people who identify as neither male or female, or both male and female at the same time. Actresses like Caitlyn Jenner and Laverne Cox have helped bring the transgender community into the spotlight, paving the way for greater acceptance of their identities, but non-binary is a category much less well-known or understood.');
    });

    $('#nb-btn2').on('click', function () {
        $('#nb-note').toggleClass('noteActive');
        console.log('toggleclass noteActive');
        $('.noteTitle').text('Mental health of the non-binary');
        $('.noteText').text('The U.S. Transgender Survey found that 39 percent of respondents experienced serious psychological distress, compared with 5 percent of the U.S. population, ' +
            'and 40 percent of respondents attempted to commit suicide at some point in their lifetime, ' +
            'nearly nine times the rate for the non-transgender U.S. population. ' +
            'Though the survey only sampled 28,000 people, it is indicative of wider spread mental health struggles in the transgender population.');
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