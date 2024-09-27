# JSON web token (JWT)

## ¿Qué es JWT?

Es un estandar abierto basado en JSON para la creacion de tokens

Un **token** se compone de 3 partes:

1. Header (Encabezado)
2. Payload (Carga)
3. Signature (Firma)

Estas 3 partes van a estar separadas por 1 un punto (.) y va a estar codificado en Base64.

---

## ¿Como funciona JWT?

### 1. Autentcacion

Cuando el usuario se autentica y se crea un JWT y lo envia al cliente

### 2. Almacenamiento del Token

El cliente guarda el token en un localStorage

### 3. Acceso a recursos protegidos

Para acceder a recuersos protegidos, el cliente envia el JWT en cada solicitud, generalmente en el encabezado Authorization de las peticiones HTTP

`Authorization: Bearer <JWT_TOKEN>`

### 4. Verificacion

El servidor, al recibir el token, lo verifica utilizando una clave secreta. El el token no fue manipulado, el servidor concede el acceso

---

## Partes de un JWT

### 1. Header

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### 2. Payload

```json
{
  "name": "Radical Face",
  "admin": true,
  "sub": "12354"
}
```

### 3. Signature

```bash
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
```

---

## Ejemplo de JWT

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

- **Header:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`
- **Payload:** `eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9`
- **Signature:** `SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

---
