/* @flow */
export type Face = {
    parentElement: {
        style: {
            background: string
        }
    },
    src: string,
    +removeAttribute: (value: string) => void,
    +setAttribute: (type: string, value: string) => void
};
export type Faces = {
    front: string,
    back: string,
    left: string,
    right: string,
    top: string,
    bottom: string
};
export type MeshType = {
    getFaces: () => Faces,
    off: (event: string, cb: Function) => void,
    off: (event: string) => void
};
export type ParentScene = {
    add: (value: any) => void,
    getRotationX: Function,
    getRotationY: Function,
    getRotationZ: Function,
    remove: (value: any) => void
};
export type VoxelOptions = {
    mesh?: any
};
export type Event = {
    preventDefault: Function
};
