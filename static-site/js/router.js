class Router {
    constructor() {
        this.routes = {
            '/': 'home',
            '/about': 'about',
            '/services': 'services',
            '/process': 'process',
            '/contact': 'contact'
        };

        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => this.loadRoute());
        window.addEventListener('load', () => this.loadRoute());

        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                this.updateActiveLinks(e.target.getAttribute('href'));
            }
        });
    }

    loadRoute() {
        const hash = window.location.hash.slice(1) || '/';
        const route = this.routes[hash] || 'home';

        this.render(route);
        this.updateActiveLinks('#' + hash);

        const nav = document.getElementById('nav');
        if (hash !== '/') {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        window.scrollTo(0, 0);
    }

    render(page) {
        const app = document.getElementById('app');
        const template = document.getElementById(`${page}-template`);

        if (template) {
            app.innerHTML = template.innerHTML;

            if (page === 'contact') {
                this.initContactForm();
            }
        }
    }

    updateActiveLinks(currentHash) {
        document.querySelectorAll('.nav-link, .mobile-menu-link, .footer-nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active');
            }
        });
    }

    initContactForm() {
        const form = document.getElementById('contactForm');
        const formSuccess = document.getElementById('formSuccess');

        if (form) {
            form.addEventListener('submit', (e) => {
                form.style.display = 'none';
                formSuccess.style.display = 'flex';

                setTimeout(() => {
                    form.style.display = 'block';
                    formSuccess.style.display = 'none';
                    form.reset();
                }, 3000);
            });
        }
    }
}

const router = new Router();
