# Security 1.0.0

## Table of Contents

* [1. Servers](#1.-servers)
    * [1.1. test](#1.1.-test)
* [2. Channels](#2.-channels)
    * [2.1. dummy](#2.1.-dummy)
* [3. Security](#3.-security)
    * [3.1. User/Password](#3.1.-user/password)
    * [3.2. API Key](#3.2.-api-key)
    * [3.3. X.509 Certificate](#3.3.-x.509-certificate)
    * [3.4. Symmetric Encryption](#3.4.-symmetric-encryption)
    * [3.5. Asymmetric Encryption](#3.5.-asymmetric-encryption)
    * [3.6. HTTP API Key](#3.6.-http-api-key)
    * [3.7. HTTP](#3.7.-http)
    * [3.8. HTTP (Bearer)](#3.8.-http-(bearer))
    * [3.9. OAuth 2.0](#3.9.-oauth-2.0)
    * [3.10. OpenID](#3.10.-openid)

# 1. Servers

## 1.1. test

Parameter|Value
---------|------
URL|[test](test)
Protocol|`test` 

### 1.1.1. Security

Scheme|Scopes
------|------
`User/Password`|
`API Key`|
`X.509 Certificate`|
`Symmetric Encryption`|
`Asymmetric Encryption`|
`HTTP API Key`|
`HTTP`|
`HTTP (Bearer)`|
`OAuth 2.0`|`read:user`<br />`write:user`
`OpenID`|`read:user`<br />`write:user`

# 2. Channels

## 2.1. dummy

dummy

# 3. Security

## 3.1. User/Password

Provide your user and password.

Parameter|Value
---------|-----
Security scheme|`User/Password`

## 3.2. API Key

Provide your API key as the user and leave the password empty.

Parameter|Value
---------|-----
Security scheme|`API Key`
Location of the API key|`user`

## 3.3. X.509 Certificate

Provide your X.509 Certificate.

Parameter|Value
---------|-----
Security scheme|`X.509 Certificate`

## 3.4. Symmetric Encryption

End-to-end symmetric encryption.

Parameter|Value
---------|-----
Security scheme|`Symmetric Encryption`

## 3.5. Asymmetric Encryption

End-to-end asymmetric encryption.

Parameter|Value
---------|-----
Security scheme|`Asymmetric Encryption`

## 3.6. HTTP API Key

Provide your API key in the HTTP header.

Parameter|Value
---------|-----
Security scheme|`HTTP API Key`
Location of the API key|`header`
Header, query or cookie parameter name|`x-api-key`

## 3.7. HTTP

Provide your API key in the Authorization HTTP header.

Parameter|Value
---------|-----
Security scheme|`HTTP`
HTTP Authorization scheme|`basic`

## 3.8. HTTP (Bearer)

Provide your JWT token in the Authorization HTTP header.

Parameter|Value
---------|-----
Security scheme|`HTTP`
HTTP Authorization scheme|`bearer`
Bearer token format|`JWT`

## 3.9. OAuth 2.0

OAuth 2.0.

Parameter|Value
---------|-----
Security scheme|`OAuth 2.0`

### 3.9.1. OAuth Implicit Flow

Parameter|Value
---------|-----
Authorization URL|[https://auth.example.com/oauth](https://auth.example.com/oauth)
Refresh URL|[https://auth.example.com/oauth/refresh](https://auth.example.com/oauth/refresh)

Scopes

Scope|Description
-----|-----------
`read:job`|Read users.
`write:job`|Write users.

### 3.9.2.  OAuth Resource Owner Protected Credentials Flow

Parameter|Value
---------|-----
Token URL|[https://auth.example.com/oauth/token](https://auth.example.com/oauth/token)
Refresh URL|[https://auth.example.com/oauth/refresh](https://auth.example.com/oauth/refresh)

Scopes

Scope|Description
-----|-----------
`read:user`|Read users.
`write:user`|Write users.

### 3.9.3. OAuth Client Credentials Flow

Parameter|Value
---------|-----
Token URL|[https://auth.example.com/oauth/token](https://auth.example.com/oauth/token)
Refresh URL|[https://auth.example.com/oauth/refresh](https://auth.example.com/oauth/refresh)

Scopes

Scope|Description
-----|-----------
`read:user`|Read users.
`write:user`|Write users.

### 3.9.4. OAuth Authorization Code Flow

Parameter|Value
---------|-----
Authorization URL|[https://auth.example.com/oauth](https://auth.example.com/oauth)
Token URL|[https://auth.example.com/oauth/token](https://auth.example.com/oauth/token)
Refresh URL|[https://auth.example.com/oauth/refresh](https://auth.example.com/oauth/refresh)

Scopes

Scope|Description
-----|-----------
`read:user`|Read users.
`write:user`|Write users.

## 3.10. OpenID

The OpenId Connect URL provides OAuth2 configuration values.

Parameter|Value
---------|-----
Security scheme|`OpenID`
OpenId Connect URL|[https://oauth.example.com/.well-known](https://oauth.example.com/.well-known)

---

*AsyncAPI* *2.0.0*
