// Système de thème Dark/Light Mode
(function() {
    'use strict';
    
    // Créer le bouton de switch si pas déjà présent
    function createThemeSwitcher() {
        if (document.querySelector('.theme-switcher')) return;
        
        const switcher = document.createElement('div');
        switcher.className = 'theme-switcher';
        switcher.innerHTML = `
            <div class="theme-icon sun-icon" title="Mode clair">☀️</div>
            <div class="theme-icon moon-icon active" title="Mode sombre">🌙</div>
        `;
        
        document.body.appendChild(switcher);
        return switcher;
    }
    
    // Récupérer le thème sauvegardé
    function getSavedTheme() {
        return localStorage.getItem('theme') || 'dark';
    }
    
    // Sauvegarder le thème
    function saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }
    
    // Appliquer le thème
    function applyTheme(theme) {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        
        updateThemeIcons(theme);
    }
    
    // Mettre à jour les icônes
    function updateThemeIcons(theme) {
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');
        
        if (!sunIcon || !moonIcon) return;
        
        if (theme === 'light') {
            sunIcon.classList.add('active');
            sunIcon.classList.remove('inactive');
            moonIcon.classList.remove('active');
            moonIcon.classList.add('inactive');
        } else {
            moonIcon.classList.add('active');
            moonIcon.classList.remove('inactive');
            sunIcon.classList.remove('active');
            sunIcon.classList.add('inactive');
        }
    }
    
    // Toggle le thème
    function toggleTheme() {
        const currentTheme = getSavedTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Animation de rotation
        const switcher = document.querySelector('.theme-switcher');
        if (switcher) {
            switcher.classList.add('switching');
            setTimeout(() => {
                switcher.classList.remove('switching');
            }, 500);
        }
        
        // Appliquer et sauvegarder
        applyTheme(newTheme);
        saveTheme(newTheme);
        
        // Effet sonore visuel (optionnel)
        createThemeChangeEffect(newTheme);
    }
    
    // Effet visuel lors du changement de thème
    function createThemeChangeEffect(theme) {
        const effect = document.createElement('div');
        effect.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
            background: ${theme === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        document.body.appendChild(effect);
        
        setTimeout(() => {
            effect.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            effect.style.opacity = '0';
        }, 200);
        
        setTimeout(() => {
            effect.remove();
        }, 500);
    }
    
    // Initialiser au chargement de la page
    function init() {
        // Appliquer le thème sauvegardé immédiatement
        const savedTheme = getSavedTheme();
        applyTheme(savedTheme);
        
        // Créer le bouton après le chargement du DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                const switcher = createThemeSwitcher();
                if (switcher) {
                    switcher.addEventListener('click', toggleTheme);
                }
            });
        } else {
            const switcher = createThemeSwitcher();
            if (switcher) {
                switcher.addEventListener('click', toggleTheme);
            }
        }
    }
    
    // Démarrer
    init();
    
    // Exposer une fonction globale pour changer le thème programmatiquement
    window.setTheme = function(theme) {
        if (theme === 'light' || theme === 'dark') {
            applyTheme(theme);
            saveTheme(theme);
        }
    };
    
    // Exposer une fonction pour obtenir le thème actuel
    window.getTheme = function() {
        return getSavedTheme();
    };
    
})();

// Ajouter un raccourci clavier (Ctrl/Cmd + Shift + L)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        const switcher = document.querySelector('.theme-switcher');
        if (switcher) {
            switcher.click();
        }
    }
});

// Détecter la préférence système (optionnel)
function detectSystemTheme() {
    if (!localStorage.getItem('theme')) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            window.setTheme('light');
        }
    }
}

// Appeler au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', detectSystemTheme);
} else {
    detectSystemTheme();
}

// Écouter les changements de préférence système
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function(e) {
        // Ne changer que si l'utilisateur n'a pas de préférence manuelle
        if (!localStorage.getItem('theme-manual')) {
            window.setTheme(e.matches ? 'light' : 'dark');
        }
    });
}