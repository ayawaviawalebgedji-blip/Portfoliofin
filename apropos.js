// Animations ULTRA PREMIUM de la page À propos avec bulles de neige
document.addEventListener('DOMContentLoaded', function() {
    
    // Sélection des éléments à animer
    const glowTitle = document.querySelector('.glow-title');
    const sectionSubtitle = document.querySelector('.section-subtitle');
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');
    const cards = document.querySelectorAll('.card');
    const paragraphs = document.querySelectorAll('.about-text p');
    const pageTransition = document.querySelector('.page-transition');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav a');
    const footer = document.querySelector('.footer');
    const imageWrapper = document.querySelector('.image-wrapper');
    const profileImage = document.querySelector('.profile-image');
    
    // ========== ANIMATION DU HEADER (SPECTACULAIRE) ==========
    
    // Logo avec rotation explosive
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(-80px) scale(0.2) rotate(-720deg)';
        setTimeout(() => {
            logo.style.transition = 'all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        }, 150);
    }
    
    // Navigation avec cascade spectaculaire
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-60px) scale(0.4) rotate(270deg)';
        setTimeout(() => {
            link.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        }, 300 + (index * 100));
    });
    
    // ========== ANIMATION DU TITRE (EFFET EXPLOSIF 3D) ==========
    
    if (glowTitle) {
        glowTitle.style.opacity = '0';
        glowTitle.style.transform = 'scale(0.2) rotateY(180deg) translateZ(-200px)';
        glowTitle.style.filter = 'blur(40px)';
        
        setTimeout(() => {
            glowTitle.style.transition = 'all 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            glowTitle.style.opacity = '1';
            glowTitle.style.transform = 'scale(1) rotateY(0deg) translateZ(0)';
            glowTitle.style.filter = 'blur(0)';
        }, 500);
        
        // Effet pulsant premium
        setTimeout(() => {
            setInterval(() => {
                glowTitle.style.textShadow = '0 0 40px rgba(102, 126, 234, 1), 0 0 80px rgba(118, 75, 162, 1), 0 0 120px rgba(102, 126, 234, 0.5)';
                glowTitle.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    glowTitle.style.textShadow = '0 0 20px rgba(102, 126, 234, 0.5)';
                    glowTitle.style.transform = 'scale(1)';
                }, 600);
            }, 2500);
        }, 1900);
    }
    
    if (sectionSubtitle) {
        sectionSubtitle.style.opacity = '0';
        sectionSubtitle.style.transform = 'translateY(-50px) scale(0.6)';
        sectionSubtitle.style.filter = 'blur(20px)';
        
        setTimeout(() => {
            sectionSubtitle.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            sectionSubtitle.style.opacity = '1';
            sectionSubtitle.style.transform = 'translateY(0) scale(1)';
            sectionSubtitle.style.filter = 'blur(0)';
        }, 900);
    }
    
    // ========== ANIMATION SIMULTANÉE TEXTE + IMAGE (ULTRA VISIBLE) ==========
    
    // Paragraphes de gauche avec effet spectaculaire
    if (aboutText) {
        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateX(-200px) rotateY(-30deg) scale(0.6)';
        aboutText.style.filter = 'blur(25px)';
        
        setTimeout(() => {
            aboutText.style.transition = 'all 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            aboutText.style.opacity = '1';
            aboutText.style.transform = 'translateX(0) rotateY(0deg) scale(1)';
            aboutText.style.filter = 'blur(0)';
        }, 1200);
    }
    
    // Image de droite (SIMULTANÉ) avec effet spectaculaire
    if (aboutImage) {
        aboutImage.style.opacity = '0';
        aboutImage.style.transform = 'translateX(200px) rotateY(30deg) scale(0.6)';
        aboutImage.style.filter = 'blur(25px)';
        
        setTimeout(() => {
            aboutImage.style.transition = 'all 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            aboutImage.style.opacity = '1';
            aboutImage.style.transform = 'translateX(0) rotateY(0deg) scale(1)';
            aboutImage.style.filter = 'blur(0)';
        }, 1200); // MÊME DÉLAI pour simultanéité
    }
    
    // Animation cascade des paragraphes
    paragraphs.forEach((p, index) => {
        p.style.opacity = '0';
        p.style.transform = 'translateX(-80px) scale(0.8)';
        setTimeout(() => {
            p.style.transition = 'all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            p.style.opacity = '1';
            p.style.transform = 'translateX(0) scale(1)';
        }, 1500 + (index * 150));
    });
    
    // ========== ANIMATION DES CARTES (EFFET ULTRA PREMIUM) ==========
    
    const cardsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const cardIndex = Array.from(cards).indexOf(card);
                
                card.style.opacity = '0';
                card.style.transform = 'translateY(120px) scale(0.4) rotate(-15deg)';
                card.style.filter = 'blur(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                    card.style.filter = 'blur(0)';
                }, cardIndex * 180);
                
                cardsObserver.unobserve(card);
            }
        });
    }, {
        threshold: 0.2
    });
    
    cards.forEach(card => {
        cardsObserver.observe(card);
    });
    
    // ========== EFFETS HOVER PREMIUM SUR LES CARTES ==========
    
    cards.forEach(card => {
        // Effet 3D spectaculaire
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 12;
            const rotateY = (centerX - x) / 12;
            
            this.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px) scale(1.08)`;
            this.style.boxShadow = '0 40px 100px rgba(102, 126, 234, 0.7)';
            this.style.transition = 'box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(2000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            this.style.boxShadow = '';
            this.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
    });
    
    // Animation des icônes de cartes
    const cardIcons = document.querySelectorAll('.card-icon');
    cardIcons.forEach(icon => {
        const parentCard = icon.closest('.card');
        if (parentCard) {
            parentCard.addEventListener('mouseenter', function() {
                icon.style.transform = 'scale(1.5) rotate(720deg)';
                icon.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                icon.style.filter = 'drop-shadow(0 0 20px rgba(102, 126, 234, 0.8))';
            });
            
            parentCard.addEventListener('mouseleave', function() {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.filter = '';
            });
        }
    });
    
    // ========== EFFET PARALLAXE PREMIUM SUR L'IMAGE ==========
    
    if (imageWrapper && profileImage) {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        
        aboutImage.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
            mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
        });
        
        function animateImage() {
            currentX += (mouseX - currentX) * 0.15;
            currentY += (mouseY - currentY) * 0.15;
            
            profileImage.style.transform = `scale(1.1) translate(${currentX}px, ${currentY}px)`;
            
            requestAnimationFrame(animateImage);
        }
        
        setTimeout(() => {
            animateImage();
        }, 2600);
        
        aboutImage.addEventListener('mouseleave', function() {
            mouseX = 0;
            mouseY = 0;
        });
    }
    
    // ========== ANIMATION DU FOOTER ==========
    
    if (footer) {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(100px) scale(0.7)';
        footer.style.filter = 'blur(20px)';
        
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    footer.style.opacity = '1';
                    footer.style.transform = 'translateY(0) scale(1)';
                    footer.style.filter = 'blur(0)';
                    footerObserver.unobserve(footer);
                }
            });
        }, { threshold: 0.5 });
        
        footerObserver.observe(footer);
    }
    
    // ========== TRANSITION DE PAGE ==========
    
    if (pageTransition) {
        pageTransition.style.opacity = '0';
        setTimeout(() => {
            pageTransition.style.transition = 'opacity 1s ease';
            pageTransition.style.opacity = '1';
        }, 100);
    }
    
    // ========== PARTICULES DISCRÈTES FLOTTANTES (COMME PAGE D'ACCUEIL) ==========
    
    function createFloatingParticles() {
        const container = document.querySelector('.about-section');
        if (!container) return;
        
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 6 + 2; // Petites particules 2-8px
            
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.3));
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                z-index: 1;
                animation: float-particle ${8 + Math.random() * 12}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            
            container.appendChild(particle);
        }
    }
    
    setTimeout(() => {
        createFloatingParticles();
    }, 2000);
});

// ========== KEYFRAMES CSS ==========

const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(360deg);
        }
    }
    
    @keyframes pulse-dot {
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(2);
            opacity: 0.3;
        }
    }
    
    .pulse-dot {
        animation: pulse-dot 2s ease-in-out infinite;
    }
    
    .about-section {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);