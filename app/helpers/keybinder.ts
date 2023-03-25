import Keybinder from 'domkeybinder'
export const keyController = new Keybinder({
    default_listener: 'keyup',
    element: window,
    allow_default: false
})

export const ListenToKey = (key: string, ...data: any) => keyController.ListenToKey(key, ...data)