import {RolesBuilder} from 'nest-access-control';

export enum AppRoles {
    ADMIN = 'ADMIN',
    STAFF = 'STAFF',
}

export enum AppResources {
    USER = 'USER',
    SMARTPHONE = 'SMARTPHONE'
}

export const roles: RolesBuilder = new RolesBuilder();

roles
    //STAFF ROLES
    .grant(AppRoles.STAFF)
    .updateOwn([AppResources.USER])
    .deleteOwn([AppResources.USER])
    .updateAny([AppResources.SMARTPHONE])
    .readAny([AppResources.SMARTPHONE])
    //ADMIN ROLES
    .grant([AppRoles.ADMIN])
    .createAny([AppResources.USER, AppResources.SMARTPHONE])
    .updateAny([AppResources.USER, AppResources.SMARTPHONE])
    .deleteAny([AppResources.USER, AppResources.SMARTPHONE])
    .readAny([AppResources.USER, AppResources.SMARTPHONE])
