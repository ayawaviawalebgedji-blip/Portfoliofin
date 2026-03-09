// Animations PREMIUM de la page Compétences
document.addEventListener('DOMContentLoaded', function() {
    
    // Sélection des éléments
    const glowTitle = document.querySelector('.glow-title');
    const sectionSubtitle = document.querySelector('.section-subtitle');
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillBadges = document.querySelectorAll('.skill-badge');
    const statItems = document.querySelectorAll('.stat-item');
    const statNumbers = document.querySelectorAll('.stat-number');
    const pageTransition = document.querySelector('.page-transition');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav a');
    const footer = document.querySelector('.footer');
    
    // ========== ANIMATION DU HEADER (ULTRA VISIBLE) ==========
    
    // Logo avec rotation spectaculaire
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(-60px) scale(0.3) rotate(-360deg)';
        setTimeout(() => {
            logo.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        }, 150);
    }
    
    // Navigation avec cascade spectaculaire
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-50px) scale(0.5) rotate(180deg)';
        setTimeout(() => {
            link.style.transition = 'all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        }, 300 + (index * 100));
    });
    
    // ========== ANIMATION DU TITRE (EFFET EXPLOSIF) ==========
    
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
        
        // Effet pulsant sur le titre
        setTimeout(() => {
            setInterval(() => {
                glowTitle.style.textShadow = '0 0 30px rgba(102, 126, 234, 1), 0 0 60px rgba(118, 75, 162, 0.8)';
                setTimeout(() => {
                    glowTitle.style.textShadow = '0 0 15px rgba(102, 126, 234, 0.5)';
                }, 500);
            }, 2000);
        }, 1800);
    }
    
    // ========== SOUS-TITRE ==========
    
    if (sectionSubtitle) {
        sectionSubtitle.style.opacity = '0';
        sectionSubtitle.style.transform = 'translateY(-40px) scale(0.7)';
        sectionSubtitle.style.filter = 'blur(15px)';
        
        setTimeout(() => {
            sectionSubtitle.style.transition = 'all 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            sectionSubtitle.style.opacity = '1';
            sectionSubtitle.style.transform = 'translateY(0) scale(1)';
            sectionSubtitle.style.filter = 'blur(0)';
        }, 1100);
    }
    
    // ========== CATÉGORIES DE COMPÉTENCES (EFFET SPECTACULAIRE) ==========
    
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(100px) scale(0.5) rotateX(-60deg)';
        category.style.filter = 'blur(20px)';
        
        setTimeout(() => {
            category.style.transition = 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
            category.style.opacity = '1';
            category.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            category.style.filter = 'blur(0)';
        }, 1400 + (index * 200));
        
        // Animation des badges dans chaque catégorie
        const badges = category.querySelectorAll('.skill-badge');
        badges.forEach((badge, badgeIndex) => {
            badge.style.opacity = '0';
            badge.style.transform = 'scale(0) rotate(180deg)';
            
            setTimeout(() => {
                badge.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                badge.style.opacity = '1';
                badge.style.transform = 'scale(1) rotate(0deg)';
            }, 1600 + (index * 200) + (badgeIndex * 50));
        });
    });
    
    // ========== EFFET HOVER PREMIUM SUR LES CATÉGORIES ==========
    
    skillCategories.forEach(category => {
        // Effet 3D spectaculaire
        category.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            this.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.05)`;
            this.style.boxShadow = '0 30px 80px rgba(102, 126, 234, 0.5)';
            this.style.transition = 'box-shadow 0.3s ease';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1500px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            this.style.boxShadow = '';
            this.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
    });
    
    // ========== EFFET HOVER ULTRA PREMIUM SUR LES BADGES ==========
    
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            // Effet de pop spectaculaire
            this.style.transform = 'scale(1.3) translateY(-10px) rotate(5deg)';
            this.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.6)';
            this.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.4), rgba(118, 75, 162, 0.4))';
            this.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            
            // Effet de vague sur les badges voisins
            const allBadges = Array.from(skillBadges);
            const index = allBadges.indexOf(this);
            
            // Badge précédent
            if (allBadges[index - 1]) {
                allBadges[index - 1].style.transform = 'scale(1.1) translateY(-3px)';
                allBadges[index - 1].style.transition = 'all 0.3s ease';
            }
            
            // Badge suivant
            if (allBadges[index + 1]) {
                allBadges[index + 1].style.transform = 'scale(1.1) translateY(-3px)';
                allBadges[index + 1].style.transition = 'all 0.3s ease';
            }
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0) rotate(0deg)';
            this.style.boxShadow = '';
            this.style.background = '';
            
            // Reset des badges voisins
            const allBadges = Array.from(skillBadges);
            const index = allBadges.indexOf(this);
            
            if (allBadges[index - 1]) {
                allBadges[index - 1].style.transform = 'scale(1) translateY(0)';
            }
            if (allBadges[index + 1]) {
                allBadges[index + 1].style.transform = 'scale(1) translateY(0)';
            }
        });
        
        // Effet de clic
        badge.addEventListener('mousedown', function() {
            this.style.transform = 'scale(1.1) translateY(-5px)';
        });
        
        badge.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.3) translateY(-10px) rotate(5deg)';
        });
    });
    
    // ========== STATISTIQUES (ANIMATION SPECTACULAIRE) ==========
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statItem = entry.target;
                const index = Array.from(statItems).indexOf(statItem);
                
                // Animation d'entrée explosive
                statItem.style.opacity = '0';
                statItem.style.transform = 'scale(0.3) rotate(180deg) translateY(100px)';
                statItem.style.filter = 'blur(20px)';
                
                setTimeout(() => {
                    statItem.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    statItem.style.opacity = '1';
                    statItem.style.transform = 'scale(1) rotate(0deg) translateY(0)';
                    statItem.style.filter = 'blur(0)';
                }, index * 150);
                
                // Démarrer le compteur avec effet spectaculaire
                const statNumber = statItem.querySelector('.stat-number');
                if (statNumber && !statNumber.classList.contains('counted')) {
                    setTimeout(() => {
                        animateCounter(statNumber);
                    }, index * 150 + 500);
                    statNumber.classList.add('counted');
                }
                
                statsObserver.unobserve(statItem);
            }
        });
    }, {
        threshold: 0.3
    });
    
    statItems.forEach(item => {
        statsObserver.observe(item);
    });
    
    // ========== FONCTION DE COMPTEUR AVEC EFFET PREMIUM ==========
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2500;
        const increment = target / (duration / 16);
        let current = 0;
        
        // Effet de scale pendant le comptage
        element.style.transform = 'scale(1.5)';
        element.style.transition = 'transform 0.3s ease';
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
                
                // Effet de rebond final
                element.style.transform = 'scale(1)';
                
                // Effet flash
                setTimeout(() => {
                    element.style.textShadow = '0 0 40px rgba(102, 126, 234, 1), 0 0 80px rgba(118, 75, 162, 1)';
                    setTimeout(() => {
                        element.style.textShadow = '0 0 20px rgba(102, 126, 234, 0.5)';
                    }, 300);
                }, 100);
            } else {
                element.textContent = Math.floor(current);
                
                // Effet de pulse pendant le comptage
                if (Math.floor(current) % 5 === 0) {
                    element.style.transform = 'scale(1.6)';
                    setTimeout(() => {
                        element.style.transform = 'scale(1.5)';
                    }, 50);
                }
            }
        }, 16);
    }
    
    // ========== EFFET HOVER PREMIUM SUR LES STATS ==========
    
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15) translateY(-15px) rotate(3deg)';
            this.style.boxShadow = '0 30px 80px rgba(102, 126, 234, 0.6)';
            this.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))';
            this.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            
            const statNumber = this.querySelector('.stat-number');
            if (statNumber) {
                statNumber.style.transform = 'scale(1.3) rotate(-3deg)';
                statNumber.style.textShadow = '0 0 30px rgba(102, 126, 234, 1), 0 0 60px rgba(118, 75, 162, 0.8)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0) rotate(0deg)';
            this.style.boxShadow = '';
            this.style.background = '';
            
            const statNumber = this.querySelector('.stat-number');
            if (statNumber) {
                statNumber.style.transform = 'scale(1) rotate(0deg)';
                statNumber.style.textShadow = '0 0 20px rgba(102, 126, 234, 0.5)';
            }
        });
    });
    
    // ========== ANIMATION DU FOOTER ==========
    
    if (footer) {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(80px) scale(0.8)';
        footer.style.filter = 'blur(15px)';
        
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
            pageTransition.style.transition = 'opacity 0.8s ease';
            pageTransition.style.opacity = '1';
        }, 100);
    }
    
    // ========== PARTICULES FLOTTANTES (EFFET PREMIUM) ==========
    
    function createFloatingParticles() {
        const container = document.querySelector('.skills-section');
        if (!container) return;
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 8 + 3}px;
                height: ${Math.random() * 8 + 3}px;
                background: radial-gradient(circle, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.4));
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                z-index: 1;
                animation: float-skill-particle ${8 + Math.random() * 12}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
                box-shadow: 0 0 20px rgba(102, 126, 234, 0.6);
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
    @keyframes float-skill-particle {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        50% {
            transform: translate(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px) rotate(360deg) scale(1.5);
        }
    }
    
    @keyframes pulse-dot {
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.8);
            opacity: 0.4;
        }
    }
    
    .pulse-dot {
        animation: pulse-dot 2s ease-in-out infinite;
    }
    
    .skills-section {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);