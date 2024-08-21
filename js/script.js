// Event pada saat link di klik
$('.page-scroll').on('click', function(){
    // ambil isi href
    let tujuan = $(this).attr('href');
    // tangkap elemen ybs
    let elemenTujuan = $(tujuan);

    // pindahkan scroll nya
    $('html').animate({            
        scrollTop: elemenTujuan.offset().top - 50
  
  }, 1000, 'easeInOutExpo');
    e.preventDefault();
});