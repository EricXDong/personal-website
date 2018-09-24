export enum NavigationPaths {
    HOME = 'Home',
    CAREER = 'Career',
    LIFE = 'Life',
    VIDEOS = 'Videos',
    CONTACT = 'Contact',
}

export const navigateTransitionTime = (Object.keys(NavigationPaths).length / 5) * 1000;

export type NavigationTypes = NavigationPaths | null;
