$(document).ready(function(){
    $(window).on('load', function(){
        if($('#camera-wrap-banner-slider').length > 0){
            $('#camera-wrap-banner-slider').camera({
                alignment: 'center', 
                autoAdvance:true,
                mobileAutoAdvance:true,
                barDirection:'leftToRight',
                barPosition:'bottom',
                cols: 6,
                easing:'easeInOutExpo',
                mobileEasing:'',
                fx:'random',
                mobileFx:'',
                gridDifference: 250,
                height:'50%', 
                // imagePath:'images/', 
                hover:false,
                loader: 'pie', 
                loaderColor: '#eeeeee',
                loaderBgColor: '#222222',  loaderOpacity: .8,//0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1
                loaderPadding: 2,
                pieDiameter: 38,
                piePosition: 'rightTop', //'rightTop', 'leftTop', 'leftBottom', 'rightBottom'
                minHeight: '200px', 
                pauseOnClick: true,
        
                portrait:false,
                time: 3000,
        
                slicedCols: 12,
                slicedRows: 8,
                
                slideOn:'random',
                thumbnails:false,
        
                transPeriod: 1000
        
        
            })
        }
    })

    new WOW().init();
})