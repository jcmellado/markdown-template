# Security 1.0.0

# Servers

## dummy

Parameter|Value
---------|------
URL|[dummy](dummy)
Protocol|`dummy` 

### Security

Scheme|Scopes
------|------
[User/Password](#user/password)|
[API Key](#api-key)|
[X.509 Certificate](#x.509-certificate)|
[Symmetric Encryption](#symmetric-encryption)|
[Asymmetric Encryption](#asymmetric-encryption)|
[HTTP API Key](#http-api-key)|
[HTTP](#http)|
[HTTP (Bearer)](#http-(bearer))|
[OAuth 2.0](#oauth-2.0)|`read:user`<br />`write:user`
[OpenID](#openid)|`read:user`<br />`write:user`

# Channels

## dummy

dummy

# Security

## User/Password

Provide your user and password.

Parameter|Value
---------|-----
Security scheme|`User/Password`

## API Key

Provide your API key as the user and leave the password empty.

Parameter|Value
---------|-----
Security scheme|`API Key`
Location of the API key|`user`

## X.509 Certificate

Provide your X.509 Certificate.

Parameter|Value
---------|-----
Security scheme|`X.509 Certificate`

## Symmetric Encryption

End-to-end symmetric encryption.

Parameter|Value
---------|-----
Security scheme|`Symmetric Encryption`

## Asymmetric Encryption

End-to-end asymmetric encryption.

Parameter|Value
---------|-----
Security scheme|`Asymmetric Encryption`

## HTTP API Key

Provide your API key in the HTTP header.

Parameter|Value
---------|-----
Security scheme|`HTTP API Key`
Location of the API key|`header`
Header, query or cookie parameter name|`x-api-key`

## HTTP

Provide your API key in the Authorization HTTP header.

Parameter|Value
---------|-----
Security scheme|`HTTP`
HTTP Authorization scheme|`basic`

## HTTP (Bearer)

Provide your JWT token in the Authorization HTTP header.

Parameter|Value
---------|-----
Security scheme|`HTTP`
HTTP Authorization scheme|`bearer`
Bearer token format|`JWT`

## OAuth 2.0

OAuth 2.0.

Parameter|Value
---------|-----
Security scheme|`OAuth 2.0`

### OAuth Implicit Flow

Parameter|Value
---------|-----
Authorization URL|[https://auth.example.com/oauth](https://auth.example.com/oauth)
Refresh URL|[https://auth.example.com/oauth/refresh](https://auth.example.com/oauth/refresh)

#### Scopes

Scope|Description
-----|-----------
`read:job`|Read users.
`write:job`|Write users.

### OAuth Resource Owner Protected Credentials Flow

Parameter|Value
---------|-----
Token URL|[https://auth.example.com/oauth/token](https://auth.example.com/oauth/token)
Refresh URL|[https://auth.example.com/oauth/refresh](https://auth.example.com/oauth/refresh)

#### Scopes

Scope|Description
-----|-----------
`read:user`|Read users.
`write:user`|Write users.

### OAuth Client Credentials Flow

Parameter|Value
---------|-----
Token URL|[https://auth.example.com/oauth/token](https://auth.example.com/oauth/token)
Refresh URL|[https://auth.example.com/oauth/refresh](https://auth.example.com/oauth/refresh)

#### Scopes

Scope|Description
-----|-----------
`read:user`|Read users.
`write:user`|Write users.

### OAuth Authorization Code Flow

Parameter|Value
---------|-----
Authorization URL|[https://auth.example.com/oauth](https://auth.example.com/oauth)
Token URL|[https://auth.example.com/oauth/token](https://auth.example.com/oauth/token)
Refresh URL|[https://auth.example.com/oauth/refresh](https://auth.example.com/oauth/refresh)

#### Scopes

Scope|Description
-----|-----------
`read:user`|Read users.
`write:user`|Write users.

## OpenID

The OpenId Connect URL provides OAuth2 configuration values.

Parameter|Value
---------|-----
Security scheme|`OpenID`
OpenId Connect URL|[https://oauth.example.com/.well-known](https://oauth.example.com/.well-known)

---

*AsyncAPI* *2.0.0*
