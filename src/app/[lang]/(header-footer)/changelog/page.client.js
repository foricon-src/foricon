'use client';

import { useState } from 'react';
import cssStyle from './page.module.css';
import { Lower } from 'Com/string-tools';
import Link from 'next/link';

export default function PageClient() {
    let [ view, setView ] = useState('featured');

    return <>
        <ul className={`btn-list line-active ${cssStyle.views}`}>{
            [
                {
                    value: 'Featured',
                    icon: 'sparkle',
                },
                {
                    value: 'Detailed',
                    icon: 'list',
                }
            ].map(
                i => <li className={i.value == view} onClick={() => setView(i.value)}>
                    <f-icon icon={i.icon}/>
                    <span>{i.value}</span>
                </li>
            )
        }
            <li className='active'>
                <f-icon b1 icon='sparkle'></f-icon><span>Featured</span>
            </li>
            <li>
                <f-icon b1 icon='list' i-s='outline'></f-icon><span>Detailed</span>
            </li>
        </ul>
        <div className={`${cssStyle.versions}` `${cssStyle[Lower(view)]}`}>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.2.3</h6>
                        <span>31 May, 2026</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=folders'>folders</Link> icons (Solid: <f-icon icon='folders'></f-icon>, Outline: <f-icon icon='folders' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='folders' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='folders' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Site&apos;s bugs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.2.2</h6>
                        <span>3 May, 2026</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=bluetooth'>bluetooth</Link> icons (Outline: <f-icon icon='bluetooth' i-s='outline'></f-icon>)</li>
                        <li><Link target='_blank' href='/search?k=arrow-down-a-z'>arrow-down-a-z</Link> icons (Outline: <f-icon icon='arrow-down-a-z' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-down-a-z' i-s='duotone/outline'></f-icon>)</li>
                        <li><Link target='_blank' href='/search?k=arrow-down-z-a'>arrow-down-z-a</Link> icons (Outline: <f-icon icon='arrow-down-z-a' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-down-z-a' i-s='duotone/outline'></f-icon>)</li>
                        <li><Link target='_blank' href='/search?k=arrow-up-a-z'>arrow-up-a-z</Link> icons (Outline: <f-icon icon='arrow-up-a-z' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-up-a-z' i-s='duotone/outline'></f-icon>)</li>
                        <li><Link target='_blank' href='/search?k=arrow-up-z-a'>arrow-up-z-a</Link> icons (Outline: <f-icon icon='arrow-up-z-a' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-up-z-a' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Shades of gray in light mode for a better contrast between UI elements and text</li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Site&apos;s bugs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.2.1</h6>
                        <span>6 April, 2026</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>New fonts for personalization: <b>Nova Mono</b>, <b>Xanh Mono</b>, <b>Kode Mono</b> and <b>Sono</b></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Moved the shortcut to <Link target='_blank' href='/account'>Account</Link> from inside <b>All</b> menu to the <b>header</b></li>
                            <li>Optimized the site&apos;s codes</li>
                            <li>Changed the icon for <Link target='_blank' href='//foricon-dev.blogspot.com/search?c=arrows'>Arrows</Link> category from <Link target='_blank' href='/search?k=arrow-down'>arrow-down</Link> to <Link target='_blank' href='/search?k=arrows-repeat'>arrows-repeat</Link></li>
                            <li>Changed the icon for <Link target='_blank' href='//foricon-dev.blogspot.com/search?c=writing'>Writing</Link> category from <Link target='_blank' href='/search?k=file-lines'>file-lines</Link> to <Link target='_blank' href='/search?k=paragraph'>paragraph</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Site&apos;s bugs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.2</h6>
                        <span>31 March, 2026</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Personalize to Improve Your Coding Experience</h3>
                        <p>Your <Link target='_blank' href='/account'>Account</Link> page now comes with fresh <b>personalization options</b>! The first two features - <b>Codebox&apos;s font</b> and <b>Indentation space</b> - let you tailor your workspace to match your style. More personalization tools are on the way, so consider this just the beginning.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPzjk_sqlElZ678Ia-ezX2lVSqUv7Y5gu1rNEobuZZmmPMWniqYwX5bZrXDcDaARNPb02YtnEEdniJwD5A63FycIX_sUHDnKg_aNWfsmTnTQ4winxV87-6yC0mEIsQ0P9UO-tZXrVihJXuMBTSD-ZIDNDNrmMp4K4sH-2zmnMXXxOb8MUgBlxD43gdp4Q/s1600/beta2-codebox-font-&amp;-indent.png'/>
                        <h3>Smarter Syntax, Seamless Flow</h3>
                        <p>Across the site, we've supercharged the <b>syntax highlighting</b> mechanism for clarity and precision. In <Link target='_blank' href='/hub'>Foricon Hub</Link>, you'll also enjoy <b>automatic indentation</b> for cleaner code, and <b>quick keyboard shortcuts</b> to indent, outdent, or comment multiple lines at once</p>
                        <h3>Writing That Feels Effortless</h3>
                        <p><b>Paragraph</b> elements now break lines more naturally, making text flow smoother and editing more intuitive in <Link target='_blank' href='/hub'>Foricon Hub</Link>.</p>
                        <h3>Conversations, Redesigned</h3>
                        <p><Link target='_blank' href='/hub'>Foricon Hub</Link> just witnessed another reimagination of the <b>comment section</b> - this time with a sharper, more engaging design. Plus, you can now <b>dislike</b> posts (not just like them), and both <b>likes</b> and <b>dislikes</b> are available for comments too.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiktwJ98GmT_c9APykiVJlkTGwVv7wbvWjrelx5UjvFmKyKHDHy9pJq03rQBDSOfZOHGImQldJnFkpBgJz9XPPNRFvj7bm4mq5fsebscLvx2JqcExt6fludin-wjQbyDbJMysd8eOp96tYCxA4e5dBgbjg681Zo9Tlbvit84Q5Tg93k6A3VcVJyYC5nWDQ/s4400/beta2-hub-new-comment.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=empty-set'>empty-set</Link> icons (Outline: <f-icon icon='empty-set' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='empty-set' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=intersection'>intersection</Link> icon (Outline: <f-icon icon='intersection' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=union'>union</Link> icon (Outline: <f-icon icon='union' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=theta'>theta</Link> icon (Outline: <f-icon icon='theta' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=sigma'>sigma</Link> icon (Outline: <f-icon icon='sigma' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=square-root'>square-root</Link> icon (Outline: <f-icon icon='square-root' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=square-root-variable'>square-root-variable</Link> icons (Outline: <f-icon icon='square-root-variable' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='square-root-variable' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrows-from-horizontal-line'>arrows-from-horizontal-line</Link> icons (Outline: <f-icon icon='arrows-from-horizontal-line' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrows-from-horizontal-line' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrows-to-horizontal-line'>arrows-to-horizontal-line</Link> icons (Outline: <f-icon icon='arrows-to-horizontal-line' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrows-to-horizontal-line' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrows-from-vertical-line'>arrows-from-vertical-line</Link> icons (Outline: <f-icon icon='arrows-from-vertical-line' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrows-from-vertical-line' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrows-to-vertical-line'>arrows-to-vertical-line</Link> icons (Outline: <f-icon icon='arrows-to-vertical-line' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrows-to-vertical-line' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrow-u-turn-left-down'>arrow-u-turn-left-down</Link> icons (Outline: <f-icon icon='arrow-u-turn-left-down' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-u-turn-left-down' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrow-u-turn-right-down'>arrow-u-turn-right-down</Link> icons (Outline: <f-icon icon='arrow-u-turn-right-down' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-u-turn-right-down' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrow-u-turn-left-up'>arrow-u-turn-left-up</Link> icons (Outline: <f-icon icon='arrow-u-turn-left-up' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-u-turn-left-up' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrow-u-turn-right-up'>arrow-u-turn-right-up</Link> icons (Outline: <f-icon icon='arrow-u-turn-right-up' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-u-turn-right-up' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrow-u-turn-down-left'>arrow-u-turn-down-left</Link> icons (Outline: <f-icon icon='arrow-u-turn-down-left' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-u-turn-down-left' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrow-u-turn-down-right'>arrow-u-turn-down-right</Link> icons (Outline: <f-icon icon='arrow-u-turn-down-right' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-u-turn-down-right' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrow-u-turn-up-left'>arrow-u-turn-up-left</Link> icons (Outline: <f-icon icon='arrow-u-turn-up-left' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-u-turn-up-left' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrow-u-turn-up-right'>arrow-u-turn-up-right</Link> icons (Outline: <f-icon icon='arrow-u-turn-up-right' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-u-turn-up-right' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=book'>book</Link> icons (Solid: <f-icon icon='book'></f-icon>, Outline: <f-icon icon='book' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='book' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='book' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=book-lines'>book-lines</Link> icons (Solid: <f-icon icon='book-lines'></f-icon>, Outline: <f-icon icon='book-lines' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='book-lines' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='book-lines' i-s='duotone/outline'></f-icon>)</li>
                            <li><b>Automatic indentation</b> for codebox in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li>Use <b>keyboard shortcuts</b> to quicky indent, outdent, or comment single or multiple lines in codebox</li>
                            <li><b>Automatic tag and bracket closing</b> for codebox in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li><b>Dislikes</b> for post in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li><b>Likes</b> and <b>dislikes</b> for comment in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li><b>Personalization</b> is now available in <Link target='_blank' href='/account'>Account</Link>
                                <ul className='list-layout'>
                                    <li>Codebox&apos;s font: <b>Consolas</b> (default), <b>Fira Code</b>, <b>Source Code Pro</b> and <b>DM Mono</b></li>
                                    <li>Indentation space</li>
                                </ul>
                            </li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Improved <b>syntax highlighting</b> mechanism</li>
                            <li>Improved <b>line breaking</b> mechanism for paragraph box in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li>Redesigned <b>comment section</b> in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li>Adjusted the <b>Duotone Outline</b> style of <Link target='_blank' href='/search?k=arrow-left'>arrow-left</Link> icons</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.1.3</h6>
                        <span>21 February, 2026</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=wifi-exclamation'>wifi-exclamation</Link> icons (Outline: <f-icon icon='wifi-exclamation' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='wifi-exclamation' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=wifi-average-exclamation'>wifi-average-exclamation</Link> icons (Outline: <f-icon icon='wifi-average-exclamation' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='wifi-average-exclamation' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=wifi-weak-exclamation'>wifi-weak-exclamation</Link> icons (Outline: <f-icon icon='wifi-weak-exclamation' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='wifi-weak-exclamation' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=wifi-bad-exclamation'>wifi-bad-exclamation</Link> icons (Outline: <f-icon icon='wifi-bad-exclamation' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='wifi-bad-exclamation' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=wifi-lock'>wifi-lock</Link> icons (Solid: <f-icon icon='wifi-lock'></f-icon>, Outline: <f-icon icon='wifi-lock' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='wifi-lock' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='wifi-lock' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=wifi-average-lock'>wifi-average-lock</Link> icons (Solid: <f-icon icon='wifi-average-lock'></f-icon>, Outline: <f-icon icon='wifi-average-lock' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='wifi-average-lock' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='wifi-average-lock' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=wifi-weak-lock'>wifi-weak-lock</Link> icons (Solid: <f-icon icon='wifi-weak-lock'></f-icon>, Outline: <f-icon icon='wifi-weak-lock' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='wifi-weak-lock' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='wifi-lock' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=wifi-bad-lock'>wifi-bad-lock</Link> icons (Solid: <f-icon icon='wifi-bad-lock'></f-icon>, Outline: <f-icon icon='wifi-bad-lock' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='wifi-bad-lock' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='wifi-bad-lock' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=signal-bars'>signal-bars</Link> icon (Outline: <f-icon icon='signal-bars' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=signal-bars-good'>signal-bars-good</Link> icons (Outline: <f-icon icon='signal-bars-good' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='signal-bars-good' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=signal-bars-average'>signal-bars-average</Link> icons (Outline: <f-icon icon='signal-bars-average' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='signal-bars-average' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=signal-bars-weak'>signal-bars-weak</Link> icons (Outline: <f-icon icon='signal-bars-weak' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='signal-bars-weak' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=signal-bars-bad'>signal-bars-bad</Link> icons (Outline: <f-icon icon='signal-bars-bad' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='signal-bars-bad' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=signal-bars-slash'>signal-bars-slash</Link> icons (Outline: <f-icon icon='signal-bars-slash' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='signal-bars-slash' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=signal-stream-slash'>signal-stream-slash</Link> icons (Solid: <f-icon icon='signal-stream-slash'></f-icon>, Outline: <f-icon icon='signal-stream-slash' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='signal-stream-slash' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='signal-stream-slash' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=bicycle'>bicycle</Link> icons (Outline: <f-icon icon='bicycle' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='bicycle' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=ticket'>ticket</Link> icons (Solid: <f-icon icon='ticket'></f-icon>, Outline: <f-icon icon='ticket' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='ticket' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='ticket' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=ticket-simple'>ticket-simple</Link> icons (Solid: <f-icon icon='ticket-simple'></f-icon>, Outline: <f-icon icon='ticket-simple' i-s='outline'></f-icon>)</li>
                            <li>Interaction animation for dropdown selection boxes</li>
                            <li>Licenses in download packs</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Download options are now individual packs: <b>Fonts</b> and <b>icons</b></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>API bugs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.1.2</h6>
                        <span>5 February, 2026</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=arrow-up-right-from-square-2'>arrow-up-right-from-square-2</Link> icons (Outline: <f-icon icon='arrow-up-right-from-square-2' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrow-up-right-from-square-2' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrows-repeat'>arrows-repeat</Link> icons (Outline: <f-icon icon='arrows-repeat' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrows-repeat' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=arrows-repeat-once'>arrows-repeat-once</Link> icons (Outline: <f-icon icon='arrows-repeat-once' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='arrows-repeat-once' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=bars-filter'>bars-filter</Link> icons (Outline: <f-icon icon='bars-filter' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='bars-filter' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=bars-sort'>bars-sort</Link> icons (Outline: <f-icon icon='bars-sort' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='bars-sort' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=bars-staggered'>bars-staggered</Link> icons (Outline: <f-icon icon='bars-staggered' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='bars-staggered' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=credit-card'>credit-card</Link> icons (Solid: <f-icon icon='credit-card'></f-icon>, Outline: <f-icon icon='credit-card' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='credit-card' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='credit-card' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Adjusted the gap between the square and the arrow in <Link target='_blank' href='/search?k=arrow-up-right-from-square'>arrows-up-right-from-square</Link> icons</li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some API bugs</li>
                            <li>Outline style of <Link target='_blank' href='/search?k=forward'>forward</Link> icon incorrectly displayed the secondary layer of Duotone Solid style</li>
                            <li>Search panel hidden when focus left the search bar, even if hovered in <Link target='_blank' href='/search'>Search</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.1.1</h6>
                        <span>4 January, 2026</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=translate-chinese'>translate-chinese</Link> icons (Outline: <f-icon icon='translate-chinese' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='translate-chinese' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=translate-japanese'>translate-japanese</Link> icons (Outline: <f-icon icon='translate-japanese' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='translate-japanese' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=translate-korean'>translate-korean</Link> icons (Outline: <f-icon icon='translate-korean' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='translate-korean' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=ban'>ban</Link> icons (Outline: <f-icon icon='ban' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='ban' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=note-sticky'>note-sticky</Link> icons (Solid: <f-icon icon='note-sticky'></f-icon>, Outline: <f-icon icon='note-sticky' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='note-sticky' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='note-sticky' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=video'>video</Link> icons (Solid: <f-icon icon='video'></f-icon>, Outline: <f-icon icon='video' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='video' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='video' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Sharp corners in <Link target='_blank' href='/search?k=shopping-bag'>shopping-bag</Link>, <Link target='_blank' href='/search?k=mug'>mug</Link>, <Link target='_blank' href='/search?k=mug-hot'>mug-hot</Link>, <Link target='_blank' href='/search?k=mug-saucer'>mug-saucer</Link>, <Link target='_blank' href='/search?k=mug-tea'>mug-tea</Link>, <Link target='_blank' href='/search?k=mug-tea-hot'>mug-tea-hot</Link>, <Link target='_blank' href='/search?k=mug-tea-saucer'>mug-tea-saucer</Link> icons are now rounded</li>
                            <li>Search bar and options now stay visible when typing in <Link target='_blank' href='/search'>Search</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>API bugs</li>
                            <li>Some bugs about <b>WOFF2</b> font file</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.1</h6>
                        <span>21 December, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Introducing WOFF2 support</h3>
                        <p>We've included full support for the modern <b>WOFF2</b> font format for brand new <b>Beta 2.1</b> update! This upgrade means faster load times, sharper rendering, and a smoother design experience across the platform. Fonts now feel lighter, cleaner, and more future‑ready - empowering creators to focus on what matters most: their craft.</p>
                        <h3>Refined search experience</h3>
                        <p>We've also made subtle yet impactful improvements to the <b>search bar</b> and <b>options panel</b>. With <b>search controls</b> anchored at the top, your workflow feels streamlined and exploring icons becomes effortless by eliminating unnecessary scrolling - a small change, yet it makes navigating Foricon more intuitive and enjoyable.</p>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=factory'>factory</Link> icons (Solid: <f-icon icon='factory'></f-icon>, Outline: <f-icon icon='factory' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=landmark'>landmark</Link> icons (Solid: <f-icon icon='landmark'></f-icon>, Outline: <f-icon icon='landmark' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='landmark' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='landmark' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=calendar'>calendar</Link> icons (Solid: <f-icon icon='calendar'></f-icon>, Outline: <f-icon icon='calendar' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='calendar' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='calendar' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=bus'>bus</Link> icons (Solid: <f-icon icon='bus'></f-icon>, Outline: <f-icon icon='bus' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='bus' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='bus' i-s='duotone/outline'></f-icon>)</li>
                            <li><b>WOFF2</b> font type</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Style of icon tiles' hover and active state in <Link target='_blank' href='/search'>Search</Link></li>
                            <li>Adjusted spacing of elements a litte bit</li>
                            <li>Search bar and search options are now fixed at the top and automatically appear on hover in <Link target='_blank' href='/search'>Search</Link></li>
                            <li>Rearranged buttons in <b>Foricon Package</b> in <Link target='_blank' href='/account'>Account</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>API bugs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.0.4</h6>
                        <span>7 December, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=font'>font</Link> icon (Outline: <f-icon icon='font' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=font-case'>font-case</Link> icons (Outline: <f-icon icon='font-case' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='font-case' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Christmas logo</li>
                            <li>Cursors' designs were changed a litte bit</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.0.3</h6>
                        <span>23 November, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Login history tracker</li>
                            <li>A new sub-page to view login history in <Link target='_blank' href='/account'>Account</Link></li>
                            <li><b>Foricon Package</b> now retries if it takes too long to recieve data</li>
                            <li>Interact animation for the <b>All menu</b> toggle&apos;s icon</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.0.2</h6>
                        <span>8 November, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Your Icons, Your Way</h3>
                        <p>Dear designers, developers, and pixel-perfectionists, starting today, every icon in the Foricon icon font is now downloadable in your favorite formats: <b>.svg</b>, <b>.png</b>, and <b>.webp</b>.</p>
                        <p>Whether you're building a sleek UI, crafting a pitch-perfect presentation, or prototyping your next big idea, Foricon now gives you the freedom to scale with precision using crisp <b>SVGs</b>, drop into any project with ready-to-use <b>PNGs</b>, or optimize for the web with lightning-fast <b>WebP</b> files. No more workarounds. No more compromises. Just beautiful, flexible icons - exactly how you need them.</p>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=chart'>chart</Link> icons (Solid: <f-icon icon='chart'></f-icon>, Outline: <f-icon icon='chart' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='chart' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='chart' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=envelope'>envelope</Link> icons (Solid: <f-icon icon='envelope'></f-icon>, Outline: <f-icon icon='envelope' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='envelope' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='envelope' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=rectangle-wide'>rectangle-wide</Link> icons (Solid: <f-icon icon='rectangle-wide'></f-icon>, Outline: <f-icon icon='rectangle-wide' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=sparkle-curved'>sparkle-curved</Link> icons (Solid: <f-icon icon='sparkle-curved'></f-icon>, Outline: <f-icon icon='sparkle-curved' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=lines-leaning'>lines-leaning</Link> icons (Outline: <f-icon icon='lines-leaning' i-s='outline'></f-icon>, Duotone Outline: <f-icon icon='lines-leaning' i-s='duotone/outline'></f-icon>)</li>
                            <li>Download icons as <b>SVG</b>, <b>PNG</b> or <b>WebP</b> in <Link target='_blank' href='/search'>Search</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned flags in <Link target='_blank' href='/languages'>Languages</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>API bugs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.0.1</h6>
                        <span>25 October, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=gauge-1'>gauge-1</Link> icons (Solid: <f-icon icon='gauge-1'></f-icon>, Outline: <f-icon icon='gauge-1' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-1' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-1' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-2'>gauge-2</Link> icons (Solid: <f-icon icon='gauge-2'></f-icon>, Outline: <f-icon icon='gauge-2' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-2' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-2' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-3'>gauge-3</Link> icons (Solid: <f-icon icon='gauge-3'></f-icon>, Outline: <f-icon icon='gauge-3' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-3' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-3' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-4'>gauge-4</Link> icons (Solid: <f-icon icon='gauge-4'></f-icon>, Outline: <f-icon icon='gauge-4' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-4' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-4' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-5'>gauge-5</Link> icons (Solid: <f-icon icon='gauge-5'></f-icon>, Outline: <f-icon icon='gauge-5' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-5' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-5' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-6'>gauge-6</Link> icons (Solid: <f-icon icon='gauge-6'></f-icon>, Outline: <f-icon icon='gauge-6' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-6' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-6' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-7'>gauge-7</Link> icons (Solid: <f-icon icon='gauge-7'></f-icon>, Outline: <f-icon icon='gauge-7' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-7' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-7' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-steps-1'>gauge-steps-1</Link> icons (Solid: <f-icon icon='gauge-steps-1'></f-icon>, Outline: <f-icon icon='gauge-steps-1' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-steps-1' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-steps-1' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-steps-2'>gauge-steps-2</Link> icons (Solid: <f-icon icon='gauge-steps-2'></f-icon>, Outline: <f-icon icon='gauge-steps-2' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-steps-2' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-steps-2' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-steps-3'>gauge-steps-3</Link> icons (Solid: <f-icon icon='gauge-steps-3'></f-icon>, Outline: <f-icon icon='gauge-steps-3' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-steps-3' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-steps-3' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-steps-4'>gauge-steps-4</Link> icons (Solid: <f-icon icon='gauge-steps-4'></f-icon>, Outline: <f-icon icon='gauge-steps-4' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-steps-4' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-steps-4' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-steps-5'>gauge-steps-5</Link> icons (Solid: <f-icon icon='gauge-steps-5'></f-icon>, Outline: <f-icon icon='gauge-steps-5' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-steps-5' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-steps-5' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-steps-6'>gauge-steps-6</Link> icons (Solid: <f-icon icon='gauge-steps-6'></f-icon>, Outline: <f-icon icon='gauge-steps-6' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-steps-6' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-steps-6' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gauge-steps-7'>gauge-steps-7</Link> icons (Solid: <f-icon icon='gauge-steps-7'></f-icon>, Outline: <f-icon icon='gauge-steps-7' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='gauge-steps-7' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='gauge-steps-7' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clapperboard'>clapperboard</Link> icons (Solid: <f-icon icon='clapperboard'></f-icon>, Outline: <f-icon icon='clapperboard' i-s='outline'></f-icon>, Duotone Solid: <f-icon icon='clapperboard' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon icon='clapperboard' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Improved the comment system in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li>Completed the translation for <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 2.0</h6>
                        <span>5 October, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Foricon Enters the Next Phase of Beta</h3>
                        <p>October marks a bold new chapter for Foricon as we unveil <b>Beta 2.0</b> (or simply <b>B2</b>) - a milestone shaped by months of refinement, creativity, and user-first thinking. This release isn&apos;t just an update - it&apos;s a transformation. From visual polish to smarter interactions, <b>B2</b> brings a wave of enhancements designed to elevate your experience across the board.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE29Xrd1Nw11MGPe2WMcdOZNpNstJ9P8sSTxt2eOqVQDA6FIXkr1CcMslU5W5uWEKXtmBIlGIVeXOn4jhyphenhyphentGv4Oo3FEHI34CgPw3xFxmYkrZCw7prNXFpklacesyjR5iKyZPQk4fVS51OGPWAuGrcf95dViuHGpk-IZumFXBd4JZYizZB39grvyhamSD0/s1600/beta2-introduce.png'/>
                        <h3>Iconography, Reimagined</h3>
                        <p>We have reworked our entire icon set with a grid-based approach to bring harmony and consistency to every visual element. Say goodbye to uneven sizing - our newly redesigned icons are sleek, balanced, and easier on the eyes, making every interaction feel more refined.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0VhVmb51C4hAh5N1sP3tnDEkq0GdyzgRZb6YKjRkcMI2eHP0Gbnmlfe0twyB4tKvShF_hb1NctKtVjgykIcgGu5C6usFo5BHs_Lbu92k8jDkGmdOu7c2wuNwPvqWLrRqnrqtzq1uFlmJ1jHExjSFGxl7fXvuu-QmtWGNNpLwlzrsAxam_H4fPmkVZwhw/s1600/beta2-redesign-icons.png'/>
                        <h3>Foricon Music on Mobile: Now Even More Sleek and Stress-Free</h3>
                        <p>The mobile player page in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link> has been completely redesigned with a cleaner, more intuitive layout, along with smoother controls, and a more immersive feel. Whether you're streaming your favorite tracks or exploring new sounds, the new UI makes every moment more enjoyable.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEga5ajK89gPtaROPSwIxqc7gnGTvEEsSyMJ8wrGp_-0kpL8IVR2qAwHLPX9drAwc6l4UG50vN2wWvQhfHqzEfKafrRbKtTsPoIN6aChCxPvvKQ1MnTSvqSlOzTWMWk42MC2SpPoqAOdknhrQQ_LXipUn-1vUn3qVYIxsssYDwRf2zzso0jjAMVwCIt1Zk8/s1600/beta2-foricon-music-mobile.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Many new icons and icon variations</li>
                            <li><b>Icon Families</b> section in <Link target='_blank' href='/'>Home</Link></li>
                            <li>Version select box in <Link target='_blank' href='/search'>Search</Link></li>
                            <li>Icon&apos;s categories are now showed on <b>the bar</b> in <Link target='_blank' href='/search'>Search</Link></li>
                            <li>Area selection feature for <b>Generative remove</b> in <Link target='_blank' href='/fotorno'>Foricon Fotorno</Link></li>
                            <li>Feature to edit your posts in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li>Documents about <span className='small-code'>toggleIconOnHover()</span>, <span className='small-code'>removeToggleIconOnHover()</span>, <span className='small-code'>toggleStyleOnHover()</span>, <span className='small-code'>removeToggleStyleOnHover()</span> in <Link target='_blank' href='/docs'>Docs</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned almost all icons</li>
                            <li>Improved responsiveness in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Resigned the comment section in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li>Reworked the comment system in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li>Reduced opacity of category icon counts in <Link target='_blank' href='/search'>Search</Link></li>
                            <li>Reworked the search algorithm in <Link target='_blank' href='/search'>Search</Link></li>
                            <li>Renamed <b>Foricon Pro</b> to <b>Foricon Plus</b></li>
                            <li>Rewrote some documents in <Link target='_blank' href='/docs'>Docs</Link></li>
                            <li>Removed <Link target='_blank' href='/search?k=folder-bookmark-centered'>folder-bookmark-centered</Link> from <b>Beta 2</b> icon pack</li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Some bugs in <Link target='_blank' href='/fotorno'>Foricon Fotorno</Link></li>
                            <li>Some bugs in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li>Some bugs in <b>Foricon Package</b></li>
                            <li>Some bugs about <b>Foricon Plus</b> subscription</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.7.5</h6>
                        <span>4 July, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=lock'>lock</Link> icons (Solid: <f-icon b1 icon='lock'></f-icon>, Outline: <f-icon b1 icon='lock' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='lock' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='lock' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=unlock'>unlock</Link> icons (Solid: <f-icon b1 icon='unlock'></f-icon>, Outline: <f-icon b1 icon='unlock' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='unlock' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='unlock' i-s='duotone/outline'></f-icon>)</li>
                            <li>Drag & drop tracks to add to playlist or <b>Next</b> in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Selected view in <Link target='_blank' href='/new-changelog'>New changelog</Link> can now be saved</li>
                            <li>More pages to the header</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned dark mode toggle icon in <b>All menu</b></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.7.4</h6>
                        <span>26 June, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>A Borderline Icon Extravaganza!</h3>
                        <p>This update brings a fresh set of "border" icons - lots of them! From <Link target='_blank' href='/search?k=border-none'>border-none</Link> to <Link target='_blank' href='/search?k=border-all'>border-all</Link> icons, there&apos;s a whole lineup waiting to boost your creativity. We also made a bunch of improvements in Foricon Music, including a cleaner layout, better translations, and snappier mobile responsiveness.</p>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=border-none'>border-none</Link> icons (Outline: <f-icon b1 icon='border-none' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-top'>border-top</Link> icons (Outline: <f-icon b1 icon='border-top' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='border-top' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-top-left'>border-top-left</Link> icons (Outline: <f-icon b1 icon='border-top-left' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='border-top-left' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-top-right'>border-top-right</Link> icons (Outline: <f-icon b1 icon='border-top-right' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='border-top-right' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-bottom'>border-bottom</Link> icons (Outline: <f-icon b1 icon='border-bottom' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='border-bottom' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-bottom-left'>border-bottom-left</Link> icons (Outline: <f-icon b1 icon='border-bottom-left' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='border-bottom-left' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-bottom-right'>border-bottom-right</Link> icons (Outline: <f-icon b1 icon='border-bottom-right' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='border-bottom-right' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-left'>border-left</Link> icons (Outline: <f-icon b1 icon='border-left' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='border-left' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-right'>border-right</Link> icons (Outline: <f-icon b1 icon='border-right' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='border-right' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-outside'>border-outside</Link> icons (Outline: <f-icon b1 icon='border-outside' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='border-outside' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-inside'>border-inside</Link> icons (Outline: <f-icon b1 icon='border-inside' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='border-inside' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-inside-horizontal'>border-inside-horizontal</Link> icons (Outline: <f-icon b1 icon='border-inside-horizontal' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='border-inside-horizontal' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-inside-vertical'>border-inside-vertical</Link> icons (Outline: <f-icon b1 icon='border-inside-vertical' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='border-inside-vertical' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=border-all'>border-all</Link> icons (Outline: <f-icon b1 icon='border-all' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=microphone-slash'>microphone-slash</Link> icons (Solid: <f-icon b1 icon='microphone-slash'></f-icon>, Outline: <f-icon b1 icon='microphone-slash' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='microphone-slash' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='microphone-slash' i-s='duotone/outline'></f-icon>)</li>
                            <li>Some icon to <b>Settings</b> page in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned <Link target='_blank' href='/search?k=code'>code</Link> icons</li>
                            <li>Redesign theme thumbnails in <b>Settings</b> in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Completed the translation for <b>Settings</b> page in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Improved mobile responsiveness for <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.7.3</h6>
                        <span>18 June, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=waveform-lines'>waveform-lines</Link> icons (Outline: <f-icon b1 icon='waveform-lines' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='waveform-lines' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=microphone'>microphone</Link> icons (Solid: <f-icon b1 icon='microphone'></f-icon>, Outline: <f-icon b1 icon='microphone' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='microphone' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='microphone' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Renamed <b>All</b> view to <b>Detailed</b> view in <Link target='_blank' href='/new-changelog'>New changelog</Link></li>
                            <li>Redesigned view options menu in <Link target='_blank' href='/new-changelog'>New changelog</Link></li>
                            <li>Redesign active state for buttons in <Link target='_blank' href='/search'>Search</Link></li>
                            <li>Improved mobile responsiveness for <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.7.2</h6>
                        <span>8 June, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=comment-ellipsis'>comment-ellipsis</Link> icons (Solid: <f-icon b1 icon='comment-ellipsis'></f-icon>, Outline: <f-icon b1 icon='comment-ellipsis' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='comment-ellipsis' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='comment-ellipsis' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=gamepad'>gamepad</Link> icons (Solid: <f-icon b1 icon='gamepad'></f-icon>, Outline: <f-icon b1 icon='gamepad' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='gamepad' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='gamepad' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=list'>list</Link> icons (Outline: <f-icon b1 icon='list' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='list' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=list-dots'>list-dots</Link> icons (Outline: <f-icon b1 icon='list-dots' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='list-dots' i-s='duotone/outline'></f-icon>)</li>
                            <li><b>Post categories</b> to <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Renamed <b>My Content Library</b> to <b>Foricon Media</b></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Some bugs in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.7.1</h6>
                        <span>3 June, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=arrow-up-right-from-square'>arrow-up-right-from-square</Link> icons (Outline: <f-icon b1 icon='arrow-up-right-from-square' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='arrow-up-right-from-square' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=window'>window</Link> icons (Solid: <f-icon b1 icon='window'></f-icon>, Outline: <f-icon b1 icon='window' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='window' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='window' i-s='duotone/outline'></f-icon>)</li>
                            <li>Basic options to adjust the image in <Link target='_blank' href='/fotorno'>Foricon Fotorno</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Improved mobile responsiveness for <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.7</h6>
                        <span>26 May, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Introducing Foricon Fotorno: Brand New Ultimate Image Editing Companion</h3>
                        <p><Link target='_blank' href='/fotorno'>Foricon Fotorno</Link> brings a seamless editing experience along with some generative AI tools, which means whether you need to recolor, replace, or remove elements from your images, Fotorno makes the process simplified and effortless.</p>
                        <p>Say goodbye to long hours of frustrating tweaking, now thanks to convenient and intuitive tools powered by cutting-edge technology, you can edit and enhance your visuals in seconds - no complicated steps, no steep learning curve, just seamless editing at your fingertips. Whether you're a professional designer or simply someone who wants to enhance their photos, Foricon Fortono adapts to your needs and makes image editing a breeze.</p>
                        <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjo9hYxk5xXJdRv-UbdMS8b6Pvab5wcuGPavZLyu3uiWXHuZL74ReiIk5nOixuBG2SOKDHPTc9aGJkjkFIpRGQLO-fnLh0S0nMjy7_B6my8PquIzXt1c2odxEenVidfvCQ7y9SwQct2PaGDKmT6fo8UNyD5NUHYM8AVVQArNR2suF4dvAxISAlkMYJe_NA/s1600/beta1-foricon-fortono.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Brand new image editor & enhancer - <Link target='_blank' href='/fortono'>Foricon Fotorno</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Remove the title in <Link target='_blank' href='/my-content-library'>My Content Library</Link></li>
                            <li><b>Foricon Player</b> to v3.0.1</li>
                            <li>Improved Foricon File Uploader drag-and-drop functionality</li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/my-content-library'>My Content Library</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.6.6</h6>
                        <span>18 May, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=expand'>expand</Link> icons (Outline: <f-icon b1 icon='expand' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='expand' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=compress'>compress</Link> icons (Outline: <f-icon b1 icon='compress' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='compress' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=crop'>crop</Link> icons (Outline: <f-icon b1 icon='crop' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='crop' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=background-removal'>background-removal</Link> icons (Solid: <f-icon b1 icon='background-removal'></f-icon>, Outline: <f-icon b1 icon='background-removal' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='background-removal' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='background-removal' i-s='duotone/outline'></f-icon>)</li>
                            <li>Some gradient to the header</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Improved file downloading functionality in <Link target='_blank' href='/my-content-library'>My Content Library</Link></li>
                            <li>Recolored the <b>Beta</b> label</li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/my-content-library'>My Content Library</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.6.5</h6>
                        <span>4 May, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>File Viewer in <Link target='_blank' href='/my-content-library'>My Content Library</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li><b>Foricon Player</b> to v3.0</li>
                            <li>Improved file management in <Link target='_blank' href='/my-content-library'>My Content Library</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/my-content-library'>My Content Library</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.6.4</h6>
                        <span>28 April, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=floppy-disk'>floppy-disk</Link> icons (Solid: <f-icon b1 icon='floppy-disk'></f-icon>, Outline: <f-icon b1 icon='floppy-disk' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='floppy-disk' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='floppy-disk' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Improved drag-and-drop functionality in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.6.3</h6>
                        <span>17 April, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned <Link target='_blank' href='/search?k=bookmark'>bookmark</Link> icons</li>
                            <li>Redesigned <Link target='_blank' href='/search?k=pencil'>pencil</Link> icons</li>
                            <li>Redesigned <Link target='_blank' href='/search?k=gear'>gear</Link> icons</li>
                            <li>Redesigned <Link target='_blank' href='/search?k=brush'>brush</Link> icons</li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.6.2</h6>
                        <span>12 April, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=mug'>mug</Link> icons (Solid: <f-icon b1 icon='mug'></f-icon>, Outline: <f-icon b1 icon='mug' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='mug' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='mug' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=mug-hot'>mug-hot</Link> icons (Solid: <f-icon b1 icon='mug-hot'></f-icon>, Outline: <f-icon b1 icon='mug-hot' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='mug-hot' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='mug-hot' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.6.1</h6>
                        <span>6 April, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=user-plus'>user-plus</Link> icons (Solid: <f-icon b1 icon='user-plus'></f-icon>, Outline: <f-icon b1 icon='user-plus' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='user-plus' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='user-plus' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=user-minus'>user-minus</Link> icons (Solid: <f-icon b1 icon='user-minus'></f-icon>, Outline: <f-icon b1 icon='user-minus' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='user-minus' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='user-minus' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=user-xmark'>user-xmark</Link> icons (Solid: <f-icon b1 icon='user-xmark'></f-icon>, Outline: <f-icon b1 icon='user-xmark' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='user-xmark' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='user-xmark' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned <Link target='_blank' href='/search?k=user'>bookmark</Link> icons</li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li>Some bugs in <Link target='_blank' href='/my-content-library'>My Content Library</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.6</h6>
                        <span>25 March, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=cart'>cart</Link> icons (Outline: <f-icon b1 icon='cart' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='cart' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=cart-check'>cart-check</Link> icons (Outline: <f-icon b1 icon='cart-check' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='cart-check' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=cart-plus'>cart-plus</Link> icons (Outline: <f-icon b1 icon='cart-plus' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='cart-plus' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=cart-minus'>cart-minus</Link> icons (Outline: <f-icon b1 icon='cart-minus' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='cart-minus' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=cart-xmark'>cart-xmark</Link> icons (Outline: <f-icon b1 icon='cart-xmark' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='cart-xmark' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned <Link target='_blank' href='/account'>Account</Link></li>
                            <li>Redesigned loading page</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.5.2</h6>
                        <span>12 March, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Shortcut to <Link target='_blank' href='/my-content-library'>My Content Library</Link> to header</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Drag & drop in <Link target='_blank' href='/my-content-library'>My Content Library</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.5.1</h6>
                        <span>7 March, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=translate'>translate</Link> icons (Outline: <f-icon b1 icon='translate' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='translate' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned <Link target='_blank' href='/search?k=filter'>filter</Link> icons</li>
                            <li>Redesigned <Link target='_blank' href='/search?k=rename'>rename</Link> icons</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.5</h6>
                        <span>3 March, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>New place for your Foricon Hub content</h3>
                        <p>In a world where every moment counts, why not make the most of your content too? Introducing <Link target='_blank' href='/my-content-library'>My Content Library</Link> – the ultimate hub that will revolutionize the way you manage and access your Foricon Hub content such as images live never before. But this versatile library is not just for images; it&apos;s a dynamic hub for all your creative assets.</p>
                        <p>Imagine effortlessly browsing through your images, documents, and other multimedia files, all in one intuitive space. <Link target='_blank' href='/my-content-library'>My Content Library</Link> is designed to streamline your workflow, making it easier for you to find, organize, and use your content.</p>
                        <p>But that&apos;s not all! Stay tuned for exciting updates as we integrate the library into future file-related services, enhancing your Foricon Hub experience even further.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFbGt9Nkx5sdXbUqEpdY0M1jr0oTrw7WCrSAVj9pj0u1SBiQ4F4f6wIBdjC6EdGGCFPKChHko3DGtp5eb_Wo74zUdhrairoGPmCH_garYaxN5vZpv841HS_7smBd9iBjzUcv0T0sOifivm3EPOhrawTPFwM8U35xnRhLw0_3kfGFqPuMBtRVu_vx24D9w/s1600/beta1-my-content-library.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=clone'>clone</Link> icons (Solid: <f-icon b1 icon='clone'></f-icon>, Outline: <f-icon b1 icon='clone' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clone' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clone' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=filter'>filter</Link> icons (Solid: <f-icon b1 icon='filter'></f-icon>, Outline: <f-icon b1 icon='filter' i-s='outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=rename'>rename</Link> icons (Solid: <f-icon b1 icon='rename'></f-icon>, Outline: <f-icon b1 icon='rename' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='rename' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='rename' i-s='duotone/outline'></f-icon>)</li>
                            <li>New functions including <span className='small-code'>toggleIconOnHover()</span>, <span className='small-code'>removeToggleIconOnHover()</span>, <span className='small-code'>toggleStyleOnHover()</span> and <span className='small-code'>removeToggleStyleOnHover()</span></li>
                            <li>Additional value verification step for all functions except <span className='small-code'>getIcon()</span> and <span className='small-code'>getStyle()</span></li>
                            <li>Remove styling and animation by setting the parameter to <span className='small-code'>null</span> for all functions except <span className='small-code'>getIcon()</span>, <span className='small-code'>setIcon()</span>, <span className='small-code'>getStyle()</span> and <span className='small-code'>setStyle()</span></li>
                            <li><Link target='_blank' href='/my-content-library'>My Content Library</Link></li>
                            <li>Logo reveal to <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs about pageviews calculation</li>
                            <li>Some bugs about the new functions</li>
                            <li>Some bugs in <Link target='_blank' href='/my-content-library'>My Content Library</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.4.2</h6>
                        <span>23 February, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Back to home button in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs about the like button in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Some bugs about account data and registration in <Link target='_blank' href='/login'>Login</Link> and <Link target='_blank' href='/login'>Signup</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.4.1</h6>
                        <span>20 February, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Artist following feature in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Following artists page in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Remove icon animation by using <span className='small-code'>setAnimation()</span> with <span className='small-code'>null</span> for <span className='small-code'>animationName</span> instead of <span className='small-code'>"none"</span></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.4</h6>
                        <span>9 February, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Always on Time With the New Clock Icons</h3>
                        <p>Time waits for no one, but now, with our sleek and stylish clock icons, you will always be right on time. These new icons are designed to enhance your projects with precision and style. Whether you're working on scheduling apps, digital planners, or simply adding a touch of punctuality to your designs, our clock icons have got you covered.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA-5llycCHwXhp2P9tB4BEOb1Kbs6zm5XhDnRG5ZiFUDLBYEN9sY0JNkciRQKpz7k_kFTXNxKY8vNCRCbBKj0WjaybbSs1ddWBnmKZLg3Y7Gq3KbhswjcusnsXur_MV0S_FFhmpYZuGO39MkDWQg_N1fEswRWHfbxOAK8D4qZ_n0kJzNzIPgwe8Rim144/s1600/beta1-clock-icons.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=clock-one'>clock-one</Link> icons (Solid: <f-icon b1 icon='clock-one'></f-icon>, Outline: <f-icon b1 icon='clock-one' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-one' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-one' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-one-thirty'>clock-one-thirty</Link> icons (Solid: <f-icon b1 icon='clock-one-thirty'></f-icon>, Outline: <f-icon b1 icon='clock-one-thirty' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-one-thirty' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-one-thirty' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-two'>clock-two</Link> icons (Solid: <f-icon b1 icon='clock-two'></f-icon>, Outline: <f-icon b1 icon='clock-two' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-two' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-two' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-two-thirty'>clock-two-thirty</Link> icons (Solid: <f-icon b1 icon='clock-two-thirty'></f-icon>, Outline: <f-icon b1 icon='clock-two-thirty' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-two-thirty' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-two-thirty' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-three'>clock-three</Link> icons (Solid: <f-icon b1 icon='clock-three'></f-icon>, Outline: <f-icon b1 icon='clock-three' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-three' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-three' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-three-thirty'>clock-three-thirty</Link> icons (Solid: <f-icon b1 icon='clock-three-thirty'></f-icon>, Outline: <f-icon b1 icon='clock-three-thirty' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-three-thirty' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-three-thirty' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-four'>clock-four</Link> icons (Solid: <f-icon b1 icon='clock-four'></f-icon>, Outline: <f-icon b1 icon='clock-four' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-four' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-four' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-four-thirty'>clock-four-thirty</Link> icons (Solid: <f-icon b1 icon='clock-four-thirty'></f-icon>, Outline: <f-icon b1 icon='clock-four-thirty' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-four-thirty' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-four-thirty' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-five'>clock-five</Link> icons (Solid: <f-icon b1 icon='clock-five'></f-icon>, Outline: <f-icon b1 icon='clock-five' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-five' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-five' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-five-thirty'>clock-five-thirty</Link> icons (Solid: <f-icon b1 icon='clock-five-thirty'></f-icon>, Outline: <f-icon b1 icon='clock-five-thirty' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-five-thirty' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-five-thirty' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-six'>clock-six</Link> icons (Solid: <f-icon b1 icon='clock-six'></f-icon>, Outline: <f-icon b1 icon='clock-six' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-six' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-six' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-six-thirty'>clock--thirty</Link> icons (Solid: <f-icon b1 icon='clock-six-thirty'></f-icon>, Outline: <f-icon b1 icon='clock-six-thirty' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-six-thirty' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-six-thirty' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-seven'>clock-seven</Link> icons (Solid: <f-icon b1 icon='clock-seven'></f-icon>, Outline: <f-icon b1 icon='clock-seven' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-seven' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-seven' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-seven-thirty'>clock-seven-thirty</Link> icons (Solid: <f-icon b1 icon='clock-seven-thirty'></f-icon>, Outline: <f-icon b1 icon='clock-seven-thirty' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-seven-thirty' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-seven-thirty' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-eight'>clock-eight</Link> icons (Solid: <f-icon b1 icon='clock-eight'></f-icon>, Outline: <f-icon b1 icon='clock-eight' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-eight' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-eight' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock--thirty'>clock-eight-thirty</Link> icons (Solid: <f-icon b1 icon='clock-eight-thirty'></f-icon>, Outline: <f-icon b1 icon='clock-eight-thirty' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-eight-thirty' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-eight-thirty' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-'>clock-nine</Link> icons (Solid: <f-icon b1 icon='clock-nine'></f-icon>, Outline: <f-icon b1 icon='clock-nine' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-nine' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-nine' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-nine-thirty'>clock--thirty</Link> icons (Solid: <f-icon b1 icon='clock-nine-thirty'></f-icon>, Outline: <f-icon b1 icon='clock-nine-thirty' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-nine-thirty' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-nine-thirty' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-ten'>clock-ten</Link> icons (Solid: <f-icon b1 icon='clock-ten'></f-icon>, Outline: <f-icon b1 icon='clock-ten' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-ten' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-ten' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-ten-thirty'>clock-ten-thirty</Link> icons (Solid: <f-icon b1 icon='clock-ten-thirty'></f-icon>, Outline: <f-icon b1 icon='clock-ten-thirty' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-ten-thirty' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-ten-thirty' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-eleven'>clock-</Link> icons (Solid: <f-icon b1 icon='clock-eleven'></f-icon>, Outline: <f-icon b1 icon='clock-eleven' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-eleven' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-eleven' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-eleven-thirty'>clock--thirty</Link> icons (Solid: <f-icon b1 icon='clock-eleven-thirty'></f-icon>, Outline: <f-icon b1 icon='clock-eleven-thirty' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-eleven-thirty' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-eleven-thirty' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-twelve'>clock-twelve</Link> icons (Solid: <f-icon b1 icon='clock-twelve'></f-icon>, Outline: <f-icon b1 icon='clock-twelve' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-twelve' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-twelve' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=clock-twelve-thirty'>clock--thirty</Link> icons (Solid: <f-icon b1 icon='clock-twelve-thirty'></f-icon>, Outline: <f-icon b1 icon='clock-twelve-thirty' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='clock-twelve-thirty' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='clock-twelve-thirty' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=folder-arrow-down'>folder-arrow-down</Link> icon variation (Duotone Outline: <f-icon b1 icon='folder-arrow-down' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=folder-bookmark'>folder-bookmark</Link> icon variation (Duotone Outline: <f-icon b1 icon='folder-bookmark' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=folder-bookmark-centered'>folder-bookmark-centered</Link> icon variation (Duotone Outline: <f-icon b1 icon='folder-bookmark-centered' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=folder-extension'>folder-extension</Link> icon variation (Duotone Outline: <f-icon b1 icon='folder-extension' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=folder-image'>folder-image</Link> icon variation (Duotone Outline: <f-icon b1 icon='folder-image' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=folder-lock'>folder-lock</Link> icon variation (Duotone Outline: <f-icon b1 icon='folder-lock' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=folder-music'>folder-music</Link> icon variation (Duotone Outline: <f-icon b1 icon='folder-music' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=folder-open'>folder-open</Link> icon variation (Duotone Outline: <f-icon b1 icon='folder-open' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=folder-video'>folder-video</Link> icon variation (Duotone Outline: <f-icon b1 icon='folder-video' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li><b>Saved</b> and <b>History</b> in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link> were replaced with new <b>Saved</b> and <b>Recently listened</b> playlist</li>
                            <li>Redesigned <Link target='_blank' href='/search?k=folder+open'>folder-open</Link> icons</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.3.3</h6>
                        <span>1 February, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Status badges in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs about synchronizing in <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.3.2</h6>
                        <span>27 January, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=rectangle-stack-plus'>rectangle-stack-plus</Link> icons (Solid: <f-icon b1 icon='rectangle-stack-plus'></f-icon>, Outline: <f-icon b1 icon='rectangle-stack-plus' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='rectangle-stack-plus' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='rectangle-stack-plus' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li>Some bugs in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.3.1</h6>
                        <span>23 January, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=sparkle'>sparkle</Link> icons (Solid: <f-icon b1 icon='sparkle' i-s='duotone/outline'></f-icon>, Outline: <f-icon b1 icon='sparkle' i-s='outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Replaced allowed domains input with a modal opening button in <Link target='_blank' href='/account'>Account</Link></li>
                            <li>Redesigned playlist page in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.3</h6>
                        <span>18 January, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=shuffle'>shuffle</Link> icons (Outline: <f-icon b1 icon='shuffle' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='shuffle' i-s='duotone/outline'></f-icon>)</li>
                            <li><b>Genre page</b> and <b>Mood page</b> to <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Searching for artists in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Fixing button in case audio cannot load properly in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned <b>Chili red</b>, <b>Forest</b> and <b>Calm sea</b> themes of <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Removed Pastel and Sunrise themes of <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.2.1</h6>
                        <span>11 January, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link> replay button didn&apos;t save when enabled and disabled</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.2</h6>
                        <span>5 January, 2025</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Sing Together With Newly Added Lyrics in Foricon Music</h3>
                        <p>Get ready to elevate your music experience with the latest feature in Foricon Music: Lyrics! Whether you're passionate about karaoke or simply enjoy singing along, this new addition lets you follow the words to your favorite songs effortlessly. Dive into your music library and let the lyrics guide you, making every listening session more enjoyable and immersive.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil9kxrO6zb5ZQNP0q1O-4RXkxwyDTc-o979FGlacII1T0Na993uZlRKvHqQyrhYv1ce3jDlR7hOU5bbXqeWQfl46mHjAqvY8hkZcEy7rTaJuEW_S7Kxfi_7uMPZJL39BDCK1xchkRaO1kC-ZT1HfEKEKFUNa5NTLPmlzGAuxrbcJIJkyYXBIgnOEMWNMA/s1600/beta1-foricon-music-lyrics.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=shopping-bag'>shopping-bag</Link> icons (Solid: <f-icon b1 icon='shopping-bag'></f-icon>, Outline: <f-icon b1 icon='shopping-bag' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='shopping-bag' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='shopping-bag' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=united-states'>united-states</Link> icon (Solid: <f-icon b1 icon='united-states'></f-icon>)</li>
                            <li><b>Lyrics</b> to <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Profile page to <Link target='_blank' href='/hub'>Foricon Hub</Link></li>
                            <li>Keyboard shortcuts for undo and redo in the <Link target='_blank' href='/hub?editor'>Foricon Hub post editor</Link></li>
                            <li>Keyboard shortcut to delete elements <Link target='_blank' href='/hub?editor'>Foricon Hub post editor</Link></li>
                            <li>Select media with My library</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Improved drag & drop elements in <Link target='_blank' href='/hub?editor'>Foricon Hub post editor</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.1</h6>
                        <span>28 December, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Big Update to Foricon Music!</h3>
                        <p>Time brings improvement, and our old design was missing some key features that modern users expect. So, we gave it a fresh, new look!</p>
                        <p>With the updated layout, you can now access your playlists directly from the homepage, no more navigating through My library. Plus, the new mobile UI is more user-friendly than ever before.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyHRaB4FD-Vc_54QFuHSqdRVsCKgzyxf4-uf18nYMMawwFu3Uo-hQ8awvMok6phA_ILNYiI6Zxk9UhMFPPZ5h1IH1n3vyj7VXcQX6gL24H5pq2AlaHxfaauEuO5M5wadD-2_cU6GFndbP3ZZv62EVVX-NeoPbxuD0snUEN4HHXys41jhXPM5ygi1MvzUo/s1600/beta1-foricon-music-update.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=spinner-1p2'>spinner-1p2</Link> icons (Outline: <f-icon b1 icon='spinner-1p2' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='spinner-1p2' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=spinner-1p4'>spinner-1p4</Link> icons (Outline: <f-icon b1 icon='spinner-1p4' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='spinner-1p4' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=spinner-2p3'>spinner-2p3</Link> icons (Outline: <f-icon b1 icon='spinner-2p3' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='spinner-2p3' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=spinner-1p3'>spinner-1p3</Link> icon variation (Duotone Outline: <f-icon b1 icon='spinner-1p3' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=spinner-3p4'>spinner-3p4</Link> icon variation (Duotone Outline: <f-icon b1 icon='spinner-3p4' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=circle'>circle</Link> icon variation (Solid: <f-icon b1 icon='circle'></f-icon>)</li>
                            <li><Link target='_blank' href='/search?k=square'>square</Link> icon variation (Solid: <f-icon b1 icon='square'></f-icon>)</li>
                            <li><b>Listens</b> to <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li><b>Artist page</b> to <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li><b>Audio visualizer</b> back to <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Usable <b>volume icon</b> in the <b>volume panel</b> in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link> for quick mute and unmute</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned the layout of <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li>Improved <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link> track detail page responsiveness</li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link> downloaded the current playing song instead of the selected song</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Beta 1.0</h6>
                        <span>21 December, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Exciting News! Foricon Enters Beta Phase!</h3>
                        <p>Foricon has officially entered the Beta phase as of 21 December, 2024! This milestone marks a significant step forward in our journey to provide you with an exceptional user experience.</p>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Choose icon categories, styles and search keywords within the URL bar in <Link target='_blank' href='/search'>Search</Link></li>
                            <li><Link target='_blank' href='/search?k=code'>code</Link> icons (Outline: <f-icon b1 icon='code' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='code' i-s='duotone/outline'></f-icon>)</li>
                            <li>Results are now displayed in pages in <Link target='_blank' href='/search'>Search</Link></li>
                            <li><b>Recommendation</b> in <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link> track detail page</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Renamed <b>0.x.x</b> versions to <b>Alpha x.x</b></li>
                            <li>Footer</li>
                            <li><Link target='_blank' href='/search'>Search</Link> responsiveness</li>
                        </ul>
                        <h3>Fixed</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search?k=file-code'>file-code</Link> Duotone Solid secondary layer which previously didn&apos;t match with primary one</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 9.7</h6>
                        <span>8 December, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Play Your Favorite Tracks With New Foricon Music Playlist</h3>
                        <p>Exciting news! Our brand-new playlist feature is here! Now you can create, customize, and share your very own playlists, making your music experience more personal and enjoyable than ever before.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhR3OGvtViJ-hDMGpGGSAdwCl-MeJ5orhUE65w5ZrdeEQfr0n5IgBDylvQA8U0whbPBNFYukrA1eDJOIJHFEMA3c-GpSInMkd8j-TMtSd5G4Cx7kw8bC_Xwir3UXDepffUg4rGEEz5cRSl0W76l0oz0w3JMK4FGm5qTepPViHsHKyxFNlRmJP3rqsxwjCg/s1600/alpha9-playlist.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Playlist to <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                            <li><span className='small-code'>arrow-left-from-bracket</span> icons (Outline: <f-icon b1 icon='arrow-left-from-bracket' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='arrow-left-from-bracket' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-left-to-bracket</span> icons (Outline: <f-icon b1 icon='arrow-left-to-bracket' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='arrow-left-to-bracket' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-down-from-bracket</span> icons (Outline: <f-icon b1 icon='arrow-down-from-bracket' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='arrow-down-from-bracket' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-up-to-bracket</span> icons (Outline: <f-icon b1 icon='arrow-up-to-bracket' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='arrow-up-to-bracket' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-left-from-line</span> icons (Outline: <f-icon b1 icon='arrow-left-from-line' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='arrow-left-from-line' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-left-to-line</span> icons (Outline: <f-icon b1 icon='arrow-left-to-line' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='arrow-left-to-line' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-down-from-line</span> icons (Outline: <f-icon b1 icon='arrow-down-from-line' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='arrow-down-from-line' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-up-to-line</span> icons (Outline: <f-icon b1 icon='arrow-up-to-line' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='arrow-up-to-line' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-right-from-bracket</span> icon variation (Duotone Outline: <f-icon b1 icon='arrow-right-from-bracket' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-right-to-bracket</span> icon variation (Duotone Outline: <f-icon b1 icon='arrow-right-to-bracket' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-down-to-bracket</span> icon variation (Duotone Outline: <f-icon b1 icon='arrow-down-to-bracket' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-up-from-bracket</span> icon variation (Duotone Outline: <f-icon b1 icon='arrow-up-from-bracket' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-right-from-line</span> icon variation (Duotone Outline: <f-icon b1 icon='arrow-right-from-line' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-right-to-line</span> icon variation (Duotone Outline: <f-icon b1 icon='arrow-right-to-line' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-down-to-line</span> icon variation (Duotone Outline: <f-icon b1 icon='arrow-down-to-line' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>arrow-up-from-line</span> icon variation (Duotone Outline: <f-icon b1 icon='arrow-up-from-line' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned <span className='small-code'>arrow-down-to-line</span>, <span className='small-code'>arrow-up-from-line</span>, <span className='small-code'>arrow-right-to-line</span>, <span className='small-code'>arrow-right-from-line</span>, <span className='small-code'>arrow-down-to-bracket</span>, <span className='small-code'>arrow-up-from-bracket</span>, <span className='small-code'>arrow-right-to-bracket</span>, <span className='small-code'>arrow-right-from-bracket</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 9.6</h6>
                        <span>26 November, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Brand New Place for Foricon Community - Foricon Hub</h3>
                        <p>Foricon Hub, our brand-new forum designed for you, has launched along with Alpha 9.6! Whether you're looking to solve a problem, ask questions, or request new icons, Foricon Hub is the place to be.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMM3BmLHJhxLNw2oJp7uPEZEbMS_YfpT2fx8IH3o96salTKALmH6rqTv51rKURI3r8SEiT3_cfTDT3dqc5RpYl1JCjMtTTVyZkGUnjeVDjt3EdZ271sqDBJYPdpSN-GIY7ji1lT5gBHuSMMkqMjEX0yN5yzZQ7s69NFnN8vGMgvCmKADWf699Z-y63zeQ/s1600/alpha9-hub.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>bullhorn</span> icons (Solid: <f-icon b1 icon='bullhorn'></f-icon>, Outline: <f-icon b1 icon='bullhorn' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='bullhorn' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='bullhorn' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/hub'>Hub</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 9.5</h6>
                        <span>11 November, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Fully Redesigned Foricon Logo</h3>
                        <p>From a hexagon to Foricon&apos;s F, this fresh new design represents our commitment to innovation and excellence. Our new logo embodies the spirit of our brand, reflecting our values and vision for the future.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg98rxwrGpg0g3IXb5BvdTtOfgJBhpK3Svw7o5MjlJiqQdkbGD9CrHCWsFizMf1PZCrHdtYCyTokttEChfoZGXmbuGhPj6ME7PhoORsDqJZqBbv7i4UO9AY4G7mOTb9534imG9jAMLyLKR5ZVvU6R_pKmeCEO5r6dl12S7Py-MytLoDG6xmE64hwsID99Y/s1600/alpha9-newlogo.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>question</span> icons (Outline: <f-icon b1 icon='question' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='question' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>circle-question</span> icons (Solid: <f-icon b1 icon='circle-question'></f-icon>, Outline: <f-icon b1 icon='circle-question' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='circle-question' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='circle-question' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned the logo</li>
                            <li>Toast message animation</li>
                            <li><Link target='_blank' href='/search'>Search</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 9.4</h6>
                        <span>21 October, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>New Icons in Text Formatting Category</h3>
                        <p>Alpha 9.4 came with the addition of 25 brand-new icons to our <Link target='_blank' href='/search?categories=text-formatting'>Text formatting</Link> category. These icons are designed to enhance your projects with style and precision. Whether you're working on web design, mobile apps, or print media, these new icons will help you highlight your text formatting skills effortlessly.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZWOpoed_UHrzE8064hu2ZOMz06nU_qNwnuO_mCi7CjI9S-D7SUF51mnmqarG8MV30lQI3czNTfPLHUd2oawpGoWyFquPBZWNTvOx_AtN2xiuyD2UTBK-zkc29pbQ5gyUV2RBRi0qV3FosxLxLSwhIHmH-CuLSLdGTiZr_VAM_0qfQSzNBuNZI1miFJYI/s1600/alpha9-textformatting.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>bold</span> icons (Outline: <f-icon b1 icon='bold' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>italic</span> icons (Outline: <f-icon b1 icon='italic' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>strikethrough</span> icons (Outline: <f-icon b1 icon='strikethrough' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='strikethrough' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>text</span> icons (Outline: <f-icon b1 icon='text' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>underline</span> icons (Outline: <f-icon b1 icon='underline' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='underline' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>overline</span> icons (Outline: <f-icon b1 icon='overline' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='overline' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>indent</span> icons (Solid: <f-icon b1 icon='indent'></f-icon>, Outline: <f-icon b1 icon='indent' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='indent' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='indent' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>outdent</span> icons (Solid: <f-icon b1 icon='outdent'></f-icon>, Outline: <f-icon b1 icon='outdent' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='outdent' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='outdent' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>align-left</span> icons (Outline: <f-icon b1 icon='align-left' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='align-left' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>align-center</span> icons (Outline: <f-icon b1 icon='align-center' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='align-center' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>align-right</span> icons (Outline: <f-icon b1 icon='align-right' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='align-right' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>align-justify</span> icons (Outline: <f-icon b1 icon='align-justify' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='align-justify' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 9.3</h6>
                        <span>18 October, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>bell</span> icons (Solid: <f-icon b1 icon='bell'></f-icon>, Outline: <f-icon b1 icon='bell' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='bell' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='bell' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>bell-dot</span> icons (Solid: <f-icon b1 icon='bell-dot'></f-icon>, Outline: <f-icon b1 icon='bell-dot' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='bell-dot' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='bell-dot' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>exclamation</span> icons (Outline: <f-icon b1 icon='exclamation' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>circle-exclamation</span> icons (Solid: <f-icon b1 icon='circle-exclamation'></f-icon>, Outline: <f-icon b1 icon='circle-exclamation' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='circle-exclamation' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='circle-exclamation' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned <span className='small-code'>circle-info</span> icons a little bit</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 9.2</h6>
                        <span>6 October, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Find Icon Easier With Categories</h3>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>tag</span> icons (Solid: <f-icon b1 icon='tag'></f-icon>, Duotone Solid: <f-icon b1 icon='tag' i-s='duotone/solid'></f-icon>)</li>
                            <li><span className='small-code'>house-blank</span> icons (Solid: <f-icon b1 icon='house-blank'></f-icon>, Outline: <f-icon b1 icon='house-blank' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>house-roof</span> icons (Solid: <f-icon b1 icon='house-roof'></f-icon>, Outline: <f-icon b1 icon='house-roof' i-s='outline'></f-icon>)</li>
                            <li>Icon categories</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>The grid gap has been increased for <span className='small-code'>grid-4</span> icons</li>
                            <li>Renamed <span className='small-code'>house-blank</span> icons to <span className='small-code'>house-roof-blank</span></li>
                            <li>Removed <span className='small-code'>house-blank-2</span> icon</li>
                            <li><Link target='_blank' href='/search'>Search</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 9.1</h6>
                        <span>25 September, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>circle-xmark</span> icons (Solid: <f-icon b1 icon='circle-xmark'></f-icon>, Outline: <f-icon b1 icon='circle-xmark' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='circle-xmark' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='circle-xmark' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>thumb-up</span> icons (Solid: <f-icon b1 icon='thumb-up'></f-icon>, Outline: <f-icon b1 icon='thumb-up' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>thumb-down</span> icons (Solid: <f-icon b1 icon='thumb-down'></f-icon>, Outline: <f-icon b1 icon='thumb-down' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>ellipsis</span> icons (Outline: <f-icon b1 icon='ellipsis' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='ellipsis' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>ellipsis-vertical</span> icons (Outline: <f-icon b1 icon='ellipsis-vertical' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='ellipsis-vertical' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 9.0</h6>
                        <span>21 September, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Introducing The New "Chilzy Music"</h3>
                        <p>Chilzy Music has been renamed to Foricon Music! This change reflects our commitment to evolving and enhancing your music experience. While our name has changed, our dedication to providing you with the best music remains the same. Stay tuned for more updates and new features coming your way!</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_eWqyfrT7V334o2wX1eS0oaPc-u0QbwCfs0ozZvY5Sb_kVqy7wo5HRyLRrpXp-6yaB3iovdsc8e1PZXrRxo_s0Dy1bEu2c7dUMDxF3ie3xD2raLHd8kPZtwgUNbuh0ohS7ldkxn7jkGPeo7QA2Qdg2qeEfjbTTUwdKWpMYa3YPlN2r37nZ877IfmobVY/s1600/foricon-music-banner.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>signal-stream</span> icons (Solid: <f-icon b1 icon='signal-stream'></f-icon>, Outline: <f-icon b1 icon='signal-stream' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='signal-stream' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='signal-stream' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>spin</span> attribute for <span className='small-code element'>f-icon</span></li>
                            <li>Themes for <Link target='_blank' href='/stream-chilzymusic'>Foricon Music</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Renamed <b>Chilzy Music</b> to <b>Foricon Music</b></li>
                            <li>Redesigned <span className='small-code'>wifi</span>, <span className='small-code'>wifi-average</span>, <span className='small-code'>wifi-bad</span>, <span className='small-code'>wifi-weak</span> and <span className='small-code'>wifi-slash</span> icons</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.18</h6>
                        <span>7 September, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>square</span> icon (Outline: <f-icon b1 icon='square' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>check</span> icon (Outline: <f-icon b1 icon='check' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>double-check</span> icons (Outline: <f-icon b1 icon='double-check' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='double-check' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>circle-check</span> icons (Solid: <f-icon b1 icon='circle-check'></f-icon>, Outline: <f-icon b1 icon='circle-check' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='circle-check' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='circle-check' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>square-check</span> icons (Solid: <f-icon b1 icon='square-check'></f-icon>, Outline: <f-icon b1 icon='square-check' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='square-check' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='square-check' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>shield-check</span> icons (Solid: <f-icon b1 icon='shield-check'></f-icon>, Outline: <f-icon b1 icon='shield-check' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='shield-check' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='shield-check' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>setAnimation()</span>, <span className='small-code'>setSize()</span>, <span className='small-code'>setScale()</span> and <span className='small-code'>rotate()</span> functions</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/stream-chilzymusic'>Chilzy Music</Link> search results are now sorted by similarity to the search keyword</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.17</h6>
                        <span>1 September, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>rectangle-stack</span> icons (Solid: <f-icon b1 icon='rectangle-stack'></f-icon>, Outline: <f-icon b1 icon='rectangle-stack' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='rectangle-stack' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='rectangle-stack' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>list-music</span> icons (Solid: <f-icon b1 icon='list-music'></f-icon>, Outline: <f-icon b1 icon='list-music' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='list-music' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='list-music' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.16</h6>
                        <span>28 August, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Select Your Next Song to Play With Next</h3>
                        <p>Alpha 8.16 comes the launch of our latest Chilzy Music feature - <b>Next</b>! This new addition allows you to choose the next songs to play right after the currently playing song ends. Now, you have even more control over your listening experience, making it easier than ever to curate the perfect playlist on the fly.</p>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><b>Next</b> to <Link target='_blank' href='/stream-chilzymusic'>Chilzy Music</Link></li>
                            <li><span className='small-code'>compass</span> icons (Solid: <f-icon b1 icon='compass'></f-icon>, Outline: <f-icon b1 icon='compass' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='compass' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='compass' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>autoplay</span> icons (Solid: <f-icon b1 icon='autoplay'></f-icon>, Outline: <f-icon b1 icon='autoplay' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='autoplay' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='autoplay' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>replay</span> icons (Solid: <f-icon b1 icon='replay'></f-icon>, Outline: <f-icon b1 icon='replay' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='replay' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='replay' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.15</h6>
                        <span>23 August, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Brand New Look for Chilzy Music</h3>
                        <p>Chilzy Music has undergone a comprehensive redesign, introducing a suite of new features to improve user experience. The update includes a more intuitive and modern interface, and now you can also save your favorite tracks.</p>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>volume-xmark</span> icons (Solid: <f-icon b1 icon='volume-xmark'></f-icon>, Outline: <f-icon b1 icon='volume-xmark' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='volume-xmark' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='volume-xmark' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>volume-low</span> icons (Solid: <f-icon b1 icon='volume-low'></f-icon>, Outline: <f-icon b1 icon='volume-low' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='volume-low' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='volume-low' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>volume-medium</span> icons (Solid: <f-icon b1 icon='volume-medium'></f-icon>, Outline: <f-icon b1 icon='volume-medium' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='volume-medium' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='volume-medium' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>volume-high</span> icons (Solid: <f-icon b1 icon='volume-high'></f-icon>, Outline: <f-icon b1 icon='volume-high' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='volume-high' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='volume-high' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>link</span> icons (Outline: <f-icon b1 icon='link' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='link' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Improved <Link target='_blank' href='/stream-chilzymusic'>Chilzy Music</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.14</h6>
                        <span>18 August, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Comment on Other User’s Requests</h3>
                        <p><Link target='_blank' href='/request'>Request</Link> in Alpha 8.14 now includes a comment feature! This new addition allows users to share their thoughts and feedback directly on any icon request, fostering a more collaborative and interactive community. We encourage you to share your thoughts about community icon concepts!</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXtLFHe8nTOroyZlR0HIktmaQ8PzA6ztNYsDnZMzA9UpBSt67kw8bcS8rb4dogAT7xcHMfXNz35DBcaifeX48j-uC8bhtDSqo7pMxpXWCm-c0RkGghyphenhyphen7RnUWdTNLNbZnqURM2C-jlZhmgzkM_YLbpFHmKI4B1uqu3X2b7Mkj7pousrugV-rW8zyEaI9MI/s1600/comment.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>New comment feature in <Link target='_blank' href='/request'>Request</Link></li>
                            <li><span className='small-code'>eye</span> icons (Solid: <f-icon b1 icon='eye'></f-icon>, Outline: <f-icon b1 icon='eye' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='eye' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='eye' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>shield</span> icons (Solid: <f-icon b1 icon='shield'></f-icon>, Outline: <f-icon b1 icon='shield' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='shield' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='shield' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>shield-half</span> icons (Solid: <f-icon b1 icon='shield-half'></f-icon>, Outline: <f-icon b1 icon='shield-half' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='shield-half' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='shield-half' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>shield-half-stroke</span> icons (Solid: <f-icon b1 icon='shield-half-stroke'></f-icon>, Outline: <f-icon b1 icon='shield-half-stroke' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='shield-half-stroke' i-s='duotone/solid'></f-icon>)</li>
                            <li><span className='small-code'>comment</span> icons (Solid: <f-icon b1 icon='comment'></f-icon>, Outline: <f-icon b1 icon='comment' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>dollar</span> icons (Outline: <f-icon b1 icon='dollar' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='dollar' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>bookmark</span> icons (Solid: <f-icon b1 icon='bookmark'></f-icon>, Outline: <f-icon b1 icon='bookmark' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>play</span> icons (Solid: <f-icon b1 icon='play'></f-icon>, Outline: <f-icon b1 icon='play' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>pause</span> icons (Solid: <f-icon b1 icon='pause'></f-icon>, Outline: <f-icon b1 icon='pause' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>forward</span> icons (Solid: <f-icon b1 icon='forward'></f-icon>, Outline: <f-icon b1 icon='forward' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='forward' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='forward' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>backward</span> icons (Solid: <f-icon b1 icon='backward'></f-icon>, Outline: <f-icon b1 icon='backward' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='backward' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='backward' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned <Link target='_blank' href='/stream-chilzymusic'>Chilzy Music</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.13</h6>
                        <span>14 August, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Brand New Icons</h3>
                        <p>Alpha 8.13 come with brand new 14 icons included 4 styles of <span className='small-code'>user</span>, 4 styles of <span className='small-code'>circle-user</span>, 4 styles of <span className='small-code'>gear</span> and 2 styles of <span className='small-code'>paper-plane-simple</span></p>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>user</span> icons (Solid: <f-icon b1 icon='user'></f-icon>, Outline: <f-icon b1 icon='user' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='user' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='user' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>circle-user</span> icons (Solid: <f-icon b1 icon='circle-user'></f-icon>, Outline: <f-icon b1 icon='circle-user' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='circle-user' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='circle-user' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>gear</span> icons (Solid: <f-icon b1 icon='gear'></f-icon>, Outline: <f-icon b1 icon='gear' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='gear' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='gear' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>paper-plane-simple</span> icons (Solid: <f-icon b1 icon='paper-plane-simple'></f-icon>, Outline: <f-icon b1 icon='paper-plane-simple' i-s='outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/request'>Request</Link></li>
                            <li><Link target='_blank' href='//chilzymusic.blogspot.com'>Chilzy Music</Link> a little bit</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.12</h6>
                        <span>9 August, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}></div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>trash-can</span> icons (Solid: <f-icon b1 icon='trash-can'></f-icon>, Outline: <f-icon b1 icon='trash-can' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='trash-can' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='trash-can' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/request'>Request</Link></li>
                            <li><span className='small-code'>icon-style</span> attribute has been shortened to <span className='small-code'>i-s</span></li>
                            <li>Removed <span className='small-code'>mdfade</span> and <span className='small-code'>blbeat</span> animations</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.11</h6>
                        <span>6 August, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>New Mathematic Icons</h3>
                        <p>Now you can "calculate" directly on Foricon. <Link target='_blank' href='/search'>Browse it now!</Link></p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTd6V6gHEYK0qKu_FdsIsrObiNrwGNKSgNL-VMkr5nObOenm9NcVXA5JZYLa4rXJ6z_l6qsnamZ_eFkR3-1QVuufVtVbsvC6Xp5YtWbAgIKyJFljiEG2k9OJdZ3KiAVRp3pT3aa67InJD6KxhltPRoMqh9Y8jEBJJbA2Wj7kRxmQTPVzDjUTLMmuwTKG4/s1600/math.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>minus</span> icon (Outline: <f-icon b1 icon='minus' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>percent</span> icons (Outline: <f-icon b1 icon='percent' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='percent' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>xmark</span> icons (Outline: <f-icon b1 icon='xmark' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='xmark' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>equal</span> icons (Outline: <f-icon b1 icon='equal' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='equal' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>divide</span> icons (Outline: <f-icon b1 icon='divide' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='divide' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>not-equal</span> icons (Outline: <f-icon b1 icon='not-equal' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='not-equal' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>hashtag</span> icons (Outline: <f-icon b1 icon='hashtag' i-s='outline'></f-icon>, Duotone Outline: <f-icon b1 icon='hashtag' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>plus</span> icon in Duotone Outline (<f-icon b1 icon='plus' i-s='duotone/outline'></f-icon>)</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>New <Link target='_blank' href='/'>Homepage</Link> desgin</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.10</h6>
                        <span>3 August, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Brand New Language - Russian</h3>
                        <p>Alpha 8.10 is set to include Russian language support, expanding its accessibility and user-friendliness. This addition is part of Foricon&apos;s target to enhancing user experience and providing more inclusive services. With this update, Russian-speaking users will be able to navigate and utilize Foricon&apos;s features in their native language, making the platform even more versatile and global.</p>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Russian</li>
                            <li><Link target='_blank' href='/privacy'>Privacy Policy</Link></li>
                            <li><f-icon b1 icon='face-whistle'></f-icon> <span className='small-code'>face-whistle</span>, <f-icon b1 icon='face-whistle-wink'></f-icon> <span className='small-code'>face-whistle-wink</span>, <f-icon b1 icon='face-whistle-closed-eyes'></f-icon> <span className='small-code'>face-whistle-closed-eyes</span>, <f-icon b1 icon='face-whistle-beam'></f-icon> <span className='small-code'>face-whistle-beam</span></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>All flags in <Link target='_blank' href='/languages'>Languages</Link></li>
                            <li>404 page</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.9</h6>
                        <span>30 July, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>New Emojis!</h3>
                        <p>5 new emojis have joined our emoji family in Foricon icons. More ways to express yourself now!</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1ovDGeRK7ikrwAR3TxQN_YvsKXWTddKD45NzKuUtc1rmbcRCR6o3-57N8Whpuey19AFIgSe6bWbQTRjmoFHcKJRp38uIRU4ll_qnUrzqjMvAWJmWWuXg5Uwp_dSjXklE8-8A1ojdhxxeeJclYhGno8TgexX-ZUzeFUWAGHeqfW5v1UrbrOAQRoPgzWIk/s1600/0.8.9-emoji.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>New emojis included <f-icon b1 icon='face-laugh-squint-tears'></f-icon> <span className='small-code'>face-laugh-squint-tears</span>, <f-icon b1 icon='face-grin'></f-icon> <span className='small-code'>face-grin</span>, <f-icon b1 icon='face-grin-wink'></f-icon> <span className='small-code'>face-grin-wink</span>, <f-icon b1 icon='face-grin-beam'></f-icon> <span className='small-code'>face-grin-beam</span> and <f-icon b1 icon='face-grin-beam-sweat'></f-icon> <span className='small-code'>face-grin-beam-sweat</span></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Renamed <span className='small-code'>face-laugh-smiling-eyes</span> to <span className='small-code'>face-laugh-beam</span></li>
                            <li><span className='small-code'>face-laugh</span>, <span className='small-code'>face-laugh-squint</span>, <span className='small-code'>face-laugh-beam</span>, <span className='small-code'>face-rolling-eyes</span> and <span className='small-code'>face-flushed</span></li>
                            <li><Link target='_blank' href='/request'>Request</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.8</h6>
                        <span>27 July, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Brand New Avatars for You</h3>
                        <p>We are excited to announce a fresh new update to our avatar collection! A set of 30 new avatars has been introduced, offering a diverse range of characters that replace the previous selection.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjommjj8qRpsDrrNDKoo5NH6QZj9QmLheeVqsPdtqicDOd40PGHhQyVKKiMQkslAir6rRO1W39vhu3TNJHHESJ4dOcAD_TnXZ9gQ6brvBLmPxurw8cLd-uKDfVq7PUvKp21jiPbtKdqU9DjHUGwytB-CV7BIRo-Z6Wswm5EYUjzEiGozgOKl5GUFSnyxqY/s1600/avatars.png'/>
                        <h3>Say Hello to Unicodes</h3>
                        <p>Now you can integrate our icons easily by simply add their unicodes to your code</p>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>30 new avatars</li>
                            <li>Unicodes for all icons</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.7</h6>
                        <span>25 July, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Sign Up and Log In With GitHub</h3>
                        <p>Continue from Alpha 8.6, Foricon also supports logging in with GitHub now! And again, streamlines the sign-up and login process, allowing users to access Foricon with their existing GitHub credentials. Get started today by selecting the GitHub option on our sign-up and login page.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6qYWxBjKCd-BnXlLngMHWpL1UTmd7W11aXSImFUA34J2Q6u9jRedW_y0c4DO4BBIyBzkUHMr8Z595JRgSxn9vkzPAp-1GntQJu7Erb0zHpoWQPWZAa-CFR95uRnYpBeNMQPo4olnvwagO749UWPjavJo4noN5lGl_g0Y4XLIXCKHpy2215fLHQySkxL8/s1600/github-su-li.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Sign up and Log in with Github</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.6</h6>
                        <span>23 July, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Sign Up and Log In with Google and Microsoft</h3>
                        <p>We are excited to announce that version Alpha 8.6 (0.8.6) now supports login with Google and Microsoft accounts! This new feature streamlines the login process, allowing users to access Foricon with their existing Google or Microsoft credentials.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjD90ThgsJzrLKdavpWxx9EqNArkq5IHIq3cfaUlraVMcgh7lA01GHHUe1nYalZ5uL3ZOpQglCvhBQbd1hrFpCVOzE-moRRXPj0X7FT45OWisJh9xPIlP3xHX8RXFR_oyDA6cytutB8JXz5AZRIiWgyfTR-ddt4rKhCi9keERG1mOD_QcuNvRepXnAJOOE/s1600/gg-ms-su-li.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Sign up and log in with Google and Microsoft</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li><b>All menu</b> motion</li>
                            <li>Loading animation</li>
                            <li><Link target='_blank' href='/tos'>Terms of Service</Link></li>
                            <li><Link target='_blank' href='/chilzymusic'>Chilzy Music</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.5</h6>
                        <span>19 July, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>New Cursor</h3>
                        <p>To enhance the user experience, and also to achieve the more modern aesthetic, we’ve revamped the cursor design by incorporating rounded corners and subtle shading gradients.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJoob0w28oguwCYYm5vgRxWIc2gkDXaN8tgU646ta-Id-FK2aYI917bqwXt1Y08AOl61vyY3ktdVNJGbCR-1bCs9hQGWThyphenhyphenYrfLVmbSnZebcpjfmUsxLU8_JiSPAKXEWjRXKfXVt7avQhwaZRC1Jmj_vW7pc4xuwpNsuQ-yxYCCVIRIxLjGFhShR9LiPY/s1600/new-cursor.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>circle-plus</span> icons (Solid: <f-icon b1 icon='circle-plus'></f-icon>, Outline: <f-icon b1 icon='circle-plus' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='circle-plus' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='circle-plus' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>plus</span> icon (Outline: <f-icon b1 icon='plus' i-s='outline'></f-icon>)</li>
                            <li><span className='small-code'>palette</span> icons (Solid: <f-icon b1 icon='palette'></f-icon>, Outline: <f-icon b1 icon='palette' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='palette' i-s='duotone/solid'></f-icon>, duotone Outline: <f-icon b1 icon='palette' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>display</span> icons (Solid: <f-icon b1 icon='display'></f-icon>, Outline: <f-icon b1 icon='display' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='display' i-s='duotone/solid'></f-icon>, duotone Outline: <f-icon b1 icon='display' i-s='duotone/outline'></f-icon>)</li>
                            <li><span className='small-code'>phone</span> icons (Solid: <f-icon b1 icon='phone'></f-icon>, Outline: <f-icon b1 icon='phone' i-s='outline'></f-icon>, Duotone Solid: <f-icon b1 icon='phone' i-s='duotone/solid'></f-icon>, Duotone Outline: <f-icon b1 icon='phone' i-s='duotone/outline'></f-icon>)</li>
                            <li><Link target='_blank' href='/pricing'>Pricing</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Cursor</li>
                            <li><Link target='_blank' href='/'>Homepage</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.4</h6>
                        <span>16 July, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>New “avatar” of Foricon!</h3>
                        <p>We followed the original logo path, simplified it and added some more details, resulting in a fresh, new-looking logo.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc9r6SB__BYjbvJoU1g-pQ0gsyoZobJ4crnSzUVIdBj9GflFegS6YHg0yNswT-IBwtB9orxFz2Xv-SJy2BTznxpRhjRiknKQV9KzlNncd8fUhLHcmGX9IbWZ26-80b9DTz_WPe1by_NjHnIFUScxHf1feBvaibOq1EaPILO9o2F2oPsFASLxI_4BYIEY4/s1600/foricon-text-banner.png'/>
                        <h3>Chilzy Music is now fully supported on any device</h3>
                        <p>From now, mobile users can enjoy all the features that already available to desktop users. You can listen to music and download it directly on your phone!</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh03flQftNdQi6NNRLLGDhqiZ_EK13cP7VoJ_q9UAxXD1D-KKf9K9wUmwXTtySx7olabd8AOi3Dc3gfgGBEdSecGlybKrU3cUg0VlGz7lMpbFylcdxNljIyf5PEtshOp8gY2PGzzyY6nUsATyJV97CaSt2fHd0v8E8PpdXHsMnRLeNoBX1e7N8ltp8uohM/s1600/chilzymusic-banner1.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/about'>About</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Changed Foricon logo</li>
                            <li><Link target='_blank' href='/'>Homepage</Link> hero section</li>
                            <li>Button hover color</li>
                            <li>Strongly updated Chilzy Music for mobile</li>
                            <li><span className='small-code'>filled</span> and <span className='small-code'>outlined</span> were renamed to <span className='small-code'>solid</span> and <span className='small-code'>outline</span></li>
                            <li><span className='small-code'>type</span> attribute has been replaced with <span className='small-code'>icon-style</span> attribute</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.3</h6>
                        <span>4 July, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>New icons</h3>
                        <p><f-icon b1 icon='globe'></f-icon> Globe icons were added in <span className='small-code'>filled</span>, <span className='small-code'>outlined</span> and <span className='small-code'>duotone/filled</span></p>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>globe</span> icon (Filled: <f-icon b1 icon='globe'></f-icon>, Outlined: <f-icon b1 icon='globe' i-s='outline'></f-icon>, Filled Duotone: <f-icon b1 icon='globe' i-s='duotone/solid'></f-icon>)</li>
                            <li>Shortcut to <Link target='_blank' href='/languages'>Languages</Link> on header</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Header</li>
                            <li>Code box syntax highlighting color</li>
                            <li>Scrollbar</li>
                            <li><span className='small-code'>reverse</span> attribute is renamed to <span className='small-code'>reversed</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.2</h6>
                        <span>26 June, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>More Things To Do in Your Account!</h3>
                        <p>Now you can change your password and your email right in <Link target='_blank' href='/account'>Account</Link>. We also improved every account security.</p>
                        <h3>New emojis</h3>
                        <p>Instead using random emoji images on Google for your project, why don&apos;t you use our brand new emoji icons? First 12 emojis will be released in Alpha 8.2</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjgdagCJamNH_1VoYjDvqc0jKFGemJUx6kdkMLdSdsX5c9jyYiP6iBDalKQAfIfMKUJ38nxp1XnvclPyCRF76OS7HgzOW2Ltp0RUbFZqRxP3jI5mt3HHYKEEOvTzEiD9r9OkwORNos7PWwiSKmJvvd1S-OoiCAELhEf9OcZ-D-QZRzHxD0SC1etNOGnGk/s1600/alpha8-emojis.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><span className='small-code'>face-angry</span> icon (Filled: <f-icon b1 icon='face-angry'></f-icon>)</li>
                            <li><span className='small-code'>face-diagonal-mouth</span> icon (Filled: <f-icon b1 icon='face-diagonal-mouth'></f-icon>)</li>
                            <li><span className='small-code'>face-expressionless</span> icon (Filled: <f-icon b1 icon='face-expressionless'></f-icon>)</li>
                            <li><span className='small-code'>face-flushed</span> icon (Filled: <f-icon b1 icon='face-flushed'></f-icon>)</li>
                            <li><span className='small-code'>face-frown</span> icon (Filled: <f-icon b1 icon='face-frown'></f-icon>)</li>
                            <li><span className='small-code'>face-laugh</span> icon (Filled: <f-icon b1 icon='face-laugh'></f-icon>)</li>
                            <li><span className='small-code'>face-laugh-smiling-eyes</span> icon (Filled: <f-icon b1 icon='face-laugh-smiling-eyes'></f-icon>)</li>
                            <li><span className='small-code'>face-laugh-squint</span> icon (Filled: <f-icon b1 icon='face-laugh-squint'></f-icon>)</li>
                            <li><span className='small-code'>face-neutral</span> icon (Filled: <f-icon b1 icon='face-neutral'></f-icon>)</li>
                            <li><span className='small-code'>face-rolling-eyes</span> icon (Filled: <f-icon b1 icon='face-rolling-eyes'></f-icon>)</li>
                            <li><span className='small-code'>face-smile</span> icon (Filled: <f-icon b1 icon='face-smile'></f-icon>)</li>
                            <li><span className='small-code'>face-without-mouth</span> icon (Filled: <f-icon b1 icon='face-without-mouth'></f-icon>)</li>
                            <li>Change email in <Link target='_blank' href='/account'>Account</Link></li>
                            <li>Change password in <Link target='_blank' href='/account'>Account</Link></li>
                            <li><Link target='_blank' href='/request'>Request</Link></li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Foricon Coder has been canceled</li>
                            <li>Community has been canceled (Replaced with <Link target='_blank' href='/support'>Support</Link>)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.1</h6>
                        <span>22 June, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>Allow Domains to Use Installation Script</h3>
                        <p>To prevent unauthorized use of our installation scripts, we've added a domain restriction option for all accounts. Simply add any domains you want using our installation script.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAehZ9MSOLZg8g3SeQTEmb75mls0WdH7tuQLaEnc5zzunHZA_S1-Vc3HZKNKzsB48sLhVfjW02WdjW2zcvDD56XLodwkoBFRMH9FWWXCa8fVNiBu9rXudS7PIbOHyz8WS52jpMxKdN6SF5rKg4l98HhB1-veIgwzU8bajq8Xuims_15LuZ79QonAn8tik/s1600/alpha8-limitdomains.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li>Limit domains feature</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={cssStyle.name}>
                    <div>
                        <h6>Alpha 8.0</h6>
                        <span>19 June, 2024</span>
                    </div>
                </div>
                <div className={cssStyle.content}>
                    <div className={cssStyle.featured}>
                        <h3>New Look to Foricon!</h3>
                        <p>Updating website design is an important step in maintaining its relevance and effectiveness. New designs can improve user experience, align with current trends, and enhance overall website performance. Alpha 8 has a completely new design and we've also redesigned a lot of the pages to accommodate this big update!</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVPvFliGgweMQL-aecbejU4dquzdkJForbkG7IZDOY2yfE5ebGHtoSohyphenhyphenukduAZKexh8cEQm2V-dsbcpVYFRcpSKkKBXiUbgrnKf8Fy2nImY5PB9ljH7CIaYuJATCC5iulNqGrQX_YStiqCHrxiDpboSKm570Oh5fG2RK7s1WTDeEpGNfSPAKhgKaasCA/s1600/alpha8-new-look.png'/>
                        <h3>Remade Icons</h3>
                        <p>Our icons now even have the higher quality without paying any money. Why hesitant? Try using our icons today!</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg47ZgN2xIn6M3Ki2gqbDp1v71ZlXZuefCNqFDh-IZN_Y8xtI2nNJ9_lHY_vNfESYSjP8OD2t5U9CMWJnQFToz_1HPb0HL5xsHuuEF0VmGPbTswhoIN-OFfJCY4IuRQMqpWc7aOSK49R0UQM6xVCwcIFgJ5f21aELiOK1UmTr6fUpcHGHBkMns88GHXsOY/s1600/alpha8-remade-icons.png'/>
                        <h3>Say Hello to Glyphs</h3>
                        <p>Glyph icon is a symbolic image or pictogram used as a font. With glyphs, you can easier use our icons in design mockups, presentations, and elsewhere in your desktop applications. Read the <Link target='_blank' href='/docs'>Docs</Link> about how to do use it.</p>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI-GIkOqk-KM3WnWWH9azFnGNEuiuKzs6dOvOIEWbw4CgCJGrPsogo2F29piVc7P9P9-EHA9J0VphGvOXvayWiW9W7tw3AnNxOwNuQso4KneYXxlzQgl-mUL6n8JhAk-7l0_1s2GPpaKhrDpLnGAzY_9UDc8RE3igSjB79mmkq893jj1PYnsvmqh6KBrg/s1600/alpha8-glyph.png'/>
                    </div>
                    <div className={cssStyle.detailed}>
                        <h3>Added</h3>
                        <ul className='list-layout'>
                            <li><Link target='_blank' href='/search'>Search</Link></li>
                            <li>Glyphs</li>
                        </ul>
                        <h3>Updated / Changed</h3>
                        <ul className='list-layout'>
                            <li>Redesigned and fixed some icons</li>
                            <li>Interface of <Link target='_blank' href='/'>Homepage</Link>, <Link target='_blank' href='/account'>Account</Link>, <Link target='_blank' href='/languages'>Languages</Link>, <Link target='_blank' href='/login'>Login</Link> and <Link target='_blank' href='/signup'>Sign-up</Link></li>
                            <li>Removed Library</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}