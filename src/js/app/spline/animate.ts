import {Application} from "@splinetool/runtime";
import {RotateKey, rotateObject} from "./rotateObject";
import {AnimationKey, callInnerAnimation} from "./callInnerAnimation";

function animateSpline(app: Application, key: number): void {
    const el = app.findObjectByName('cube');

    if (key === 0) {
        rotateObject(el, RotateKey.SET_DEFAULT);
    }

    if (key === 1) {
        rotateObject(el, RotateKey.SCENE_1);
    }

    if (key === 2) {
        callInnerAnimation(app, AnimationKey.MAKE_BLUE_COLOR);
        callInnerAnimation(app, AnimationKey.MAKE_BLUE_BG);
    }

    if (key === 3) {
        rotateObject(el, RotateKey.SCENE_3);
    }
}

export {
    animateSpline,
}
