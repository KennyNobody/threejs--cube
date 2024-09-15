import GUI from 'lil-gui';
import {Application} from '@splinetool/runtime';
import {animateObject, AnimationKey} from "./animateObject";

class Spline {
    gui: GUI;
    application: Application;
    group: any;

    constructor(el: HTMLCanvasElement, url: string) {
        this.setApplication(el, url);
        this.initGUI();
    }

    setApplication = (el: HTMLCanvasElement, url: string) => {
        this.application = new Application(el);
        this.application.load(url).then(() => {
            console.log('app загружен');
            // this.handleResize();
            this.group = this.application.getAllObjects();
            console.log(this.group);
            this.initAnimateButton();
        })
    }

    initAnimateButton = () => {
        const elements = document.querySelectorAll('.button');

        elements.forEach((item) => {
            item.addEventListener('click', () => {
                this.triggerButtonEvent(item.id as AnimationKey);
            })
        })
    }

    triggerButtonEvent = (buttonID: AnimationKey) => {
        animateObject(this.application, buttonID);
    }

    private initGUI = () => {
        this.gui = new GUI({
            title: 'Параметры сцены',
        });
        const cube = this.application.findObjectByName('cube');
        this.gui.close();
        this.gui.add(cube, 'z').min(0).max(18).step(0.1).name('group Z rotation');
        // this.gui.add(this.group, 'visible');
        // this.gui.add(this.axes, 'visible');
    }

    // handleResize = () => {
    //     console.log('Теперь ресайз');
    //
    //     const resizeHandler = () => {
    //         const width = window.innerWidth;
    //         const height = window.innerHeight;
    //
    //         if (this.application) {
    //             this.application.setSize(width, height);
    //         }
    //     };
    //
    //     resizeHandler();
    //     window.addEventListener('resize', resizeHandler);
    // }
}

export {
    Spline,
}
