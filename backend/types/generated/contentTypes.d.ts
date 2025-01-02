import type { Schema, Struct } from "@strapi/strapi";

export interface AdminApiToken extends Struct.CollectionTypeSchema {
    collectionName: "strapi_api_tokens";
    info: {
        description: "";
        displayName: "Api Token";
        name: "Api Token";
        pluralName: "api-tokens";
        singularName: "api-token";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        accessKey: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        description: Schema.Attribute.String &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }> &
            Schema.Attribute.DefaultTo<"">;
        expiresAt: Schema.Attribute.DateTime;
        lastUsedAt: Schema.Attribute.DateTime;
        lifespan: Schema.Attribute.BigInteger;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "admin::api-token"> &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        permissions: Schema.Attribute.Relation<
            "oneToMany",
            "admin::api-token-permission"
        >;
        publishedAt: Schema.Attribute.DateTime;
        type: Schema.Attribute.Enumeration<["read-only", "full-access", "custom"]> &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<"read-only">;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
    collectionName: "strapi_api_token_permissions";
    info: {
        description: "";
        displayName: "API Token Permission";
        name: "API Token Permission";
        pluralName: "api-token-permissions";
        singularName: "api-token-permission";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        action: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "admin::api-token-permission"
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        token: Schema.Attribute.Relation<"manyToOne", "admin::api-token">;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
    collectionName: "admin_permissions";
    info: {
        description: "";
        displayName: "Permission";
        name: "Permission";
        pluralName: "permissions";
        singularName: "permission";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        action: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
        conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "admin::permission"> &
            Schema.Attribute.Private;
        properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
        publishedAt: Schema.Attribute.DateTime;
        role: Schema.Attribute.Relation<"manyToOne", "admin::role">;
        subject: Schema.Attribute.String &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
    collectionName: "admin_roles";
    info: {
        description: "";
        displayName: "Role";
        name: "Role";
        pluralName: "roles";
        singularName: "role";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        code: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        description: Schema.Attribute.String;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "admin::role"> &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        permissions: Schema.Attribute.Relation<"oneToMany", "admin::permission">;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        users: Schema.Attribute.Relation<"manyToMany", "admin::user">;
    };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
    collectionName: "strapi_transfer_tokens";
    info: {
        description: "";
        displayName: "Transfer Token";
        name: "Transfer Token";
        pluralName: "transfer-tokens";
        singularName: "transfer-token";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        accessKey: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        description: Schema.Attribute.String &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }> &
            Schema.Attribute.DefaultTo<"">;
        expiresAt: Schema.Attribute.DateTime;
        lastUsedAt: Schema.Attribute.DateTime;
        lifespan: Schema.Attribute.BigInteger;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "admin::transfer-token"> &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        permissions: Schema.Attribute.Relation<
            "oneToMany",
            "admin::transfer-token-permission"
        >;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface AdminTransferTokenPermission extends Struct.CollectionTypeSchema {
    collectionName: "strapi_transfer_token_permissions";
    info: {
        description: "";
        displayName: "Transfer Token Permission";
        name: "Transfer Token Permission";
        pluralName: "transfer-token-permissions";
        singularName: "transfer-token-permission";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        action: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "admin::transfer-token-permission"
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        token: Schema.Attribute.Relation<"manyToOne", "admin::transfer-token">;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
    collectionName: "admin_users";
    info: {
        description: "";
        displayName: "User";
        name: "User";
        pluralName: "users";
        singularName: "user";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        blocked: Schema.Attribute.Boolean &
            Schema.Attribute.Private &
            Schema.Attribute.DefaultTo<false>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        email: Schema.Attribute.Email &
            Schema.Attribute.Required &
            Schema.Attribute.Private &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        firstname: Schema.Attribute.String &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        isActive: Schema.Attribute.Boolean &
            Schema.Attribute.Private &
            Schema.Attribute.DefaultTo<false>;
        lastname: Schema.Attribute.String &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "admin::user"> &
            Schema.Attribute.Private;
        password: Schema.Attribute.Password &
            Schema.Attribute.Private &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        preferedLanguage: Schema.Attribute.String;
        publishedAt: Schema.Attribute.DateTime;
        registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
        resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
        roles: Schema.Attribute.Relation<"manyToMany", "admin::role"> &
            Schema.Attribute.Private;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        username: Schema.Attribute.String;
    };
}

export interface ApiAboutUsAboutUs extends Struct.SingleTypeSchema {
    collectionName: "about_uses";
    info: {
        description: "";
        displayName: "Over ons";
        pluralName: "about-uses";
        singularName: "about-us";
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        banner: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
        content: Schema.Attribute.RichText & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "api::about-us.about-us"> &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiAfdelingAfdeling extends Struct.CollectionTypeSchema {
    collectionName: "afdelingen";
    info: {
        description: "";
        displayName: "Afdeling";
        pluralName: "afdelingen";
        singularName: "afdeling";
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        about: Schema.Attribute.RichText & Schema.Attribute.Required;
        banner: Schema.Attribute.Media<"images">;
        contactpersonen: Schema.Attribute.Relation<
            "oneToMany",
            "plugin::users-permissions.user"
        >;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        email: Schema.Attribute.Email & Schema.Attribute.Required;
        facebookLink: Schema.Attribute.String;
        instagramLink: Schema.Attribute.String;
        latitude: Schema.Attribute.Float & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "api::afdeling.afdeling"> &
            Schema.Attribute.Private;
        longitude: Schema.Attribute.Float & Schema.Attribute.Required;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique;
        posts: Schema.Attribute.Relation<"oneToMany", "api::post.post">;
        publishedAt: Schema.Attribute.DateTime;
        slug: Schema.Attribute.UID<"name"> & Schema.Attribute.Required;
        twitterLink: Schema.Attribute.String;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiBoardmemberBoardmember extends Struct.CollectionTypeSchema {
    collectionName: "boardmembers";
    info: {
        description: "";
        displayName: "Bestuurslid";
        pluralName: "boardmembers";
        singularName: "boardmember";
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        email: Schema.Attribute.Email;
        extra: Schema.Attribute.RichText;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "api::boardmember.boardmember"
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        order: Schema.Attribute.Integer &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<10>;
        photo: Schema.Attribute.Media<"images">;
        publishedAt: Schema.Attribute.DateTime;
        role: Schema.Attribute.String;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiConfidantConfidant extends Struct.CollectionTypeSchema {
    collectionName: "confidants";
    info: {
        description: "";
        displayName: "Vertrouwenspersonen";
        pluralName: "confidants";
        singularName: "confidant";
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        about: Schema.Attribute.RichText & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        email: Schema.Attribute.Email & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "api::confidant.confidant"
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        phone: Schema.Attribute.String & Schema.Attribute.Required;
        photo: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiConfidantsPageConfidantsPage extends Struct.SingleTypeSchema {
    collectionName: "confidants_pages";
    info: {
        description: "";
        displayName: "Vertrouwenspersonen-pagina";
        pluralName: "confidants-pages";
        singularName: "confidants-page";
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        banner: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
        content: Schema.Attribute.RichText & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "api::confidants-page.confidants-page"
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiFallbackFallback extends Struct.SingleTypeSchema {
    collectionName: "fallbacks";
    info: {
        description: "";
        displayName: "Fallback";
        pluralName: "fallbacks";
        singularName: "fallback";
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "api::fallback.fallback"> &
            Schema.Attribute.Private;
        pageBanner: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiHomeHome extends Struct.SingleTypeSchema {
    collectionName: "homes";
    info: {
        displayName: "Home";
        pluralName: "homes";
        singularName: "home";
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        banner: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
        bannerSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
        bannerTitle: Schema.Attribute.String & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "api::home.home"> &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        shortAboutUs: Schema.Attribute.RichText & Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiJoinUsJoinUs extends Struct.SingleTypeSchema {
    collectionName: "join_uses";
    info: {
        description: "";
        displayName: "Word lid";
        pluralName: "join-uses";
        singularName: "join-us";
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        banner: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
        content: Schema.Attribute.RichText & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "api::join-us.join-us"> &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiPetitionSignaturePetitionSignature
    extends Struct.CollectionTypeSchema {
    collectionName: "petition_signatures";
    info: {
        description: "";
        displayName: "Petitie-ondertekening";
        pluralName: "petition-signatures";
        singularName: "petition-signature";
    };
    options: {
        comment: "";
        draftAndPublish: false;
    };
    attributes: {
        confirmationCode: Schema.Attribute.String &
            Schema.Attribute.Private &
            Schema.Attribute.Unique;
        confirmed: Schema.Attribute.Boolean;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        email: Schema.Attribute.Email;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "api::petition-signature.petition-signature"
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String;
        petition: Schema.Attribute.Relation<"manyToOne", "api::petition.petition">;
        publishedAt: Schema.Attribute.DateTime;
        questionAnswers: Schema.Attribute.JSON;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiPetitionPetition extends Struct.CollectionTypeSchema {
    collectionName: "petitions";
    info: {
        description: "";
        displayName: "Petitie";
        pluralName: "petitions";
        singularName: "petition";
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        extraQuestions: Schema.Attribute.JSON;
        hook: Schema.Attribute.String;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "api::petition.petition"> &
            Schema.Attribute.Private;
        post: Schema.Attribute.Relation<"oneToOne", "api::post.post">;
        publishedAt: Schema.Attribute.DateTime;
        signatures: Schema.Attribute.Relation<
            "oneToMany",
            "api::petition-signature.petition-signature"
        >;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiPostPost extends Struct.CollectionTypeSchema {
    collectionName: "posts";
    info: {
        description: "";
        displayName: "Post";
        pluralName: "posts";
        singularName: "post";
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        afdeling: Schema.Attribute.Relation<"manyToOne", "api::afdeling.afdeling">;
        author: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                maxLength: 100;
            }> &
            Schema.Attribute.DefaultTo<"ROOD">;
        banner: Schema.Attribute.Media<"images">;
        content: Schema.Attribute.RichText & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        frontpage: Schema.Attribute.Boolean & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "api::post.post"> &
            Schema.Attribute.Private;
        petition: Schema.Attribute.Relation<"oneToOne", "api::petition.petition">;
        publishedAt: Schema.Attribute.DateTime;
        slug: Schema.Attribute.UID<"title"> & Schema.Attribute.Required;
        title: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                maxLength: 100;
            }>;
        type: Schema.Attribute.Enumeration<["nieuws", "inzending", "petitie"]> &
            Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiPrivacybeleidPrivacybeleid extends Struct.SingleTypeSchema {
    collectionName: "privacybeleids";
    info: {
        description: "";
        displayName: "Privacybeleid";
        pluralName: "privacybeleids";
        singularName: "privacybeleid";
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        content: Schema.Attribute.RichText & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "api::privacybeleid.privacybeleid"
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiProgramProgram extends Struct.SingleTypeSchema {
    collectionName: "programs";
    info: {
        description: "";
        displayName: "Programma";
        pluralName: "programs";
        singularName: "program";
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        banner: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
        content: Schema.Attribute.RichText & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "api::program.program"> &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiWorkgroupWorkgroup extends Struct.CollectionTypeSchema {
    collectionName: "workgroups";
    info: {
        description: "";
        displayName: "Werkgroep";
        pluralName: "workgroups";
        singularName: "workgroup";
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        about: Schema.Attribute.RichText & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "api::workgroup.workgroup"
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        slug: Schema.Attribute.UID<"name">;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface ApiWorkgroupsPageWorkgroupsPage extends Struct.SingleTypeSchema {
    collectionName: "workgroups_pages";
    info: {
        description: "";
        displayName: "Werkgroepen-pagina";
        pluralName: "workgroups-pages";
        singularName: "workgroups-page";
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        banner: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
        content: Schema.Attribute.RichText & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "api::workgroups-page.workgroups-page"
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface PluginContentReleasesRelease extends Struct.CollectionTypeSchema {
    collectionName: "strapi_releases";
    info: {
        displayName: "Release";
        pluralName: "releases";
        singularName: "release";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        actions: Schema.Attribute.Relation<
            "oneToMany",
            "plugin::content-releases.release-action"
        >;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "plugin::content-releases.release"
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        releasedAt: Schema.Attribute.DateTime;
        scheduledAt: Schema.Attribute.DateTime;
        status: Schema.Attribute.Enumeration<
            ["ready", "blocked", "failed", "done", "empty"]
        > &
            Schema.Attribute.Required;
        timezone: Schema.Attribute.String;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface PluginContentReleasesReleaseAction extends Struct.CollectionTypeSchema {
    collectionName: "strapi_release_actions";
    info: {
        displayName: "Release Action";
        pluralName: "release-actions";
        singularName: "release-action";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        contentType: Schema.Attribute.String & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        entryDocumentId: Schema.Attribute.String;
        isEntryValid: Schema.Attribute.Boolean;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "plugin::content-releases.release-action"
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        release: Schema.Attribute.Relation<
            "manyToOne",
            "plugin::content-releases.release"
        >;
        type: Schema.Attribute.Enumeration<["publish", "unpublish"]> &
            Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
    collectionName: "i18n_locale";
    info: {
        collectionName: "locales";
        description: "";
        displayName: "Locale";
        pluralName: "locales";
        singularName: "locale";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        code: Schema.Attribute.String & Schema.Attribute.Unique;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "plugin::i18n.locale"> &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.SetMinMax<
                {
                    max: 50;
                    min: 1;
                },
                number
            >;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface PluginReviewWorkflowsWorkflow extends Struct.CollectionTypeSchema {
    collectionName: "strapi_workflows";
    info: {
        description: "";
        displayName: "Workflow";
        name: "Workflow";
        pluralName: "workflows";
        singularName: "workflow";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        contentTypes: Schema.Attribute.JSON &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<"[]">;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "plugin::review-workflows.workflow"
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique;
        publishedAt: Schema.Attribute.DateTime;
        stageRequiredToPublish: Schema.Attribute.Relation<
            "oneToOne",
            "plugin::review-workflows.workflow-stage"
        >;
        stages: Schema.Attribute.Relation<
            "oneToMany",
            "plugin::review-workflows.workflow-stage"
        >;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface PluginReviewWorkflowsWorkflowStage extends Struct.CollectionTypeSchema {
    collectionName: "strapi_workflows_stages";
    info: {
        description: "";
        displayName: "Stages";
        name: "Workflow Stage";
        pluralName: "workflow-stages";
        singularName: "workflow-stage";
    };
    options: {
        draftAndPublish: false;
        version: "1.1.0";
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        color: Schema.Attribute.String & Schema.Attribute.DefaultTo<"#4945FF">;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "plugin::review-workflows.workflow-stage"
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String;
        permissions: Schema.Attribute.Relation<"manyToMany", "admin::permission">;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        workflow: Schema.Attribute.Relation<
            "manyToOne",
            "plugin::review-workflows.workflow"
        >;
    };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
    collectionName: "files";
    info: {
        description: "";
        displayName: "File";
        pluralName: "files";
        singularName: "file";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        alternativeText: Schema.Attribute.String;
        caption: Schema.Attribute.String;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        ext: Schema.Attribute.String;
        folder: Schema.Attribute.Relation<"manyToOne", "plugin::upload.folder"> &
            Schema.Attribute.Private;
        folderPath: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Private &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        formats: Schema.Attribute.JSON;
        hash: Schema.Attribute.String & Schema.Attribute.Required;
        height: Schema.Attribute.Integer;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "plugin::upload.file"> &
            Schema.Attribute.Private;
        mime: Schema.Attribute.String & Schema.Attribute.Required;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        previewUrl: Schema.Attribute.String;
        provider: Schema.Attribute.String & Schema.Attribute.Required;
        provider_metadata: Schema.Attribute.JSON;
        publishedAt: Schema.Attribute.DateTime;
        related: Schema.Attribute.Relation<"morphToMany">;
        size: Schema.Attribute.Decimal & Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        url: Schema.Attribute.String & Schema.Attribute.Required;
        width: Schema.Attribute.Integer;
    };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
    collectionName: "upload_folders";
    info: {
        displayName: "Folder";
        pluralName: "folders";
        singularName: "folder";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        children: Schema.Attribute.Relation<"oneToMany", "plugin::upload.folder">;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        files: Schema.Attribute.Relation<"oneToMany", "plugin::upload.file">;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<"oneToMany", "plugin::upload.folder"> &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        parent: Schema.Attribute.Relation<"manyToOne", "plugin::upload.folder">;
        path: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        pathId: Schema.Attribute.Integer &
            Schema.Attribute.Required &
            Schema.Attribute.Unique;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface PluginUsersPermissionsPermission extends Struct.CollectionTypeSchema {
    collectionName: "up_permissions";
    info: {
        description: "";
        displayName: "Permission";
        name: "permission";
        pluralName: "permissions";
        singularName: "permission";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        action: Schema.Attribute.String & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "plugin::users-permissions.permission"
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        role: Schema.Attribute.Relation<"manyToOne", "plugin::users-permissions.role">;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
    };
}

export interface PluginUsersPermissionsRole extends Struct.CollectionTypeSchema {
    collectionName: "up_roles";
    info: {
        description: "";
        displayName: "Role";
        name: "role";
        pluralName: "roles";
        singularName: "role";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        description: Schema.Attribute.String;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "plugin::users-permissions.role"
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 3;
            }>;
        permissions: Schema.Attribute.Relation<
            "oneToMany",
            "plugin::users-permissions.permission"
        >;
        publishedAt: Schema.Attribute.DateTime;
        type: Schema.Attribute.String & Schema.Attribute.Unique;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        users: Schema.Attribute.Relation<"oneToMany", "plugin::users-permissions.user">;
    };
}

export interface PluginUsersPermissionsUser extends Struct.CollectionTypeSchema {
    collectionName: "up_users";
    info: {
        description: "";
        displayName: "User";
        name: "user";
        pluralName: "users";
        singularName: "user";
    };
    options: {
        draftAndPublish: false;
        timestamps: true;
    };
    attributes: {
        blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
        confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
        confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        email: Schema.Attribute.Email &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        firstname: Schema.Attribute.String & Schema.Attribute.Required;
        lastname: Schema.Attribute.String & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            "oneToMany",
            "plugin::users-permissions.user"
        > &
            Schema.Attribute.Private;
        password: Schema.Attribute.Password &
            Schema.Attribute.Private &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        phone: Schema.Attribute.String;
        provider: Schema.Attribute.String;
        publishedAt: Schema.Attribute.DateTime;
        resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
        role: Schema.Attribute.Relation<"manyToOne", "plugin::users-permissions.role">;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
            Schema.Attribute.Private;
        username: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 3;
            }>;
    };
}

declare module "@strapi/strapi" {
    export module Public {
        export interface ContentTypeSchemas {
            "admin::api-token": AdminApiToken;
            "admin::api-token-permission": AdminApiTokenPermission;
            "admin::permission": AdminPermission;
            "admin::role": AdminRole;
            "admin::transfer-token": AdminTransferToken;
            "admin::transfer-token-permission": AdminTransferTokenPermission;
            "admin::user": AdminUser;
            "api::about-us.about-us": ApiAboutUsAboutUs;
            "api::afdeling.afdeling": ApiAfdelingAfdeling;
            "api::boardmember.boardmember": ApiBoardmemberBoardmember;
            "api::confidant.confidant": ApiConfidantConfidant;
            "api::confidants-page.confidants-page": ApiConfidantsPageConfidantsPage;
            "api::fallback.fallback": ApiFallbackFallback;
            "api::home.home": ApiHomeHome;
            "api::join-us.join-us": ApiJoinUsJoinUs;
            "api::petition-signature.petition-signature": ApiPetitionSignaturePetitionSignature;
            "api::petition.petition": ApiPetitionPetition;
            "api::post.post": ApiPostPost;
            "api::privacybeleid.privacybeleid": ApiPrivacybeleidPrivacybeleid;
            "api::program.program": ApiProgramProgram;
            "api::workgroup.workgroup": ApiWorkgroupWorkgroup;
            "api::workgroups-page.workgroups-page": ApiWorkgroupsPageWorkgroupsPage;
            "plugin::content-releases.release": PluginContentReleasesRelease;
            "plugin::content-releases.release-action": PluginContentReleasesReleaseAction;
            "plugin::i18n.locale": PluginI18NLocale;
            "plugin::review-workflows.workflow": PluginReviewWorkflowsWorkflow;
            "plugin::review-workflows.workflow-stage": PluginReviewWorkflowsWorkflowStage;
            "plugin::upload.file": PluginUploadFile;
            "plugin::upload.folder": PluginUploadFolder;
            "plugin::users-permissions.permission": PluginUsersPermissionsPermission;
            "plugin::users-permissions.role": PluginUsersPermissionsRole;
            "plugin::users-permissions.user": PluginUsersPermissionsUser;
        }
    }
}
