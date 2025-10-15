"""
Django settings for backend project.

Actualizado para despliegue en Railway con base de datos MySQL.
"""

import os
from pathlib import Path
from decouple import config

# 📁 Rutas base
BASE_DIR = Path(__file__).resolve().parent.parent


ALLOWED_HOSTS = ['*']  # Puedes reemplazar * por tu dominio Railway o Netlify

# 📦 Aplicaciones instaladas
INSTALLED_APPS = [
    'corsheaders',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'gestion',
]

# 🌍 Middleware
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # debe ir antes de SecurityMiddleware
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# 🌐 CORS
CORS_ALLOW_ALL_ORIGINS = True  # Permitir acceso desde cualquier origen (Netlify/Frontend React)

# 🔗 Configuración base de URLs y WSGI
ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

# 🗄️ Base de Datos (Railway - MySQL)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': config('MYSQLDATABASE', default='railway'),
        'USER': config('MYSQLUSER', default='root'),
        'PASSWORD': config('MYSQLPASSWORD', default='oZrIzYfONQxcWUKstJhfAVyvmDCgnTnT'),
        'HOST': config('MYSQLHOST', default='mysql.railway.internal'),
        'PORT': config('MYSQLPORT', default='3306'),
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        },
    }
}

# 🔑 Validadores de contraseñas
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# 🌎 Internacionalización
LANGUAGE_CODE = 'es-mx'
TIME_ZONE = 'America/Mexico_City'
USE_I18N = True
USE_TZ = True

# 🧾 Archivos estáticos y multimedia
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# 🔢 Tipo de clave primaria
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
