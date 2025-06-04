// modal s akcí

    document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      const promoModal = new bootstrap.Modal(document.getElementById('promoModal'));
      promoModal.show();
    }, 2000); // Modal se objeví po 2 sekundách
  });

  document.getElementById('contactRedirectBtn').addEventListener('click', function () {
    const modal = bootstrap.Modal.getInstance(document.getElementById('promoModal'));
    modal.hide();

    // Počkej, až se modal zavře, pak přesměruj
    setTimeout(function () {
      // Změň URL podle potřeby (kotva nebo jiná stránka)
      window.location.href = '#kontakt';  // nebo '/kontakt.html'
    }, 500); // 500ms odpovídá rychlosti zavírání Bootstrap modalu
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