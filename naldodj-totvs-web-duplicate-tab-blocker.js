// ==UserScript==
// @name         Detect Duplicate TOTVS Tab
// @namespace    http://tampermonkey.net/
// @version      2.4
// @description  Detects and warns if a duplicate TOTVS SmartClient HTML tab is opened, ignores iframes
// @author       Naldo
// @match        *://localhost:1234/webapp/*
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';

    const STORAGE_KEY = 'totvs_active_tab';
    const currentTabId = Date.now().toString() + Math.random();

    // Verifica se a janela atual é um iframe
    function isInIframe() {
        return window.self !== window.top;
    }

    function blockTab() {
        // Só executa se não estiver em um iframe
        if (!isInIframe()) {
            setTimeout(() => {
                window.location.replace("about:blank");
                window.close();
            }, 10000);

            document.body.style.backgroundColor = 'black';
            document.body.innerHTML = `
                <h1 style="color:red;text-align:center;margin-top:50px;">
                    Duplicate tab detected. Please close this tab.
                </h1>
            `;

            alert('A TOTVS tab is already open. This tab will be disabled.');
        }
    }

    // Marca a aba atual como ativa apenas se não for um iframe
    if (!isInIframe()) {
        localStorage.setItem(STORAGE_KEY, currentTabId);
    }

    window.addEventListener('storage', (event) => {
        if (event.key === STORAGE_KEY && event.newValue !== currentTabId && !isInIframe()) {
            blockTab();
        }
    });

    window.addEventListener('beforeunload', () => {
        if (!isInIframe() && localStorage.getItem(STORAGE_KEY) === currentTabId) {
            localStorage.removeItem(STORAGE_KEY);
        }
    });

    window.addEventListener('load', () => {
        if (!isInIframe()) {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored && stored !== currentTabId) {
                blockTab();
            }
        }
    });
})();
