// Menu Burger Mobile
(function() {
    'use strict';
    
    // Variables pour gérer le scroll
    let scrollPosition = 0;
    
    // Créer le bouton burger et l'overlay
    function createBurgerMenu() {
        const header = document.querySelector('.header-inner');
        if (!header) return;
        
        // Vérifier si déjà créé
        if (document.querySelector('.burger-menu')) return;
        
        // Créer le bouton burger
        const burger = document.createElement('div');
        burger.className = 'burger-menu';
        burger.setAttribute('aria-label', 'Menu de navigation');
        burger.setAttribute('aria-expanded', 'false');
        burger.innerHTML = `
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        `;
        
        // Créer l'overlay
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        
        // Ajouter au DOM
        header.appendChild(burger);
        document.body.appendChild(overlay);
        
        return { burger, overlay };
    }
    
    // Bloquer le scroll quand le menu est ouvert
    function preventScroll() {
        scrollPosition = window.pageYOffset;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
    }
    
    // Restaurer le scroll quand le menu est fermé
    function restoreScroll() {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollPosition);
    }
    
    // Toggle du menu
    function toggleMenu() {
        const nav = document.querySelector('.nav');
        const burger = document.querySelector('.burger-menu');
        const overlay = document.querySelector('.nav-overlay');
        
        if (!nav || !burger || !overlay) return;
        
        const isActive = nav.classList.contains('active');
        
        if (isActive) {
            // Fermer le menu
            nav.classList.remove('active');
            burger.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
            overlay.classList.remove('active');
            overlay.setAttribute('aria-hidden', 'true');
            restoreScroll();
            document.body.classList.remove('menu-open');
        } else {
            // Ouvrir le menu
            nav.classList.add('active');
            burger.classList.add('active');
            burger.setAttribute('aria-expanded', 'true');
            overlay.classList.add('active');
            overlay.setAttribute('aria-hidden', 'false');
            preventScroll();
            document.body.classList.add('menu-open');
            
            // Focus sur le premier lien du menu pour l'accessibilité
            const firstLink = nav.querySelector('a');
            if (firstLink) {
                setTimeout(() => firstLink.focus(), 300);
            }
        }
    }
    
    // Fermer le menu quand on clique sur un lien
    function closeMenuOnLinkClick() {
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    toggleMenu();
                }
            });
        });
    }
    
    // Gérer le redimensionnement de la fenêtre
    function handleResize() {
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 768) {
                    // Desktop : fermer le menu mobile s'il est ouvert
                    const nav = document.querySelector('.nav');
                    const burger = document.querySelector('.burger-menu');
                    const overlay = document.querySelector('.nav-overlay');
                    
                    if (nav && nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        if (burger) {
                            burger.classList.remove('active');
                            burger.setAttribute('aria-expanded', 'false');
                        }
                        if (overlay) {
                            overlay.classList.remove('active');
                            overlay.setAttribute('aria-hidden', 'true');
                        }
                        restoreScroll();
                        document.body.classList.remove('menu-open');
                    }
                }
            }, 250);
        });
    }
    
    // Initialiser
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setup);
        } else {
            setup();
        }
    }
    
    function setup() {
        const elements = createBurgerMenu();
        if (!elements) return;
        
        const { burger, overlay } = elements;
        
        // Event listeners
        burger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        
        // Fermer avec la touche Échap
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const nav = document.querySelector('.nav');
                if (nav && nav.classList.contains('active')) {
                    toggleMenu();
                    // Remettre le focus sur le burger
                    const burger = document.querySelector('.burger-menu');
                    if (burger) burger.focus();
                }
            }
        });
        
        // Fermer le menu quand on clique sur un lien
        closeMenuOnLinkClick();
        
        // Gérer le redimensionnement
        handleResize();
    }
    
    // Démarrer
    init();
    
})();
