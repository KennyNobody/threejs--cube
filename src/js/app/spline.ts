import {Application, SPEObject} from '@splinetool/runtime';
import {animateObject, AnimationKey} from "./animateObject";
import gsap from "gsap";

class Spline {
    application: Application;
    cube: SPEObject;

    constructor(el: HTMLCanvasElement, url: string) {
        this.setApplication(el, url);
    }

    setApplication = (el: HTMLCanvasElement, url: string) => {
        this.application = new Application(el);
        this.application.load(url).then(() => {
            this.cube = this.application.findObjectByName('cube');

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
        // let rotateKeyboard = gsap.to(this.cube.rotation, {
        //     y: Math.PI * 2 + this.cube.rotation.y,
        //     x: Math.PI * 2 + this.cube.rotation.x,
        //     z: 0,
        //     duration: 10,
        //     repeat: 1,
        //     ease: "none"
        // });

        this.cube.rotation.z = -0.8;
        this.cube.rotation.y = -0.8;

        console.log('Крутим');
        // animateObject(this.application, buttonID);
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
