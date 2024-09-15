import {Application} from "@splinetool/runtime";

enum AnimationKey {
    JOIN_MODEL = 'join_model',
    BREAK_MODEL = 'break_model',
    ROTATE_SIDE_1 = 'rotate_side_1',
    ROTATE_REVERSE_SIDE_1 = 'rotate_reverse_side_1',
    ROTATE_SIDE_2 = 'rotate_side_2',
    ROTATE_REVERSE_SIDE_2 = 'rotate_reverse_side_2',
    MAKE_BLUE_COLOR = 'make_blue_color',
    MAKE_NORMAL_COLOR = 'make_normal_color',
    MAKE_BLUE_BG = 'make_blue_bg',
    MAKE_NORMAL_BG = 'make_normal_bg',
}

function callInnerAnimation(app: Application, key: AnimationKey) {
    const bg = app.findObjectByName('bg');
    const cube = app.findObjectByName('cube');
    const side_1 = app.findObjectByName('side_1');
    const side_2 = app.findObjectByName('side_2');

    if (key === AnimationKey.JOIN_MODEL) {
        app.emitEvent('mouseDown', cube.uuid);
    }

    if (key === AnimationKey.BREAK_MODEL) {
        app.emitEvent('keyUp', cube.uuid);
    }

    if (key === AnimationKey.ROTATE_SIDE_1) {
        app.emitEvent('keyDown', side_1.uuid);
    }

    if (key === AnimationKey.ROTATE_REVERSE_SIDE_1) {
        app.emitEvent('keyUp', side_1.uuid);
    }

    if (key === AnimationKey.ROTATE_SIDE_2) {
        app.emitEvent('keyDown', side_2.uuid);
    }

    if (key === AnimationKey.ROTATE_REVERSE_SIDE_2) {
        app.emitEvent('keyUp', side_2.uuid);
    }

    if (key === AnimationKey.MAKE_BLUE_COLOR) {
        app.emitEvent('keyDown', cube.uuid);
    }

    if (key === AnimationKey.MAKE_NORMAL_COLOR) {
        app.emitEvent('keyUp', cube.uuid);
    }

    if (key === AnimationKey.MAKE_BLUE_BG) {
        app.emitEventReverse('keyDown', bg.uuid);
    }

    if (key === AnimationKey.MAKE_NORMAL_BG) {
        app.emitEventReverse('keyUp', bg.uuid);
    }
}

export {
    callInnerAnimation,
    AnimationKey,
}
