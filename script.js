// modal s akcí

    document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      const promoModal = new bootstrap.Modal(document.getElementById('promoModal'));
      promoModal.show();
    }, 2000); 
  });

  document.getElementById('contactRedirectBtn').addEventListener('click', function () {
    const modal = bootstrap.Modal.getInstance(document.getElementById('promoModal'));
    modal.hide();

    setTimeout(function () {
      window.location.href = '#kontakt';  
    }, 500); 
  });

// sroll to top

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // cookie
  // Kontrola, zda už uživatel souhlasil
function hasConsented() {
  return localStorage.getItem('cookiesAccepted') === 'true';
}

function showBanner() {
  document.getElementById('cookieBanner').style.display = 'block';
}

function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.getElementById('cookieBanner').style.display = 'none';
}

// Při načtení stránky zkontrolujeme souhlas
window.addEventListener('load', function() {
  if (!hasConsented()) {
    showBanner();
  }
});

// Tlačítko souhlasu
document.getElementById('acceptCookies').addEventListener('click', acceptCookies);
