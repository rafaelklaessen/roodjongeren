import type { Attribute, Schema } from "@strapi/strapi";

export interface AdminApiToken extends Schema.CollectionType {
    collectionName: "strapi_api_tokens";
    info: {
        description: "";
        displayName: "Api Token";
        name: "Api Token";
        pluralName: "api-tokens";
        singularName: "api-token";
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
        accessKey: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"admin::api-token", "oneToOne", "admin::user"> &
            Attribute.Private;
        description: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }> &
            Attribute.DefaultTo<"">;
        expiresAt: Attribute.DateTime;
        lastUsedAt: Attribute.DateTime;
        lifespan: Attribute.BigInteger;
        name: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        permissions: Attribute.Relation<
            "admin::api-token",
            "oneToMany",
            "admin::api-token-permission"
        >;
        type: Attribute.Enumeration<["read-only", "full-access", "custom"]> &
            Attribute.Required &
            Attribute.DefaultTo<"read-only">;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<"admin::api-token", "oneToOne", "admin::user"> &
            Attribute.Private;
    };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
    collectionName: "strapi_api_token_permissions";
    info: {
        description: "";
        displayName: "API Token Permission";
        name: "API Token Permission";
        pluralName: "api-token-permissions";
        singularName: "api-token-permission";
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
        action: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "admin::api-token-permission",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        token: Attribute.Relation<
            "admin::api-token-permission",
            "manyToOne",
            "admin::api-token"
        >;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "admin::api-token-permission",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface AdminPermission extends Schema.CollectionType {
    collectionName: "admin_permissions";
    info: {
        description: "";
        displayName: "Permission";
        name: "Permission";
        pluralName: "permissions";
        singularName: "permission";
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
        action: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
        conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"admin::permission", "oneToOne", "admin::user"> &
            Attribute.Private;
        properties: Attribute.JSON & Attribute.DefaultTo<{}>;
        role: Attribute.Relation<"admin::permission", "manyToOne", "admin::role">;
        subject: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<"admin::permission", "oneToOne", "admin::user"> &
            Attribute.Private;
    };
}

export interface AdminRole extends Schema.CollectionType {
    collectionName: "admin_roles";
    info: {
        description: "";
        displayName: "Role";
        name: "Role";
        pluralName: "roles";
        singularName: "role";
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
        code: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> &
            Attribute.Private;
        description: Attribute.String;
        name: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        permissions: Attribute.Relation<"admin::role", "oneToMany", "admin::permission">;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> &
            Attribute.Private;
        users: Attribute.Relation<"admin::role", "manyToMany", "admin::user">;
    };
}

export interface AdminTransferToken extends Schema.CollectionType {
    collectionName: "strapi_transfer_tokens";
    info: {
        description: "";
        displayName: "Transfer Token";
        name: "Transfer Token";
        pluralName: "transfer-tokens";
        singularName: "transfer-token";
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
        accessKey: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "admin::transfer-token",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        description: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }> &
            Attribute.DefaultTo<"">;
        expiresAt: Attribute.DateTime;
        lastUsedAt: Attribute.DateTime;
        lifespan: Attribute.BigInteger;
        name: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        permissions: Attribute.Relation<
            "admin::transfer-token",
            "oneToMany",
            "admin::transfer-token-permission"
        >;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "admin::transfer-token",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
    collectionName: "strapi_transfer_token_permissions";
    info: {
        description: "";
        displayName: "Transfer Token Permission";
        name: "Transfer Token Permission";
        pluralName: "transfer-token-permissions";
        singularName: "transfer-token-permission";
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
        action: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "admin::transfer-token-permission",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        token: Attribute.Relation<
            "admin::transfer-token-permission",
            "manyToOne",
            "admin::transfer-token"
        >;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "admin::transfer-token-permission",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface AdminUser extends Schema.CollectionType {
    collectionName: "admin_users";
    info: {
        description: "";
        displayName: "User";
        name: "User";
        pluralName: "users";
        singularName: "user";
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
        blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> &
            Attribute.Private;
        email: Attribute.Email &
            Attribute.Required &
            Attribute.Private &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        firstname: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        isActive: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
        lastname: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        password: Attribute.Password &
            Attribute.Private &
            Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        preferedLanguage: Attribute.String;
        registrationToken: Attribute.String & Attribute.Private;
        resetPasswordToken: Attribute.String & Attribute.Private;
        roles: Attribute.Relation<"admin::user", "manyToMany", "admin::role"> &
            Attribute.Private;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> &
            Attribute.Private;
        username: Attribute.String;
    };
}

export interface ApiAboutUsAboutUs extends Schema.SingleType {
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
        banner: Attribute.Media<"images"> & Attribute.Required;
        content: Attribute.RichText & Attribute.Required;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "api::about-us.about-us",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "api::about-us.about-us",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface ApiAfdelingAfdeling extends Schema.CollectionType {
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
        about: Attribute.RichText & Attribute.Required;
        banner: Attribute.Media<"images">;
        contactpersonen: Attribute.Relation<
            "api::afdeling.afdeling",
            "oneToMany",
            "plugin::users-permissions.user"
        >;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "api::afdeling.afdeling",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        email: Attribute.Email & Attribute.Required;
        facebookLink: Attribute.String;
        instagramLink: Attribute.String;
        latitude: Attribute.Float & Attribute.Required;
        longitude: Attribute.Float & Attribute.Required;
        name: Attribute.String & Attribute.Required & Attribute.Unique;
        posts: Attribute.Relation<
            "api::afdeling.afdeling",
            "oneToMany",
            "api::post.post"
        >;
        slug: Attribute.UID<"api::afdeling.afdeling", "name"> & Attribute.Required;
        twitterLink: Attribute.String;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "api::afdeling.afdeling",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface ApiBoardmemberBoardmember extends Schema.CollectionType {
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
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "api::boardmember.boardmember",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        email: Attribute.Email;
        extra: Attribute.RichText;
        name: Attribute.String & Attribute.Required;
        order: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<10>;
        photo: Attribute.Media<"images">;
        publishedAt: Attribute.DateTime;
        role: Attribute.String;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "api::boardmember.boardmember",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface ApiConfidantConfidant extends Schema.CollectionType {
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
        about: Attribute.RichText & Attribute.Required;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "api::confidant.confidant",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        email: Attribute.Email & Attribute.Required;
        name: Attribute.String & Attribute.Required;
        phone: Attribute.String & Attribute.Required;
        photo: Attribute.Media<"images"> & Attribute.Required;
        publishedAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "api::confidant.confidant",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface ApiConfidantsPageConfidantsPage extends Schema.SingleType {
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
        banner: Attribute.Media<"images"> & Attribute.Required;
        content: Attribute.RichText & Attribute.Required;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "api::confidants-page.confidants-page",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "api::confidants-page.confidants-page",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface ApiFallbackFallback extends Schema.SingleType {
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
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "api::fallback.fallback",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        pageBanner: Attribute.Media<"images"> & Attribute.Required;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "api::fallback.fallback",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface ApiHomeHome extends Schema.SingleType {
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
        banner: Attribute.Media<"images"> & Attribute.Required;
        bannerSubtitle: Attribute.String & Attribute.Required;
        bannerTitle: Attribute.String & Attribute.Required;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::home.home", "oneToOne", "admin::user"> &
            Attribute.Private;
        shortAboutUs: Attribute.RichText & Attribute.Required;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<"api::home.home", "oneToOne", "admin::user"> &
            Attribute.Private;
    };
}

export interface ApiJoinUsJoinUs extends Schema.SingleType {
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
        banner: Attribute.Media<"images"> & Attribute.Required;
        content: Attribute.RichText & Attribute.Required;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::join-us.join-us", "oneToOne", "admin::user"> &
            Attribute.Private;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<"api::join-us.join-us", "oneToOne", "admin::user"> &
            Attribute.Private;
    };
}

export interface ApiPetitionSignaturePetitionSignature extends Schema.CollectionType {
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
        confirmationCode: Attribute.String & Attribute.Private & Attribute.Unique;
        confirmed: Attribute.Boolean;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "api::petition-signature.petition-signature",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        email: Attribute.Email;
        name: Attribute.String;
        petition: Attribute.Relation<
            "api::petition-signature.petition-signature",
            "manyToOne",
            "api::petition.petition"
        >;
        questionAnswers: Attribute.JSON;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "api::petition-signature.petition-signature",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface ApiPetitionPetition extends Schema.CollectionType {
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
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "api::petition.petition",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        extraQuestions: Attribute.JSON;
        hook: Attribute.String;
        post: Attribute.Relation<"api::petition.petition", "oneToOne", "api::post.post">;
        publishedAt: Attribute.DateTime;
        signatures: Attribute.Relation<
            "api::petition.petition",
            "oneToMany",
            "api::petition-signature.petition-signature"
        >;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "api::petition.petition",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface ApiPostPost extends Schema.CollectionType {
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
        afdeling: Attribute.Relation<
            "api::post.post",
            "manyToOne",
            "api::afdeling.afdeling"
        >;
        author: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                maxLength: 100;
            }> &
            Attribute.DefaultTo<"ROOD">;
        banner: Attribute.Media<"images">;
        content: Attribute.RichText & Attribute.Required;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::post.post", "oneToOne", "admin::user"> &
            Attribute.Private;
        frontpage: Attribute.Boolean & Attribute.Required;
        petition: Attribute.Relation<
            "api::post.post",
            "oneToOne",
            "api::petition.petition"
        >;
        publishedAt: Attribute.DateTime;
        slug: Attribute.UID<"api::post.post", "title"> & Attribute.Required;
        title: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                maxLength: 100;
            }>;
        type: Attribute.Enumeration<["nieuws", "inzending", "petitie"]> &
            Attribute.Required;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<"api::post.post", "oneToOne", "admin::user"> &
            Attribute.Private;
    };
}

export interface ApiPrivacybeleidPrivacybeleid extends Schema.SingleType {
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
        content: Attribute.RichText & Attribute.Required;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "api::privacybeleid.privacybeleid",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "api::privacybeleid.privacybeleid",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface ApiProgramProgram extends Schema.SingleType {
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
        banner: Attribute.Media<"images"> & Attribute.Required;
        content: Attribute.RichText & Attribute.Required;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::program.program", "oneToOne", "admin::user"> &
            Attribute.Private;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<"api::program.program", "oneToOne", "admin::user"> &
            Attribute.Private;
    };
}

export interface ApiWorkgroupWorkgroup extends Schema.CollectionType {
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
        about: Attribute.RichText & Attribute.Required;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "api::workgroup.workgroup",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        name: Attribute.String & Attribute.Required;
        publishedAt: Attribute.DateTime;
        slug: Attribute.UID<"api::workgroup.workgroup", "name">;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "api::workgroup.workgroup",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface ApiWorkgroupsPageWorkgroupsPage extends Schema.SingleType {
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
        banner: Attribute.Media<"images"> & Attribute.Required;
        content: Attribute.RichText & Attribute.Required;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "api::workgroups-page.workgroups-page",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "api::workgroups-page.workgroups-page",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
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
        actions: Attribute.Relation<
            "plugin::content-releases.release",
            "oneToMany",
            "plugin::content-releases.release-action"
        >;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "plugin::content-releases.release",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        name: Attribute.String & Attribute.Required;
        releasedAt: Attribute.DateTime;
        scheduledAt: Attribute.DateTime;
        status: Attribute.Enumeration<["ready", "blocked", "failed", "done", "empty"]> &
            Attribute.Required;
        timezone: Attribute.String;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "plugin::content-releases.release",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface PluginContentReleasesReleaseAction extends Schema.CollectionType {
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
        contentType: Attribute.String & Attribute.Required;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "plugin::content-releases.release-action",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        entry: Attribute.Relation<
            "plugin::content-releases.release-action",
            "morphToOne"
        >;
        isEntryValid: Attribute.Boolean;
        locale: Attribute.String;
        release: Attribute.Relation<
            "plugin::content-releases.release-action",
            "manyToOne",
            "plugin::content-releases.release"
        >;
        type: Attribute.Enumeration<["publish", "unpublish"]> & Attribute.Required;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "plugin::content-releases.release-action",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface PluginI18NLocale extends Schema.CollectionType {
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
        code: Attribute.String & Attribute.Unique;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"plugin::i18n.locale", "oneToOne", "admin::user"> &
            Attribute.Private;
        name: Attribute.String &
            Attribute.SetMinMax<
                {
                    max: 50;
                    min: 1;
                },
                number
            >;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<"plugin::i18n.locale", "oneToOne", "admin::user"> &
            Attribute.Private;
    };
}

export interface PluginUploadFile extends Schema.CollectionType {
    collectionName: "files";
    info: {
        description: "";
        displayName: "File";
        pluralName: "files";
        singularName: "file";
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
        alternativeText: Attribute.String;
        caption: Attribute.String;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"plugin::upload.file", "oneToOne", "admin::user"> &
            Attribute.Private;
        ext: Attribute.String;
        folder: Attribute.Relation<
            "plugin::upload.file",
            "manyToOne",
            "plugin::upload.folder"
        > &
            Attribute.Private;
        folderPath: Attribute.String &
            Attribute.Required &
            Attribute.Private &
            Attribute.SetMinMax<
                {
                    min: 1;
                },
                number
            >;
        formats: Attribute.JSON;
        hash: Attribute.String & Attribute.Required;
        height: Attribute.Integer;
        mime: Attribute.String & Attribute.Required;
        name: Attribute.String & Attribute.Required;
        previewUrl: Attribute.String;
        provider: Attribute.String & Attribute.Required;
        provider_metadata: Attribute.JSON;
        related: Attribute.Relation<"plugin::upload.file", "morphToMany">;
        size: Attribute.Decimal & Attribute.Required;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<"plugin::upload.file", "oneToOne", "admin::user"> &
            Attribute.Private;
        url: Attribute.String & Attribute.Required;
        width: Attribute.Integer;
    };
}

export interface PluginUploadFolder extends Schema.CollectionType {
    collectionName: "upload_folders";
    info: {
        displayName: "Folder";
        pluralName: "folders";
        singularName: "folder";
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
        children: Attribute.Relation<
            "plugin::upload.folder",
            "oneToMany",
            "plugin::upload.folder"
        >;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "plugin::upload.folder",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        files: Attribute.Relation<
            "plugin::upload.folder",
            "oneToMany",
            "plugin::upload.file"
        >;
        name: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMax<
                {
                    min: 1;
                },
                number
            >;
        parent: Attribute.Relation<
            "plugin::upload.folder",
            "manyToOne",
            "plugin::upload.folder"
        >;
        path: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMax<
                {
                    min: 1;
                },
                number
            >;
        pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "plugin::upload.folder",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface PluginUsersPermissionsPermission extends Schema.CollectionType {
    collectionName: "up_permissions";
    info: {
        description: "";
        displayName: "Permission";
        name: "permission";
        pluralName: "permissions";
        singularName: "permission";
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
        action: Attribute.String & Attribute.Required;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "plugin::users-permissions.permission",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        role: Attribute.Relation<
            "plugin::users-permissions.permission",
            "manyToOne",
            "plugin::users-permissions.role"
        >;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "plugin::users-permissions.permission",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
    };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
    collectionName: "up_roles";
    info: {
        description: "";
        displayName: "Role";
        name: "role";
        pluralName: "roles";
        singularName: "role";
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
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "plugin::users-permissions.role",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        description: Attribute.String;
        name: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 3;
            }>;
        permissions: Attribute.Relation<
            "plugin::users-permissions.role",
            "oneToMany",
            "plugin::users-permissions.permission"
        >;
        type: Attribute.String & Attribute.Unique;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "plugin::users-permissions.role",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        users: Attribute.Relation<
            "plugin::users-permissions.role",
            "oneToMany",
            "plugin::users-permissions.user"
        >;
    };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
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
        blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
        confirmationToken: Attribute.String & Attribute.Private;
        confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
        createdAt: Attribute.DateTime;
        createdBy: Attribute.Relation<
            "plugin::users-permissions.user",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        email: Attribute.Email &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        firstname: Attribute.String & Attribute.Required;
        lastname: Attribute.String & Attribute.Required;
        password: Attribute.Password &
            Attribute.Private &
            Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        phone: Attribute.String;
        provider: Attribute.String;
        resetPasswordToken: Attribute.String & Attribute.Private;
        role: Attribute.Relation<
            "plugin::users-permissions.user",
            "manyToOne",
            "plugin::users-permissions.role"
        >;
        updatedAt: Attribute.DateTime;
        updatedBy: Attribute.Relation<
            "plugin::users-permissions.user",
            "oneToOne",
            "admin::user"
        > &
            Attribute.Private;
        username: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 3;
            }>;
    };
}

declare module "@strapi/types" {
    export module Shared {
        export interface ContentTypes {
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
            "plugin::upload.file": PluginUploadFile;
            "plugin::upload.folder": PluginUploadFolder;
            "plugin::users-permissions.permission": PluginUsersPermissionsPermission;
            "plugin::users-permissions.role": PluginUsersPermissionsRole;
            "plugin::users-permissions.user": PluginUsersPermissionsUser;
        }
    }
}
