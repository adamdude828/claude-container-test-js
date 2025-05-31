class Modal {
    constructor(options = {}) {
        this.options = {
            title: options.title || '',
            content: options.content || '',
            closable: options.closable !== false,
            backdrop: options.backdrop !== false,
            ...options
        };
        this.isOpen = false;
        this.element = null;
        this.init();
    }

    init() {
        this.createElement();
        this.bindEvents();
    }

    createElement() {
        this.element = document.createElement('div');
        this.element.className = 'modal';
        this.element.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-container">
                <div class="modal-header">
                    <h3 class="modal-title">${this.options.title}</h3>
                    ${this.options.closable ? '<button class="modal-close">&times;</button>' : ''}
                </div>
                <div class="modal-body">
                    ${this.options.content}
                </div>
            </div>
        `;
        document.body.appendChild(this.element);
    }

    bindEvents() {
        if (this.options.closable) {
            const closeBtn = this.element.querySelector('.modal-close');
            closeBtn?.addEventListener('click', () => this.close());
        }

        if (this.options.backdrop) {
            const backdrop = this.element.querySelector('.modal-backdrop');
            backdrop?.addEventListener('click', () => this.close());
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen && this.options.closable) {
                this.close();
            }
        });
    }

    open() {
        this.isOpen = true;
        this.element.classList.add('modal-open');
        document.body.classList.add('modal-active');
    }

    close() {
        this.isOpen = false;
        this.element.classList.remove('modal-open');
        document.body.classList.remove('modal-active');
    }

    destroy() {
        this.element?.remove();
        document.body.classList.remove('modal-active');
    }

    setContent(content) {
        const body = this.element.querySelector('.modal-body');
        if (body) body.innerHTML = content;
    }

    setTitle(title) {
        const titleEl = this.element.querySelector('.modal-title');
        if (titleEl) titleEl.textContent = title;
    }
}

module.exports = Modal;