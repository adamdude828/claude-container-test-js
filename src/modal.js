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
        this.onClose = options.onClose || (() => {});
    }

    create() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-dialog">
                <div class="modal-content">
                    ${this.options.title ? `<div class="modal-header">
                        <h3 class="modal-title">${this.options.title}</h3>
                        ${this.options.closable ? '<button class="modal-close">&times;</button>' : ''}
                    </div>` : ''}
                    <div class="modal-body">
                        ${this.options.content}
                    </div>
                </div>
            </div>
        `;

        this.addStyles();
        this.bindEvents(modal);
        return modal;
    }

    addStyles() {
        if (document.getElementById('modal-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'modal-styles';
        styles.textContent = `
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
            }
            .modal-dialog {
                position: relative;
                max-width: 500px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
            }
            .modal-content {
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem;
                border-bottom: 1px solid #e0e0e0;
            }
            .modal-title {
                margin: 0;
                font-size: 1.25rem;
            }
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-body {
                padding: 1rem;
            }
        `;
        document.head.appendChild(styles);
    }

    bindEvents(modal) {
        if (this.options.closable) {
            const closeBtn = modal.querySelector('.modal-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.close());
            }
        }

        if (this.options.backdrop) {
            const backdrop = modal.querySelector('.modal-backdrop');
            backdrop.addEventListener('click', () => this.close());
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen && this.options.closable) {
                this.close();
            }
        });
    }

    open() {
        if (this.isOpen) return;
        
        this.element = this.create();
        document.body.appendChild(this.element);
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
    }

    close() {
        if (!this.isOpen) return;
        
        this.element.remove();
        this.element = null;
        this.isOpen = false;
        document.body.style.overflow = '';
        this.onClose();
    }

    setContent(content) {
        if (this.element) {
            const body = this.element.querySelector('.modal-body');
            body.innerHTML = content;
        }
        this.options.content = content;
    }
}

module.exports = Modal;