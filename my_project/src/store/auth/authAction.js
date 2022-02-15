import { ISAUTH_FALSE, ISAUTH_TRUE, ISADMIN_FALSE, ISADMIN_TRUE } from "./type"

export function isAuthTrue () {
    return {
        type: ISAUTH_TRUE
    }
}

export function isAuthFalse () {
    return {
        type: ISAUTH_FALSE
    }
}

export function isAdminTrue () {
    return {
        type: ISADMIN_TRUE
    }
}

export function isAdminFalse () {
    return {
        type: ISADMIN_FALSE
    }
}