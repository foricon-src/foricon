export function GET(_, { params: { uid }}) {
    return new Response(`
        const { log, warn, error } = console;
        const uid = '${uid}';
        
        const listeners = new WeakMap();
        const iconListeners = new WeakMap();
        const styleListeners = new WeakMap();

        window.foriconPackageIsLoaded = false;

        (async () => {
            customElements.define('f-icon', class extends HTMLElement {
                getIcon() {
                    return this.getAttribute('icon');
                }
                setIcon(iconName) {
                    if (typeof iconName != 'string') error('Invalid value format: iconName must be a valid string');
                    else this.setAttribute('icon', iconName);
                }
                toggleIcon(icon1Name, icon2Name) {
                    let currentIcon = this.getIcon();
                    if (!icon1Name) error(\`Missing arguments: icon1Name is undefined\`);
                    else if (!icon2Name) error(\`Missing arguments: icon2Name is undefined\`);
                    else this.setIcon(currentIcon == icon1Name ? icon2Name : icon1Name);
                }
                getStyle() {
                    return this.getAttribute('i-s') || 'solid';
                }
                setStyle(styleName) {
                    if (typeof styleName != 'string') error('Invalid value format: Style name must be a valid string');
                    else if (![ 'solid', 'outline', 'duotone/solid', 'duotone/outline' ].includes(styleName)) error(\`Invalid value: '\${styleName}' is not supported\`)
                    else this.setAttribute('i-s', styleName);
                }
                toggleStyle(style1Name, style2Name) {
                    let currentStyle = this.getAttribute('i-s') || 'solid';
                    if (!style1Name) error('Missing arguments: style1Name is undefined');
                    else if (!style2Name) error('Missing arguments: style2Name is undefined');
                    else this.setStyle(currentStyle == style1Name ? style2Name : style1Name);
                }
                getAnimation() {
                    let value = this.getAttribute('animation');
                    if (!value) return null;
                    let [ animation, speed = null ] = value.split('-');
                    return { animation, speed };
                }
                setAnimation(animationName, speedName) {
                    if (animationName == null) this.removeAttribute('animation');
                    else if (typeof animationName != 'string' || (speedName && typeof speedName != 'string'))
                        error('Invalid value format: animationName and speedName must be a valid string');
                    else if (![
                        'spin', 'spin-reverse',
                        'ltfade', 'fade', 'hvfade', 'ulfade', 'csfade',
                        'smbeat', 'beat', 'bgbeat', 'fadebeat', 'csbeat',
                        'flip-x', 'flip-y', 'flip-xy'
                    ].includes(animationName)) error(\`Invalid value: '\${animationName}' is not supported\`);
                    else if (speedName && ![
                        'xxslow', 'xslow', 'slow', 'semislow',
                        '',
                        'semifast', 'fast', 'xfast', 'xxfast'
                    ].includes(speedName)) error(\`Invalid value: '\${speedName}' is not supported\`);
                    else this.setAttribute('animation', \`\${animationName}\${speedName ? \`-\${speedName}\` : ''}\`);
                }
                getSize() {
                    return this.getAttribute('size') || null;
                }
                setSize(sizeName) {
                    if (sizeName == null) this.removeAttribute('size');
                    else if (typeof sizeName == 'string') {
                        if ([ 'smallest', 'smaller', 'small', 'large', 'larger', 'largest' ].includes(sizeName)) this.setAttribute('size', sizeName);
                        else error(\`Invalid value: '\${sizeName}' is not supported\`);
                    }
                    else error('Invalid value format: sizeName must be a valid string');
                }
                getScale() {
                    return this.getAttribute('scale') || null;
                }
                setScale(scaleName) {
                    if (scaleName == null) this.removeAttribute('scale');
                    else if (typeof scaleName == 'string') {
                        let scales = [ 'xsmaller', 'smaller', 'larger', 'xlarger' ];
                        if (scales.includes(scaleName)) this.setAttribute('scale', scaleName);
                        else error(\`Invalid value: '\${scaleName}' is not supported\`);
                    }
                    else error('Invalid value format: scaleName must be a valid string');
                }
                getRotate(value) {
                    return this.getAttribute('f-rotate') || this.getAttribute('rotate') || null;
                }
                rotate(value, useFRotate) {
                    let attr = useFRotate ? 'f-rotate' : 'rotate';
                    if (value == null) this.removeAttribute(attr);
                    else if (typeof value == 'string' || typeof value == 'number') {
                        let values = [ '90', '180', '270', 'flip-x', 'flip-y' ];
                        if (values.includes(value.toString())) this.setAttribute(attr, value);
                        else error(\`Invalid value: '\${value}' is not supported\`);
                    }
                    else error('Invalid value format: value must be a valid string or number');
                }
                changesOn(event, options = [], element = this) {
                    if (![ 'click', 'hold', 'hover', 'focus' ].includes(event)) error(\`Invalid value: '\${event}' is not supported\`);
                    else if (listeners.get(this)?.has(event))
                        warn(\`Duplicate listener: This icon already has another '\${event}' listener added. Please remove it before adding more.\`);
                    else if (!Array.isArray(options)) error('Invalid value format: options must be a valid array');
                    else if (!(element instanceof HTMLElement)) error('Invalid value format: element must be a valid HTML element');
                    else {
                        let enabled = true, active = false;
                        let normalized = [];
                        let existed = [];

                        let handlers = {
                            icon: value => this.setIcon(value),
                            style: value => this.setStyle(value),
                            size: value => this.setSize(value),
                            scale: value => this.setScale(value),
                            rotate: value => this.rotate(value),
                            'f-rotate': value => this.rotate(value, true),
                            animation: value => this.setAnimation(value?.name || null, value?.speed),
                        }
                        let eventMap = {
                            hover: ['pointerenter', 'pointerleave'],
                            hold: [
                                'pointerdown',
                                'pointerup',
                                'pointercancel',
                                'lostpointercapture'
                            ],
                            focus: ['focusin', 'focusout']
                        }

                        function isPlainObject(value) {
                            return value !== null &&
                                typeof value == 'object' &&
                                !Array.isArray(value) &&
                                Object.getPrototypeOf(value) == Object.prototype;
                        }

                        for (let option of options) {
                            let obj;
                            if (Array.isArray(option)) {
                                if (![ 2, 3 ].includes(option.length)) {
                                    error(\`Invalid value: Option using Shortened Syntax must only have 2 or 3 items\`);
                                    continue;
                                }
                                let [ type, value, restore ] = option;
                                obj = { type, value, restore };
                            }
                            else if (!isPlainObject(option)) {
                                error('Invalid value format: option must be an object or array');
                                continue
                            }
                            else obj = option;

                            if (typeof obj.type != 'string') error('Invalid value format: type must be a valid string')
                            else if (![ 'icon', 'style', 'size', 'scale', 'f-rotate', 'rotate', 'animation' ].includes(obj.type))
                                error(\`Invalid value: '\${obj.type}' is not supported\`)
                            else if (existed.includes(obj.type))
                                error(\`Duplicated: '\${obj.type}' has already been defined\`)
                            else if (obj.type == 'f-rotate' && existed.includes('rotate') || obj.type == 'rotate' && existed.includes('f-rotate'))
                                error(\`Duplicated: '\${obj.type}' has already been defined. Please note that f-rotate is considered as rotate.\`)
                            else if (obj.value === undefined) error('Missing arguments: value is undefined')
                            else if (obj.type == 'animation' && !isPlainObject(obj.value))
                                error("Invalid value: Invalid animation configuration")
                            else if (obj.type == 'animation' && typeof obj.value.name != 'string')
                                error('Invalid value format: Animation name must be a string')
                            else {
                                existed.push(obj.type);
                                normalized.push(obj);
                            }
                        }

                        let defaults = {
                            ...this.get(),
                            rotate: this.getAttribute('rotate') || null,
                            'f-rotate': this.getAttribute('f-rotate') || null,
                        }
                        
                        let on = e => {
                            if (!enabled || active) return;
                            active = true;
                            event == 'hold' && e && element.setPointerCapture(e.pointerId);
                            for (let option of normalized) {
                                let { type, value, restore = true } = option;
                                handlers[type](value);
                            }
                        }
                        let off = e => {
                            if (!active || event == 'focus' && e && element.contains(e.relatedTarget)) return;
                            active = false;
                            for (let option of normalized) {
                                let { type, restore = true } = option;
                                restore !== false && handlers[type](
                                    restore === true ? defaults[type] : restore
                                )
                            }
                        }
                        
                        if (!listeners.has(this))
                            listeners.set(this, new Map());
                        let currentListeners = listeners.get(this);

                        if (event == 'click') {
                            let onClick = () => enabled && (active ? off() : on());
                            element.addEventListener('click', onClick);
                            currentListeners.set('click', onClick);
                        }
                        else {
                            let events = eventMap[event];
                            element.addEventListener(events[0], on);
                            element.addEventListener(events[1], off);

                            if (event == 'hold') {
                                element.addEventListener(events[2], off);
                                element.addEventListener(events[3], off);
                            }

                            currentListeners.set(event, { on, off });
                        }
                        
                        return {
                            enable() {
                                enabled = true;
                            },
                            disable(restore) {
                                enabled = false;
                                restore && off()
                            },
                            remove() {
                                let value = currentListeners.get(event);
                                if (!value) warn('Listeners have already been removed')
                                else if (event == 'click') element.removeEventListener('click', value)
                                else {
                                    let events = eventMap[event];
                                    element.removeEventListener(events[0], value.on);
                                    element.removeEventListener(events[1], value.off);

                                    if (event == 'hold') {
                                        element.removeEventListener(events[2], value.off);
                                        element.removeEventListener(events[3], value.off);
                                    }
                                }
                                off();
                                currentListeners.delete(event);
                            },
                        }
                    }
                }
                toggleIconOnHover(activeIconName, element = this) {
                    if (iconListeners.has(this)) {
                        warn('Duplicate listener: This icon already has another listener added. Please use removeToggleIconOnHover() to remove it before adding more.');
                        return;
                    }
                    
                    let currentIconName = this.getIcon();
                    
                    let mouseEnter = () => {
                        this.setIcon(activeIconName);
                    }
                    let mouseLeave = () => {
                        this.setIcon(currentIconName);
                    }
                
                    element.addEventListener('mouseenter', mouseEnter);
                    element.addEventListener('mouseleave', mouseLeave);

                    iconListeners.set(this, {
                        element,
                        mouseEnter,
                        mouseLeave,
                    })
                }
                removeToggleIconOnHover() {
                    let listener = iconListeners.get(this);
                    if (!listener) return;
                    let { element, mouseEnter, mouseLeave } = listener;
                    element.removeEventListener('mouseenter', mouseEnter);
                    element.removeEventListener('mouseleave', mouseLeave);
                    iconListeners.delete(this);
                }
                toggleStyleOnHover(activeStyleName, element = this) {
                    if (styleListeners.has(this)) {
                        warn('Duplicate listener: Element already has another listener added. Please use removeToggleStyleOnHover() to remove it before adding more.');
                        return;
                    }
                    
                    let currentStyleName = this.getStyle();
                    
                    let mouseEnter = () => {
                        this.setStyle(activeStyleName);
                    }
                    let mouseLeave = () => {
                        this.setStyle(currentStyleName);
                    }
                
                    element.addEventListener('mouseenter', mouseEnter);
                    element.addEventListener('mouseleave', mouseLeave);

                    styleListeners.set(this, {
                        element,
                        mouseEnter,
                        mouseLeave,
                    })
                }
                removeToggleStyleOnHover() {
                    let listener = styleListeners.get(this);
                    if (!listener) return;
                    let { element, mouseEnter, mouseLeave } = listener;
                    element.removeEventListener('mouseenter', mouseEnter);
                    element.removeEventListener('mouseleave', mouseLeave);
                    styleListeners.delete(this);
                }
                set(options) {
                    if (!options) {
                        error('Missing arguments: options is undefined');
                        return;
                    }
                    
                    const { icon, style, animation, size, scale, rotate } = options;

                    icon && this.setIcon(icon);
                    style && this.setStyle(style);

                    if ('animation' in options) {
                        if (animation == null) this.setAnimation(null);
                        else if (!animation.name) error('Missing arguments: The name of animation is undefined')
                        else this.setAnimation(animation.name, animation.speed);
                    }
                    
                    'size' in options && this.setSize(size);
                    'scale' in options && this.setScale(scale);
                    'rotate' in options && this.rotate(rotate);
                }
                get() {
                    return {
                        name: this.getIcon(),
                        style: this.getStyle(),
                        animation: this.getAnimation(),
                        size: this.getSize(),
                        scale: this.getScale(),
                        rotate: this.getRotate(),
                    }
                }
            })
            
            try {
                const res = await fetch(\`//foricon.vercel.app/api/get-package?uid=\${uid}&timestamp=\${new Date().toISOString()}\`);
                const parsed = await res.json();

                if (!res.ok) throw new Error(parsed.message);
                const { settings, fonts, cssBaseUrl } = parsed;
                
                let s = document.createElement('style');
                s.innerHTML = \`:root {
                    --primary-color: inherit;
                    --secondary-color: inherit;
                    --primary-opacity: 1;
                    --secondary-opacity: 0.4;
                }
                \${fonts.b1 ? \`@font-face {
                    font-family: 'Foricon Beta 1';
                    src: url('\${fonts.b1}');
                    font-weight: normal;
                    font-style: normal;
                    text-rendering: \${settings.renderingOption == 'performance' ? 'optimizeSpeed' : 'geometricPrecision'};
                }\` : ''}
                \${fonts.b2 || fonts.b2w2 ? \`@font-face {
                    font-family: 'Foricon Beta';
                    src: \${[ fonts.b2, fonts.b2w2 ].filter(Boolean).map(link => \`url('\${link}')\`).join(', ')};
                    font-weight: normal;
                    font-style: normal;
                    text-rendering: \${settings.renderingOption == 'performance' ? 'optimizeSpeed' : 'geometricPrecision'};
                }\` : ''}

                f-icon {
                    animation: 1s ease infinite;
                    position: relative;
                    font-family: 'Foricon Beta';
                    line-height: 1em;
                    font-weight: normal;
                    display: inline-flex;
                    justify-content: center;

                    &::before {
                        color: var(--primary-color);
                    }
                    &[i-s^='duotone/']::before, &[reversed][i-s^='duotone/']::after {
                        opacity: var(--primary-opacity);
                    }
                    &[i-s^='duotone/']::after, &[reversed][i-s^='duotone/']::before {
                        color: var(--secondary-color);
                        opacity: var(--secondary-opacity);
                    }
                    &[i-s^='duotone/']::after {
                        position: absolute;
                    }
                    &[animation*='-xxslow'] {
                        animation-duration: 3s;
                    }
                    &[animation*='-xslow'] {
                        animation-duration: 2.5s;
                    }
                    &[animation*='-slow'] {
                        animation-duration: 2s;
                    }
                    &[animation*='-semislow'] {
                        animation-duration: 1.5s;
                    }
                    &[animation*='-semifast'] {
                        animation-duration: .75s;
                    }
                    &[animation*='-fast'] {
                        animation-duration: .5s;
                    }
                    &[animation*='-xfast'] {
                        animation-duration: .25s;
                    }
                    &[animation*='-xxfast'] {
                        animation-duration: .125s;
                    }
                    
                    &[animation^='spin'] {
                        animation-name: spin;
                        animation-timing-function: linear;
                    }
                    &[animation^='spin-reverse'] {
                        animation-direction: reverse;
                    }
                    &[animation^='ltfade'] {
                        animation-name: ltfade;
                    }
                    &[animation^='fade'] {
                        animation-name: fade;
                    }
                    &[animation^='hvfade'] {
                        animation-name: hvfade;
                    }
                    &[animation^='ulfade'] {
                        animation-name: ulfade;
                    }
                    &[animation^='csfade'] {
                        animation-name: csfade;
                    }
                    &[animation^='smbeat'] {
                        animation-name: smbeat;
                    }
                    &[animation^='beat'] {
                        animation-name: beat;
                    }
                    &[animation^='bgbeat'] {
                        animation-name: bgbeat;
                    }
                    &[animation^='fadebeat'] {
                        animation-name: fadebeat;
                    }
                    &[animation^='csbeat'] {
                        animation-name: csbeat;
                    }
                    &[animation^='flip-x'] {
                        animation-name: flipX;
                    }
                    &[animation^='flip-y'] {
                        animation-name: flipY;
                    }
                    &[animation^='flip-xy'] {
                        animation-name: flipXY;
                    }
                    &[animation^='shake'] {
                        animation-name: shake;
                    }
                    &[animation^='bounce'] {
                        animation-name: bounce;
                    }
                    
                    &[size='smallest'] {
                        font-size: .25em !important;
                    }
                    &[size='smaller'] {
                        font-size: .5em !important;
                    }
                    &[size='small'] {
                        font-size: .75em !important;
                    }
                    &[size='large'] {
                        font-size: 1.25em !important;
                    }
                    &[size='larger'] {
                        font-size: 1.5em !important;
                    }
                    &[size='largest'] {
                        font-size: 1.75em !important;
                    }
                    
                    &[scale='xsmaller'] {
                        scale: .5;
                    }
                    &[scale='smaller'] {
                        scale: .75;
                    }
                    &[scale='larger'] {
                        scale: 1.25;
                    }
                    &[scale='xlarger'] {
                        scale: 1.5;
                    }
                    
                    &[rotate='90'], &[f-rotate='90'] {
                        rotate: 90deg;
                    }
                    &[rotate='180'], &[f-rotate='180'] {
                        rotate: 180deg;
                    }
                    &[rotate='270'], &[f-rotate='270'] {
                        rotate: 270deg;
                    }
                    &[rotate='flip-x'], &[f-rotate='flip-x'] {
                        transform: rotateX(180deg);
                    }
                    &[rotate='flip-y'], &[f-rotate='flip-y'] {
                        transform: rotateY(180deg);
                    }
                }
                f-icon[b1] {
                    font-family: 'Foricon Beta 1';
                }

                @keyframes spin {
                    0% {rotate: z 0}
                    100% {rotate: z 360deg}
                }
                @keyframes ltfade {
                    0% {opacity: 1}
                    50% {opacity: 0.75}
                    100% {opacity: 1}
                }
                @keyframes fade {
                    0% {opacity: 1}
                    50% {opacity: 0.5}
                    100% {opacity: 1}
                }
                @keyframes hvfade {
                    0% {opacity: 1}
                    50% {opacity: 0.25}
                    100% {opacity: 1}
                }
                @keyframes ulfade {
                    0% {opacity: 1}
                    50% {opacity: 0}
                    100% {opacity: 1}
                }
                @keyframes csfade {
                    0% {opacity: var(--max)}
                    50% {opacity: var(--min)}
                    100% {opacity: var(--max)}
                }
                @keyframes smbeat {
                    0% {scale: 1}
                    50% {scale: .6}
                    100% {scale: 1}
                }
                @keyframes beat {
                    0% {scale: 1.2}
                    50% {scale: .8}
                    100% {scale: 1.2}
                }
                @keyframes bgbeat {
                    0% {scale: 1.4}
                    50% {scale: 1}
                    100% {scale: 1.4}
                }
                @keyframes fadebeat {
                    0% {opacity: 1; scale: 1.2}
                    50% {opacity: 0.5; scale: .8}
                    100% {opacity: 1; scale: 1.2}
                }
                @keyframes csbeat {
                    0% {scale: var(--max)}
                    50% {scale: var(--min)}
                    100% {scale: var(--max)}
                }
                @keyframes flipX {
                    0% {rotate: x 0;}
                    50% {rotate: x 180deg;}
                    100% {rotate: x 360deg;}
                }
                @keyframes flipY {
                    0% {rotate: y 0;}
                    50% {rotate: y 180deg;}
                    100% {rotate: y 360deg;}
                }
                @keyframes flipXY {
                    0% {transform: rotateX(0deg) rotateY(0deg);}
                    50% {transform: rotateX(180deg) rotateY(180deg);}
                    100% {transform: rotateX(360deg) rotateY(360deg);}
                }
                @keyframes shake {
                    0% {rotate: 0deg}
                    5% {rotate: 0deg}
                    10% {rotate: 6deg}
                    15% {rotate: -6deg}
                    20% {rotate: 8deg}
                    25% {rotate: -8deg}
                    30% {rotate: 10deg}
                    35% {rotate: -10deg}
                    40% {rotate: 12deg}
                    45% {rotate: -12deg}
                    50% {rotate: 12deg}
                    55% {rotate: -12deg}
                    60% {rotate: 12deg}
                    65% {rotate: -10deg}
                    70% {rotate: 10deg}
                    75% {rotate: -8deg}
                    80% {rotate: 8deg}
                    85% {rotate: -6deg}
                    90% {rotate: 6deg}
                    95% {rotate: 0deg}
                    100% {rotate: 0deg}
                }
                @keyframes bounce {
                    0% {
                        scale: 1.2 .8;
                        translate: 0 10%;
                        animation-timing-function: cubic-bezier(.5, 0, 1, .75);
                    }
                    20% {
                        scale: 1 1;
                        translate: 0;
                        animation-timing-function: cubic-bezier(.1, .25, .5, 1);
                    }
                    25% {
                        scale: .8 1.2;
                    }
                    35% {
                        scale: 1 1;
                    }
                    50% {
                        scale: 1 1;
                        translate: 0 -50%;
                        animation-timing-function: cubic-bezier(.5, 0, .9, .75);
                    }
                    80% {
                        scale: 1 1;
                        translate: 0;
                        animation-timing-function:  cubic-bezier(0, .25, .5, 1);
                    }
                    100% {
                        scale: 1.2 .8;
                        translate: 0 10%;
                    }
                }\`;
                let head = document.querySelector('head')
                head.append(s);

                let { versions } = settings;
                for (let ver of versions) {
                    if (versions.includes('b2') && ver == 'b2w2') continue;
                    let link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = \`\${cssBaseUrl}/foricon/\${ver == 'b2w2' ? 'b2' : ver}.css\`;
                    head.append(link);
                }
                window.foriconPackageIsLoaded = true;
                log('[Foricon Package] Loaded successfully');
            }
            catch (err) { error('[Foricon Package] An error occurred:', err) };
        })()
    `, {
        headers: {
            'Content-Type': 'application/javascript',
            'Access-Control-Allow-Origin': '*',
        }
    })
}