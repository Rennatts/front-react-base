/// <reference types="vite/client" />
declare const google: any;

interface Window {
    google?: typeof google;
}
