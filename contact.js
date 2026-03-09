// Animations de la page Contact
document.addEventListener('DOMContentLoaded', function() {
    
    // Sélection des éléments à animer
    const glowTitle = document.querySelector('.glow-title');
    const sectionSubtitle = document.querySelector('.section-subtitle');
    const infoContainer = document.querySelector('.info-container');
    const formContainer = document.querySelector('.form-container');
    const contactCards = document.querySelectorAll('.contact-card');
    const availabilityCard = document.querySelector('.availability-card');
    const formGroups = document.querySelectorAll('.form-group');
    const submitBtn = document.querySelector('.submit-btn');
    const pageTransition = document.querySelector('.page-transition');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav a');
    const footer = document.querySelector('.footer');
    
    // ========== ANIMATION DU HEADER ==========
    
    // Logo
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            logo.style.transition = 'all 0.6s ease';
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Navigation
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            link.style.transition = 'all 0.4s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
    
    // ========== ANIMATION DU TITRE ==========
    
    if (glowTitle) {
        const text = glowTitle.textContent;
        glowTitle.textContent = '';
        glowTitle.style.opacity = '1';
        
        let charIndex = 0;
        const typingSpeed = 80;
        
        setTimeout(() => {
            const typingInterval = setInterval(() => {
                if (charIndex < text.length) {
                    glowTitle.textContent += text.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, typingSpeed);
        }, 400);
    }
    
    if (sectionSubtitle) {
        sectionSubtitle.style.opacity = '0';
        sectionSubtitle.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            sectionSubtitle.style.transition = 'all 0.6s ease';
            sectionSubtitle.style.opacity = '1';
            sectionSubtitle.style.transform = 'translateY(0)';
        }, 1200);
    }
    
    // ========== ANIMATION SIMULTANÉE INFO + FORMULAIRE ==========
    
    // Section Informations de gauche
    if (infoContainer) {
        infoContainer.style.opacity = '0';
        infoContainer.style.transform = 'translateX(-100px)';
        infoContainer.style.filter = 'blur(10px)';
        
        setTimeout(() => {
            infoContainer.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            infoContainer.style.opacity = '1';
            infoContainer.style.transform = 'translateX(0)';
            infoContainer.style.filter = 'blur(0)';
        }, 1500);
    }
    
    // Formulaire de droite (SIMULTANÉ avec les infos)
    if (formContainer) {
        formContainer.style.opacity = '0';
        formContainer.style.transform = 'translateX(100px)';
        formContainer.style.filter = 'blur(10px)';
        
        setTimeout(() => {
            formContainer.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            formContainer.style.opacity = '1';
            formContainer.style.transform = 'translateX(0)';
            formContainer.style.filter = 'blur(0)';
        }, 1500); // MÊME DÉLAI pour être simultané
    }
    
    // ========== ANIMATION DES CARTES DE CONTACT (CASCADE) ==========
    
    contactCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 1700 + (index * 150));
    });
    
    // Animation de la carte de disponibilité
    if (availabilityCard) {
        availabilityCard.style.opacity = '0';
        availabilityCard.style.transform = 'translateY(30px) scale(0.95)';
        setTimeout(() => {
            availabilityCard.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            availabilityCard.style.opacity = '1';
            availabilityCard.style.transform = 'translateY(0) scale(1)';
        }, 2200);
    }
    
    // ========== ANIMATION DES CHAMPS DE FORMULAIRE ==========
    
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateX(30px)';
        setTimeout(() => {
            group.style.transition = 'all 0.4s ease';
            group.style.opacity = '1';
            group.style.transform = 'translateX(0)';
        }, 1800 + (index * 100));
    });
    
    // Animation du bouton submit
    if (submitBtn) {
        submitBtn.style.opacity = '0';
        submitBtn.style.transform = 'scale(0.8)';
        setTimeout(() => {
            submitBtn.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            submitBtn.style.opacity = '1';
            submitBtn.style.transform = 'scale(1)';
        }, 2300);
    }
    
    // ========== EFFETS PREMIUM AU HOVER ==========
    
    // Effet 3D sur les cartes de contact
    contactCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            this.style.transition = 'transform 0.1s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            this.style.transition = 'transform 0.3s ease';
        });
    });
    
    // Effet 3D sur la carte de disponibilité
    if (availabilityCard) {
        availabilityCard.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            this.style.transition = 'transform 0.1s ease';
        });
        
        availabilityCard.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            this.style.transition = 'transform 0.3s ease';
        });
    }
    
    // Animation des icônes au hover
    const contactIcons = document.querySelectorAll('.contact-icon');
    contactIcons.forEach(icon => {
        const parentCard = icon.closest('.contact-card');
        if (parentCard) {
            parentCard.addEventListener('mouseenter', function() {
                icon.style.transform = 'scale(1.2) rotate(360deg)';
                icon.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            });
            
            parentCard.addEventListener('mouseleave', function() {
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        }
    });
    
    // ========== ANIMATION DES INPUTS AU FOCUS ==========
    
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.3s ease';
            this.style.borderColor = '#667eea';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
            this.style.borderColor = '';
        });
    });
    
    // ========== ANIMATION DU BOUTON SUBMIT ==========
    
    if (submitBtn) {
        submitBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-3px)';
            this.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.5)';
        });
        
        submitBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '';
        });
        
        submitBtn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        submitBtn.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.05) translateY(-3px)';
        });
    }
    
    // ========== GESTION DU FORMULAIRE ==========
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Animation du bouton
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Envoi en cours...</span>';
            submitBtn.disabled = true;
            submitBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            
            // Simulation d'envoi (remplacer par votre vraie logique)
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Message envoyé ✓</span>';
                submitBtn.style.background = 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)';
                
                // Effet de confetti
                createConfetti();
                
                // Reset après 3 secondes
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
            
            console.log('Formulaire soumis:', formData);
        });
    }
    
    // ========== ANIMATION DU FOOTER ==========
    
    if (footer) {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(30px)';
        
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.style.transition = 'all 0.6s ease';
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
            pageTransition.style.transition = 'opacity 0.5s ease';
            pageTransition.style.opacity = '1';
        }, 50);
    }
    
    // ========== PARTICULES DISCRÈTES FLOTTANTES ==========
    
    function createFloatingParticles() {
        const container = document.querySelector('.contact-section');
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
    
    // ========== FONCTION CONFETTI ==========
    
    function createConfetti() {
        const colors = ['#667eea', '#764ba2', '#00b894', '#fdcb6e', '#e17055'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            
            document.body.appendChild(confetti);
            
            const duration = 2000 + Math.random() * 1000;
            const startX = parseFloat(confetti.style.left);
            const endX = startX + (Math.random() - 0.5) * 200;
            const rotation = Math.random() * 360;
            
            confetti.animate([
                { 
                    transform: 'translateY(0) rotate(0deg)',
                    opacity: 1 
                },
                { 
                    transform: `translateY(${window.innerHeight}px) translateX(${endX - startX}px) rotate(${rotation}deg)`,
                    opacity: 0 
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => {
                confetti.remove();
            }, duration);
        }
    }
});

// Ajouter les keyframes CSS
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
            transform: scale(1.5);
            opacity: 0.5;
        }
    }
    
    .pulse-dot {
        animation: pulse-dot 2s ease-in-out infinite;
    }
    
    .contact-section {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);