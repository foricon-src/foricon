'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import { get, ref } from 'firebase/database';
import { auth, dbFirestore, db } from './firebase';
import { useRouter } from 'next/router';

class Info extends Error {
    constructor(message) {
        super(message);
        this.name = 'Info:';
    }
}
class Warn extends Error {
    constructor(message) {
        super(message);
        this.name = 'Warning';
    }
}

export default function Process() {
    let router = useRouter();

    useEffect(() => {(async () => {
        let { body, documentElement: html } = document;
        let { pathname } = location;
        let theme = localStorage.getItem('theme');
        
        let header = qSelec(false, 'header');
        let header_center = qSelec(false, header, 'ul[name="center"]');
        let header_right = qSelec(false, header, 'ul[name="right"]');
        let header_right_accBtn = qSelec(false, header_right, 'li:last-child');
        let header_right_accBtn_span = qSelec(false, header_right_accBtn, 'span');
        let header_all = qSelec(false, header, 'ul[name="all"]');
        
        (
            theme == 'dark'
            ||
            !theme && window.matchMedia?.('(prefers-color-scheme: dark)').matches
        ) && !body.classList.contains('dark') && toggleTheme();
        
        language = localStorage.getItem('language');
        country = localStorage.getItem('country');
        timezone = new Date().getTimezoneOffset() / 60;
        
        if (!pageLoaded) {
            if (!language) {
                let res = await(await fetch('https://ipinfo.io/json')).json();
                country = res.country;
                
                language = {
                    VN: 'vi', FR: 'fr', IT: 'it', KR: 'kr',
                    JP: 'ja', DE: 'de', NL: 'nl', DK: 'dk',
                    PT: 'pt', ES: 'es', RU: 'ru',
                }[country] || 'en';
                
                localStorage.setItem('language', language);
                localStorage.setItem('country', country);
                sessionStorage.setItem('visited', true);
                
                if (!['14.187', '113.23', '27.2', '118.69'].some(i => ip.startsWith(i))) {
                    let { userAgent } = navigator;
                    let browserName =
                    userAgent.indexOf('OPR') + 1 ? 'Opera' :
                    userAgent.indexOf('Edg') + 1 ? 'Microsoft Edge' :
                    userAgent.indexOf('MSIE') + 1 ? 'Microsoft Internet Explorer' :
                    userAgent.indexOf('Chrome') + 1 ? 'Chrome' :
                    userAgent.indexOf('Safari') + 1 ? 'Safari' :
                    userAgent.indexOf('Firefox') + 1 ? 'Firefox' : 'Other';
                    
                    let date = new Date();
                    let today = formatDate({
                        day: date.getUTCDate(),
                        month: date.getUTCMonth(),
                        year: date.getUTCFullYear(),
                    }, 'en');
                    let stats = (await getDoc(doc(dbFirestore, 'statistics', 'item'))).data();
                    stats.visits[today] ||= {
                        browsers: {},
                        countries: {},
                    }
                    
                    function update(obj, key) {
                        obj[key] = (obj[key] || 0) + 1;
                    }
                    let { browsers, countries } = stats.visits[today];
                    update(browsers, browserName);
                    update(countries, res.country);
                    
                    await setDoc(doc(dbFirestore, 'statistics', 'item'), stats);
                }
            }

            onAuthStateChanged(auth, async res => {
                let locked = (await get(ref(db, 'locked'))).val();
                let admin;
                let { body } = document;
                
                if (res) {
                    user = res;
                    let d = await getDoc(doc(dbFirestore, 'users', user.uid));
                    user.doc = d.data();
                    
                    qSelec(true, '.signup').forEach(each => each.remove());
                    if (user.uid == 'ud4lP1mhq4XvynG7qUlcsAxi0Q02') {
                        document.addEventListener('keydown', ({ ctrlKey, key }) => {
                            ctrlKey && key == '/' && location.pathname != '/p/management-center.html' && !document.activeElement.matches('textarea, input') &&
                            go(router, 'admin', true);
                        }, false)
                        admin = true;
                    }
                    
                    let { font, indent } = user.doc.personalization;
                    body.classList.remove('cons');
                    body.classList.add(font);
                    body.indentSize = indent;
                }
                else user = false;
                // if (!admin) {
                //     if (['manager', 'management-center', 'admin'].some(path => location.pathname == `/p/${path}.html`)) document.documentElement.innerHTML = '403 Forbidden';
                //     else if (locked) document.documentElement.innerHTML = 'Foricon is updating to the newer version. Please come back later.';
                // }
            })
            
            let icons = (await get(ref(db, 'icons/'))).val();
            for (let name in icons) {
                let icon = icons[name];
                webData.icons.push({
                    name,
                    categories: icon.categories.map(cate => cate.replace('bussiness', 'business')),
                    styles: icon.styles,
                    glyphs: icon.glyphs,
                    unicodes: icon.unicodes,
                })
            }
            let iconsB2 = (await get(ref(db, 'iconsB2/'))).val();
            for (let name in iconsB2) {
                let icon = iconsB2[name];
                webData.iconsB2.push({
                    name,
                    categories: icon.categories,
                    styles: icon.styles,
                    glyphs: icon.glyphs,
                    unicodes: icon.unicodes,
                })
            }
            
            customElements.define('f-upload', class extends HTMLElement {
                async connectedCallback() {
                    let elem = this;
                    let maxSize = getAttr(elem, 'max-size');
                    let accept = getAttr(elem, 'accept') || '';
                    let multiple = getAttr(elem, 'multiple') != undefined;
                    
                    elem.innerHTML = `
                <f-icon i-s='outline' icon='arrow-up-from-bracket'/>
                <span>Drag & drop the file here, or</span>
                <ul class='btn-list darker vertical'/>
                <a class='btn primary' href='javascript:void(0)'>Add file${maxSize ? ` (${formatBytes(maxSize)} maximum)` : ''}</a>`;
                    let list = qSelec(false, elem, 'ul');
                    let btn = qSelec(false, elem, 'a');
                    
                    elem.files = [];
                    
                    let input = document.createElement('input');
                    input.type = 'file';
                    input.multiple = multiple;
                    input.accept = accept;
                    
                    Object.defineProperty(elem, '_v', {
                        set(newFiles) {
                            elem.files = newFiles;
                            clear(list);
                            elem.files.forEach((file, i) => {
                                let li = document.createElement('li');
                                li.innerHTML = `<f-icon icon='file'/><span>${file.name}</span>`;
                                li.querySelector('f-icon').toggleIconOnHover('trash-can', li);
                                li.addEventListener('click', () => {
                                    let array = [...elem.files];
                                    array.splice(i, 1);
                                    elem._v = array;
                                    !multiple && !elem.files.length && enable(btn);
                                })
                                list.append(li);
                            })
                            elem.dispatchEvent(new Event('change'));
                        }
                    })
                    
                    elem.addEventListener('dragover', e => {
                        if (multiple || !multiple && !elem.files.length) {
                            e.preventDefault();
                            elem.classList.add('drag');
                        }
                    })
                    elem.addEventListener('dragleave', () => elem.classList.remove('drag'));
                    elem.addEventListener('drop', e => {
                        if (multiple || !multiple && !elem.files.length) {
                            e.preventDefault();
                            
                            elem.classList.remove('drag');
                            
                            let { files } = e.dataTransfer;
                            if (files.length + 1) {
                                let dataTransfer = new DataTransfer();
                                [...files].forEach((file) => {
                                    let acceptedType = accept.split(',').map(type => type.trim());
                                    if (!acceptedType.some(type => type == file.type || type.includes('*') && file.type.startsWith(type.split('/')[0])))
                                        notify('warn', 'This type of file is not accepted by the uploader');
                                    else if (maxSize && file.size > maxSize)
                                        notify('warn', `Your file cannot be larger than ${formatBytes(maxSize)}`);
                                    else
                                        dataTransfer.items.add(file);
                                })
                                input.files = dataTransfer.files;
                                input.dispatchEvent(new Event('change'));
                            }
                        }
                    })
                    
                    addEvLis(input, 'change', () => {
                        elem.add(input.files);
                        input.files = new DataTransfer().files;
                    })
                    
                    addEvLis(btn, 'click', () => {
                        btn.blur();
                        input.click();
                    })
                }
                add(files) {
                    let elem = this;
                    let btn = qSelec(false, elem, 'a');
                    let maxSize = getAttr(elem,'max-size');
                    let notMultiple = getAttr(elem,'multiple') == undefined;
                    
                    if (notMultiple && this.files.length > 1) notify('warn', 'Multiple upload is not allowed');
                    else {
                        this._v = [...this.files, ...[...files].filter(file => {
                            let { name, size } = file;
                            if (this.files.some(i => i.name == name))
                                notify('warn', `Cannot upload ${name} because you have already added another file with the same name`);
                            else if (maxSize && size > maxSize)
                                notify('warn', `Your file cannot be larger than ${formatBytes(maxSize)}`);
                            else return true;
                        })]
                        
                        notMultiple && this.files.length && disable(btn);
                    }
                }
                clear() {
                    enable(qSelec(false, this, 'a'));
                    this._v = [];
                }
            })
            customElements.define('preview-code', class extends HTMLElement {
                constructor() {
                    super();
                    
                    let iframe = document.createElement('iframe');
                    
                    clear(this);
                    iframe.scrolling = 'no';
                    
                    this.append(iframe);
                    
                    (async () => {
                        while (document.getElementById('loading')) await wait();
                        iframe.srcdoc = this.nextElementSibling.matches('code') ? `
                            <head>
                                <script data-uid='ud4lP1mhq4XvynG7qUlcsAxi0Q02' src='//foricon-src.github.io/main/loader.js'><` + `/script>
                                <style>html {font-size: 27px; padding: 25px 30px} body {margin: 0;color: gray} * {transition: all .2s ease}</style>
                            </head>
                            <body>
                                ${this.nextElementSibling.innerText.replaceAll('\u00A0', ' ').replaceAll('\u200b', '')}
                            </body>` : '';
                        while (true) {
                            await wait();
                            iframe.style.height = `${(iframe.contentWindow.document.body?.offsetHeight || 0) + 50}px`;
                        }
                    })()
                }
            })
            customElements.define('f-player', class extends HTMLElement {
                async connectedCallback() {
                    let elem = this;
                    let state, play, controlsTimer, volumeTimer, controllingNotifyTimer, dragging, latestVolume = 0;
                    
                    elem.classList.add('show');
                    elem.innerHTML = `
                        <div class='button player_more'>
                            <f-icon icon='ellipsis' i-s='outline'></f-icon>
                        </div>
                        <div class='player_info'>
                            <div>
                            <h3>Foricon Player <span>v3.1.2</span></h3>
                            <h6>Some ways to use Foricon Player</h6>
                            <p>
                                Click to backward or forward button or use arrow keys to jump 5s
                                <br>
                                Use with <span class='key'>Ctrl</span> to jump 10s
                                <br>
                                Use with <span class='key'>Shift</span> to jump 30s
                            </p>
                            </div>
                        </div>
                        <div class='player_controlling'></div>
                        <div class='player_control'>
                            <div class='player_control_timeline'>
                                <div>
                                <span>00:00</span>
                                <div></div>
                            </div>
                            </div>
                            <div class='player_control_controls'>
                                <div class='player_control_controls_left'>
                                    <div class='button' name='mute'>
                                    <f-icon icon='volume-high'></f-icon>
                                    </div>
                                    <input type='range' step='.01' value='1' max='1'>
                                    <div class='player_control_controls_left_timer'>
                                    <span class='player_control_controls_left_timer_current-time'>00:00</span> / <span class='player_control_controls_left_timer_duration'>00:00</span>
                                    </div>
                                </div>
                                <div class='player_control_controls_center'>
                                    <div class='button' name='backward'>
                                    <f-icon icon='backward'></f-icon>
                                    </div>
                                    <div class='button' name='play'>
                                    <f-icon icon='play'></f-icon>
                                    </div>
                                    <div class='button' name='forward'>
                                    <f-icon icon='forward'></f-icon>
                                    </div>
                                </div>
                                <div class='player_control_controls_right'>
                                    <div class='button' name='speed'>
                                    <f-icon icon='gauge-5'></f-icon>
                                    </div>
                                    <div class='button' name='fullscreen'>
                                    <f-icon icon='expand' i-s='outline'></f-icon>
                                    </div>
                                    <ul class='player_control_controls_right_speed-options btn-list vertical'>
                                    <li data-value='.5'>0.5</li>
                                    <li data-value='.75'>0.75</li>
                                    <li data-value='1' class='active'>Normal</li>
                                    <li data-value='1.25'>1.25</li>
                                    <li data-value='1.5'>1.5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <video></video>`;
                    
                    let more = qSelec(false, elem, '.player_more');
                    let info = qSelec(false, elem, '.player_info');
                    let controlling = qSelec(false, elem, '.player_controlling');
                    let control = qSelec(false, elem, '.player_control');
                    let control_timeline = qSelec(false, control, '.player_control_timeline');
                    let control_timeline_div = qSelec(false, control_timeline, 'div');
                    let control_timeline_div_span = qSelec(false, control_timeline_div, 'span');
                    let control_controls = qSelec(false, control, '.player_control_controls');
                    let control_controls_left = qSelec(false, control_controls, '.player_control_controls_left');
                    let control_controls_left_mute = qSelec(false, control_controls_left, '[name=&quot;mute&quot;]');
                    let control_controls_left_mute_icon = qSelec(false, control_controls_left_mute, 'f-icon');
                    let control_controls_left_range = qSelec(false, control_controls_left, 'input');
                    let control_controls_left_timer = qSelec(false, control_controls_left, '.player_control_controls_left_timer');
                    let control_controls_left_timer_currentTime = qSelec(false, control_controls_left_timer, '.player_control_controls_left_timer_current-time');
                    let control_controls_left_timer_duration = qSelec(false, control_controls_left_timer, '.player_control_controls_left_timer_duration');
                    let control_controls_center = qSelec(false, control_controls, '.player_control_controls_center');
                    let control_controls_center_backward = qSelec(false, control_controls_center, '[name=&quot;backward&quot;]');
                    let control_controls_center_play = qSelec(false, control_controls_center, '[name=&quot;play&quot;]');
                    let control_controls_center_play_icon = qSelec(false, control_controls_center_play, 'f-icon');
                    let control_controls_center_forward = qSelec(false, control_controls_center, '[name=&quot;forward&quot;]');
                    let control_controls_right = qSelec(false, control_controls, '.player_control_controls_right');
                    let control_controls_right_speed = qSelec(false, control_controls_right, '[name=&quot;speed&quot;]');
                    let control_controls_right_fullscreen = qSelec(false, control_controls_right, '[name=&quot;fullscreen&quot;]');
                    let control_controls_right_fullscreen_icon = qSelec(false, control_controls_right_fullscreen, 'f-icon');
                    let control_controls_right_speedOptions = qSelec(false, control_controls_right, '.player_control_controls_right_speed-options');
                    let control_controls_right_speedOptions_options = getChild(control_controls_right_speedOptions);
                    let video = qSelec(false, elem, 'video');
                    
                    function controllingNotify(type, value) {
                        controlling.className = `player_controlling active ${type}`;
                        controlling.innerText = value ? value : '';
                        clearTimeout(controllingNotifyTimer);
                        hideControllingNotify();
                    }
                    function hideControllingNotify() {
                        controllingNotifyTimer = setTimeout(() => controlling.className = 'player_controlling', 500);
                    }
                    function hideControls() {
                        clearTimeout(controlsTimer);
                        elem.classList.add('show');
                        !elem.paused && (controlsTimer = setTimeout(() => elem.classList.remove('show'), 3000))
                    }
                    
                    elem.load = src => video.src = src;
                    
                    elem.pause = () => video.pause();
                    elem.play = () => video.play();
                    
                    elem.forward = value => {
                        let add;
                        if (value instanceof Event) {
                            let { shiftKey, ctrlKey } = value;
                            add =
                            shiftKey ? 30 :
                            ctrlKey ? 10 : 5;
                            controllingNotify('forward', add);
                        }
                        else add = value;
                        video.currentTime += add;
                    }
                    elem.backward = value => {
                        let sub;
                        if (value instanceof Event) {
                            let { shiftKey, ctrlKey } = value;
                            sub =
                            shiftKey ? 30 :
                            ctrlKey ? 10 : 5;
                            controllingNotify('backward', sub);
                        }
                        else sub = value;
                        video.currentTime -= sub;
                    }
                    
                    elem.setVolume = value => {
                        video.volume = elem.volume = value;
                        control_controls_left_mute_icon.setIcon(`volume${
                            value == 0 ? '-xmark' :
                            value < .33 ? '-low' :
                            value < .66 ? '-medium' : '-high'
                        }`)
                    }
                    
                    elem.setPlaybackRate = value => {
                        inactivate(...control_controls_right_speedOptions_options);
                        control_controls_right_speedOptions_options.forEach(opt => opt.dataset.value == value && activate(opt));
                        video.playbackRate = elem.playbackRate = value;
                    }
                    
                    elem.paused = true;
                    
                    addEvLis(document, 'keydown', e => {
                        let { code } = e;
                        if (code == 'Space')
                            video.paused ?
                        video.play() :
                        video.pause();
                        else if (code == 'ArrowRight') elem.forward(e);
                        else if (code == 'ArrowLeft') elem.backward(e);
                        else if (code == 'KeyM') {
                            control_controls_left_mute.click();
                            controllingNotify(video.volume ? 'unmute' : 'mute');
                        }
                    })
                    addEvLis(document, 'fullscreenchange', async () => {
                        if (document.fullscreenElement) {
                            control_controls_right_fullscreen_icon.setIcon('compress');
                            elem.classList.add('fullscreen');
                        }
                        else {
                            control_controls_right_fullscreen_icon.setIcon('expand');
                            elem.classList.remove('fullscreen');
                        }
                    })
                    
                    addEvLis(elem, 'click', ({target}) => {
                        target == elem && !dragging && control_controls_center_play.click();
                        !control_controls_right_speedOptions.contains(target) && !control_controls_right_speed.contains(target) &&
                        inactivate(control_controls_right_speedOptions)
                    })
                    
                    addEvLis(elem, ['pointermove', 'pointerleave', 'click'], () => hideControls());
                    //addEvLis(elem, 'pointerdown'], () => hideControls());
                    
                    addEvLis(more, 'click', () => activate(info));
                    
                    function getRatio(e) {
                        let { left } = control_timeline_div.getBoundingClientRect();
                        return clamp(0, (e.clientX - left) / control_timeline_div.offsetWidth, 1);
                    }
                    function drag(e) {
                        window.getSelection().empty?.();
                        window.getSelection().removeAllRanges?.();
                        
                        video.currentTime = getRatio(e) * video.duration;
                    }
                    addEvLis(control_timeline, 'pointerdown', e => {
                        play = !video.paused;
                        dragging = true;
                        video.pause();
                        video.currentTime = getRatio(e) * video.duration;
                        addEvLis(document, 'pointermove', drag);
                        activate(control_timeline);
                    })
                    addEvLis(control_timeline, 'pointermove', e => {
                        let ratio = getRatio(e);
                        control_timeline_div_span.style = `--position: ${ratio * 100}%`;
                        control_timeline_div_span.innerText = formatTime(ratio * video.duration);
                    })
                    addEvLis(document, 'pointerup', async () => {
                        if (dragging) {
                            remvEvLis(document, 'pointermove', drag);
                            inactivate(control_timeline);
                            play && video.play();
                            await wait();
                            dragging = false;
                        }
                    })
                    
                    addEvLis(control_controls_left_mute, 'click', e => {
                        if (video.volume) {
                            latestVolume = video.volume;
                            updateRange(control_controls_left_range, video.volume = 0);
                        }
                        else updateRange(control_controls_left_range, video.volume = latestVolume);
                    })
                    addEvLis(
                        [ control_controls_left_mute, control_controls_left_range ],
                        'mouseenter',
                        e => {
                            clearTimeout(volumeTimer);
                            control_controls_left_range.classList.add('show');
                        }
                    )
                    addEvLis(
                        [ control_controls_left_mute, control_controls_left_range ],
                        'mouseleave',
                        () => volumeTimer = setTimeout(() => control_controls_left_range.classList.remove('show'), 500)
                    )
                    addEvLis(control_controls_left_range, 'input', () => elem.setVolume(control_controls_left_range.value));
                    
                    addEvLis(control_controls_center_backward, 'click', () => elem.backward(5));
                    addEvLis(control_controls_center_play, 'click', () => video.paused ? elem.play() : elem.pause());
                    addEvLis(control_controls_center_forward, 'click', () => elem.forward(5));
                    
                    control_controls_right_speed.addEventListener('click', () => toggle(control_controls_right_speedOptions));
                    control_controls_right_speedOptions_options.forEach(opt => opt.addEventListener('click', () => elem.setPlaybackRate(opt.dataset.value)));
                    control_controls_right_fullscreen.addEventListener('click', () => document.fullscreenElement ? document.exitFullscreen() : elem.requestFullscreen());
                    
                    video.addEventListener('timeupdate', () => {
                        elem.style.setProperty('--percent', `${isNaN(video.duration) ? 0 : video.currentTime / video.duration * 100}%`);
                        control_controls_left_timer_currentTime.innerText = formatTime(elem.currentTime = video.currentTime);
                        control_controls_left_timer_duration.innerText = formatTime(elem.duration = video.duration);
                    })
                    video.addEventListener('loadeddata', async () => {
                        let { videoWidth, videoHeight } = video;
                        
                        control_controls_left_timer_duration.innerText = formatTime(elem.duration = video.duration);
                        elem.style.width = elem.style.height = null;
                        
                        if (getAttr(elem, 'use-media-dimensions') != undefined && videoWidth && videoHeight) {
                            let { parentNode } = elem;
                            let computedStyle = getComputedStyle(parentNode);
                            let parentHeight = parentNode.clientHeight - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom);
                            let parentWidth = parentNode.clientWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
                            let parentAspectRatio = parentWidth / parentHeight;
                            let videoAspectRatio = videoWidth / videoHeight;
                            let condition = parentAspectRatio < videoAspectRatio;
                            
                            elem.style[!condition ? 'width' : 'height'] = null;
                            elem.style[condition ? 'width' : 'height'] = `${condition ? videoWidth : videoHeight}px`;
                        }
                    })
                    video.addEventListener('play', () => {
                        control_controls_center_play_icon.setIcon('pause');
                        controllingNotify('play');
                        elem.paused = false;
                        hideControls();
                    })
                    video.addEventListener('pause', () => {
                        control_controls_center_play_icon.setIcon('play');
                        controllingNotify('pause');
                        elem.paused = true;
                        elem.classList.add('show');
                    })
                }
            })
            customElements.define('f-select', class extends HTMLElement {
                async connectedCallback() {
                    let elem = this;
                    let multiple = getAttr(elem, 'multiple') != undefined;
                    
                    await wait(.1);
                    
                    let txt = qSelec(false, elem, 'text');
                    let optList = qSelec(false, elem, 'option-list');
                    let optList_option = [...optList.children];
                    
                    !txt && console.error('Missing element: &quot;text&quot; is not found');
                    
                    elem.value = multiple ? [] : '';
                    
                    Object.defineProperty(elem, '_v', {
                        set(newValue) {
                            elem.value = newValue;
                            elem.dispatchEvent(new Event('change'));
                        }
                    })
                    
                    elem.addEventListener('click', async e => {
                        if (!optList) console.error('Missing element: &quot;option-list&quot; is not found');
                        else if (e.target == elem) {
                            if (!isActive(optList)) {
                                let hei = optList.offsetHeight;
                                optList.style.height = '0';
                                await wait();
                                activate(optList);
                                optList.style.height = `${hei}px`;
                                await wait(.2);
                                optList.style = '';
                            }
                            optList.classList[
                                elem.getBoundingClientRect().top + optList.offsetHeight > window.innerHeight ? 'add' : 'remove'
                            ]('bottom')
                        }
                    })
                    document.addEventListener('click', e => {
                        let { target } = e;
                        async function hide() {
                            let hei = optList.offsetHeight;
                            inactivate(optList);
                            optList.style.height = `${hei}px`;
                            await wait();
                            optList.style.height = '0';
                            await wait(.2);
                            optList.style = '';
                        }
                        if (isActive(optList))
                            multiple ?
                        target != optList && ![...optList.children].some(child => child.contains(target)) && hide() :
                        target != optList && hide();
                    })
                    optList_option.forEach(each => elem.formatOption(each))
                }
                formatOption(opt) {
                    let elem = this;
                    let txt = qSelec(false, elem, 'text');
                    let optList = qSelec(false, elem, 'option-list');
                    let multiple = getAttr(elem, 'multiple') != undefined;
                    let required = getAttr(elem, 'required') != undefined;
                    
                    async function setOption() {
                        while (document.getElementById('loading')) await wait();
                        
                        let optList_option = [...optList.children];
                        let { innerText } = opt;
                        let val = getAttr(opt, 'value') ?? innerText;
                        
                        if (multiple) {
                            let { children } = txt;
                            if (
                                isActive(opt) && (
                                    !required || required && querySelecAll(optList, '.active').length > 1
                                )
                            ) {
                                for (let span of children) span.innerText == innerText && span.remove();
                                inactivate(opt);
                            }
                            else activate(opt);
                            elem._v = optList_option.map(opt => {
                                if (isActive(opt))
                                    return getAttr(opt, 'value') ?? opt.innerText;
                            }).filter(item => (item))
                            clear(txt);
                            optList_option.forEach(opt => {
                                if (isActive(opt))
                                    txt.innerHTML += `<span>${opt.innerText}</span>`
                            })
                        }
                        else {
                            let act = optList.querySelector('.active');
                            let lang = opt.querySelector('lang');
                            act && inactivate(act);
                            txt.innerText = (lang || opt).innerText;
                            activate(opt);
                            elem._v = val;
                        }
                    }
                    addEvLis(opt, 'click', setOption);
                    getAttr(opt, ) == '' && setOption();
                }
                createOption(innerHTML, value, options) {
                    let opt = document.createElement('f-option');
                    
                    options?.disabled && disable(opt);
                    options?.selected && (opt.className = 'selected');
                    value && opt.setAttribute('value', value);
                    opt.innerHTML = innerHTML;
                    
                    this.querySelector('option-list').append(opt);
                    this.formatOption(opt);
                }
                clearOptions() {
                    clear(this.querySelector('text'), this.querySelector('option-list'));
                }
                async setValue(value) {
                    while (document.getElementById('loading')) await wait();
                    
                    let multiple = getAttr(this, 'multiple') != undefined;
                    
                    if (value == null) {
                        clear(this.querySelector('text'));
                        this.querySelectorAll('f-option').forEach(opt => inactivate(opt));
                        this._v = multiple ? [] : '';
                    }
                    else {
                        let found;
                        this.querySelectorAll('f-option').forEach(async opt => {
                            let val = getAttr(opt, 'value') || opt.innerText;
                            if (val == value || (multiple && value.includes(val))) {
                                opt.click();
                                found = true;
                            }
                        })
                    }
                }
            })

            pageLoaded = true;
        }

        html.lang = language;
        
        qSelec(true, '*').forEach(each => {
            each.matches('lang') && getAttr(each, 'value') != html.lang && each.remove();
            [...each.attributes].forEach(attr => {
                let { name, value } = attr;
                if (name.startsWith('lang:')) {
                    let [ lang, attr ] = name.slice(5).split('-');
                    lang == language && each.setAttribute(attr, value);
                    each.removeAttribute(name);
                }
            })
        })
        qSelec(true, header_center, 'a').forEach(each => each.pathname == pathname ? activate(each) : inactivate(each));
        
        while (user == null || user && !user.doc || !foriconPackageIsLoaded) await wait();
        let loading = elemById('loading');
        if (loading) {
            loading.style.opacity = '0';
            await wait(.2);
            loading.remove();
        }
        
        qSelec(true, '.icon-count').forEach(
            each => each.innerText = `${Math.floor(webData.iconsB2.reduce(
                (total, icon) => total + icon.styles.length, 0
            ) / 100) * 100}`
        )
        
        if (user) {
            header_right_accBtn.replaceChild(
                newElem('img', { src: user.doc.avatar }),
                qSelec(false, header_right_accBtn, 'f-icon')
            )
            header_right_accBtn_span.innerText = user.doc.name;
        }
        else header_right_accBtn_span.innerText = {
            en: 'Log in',
            vi: 'Đăng nhập',
            fr: 'Se connecter',
            it: 'Login',
            kr: '로그인',
            ja: 'ログイン',
            de: 'Einloggen',
            nl: 'Inloggen',
            dk: 'Log ind',
            pt: 'Conecte-se',
            es: 'Acceso',
            ru: 'Авторизоваться',
        }[language]
    })()}, [ usePathname() ])
    
    return null;
}