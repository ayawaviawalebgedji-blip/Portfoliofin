// Animation des cartes de projets au chargement
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal-close');
    
    // Options pour l'Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Créer l'observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Ajouter un délai progressif pour chaque carte
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Initialiser les cartes avec opacité 0 et décalage
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Animation au scroll du titre
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    
    if (pageTitle) {
        pageTitle.style.opacity = '0';
        pageTitle.style.transform = 'translateY(-20px)';
        pageTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            pageTitle.style.opacity = '1';
            pageTitle.style.transform = 'translateY(0)';
        }, 100);
    }
    
    if (pageSubtitle) {
        pageSubtitle.style.opacity = '0';
        pageSubtitle.style.transform = 'translateY(-20px)';
        pageSubtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            pageSubtitle.style.opacity = '1';
            pageSubtitle.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Animation parallaxe sur les images au survol
    projectCards.forEach(card => {
        const image = card.querySelector('.project-image img');
        const imageContainer = card.querySelector('.project-image');
        
        card.addEventListener('mousemove', function(e) {
            if (!image) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 30;
            const moveY = (y - centerY) / 30;
            
            image.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
            image.style.filter = 'brightness(0.8)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!image) return;
            image.style.transform = 'scale(1)';
            image.style.filter = 'brightness(1)';
        });
        
        // Click sur l'image pour ouvrir le modal
        if (imageContainer) {
            imageContainer.addEventListener('click', function() {
                modal.classList.add('show');
                modalImg.src = image.src;
                document.body.style.overflow = 'hidden'; // Empêcher le scroll
            });
        }
    });
    
    // Fermer le modal
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Réactiver le scroll
    }
    
    // Clic sur le bouton de fermeture
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Clic en dehors de l'image
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Fermer avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Animation des badges au hover
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
    });
    
    // ========== PARTICULES DISCRÈTES FLOTTANTES ==========
    
    function createFloatingParticles() {
        const container = document.querySelector('.projects-section');
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
    
    .projects-section {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);