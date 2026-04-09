/**
 * Appends pairs of keys and values to a specific object
 * @param {Object} target - Object to be appended
 * @param {Object} data - Data to append
 */
globalThis.appendData = (target, data) => {
    for (let key in data)
        target[key] = data[key];
}
/**
 * Waits for a while before continuing the task
 * @param {number} s - Seconds
 */
globalThis.wait = (s) => {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}
/**
 * Makes element(s) to be in active state
 * @param {HTMLElement} elems - Element(s) to activate
 */
globalThis.activate = (...elems) => {
    let { body } = document;
    elems.forEach(elem => {
        if (elem.classList.contains('modal') && !document.querySelector('.modal.active')) {
            pos = window.scrollY;
            if (window.innerHeight < body.offsetHeight) {
                body.style.position = 'fixed'; 
                body.style.top = `${pos * -1}px`;
                body.style.width = '100%';
                body.style.overflow = 'hidden scroll';
            }
        }
        elem.classList.add('active');
    })
}
/**
 * Removes active state from element(s)
 * @param {HTMLElement} elems - Element(s) to inactivate
 */
globalThis.inactivate = (...elems) => {
    let { body } = document;
    elems.forEach(elem => {
        let html = document.documentElement;
        elem.classList.remove('active');
        if (elem.classList.contains('modal') && document.querySelectorAll('.modal.active').length == 0) {
            html.style.scrollBehavior = 'auto';
            body.style.position = body.style.top = body.style.width = body.style.overflow = '';
            scrollTo(0, pos);
            html.style.scrollBehavior = ''
        }
    })
}
/**
 * Checks whether an element is in active state
 * @param {HTMLElement} elem - Element to check
 * @returns {Boolean} Boolean
 */
globalThis.isActive = elem => {
    return elem.classList.contains('active');
}
/**
 * Toggles active state of elements
 * @param {HTMLElement} elems - Element(s) to toggle
 */
globalThis.toggle = (...elems) => {
    elems.forEach(
        elem => isActive(elem) ? inactivate(elem) : activate(elem)
    )
}
/**
 * Makes elements unclickable
 * @param {HTMLElement} elems - Element(s) to disable
 */
globalThis.disable = (...elems) => {
    elems.forEach(elem => {
        elem.setAttribute('disabled', '');
        querySelec(elem, ':focus')?.blur();
    })
}
/**
 * Makes elements clickable again
 * @param {HTMLElement} elems - Element(s) to enable
 */
globalThis.enable = (...elems) => {
    elems.forEach(elem => {
        elem.removeAttribute('disabled');
    })
}
/**
 * Checks whether an element is enabled
 * @param {HTMLElement} elem - Element to check
 * @returns {Boolean} Boolean
 */
globalThis.isEnabled = (elem) => {
    return elem.getAttribute('disabled') == undefined;
}
/**
 * Removes all children of element(s)
 * @param {HTMLElement} elems - Element(s) to has its child removed
 */
globalThis.clear = (...elems) => {
    elems.forEach(elem => elem && (elem.innerHTML = ''));
}
/**
 * Removes element(s)
 * @param {HTMLElement} elems - Element(s) to remove
 */
globalThis.remove = (...elems) => {
    elems.forEach(elem => elem?.remove());
}
/**
 * Checks whether an element is enabled
 * @param {Boolean} all - `true` to `querySelectorAll`
 * @param {HTMLElement | string} param1 - The element to query from, or query string
 * @param {string} [param2] - Query string
 * @returns {HTMLElement | Array | undefined} Returns an `Array` if `all` is `true`, otherwise returns a `HTMLElement`, or `undefined` if nothing matches
 */
globalThis.qSelec = (all, param1, param2) => {
    let elem = param2 ? param1 : document;
    let str = param2 || param1;
    return elem?.[all ? 'querySelectorAll' : 'querySelector'](str) || undefined;
}