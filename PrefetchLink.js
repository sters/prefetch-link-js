export class PrefetchLink {
    constructor() {
        this.prefetchedLinks = {};
    }

    addEventListener(dom) {
        dom.addEventListener('mouseenter', (e) => {
            const target = e.currentTarget || e.target || e.delegateTarget;

            // disable anchor or javascript
            if (target.href.indexOf('#') !== -1 || target.href.indexOf('javascript:') !== -1) {
                return;
            }

            // disable blank
            if (target.target === 'blank' || target.target === '_blank') {
                return;
            }

            // disable already loaded
            if (this.prefetchedLinks[target.href] === true) {
                return;
            }

            // load
            this.prefetchedLinks[target.href] = true;
            const tag = document.createElement('link');
            tag.rel = 'prefetch';
            tag.href = target.href;
            document.head.appendChild(tag);
        });
    }
}
