import Keybinder from 'domkeybinder'
export const keyController = new Keybinder({
    default_listener: 'keyup',
    element: window,
    allow_default: false
})
