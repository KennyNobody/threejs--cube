import {Spline} from "./spline";

class App {
    splineURL: string;

    constructor() {
        this.splineURL = 'https://prod.spline.design/IwWm8hiQykF5RxzD/scene.splinecode';
        this.init();
        this.initSpline();
    }

    init = () => {
        console.log('App Inited');
    }

    initSpline = () => {
        const el: HTMLCanvasElement = document.querySelector('.spline-canvas');

        new Spline(el, this.splineURL);
    }
}

export {App};

