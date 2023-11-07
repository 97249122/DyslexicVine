// ==UserScript==
// @name         Dyslexia With Vine
// @version      0.1
// @description  This is a script to allow dyslexic people to see the cluttered Amazon Vine easier, feel free to change line-height, letter-spacing & word-spacing to fit you better.
// @author       wattie
// @match        https://www.amazon.co.uk/vine*
// @match        https://www.amazon.com/vine*
// @match        https://www.amazon.ca/vine*
// @match        https://www.amazon.fr/vine*
// @match        https://www.amazon.it/vine*
// @match        https://www.amazon.es/vine*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Adding Dyslexic-friendly font and text styling
    GM_addStyle(`
        @import url('https://fonts.cdnfonts.com/css/open-dyslexic');

        body, p, h1, h2, h3, h4, h5, h6 {
            font-family: 'Open-Dyslexic', sans-serif !important;
            line-height: 1.1 !important;
            letter-spacing: 1.2px !important;
            word-spacing: 2px !important;
        }
    `);

})();
