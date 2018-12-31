export enum NavigationPaths {
    HOME = 'Home',
    CAREER = 'Career',
    PROJECTS = 'Projects',
    VIDEOS = 'Videos',
    CONTACT = 'Contact',
}

export const disableOnSmallScreen = [NavigationPaths.CAREER, NavigationPaths.PROJECTS, NavigationPaths.VIDEOS];

export const navigateTransitionTime = (Object.keys(NavigationPaths).length / 5) * 1000;

export type NavigationTypes = NavigationPaths | null;
