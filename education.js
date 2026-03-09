// Animations PREMIUM de la page Éducation
document.addEventListener('DOMContentLoaded', function() {
    
    // Sélection des éléments
    const glowTitle = document.querySelector('.glow-title');
    const sectionSubtitle = document.querySelector('.section-subtitle');
    const educationImage = document.querySelector('.education-image');
    const timelineContainer = document.querySelector('.timeline-container');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const cvCard = document.querySelector('.cv-card');
    const achievementCards = document.querySelectorAll('.achievement-card');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav a');
    const footer = document.querySelector('.footer');
    const passwordForm = document.getElementById('passwordForm');
    const cvAccess = document.getElementById('cvAccess');
    const cvUnlocked = document.getElementById('cvUnlocked');
    
    // Mot de passe (à changer selon vos besoins)
    const CORRECT_PASSWORD = 'Reine2026'; // Changez ce mot de passe
    
    // ========== ANIMATION DU HEADER ==========
    
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(-60px) scale(0.3) rotate(-360deg)';
        setTimeout(() => {
            logo.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        }, 150);
    }
    
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-50px) scale(0.5)';
        setTimeout(() => {
            link.style.transition = 'all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0) scale(1)';
        }, 300 + (index * 100));
    });
    
    // ========== ANIMATION DU TITRE ==========
    
    if (glowTitle) {
        glowTitle.style.opacity = '0';
        glowTitle.style.transform = 'scale(0.3) rotateX(90deg)';
        glowTitle.style.filter = 'blur(30px)';
        
        setTimeout(() => {
            glowTitle.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            glowTitle.style.opacity = '1';
            glowTitle.style.transform = 'scale(1) rotateX(0deg)';
            glowTitle.style.filter = 'blur(0)';
        }, 600);
    }
    
    if (sectionSubtitle) {
        sectionSubtitle.style.opacity = '0';
        sectionSubtitle.style.transform = 'translateY(-40px)';
        setTimeout(() => {
            sectionSubtitle.style.transition = 'all 0.9s ease';
            sectionSubtitle.style.opacity = '1';
            sectionSubtitle.style.transform = 'translateY(0)';
        }, 1100);
    }
    
    // ========== ANIMATION IMAGE + TIMELINE SIMULTANÉES ==========
    
    if (educationImage) {
        educationImage.style.opacity = '0';
        educationImage.style.transform = 'translateX(-150px) scale(0.7)';
        educationImage.style.filter = 'blur(20px)';
        
        setTimeout(() => {
            educationImage.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            educationImage.style.opacity = '1';
            educationImage.style.transform = 'translateX(0) scale(1)';
            educationImage.style.filter = 'blur(0)';
        }, 1400);
    }
    
    if (timelineContainer) {
        timelineContainer.style.opacity = '0';
        timelineContainer.style.transform = 'translateX(150px) scale(0.7)';
        timelineContainer.style.filter = 'blur(20px)';
        
        setTimeout(() => {
            timelineContainer.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            timelineContainer.style.opacity = '1';
            timelineContainer.style.transform = 'translateX(0) scale(1)';
            timelineContainer.style.filter = 'blur(0)';
        }, 1400); // MÊME DÉLAI pour simultanéité
    }
    
    // Animation cascade des items de timeline
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(50px)';
        setTimeout(() => {
            item.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 1800 + (index * 200));
    });
    
    // ========== ANIMATION DE LA CARTE CV ==========
    
    const cvObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cvCard.style.opacity = '0';
                cvCard.style.transform = 'scale(0.5) rotate(-10deg)';
                cvCard.style.filter = 'blur(20px)';
                
                setTimeout(() => {
                    cvCard.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    cvCard.style.opacity = '1';
                    cvCard.style.transform = 'scale(1) rotate(0deg)';
                    cvCard.style.filter = 'blur(0)';
                }, 200);
                
                cvObserver.unobserve(cvCard);
            }
        });
    }, { threshold: 0.3 });
    
    if (cvCard) {
        cvObserver.observe(cvCard);
    }
    
    // ========== GESTION DU MOT DE PASSE ==========
    
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const passwordInput = document.getElementById('cvPassword');
            const enteredPassword = passwordInput.value;
            
            if (enteredPassword === CORRECT_PASSWORD) {
                // Mot de passe correct
                cvAccess.style.transition = 'all 0.6s ease';
                cvAccess.style.transform = 'scale(0.8)';
                cvAccess.style.opacity = '0';
                
                setTimeout(() => {
                    cvAccess.style.display = 'none';
                    cvUnlocked.style.display = 'block';
                    cvUnlocked.style.opacity = '0';
                    cvUnlocked.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        cvUnlocked.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                        cvUnlocked.style.opacity = '1';
                        cvUnlocked.style.transform = 'scale(1)';
                        
                        // Confetti de succès
                        createSuccessConfetti();
                    }, 50);
                }, 600);
                
            } else {
                // Mot de passe incorrect
                passwordInput.style.animation = 'shake 0.5s';
                passwordInput.style.borderColor = '#d63031';
                
                setTimeout(() => {
                    passwordInput.style.animation = '';
                    passwordInput.style.borderColor = '';
                }, 500);
                
                // Message d'erreur
                showError('Mot de passe incorrect');
            }
            
            passwordInput.value = '';
        });
    }
    
    // ========== BOUTONS CV (Liens directs) ==========
    
    // Les boutons sont maintenant des liens <a> qui fonctionnent directement
    // Plus besoin de JavaScript complexe !
    
    // On garde juste l'animation au clic
    const viewBtn = document.getElementById('viewBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (viewBtn) {
        viewBtn.addEventListener('click', function() {
            // Animation de confirmation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    }
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Animation de confirmation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    }
    
    // ========== ANIMATION DES CARTES DE RÉALISATION ==========
    
    const achievementsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const index = Array.from(achievementCards).indexOf(card);
                
                card.style.opacity = '0';
                card.style.transform = 'translateY(60px) scale(0.8) rotate(-5deg)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                }, index * 150);
                
                achievementsObserver.unobserve(card);
            }
        });
    }, { threshold: 0.3 });
    
    achievementCards.forEach(card => {
        achievementsObserver.observe(card);
        
        // Effet 3D au hover
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ========== ANIMATION DU FOOTER ==========
    
    if (footer) {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(80px)';
        
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.style.transition = 'all 1s ease';
                    footer.style.opacity = '1';
                    footer.style.transform = 'translateY(0)';
                    footerObserver.unobserve(footer);
                }
            });
        }, { threshold: 0.5 });
        
        footerObserver.observe(footer);
    }
    
    // ========== PARTICULES FLOTTANTES ==========
    
    function createFloatingParticles() {
        const container = document.querySelector('.education-section');
        if (!container) return;
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 6 + 2;
            
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
    
    // ========== FONCTIONS UTILITAIRES ==========
    
    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #d63031;
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => errorDiv.remove(), 300);
        }, 3000);
    }
    
    function createSuccessConfetti() {
        const colors = ['#00b894', '#667eea', '#764ba2', '#fdcb6e'];
        
        for (let i = 0; i < 40; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * window.innerWidth}px;
                top: -10px;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
            `;
            
            document.body.appendChild(confetti);
            
            confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
            ], {
                duration: 2000 + Math.random() * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => confetti.remove(), 3000);
        }
    }
});

// ========== KEYFRAMES CSS ==========

const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
        }
        10% { opacity: 1; }
        90% { opacity: 1; }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(360deg);
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
    
    .education-section {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);