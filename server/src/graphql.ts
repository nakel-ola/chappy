
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateAuthInput {
    exampleField?: Nullable<number>;
}

export interface UpdateAuthInput {
    id: number;
}

export interface Auth {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    auth(): Nullable<Auth>[] | Promise<Nullable<Auth>[]>;
}

export interface IMutation {
    createAuth(createAuthInput: CreateAuthInput): Auth | Promise<Auth>;
    updateAuth(updateAuthInput: UpdateAuthInput): Auth | Promise<Auth>;
    removeAuth(id: number): Nullable<Auth> | Promise<Nullable<Auth>>;
}

type Nullable<T> = T | null;
