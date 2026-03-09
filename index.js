// Animations PREMIUM de la page d'accueil
document.addEventListener('DOMContentLoaded', function() {
    
    // Sélection des éléments
    const welcomeBadge = document.querySelector('.welcome-badge');
    const profileWrapper = document.querySelector('.profile-wrapper');
    const profileImg = document.querySelector('.profile-img');
    const halo = document.querySelector('.halo');
    const heroTitle = document.querySelector('.hero-title');
    const heroText = document.querySelector('.hero-text');
    const heroButtons = document.querySelector('.hero-buttons');
    const buttons = document.querySelectorAll('.btn');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const heroSocials = document.querySelector('.hero-socials');
    const socialIcons = document.querySelectorAll('.hero-socials a');
    const pageTransition = document.querySelector('.page-transition');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav a');
    const footer = document.querySelector('.footer');
    
    // ========== ANIMATION DU HEADER (ULTRA VISIBLE) ==========
    
    // Logo avec effet de rebond
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(-50px) scale(0.5) rotate(-180deg)';
        setTimeout(() => {
            logo.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        }, 200);
    }
    
    // Navigation avec effet vague
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-40px) scale(0.8)';
        setTimeout(() => {
            link.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0) scale(1)';
        }, 400 + (index * 100));
    });
    
    // ========== BADGE BIENVENUE (EFFET PREMIUM) ==========
    
    if (welcomeBadge) {
        welcomeBadge.style.opacity = '0';
        welcomeBadge.style.transform = 'translateY(-60px) scale(0.3)';
        welcomeBadge.style.filter = 'blur(20px)';
        
        setTimeout(() => {
            welcomeBadge.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            welcomeBadge.style.opacity = '1';
            welcomeBadge.style.transform = 'translateY(0) scale(1)';
            welcomeBadge.style.filter = 'blur(0)';
        }, 800);
    }
    
    // ========== PHOTO DE PROFIL (SLIDE SPECTACULAIRE) ==========
    
    if (profileWrapper) {
        profileWrapper.style.opacity = '0';
        profileWrapper.style.transform = 'translateX(-300px) rotate(-20deg) scale(0.5)';
        profileWrapper.style.filter = 'blur(20px)';
        
        setTimeout(() => {
            profileWrapper.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            profileWrapper.style.opacity = '1';
            profileWrapper.style.transform = 'translateX(0) rotate(0deg) scale(1)';
            profileWrapper.style.filter = 'blur(0)';
        }, 1100);
    }
    
    // Animation du halo (pulsation)
    if (halo) {
        setTimeout(() => {
            halo.style.animation = 'pulse-halo 3s ease-in-out infinite';
        }, 2300);
    }
    
    // ========== TITRE (EFFET TYPING + GLITCH) ==========
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateX(200px) scale(0.7)';
        heroTitle.style.filter = 'blur(15px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateX(0) scale(1)';
            heroTitle.style.filter = 'blur(0)';
        }, 1400);
        
        // Effet glitch sur le nom
        const nameSpan = heroTitle.querySelector('span');
        if (nameSpan) {
            setTimeout(() => {
                setInterval(() => {
                    nameSpan.style.textShadow = '2px 2px 10px rgba(102, 126, 234, 0.8), -2px -2px 10px rgba(118, 75, 162, 0.8)';
                    setTimeout(() => {
                        nameSpan.style.textShadow = '0 0 20px rgba(102, 126, 234, 0.5)';
                    }, 100);
                }, 3000);
            }, 2500);
        }
    }
    
    // ========== TEXTE DESCRIPTIF (FADE IN IMPRESSIONNANT) ==========
    
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(60px) scale(0.9)';
        heroText.style.filter = 'blur(10px)';
        
        setTimeout(() => {
            heroText.style.transition = 'all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0) scale(1)';
            heroText.style.filter = 'blur(0)';
        }, 1700);
    }
    
    // ========== BOUTONS (EFFET MAGIQUE) ==========
    
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(80px) scale(0.7)';
        
        setTimeout(() => {
            heroButtons.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0) scale(1)';
        }, 2000);
    }
    
    // Animation individuelle des boutons
    buttons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'scale(0.5) rotate(180deg)';
        
        setTimeout(() => {
            btn.style.transition = 'all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            btn.style.opacity = '1';
            btn.style.transform = 'scale(1) rotate(0deg)';
        }, 2100 + (index * 150));
    });
    
    // Effet hover premium sur les boutons
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.1)';
            this.style.boxShadow = '0 20px 60px rgba(102, 126, 234, 0.6)';
            this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
        
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-8px) scale(1.1)';
        });
    });
    
    // ========== FLÈCHE SCROLL (EFFET BOUNCE ULTRA VISIBLE) ==========
    
    if (scrollIndicator) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.transform = 'translateY(-50px) scale(0)';
        
        setTimeout(() => {
            scrollIndicator.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.transform = 'translateY(0) scale(1)';
        }, 2400);
        
        // Animation bounce infinie
        setTimeout(() => {
            scrollIndicator.style.animation = 'bounce-arrow 2s ease-in-out infinite';
        }, 3200);
        
        // Clic sur la flèche
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // ========== ICÔNES SOCIALES (EFFET SPECTACULAIRE) ==========
    
    if (heroSocials) {
        heroSocials.style.opacity = '0';
        heroSocials.style.transform = 'translateX(100px)';
        
        setTimeout(() => {
            heroSocials.style.transition = 'all 0.8s ease';
            heroSocials.style.opacity = '1';
            heroSocials.style.transform = 'translateX(0)';
        }, 2200);
    }
    
    // Animation cascade des icônes
    socialIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateX(80px) rotate(360deg) scale(0)';
        
        setTimeout(() => {
            icon.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            icon.style.opacity = '1';
            icon.style.transform = 'translateX(0) rotate(0deg) scale(1)';
        }, 2400 + (index * 150));
    });
    
    // Effet hover premium sur les icônes
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.4) rotate(360deg)';
            this.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // ========== EFFET PARALLAXE PREMIUM SUR LA PHOTO ==========
    
    const heroSection = document.querySelector('.home-hero');
    if (heroSection && profileWrapper) {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        
        heroSection.addEventListener('mousemove', function(e) {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
        });
        
        // Animation fluide
        function animate() {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;
            
            if (profileImg) {
                profileImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.05)`;
            }
            
            requestAnimationFrame(animate);
        }
        
        setTimeout(() => {
            animate();
        }, 2500);
    }
    
    // ========== ANIMATION DU FOOTER ==========
    
    if (footer) {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(50px)';
        
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.style.transition = 'all 0.8s ease';
                    footer.style.opacity = '1';
                    footer.style.transform = 'translateY(0)';
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
            pageTransition.style.transition = 'opacity 0.8s ease';
            pageTransition.style.opacity = '1';
        }, 100);
    }
    
    // ========== PARTICULES FLOTTANTES (EFFET PREMIUM) ==========
    
    function createFloatingParticles() {
        const particleCount = 20;
        const container = document.querySelector('.home-hero');
        
        if (!container) return;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: radial-gradient(circle, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.3));
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                z-index: 1;
                animation: float-particle ${5 + Math.random() * 10}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            container.appendChild(particle);
        }
    }
    
    setTimeout(() => {
        createFloatingParticles();
    }, 3000);
});

// ========== KEYFRAMES CSS ==========

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse-halo {
        0%, 100% {
            opacity: 0.3;
            transform: scale(1);
            filter: blur(20px);
        }
        50% {
            opacity: 0.7;
            transform: scale(1.2);
            filter: blur(30px);
        }
    }
    
    @keyframes bounce-arrow {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-20px);
        }
        60% {
            transform: translateY(-10px);
        }
    }
    
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
    
    .scroll-indicator {
        cursor: pointer;
    }
    
    .scroll-indicator:hover {
        transform: scale(1.2);
        color: #667eea;
    }
`;
document.head.appendChild(style);