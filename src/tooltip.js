class Tooltip {
    constructor() {
        this.tooltip = null;
        this.init();
    }

    init() {
        this.createTooltipElement();
        this.bindEvents();
    }

    createTooltipElement() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'tooltip';
        this.tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 14px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.2s;
            z-index: 1000;
            white-space: nowrap;
        `;
        document.body.appendChild(this.tooltip);
    }

    bindEvents() {
        document.addEventListener('mouseover', (e) => {
            const target = e.target.closest('[data-tooltip]');
            if (target) {
                this.show(target, target.dataset.tooltip);
            }
        });

        document.addEventListener('mouseout', (e) => {
            const target = e.target.closest('[data-tooltip]');
            if (target) {
                this.hide();
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (this.tooltip.style.opacity === '1') {
                this.position(e.clientX, e.clientY);
            }
        });
    }

    show(element, text) {
        this.tooltip.textContent = text;
        this.tooltip.style.opacity = '1';
    }

    hide() {
        this.tooltip.style.opacity = '0';
    }

    position(x, y) {
        const tooltipRect = this.tooltip.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let left = x + 10;
        let top = y - tooltipRect.height - 10;

        if (left + tooltipRect.width > windowWidth) {
            left = x - tooltipRect.width - 10;
        }

        if (top < 0) {
            top = y + 10;
        }

        this.tooltip.style.left = `${left}px`;
        this.tooltip.style.top = `${top}px`;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Tooltip;
} else if (typeof window !== 'undefined') {
    window.Tooltip = Tooltip;
}