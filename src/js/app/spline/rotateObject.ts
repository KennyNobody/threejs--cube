import gsap from "gsap";
import {SPEObject} from "@splinetool/runtime";

enum RotateKey {
    SET_DEFAULT = 'setDefaultPosition',
    SCENE_1 = 'scene-1',
    SCENE_3 = 'scene-3',
}

function rotateObject(el: SPEObject, key: RotateKey) {
    gsap.killTweensOf(el.rotation);

    if (key === RotateKey.SET_DEFAULT) {
        gsap.to(el.rotation, {
            y: -0.55,
            x: 0.2,
            z: -0.75,
            duration: 0,
        });
    }

    if (key === RotateKey.SCENE_1) {
        gsap.to(el.rotation, {
            y: -0.9,
            x: 0.25,
            z: 0.85,
            duration: 3,
            ease: "sine"
        });
    }

    if (key === RotateKey.SCENE_3) {
        gsap.to(el.rotation, {
            y: -0.9,
            x: 0.2,
            z: 1 + Math.PI,
            duration: 3,
            ease: "sine"
        });
    }
}

export {
    RotateKey,
    rotateObject,
}
