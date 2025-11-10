document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    // Sayfa 50px'den fazla kaydırıldıysa 'scrolled' sınıfı ekle/kaldır
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});