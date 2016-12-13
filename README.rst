########################################
home_web
########################################

.. class:: no-web

    home_web es un home site corporativo y también es un **Client application** construido en Angular para consumir los servicios API REST base de `Authorization server`_ y de `Catalogo resource server`_ siempre en cuando tenga acceso. También es autorizado por el `Authorization server`_ cumpliendo así con una aplicación SSO.



    .. image:: https://github.com/practian-ioteca-project/home_web/blob/master/media/doc/e4-client_app_home_web.png
        :alt: HTTPie compared to cURL
        :width: 100%
        :align: center





.. contents::

.. section-numbering::

.. raw:: pdf

   PageBreak oneColumn


============
Installation
============

--------------
Requirements
--------------

* Angular 
* Angular Material 



-------------------
Development version
-------------------

Clone **latest development version** directly from github_:

.. code-block:: bash
    
    # Universal
    
    E:\dev>git clone https://github.com/practian-ioteca-project/home_web.git

Instale las dependencias::

    E:\dev>cd home_web
    E:\dev\home_web>bower install

De ser necesario actualice su clientId::

    oauth2Service.clientId = "tu nuevo client_id";


Run the app in 9001 port::

	
	E:\dev\home_web>gulp serveE:\dev\home_web>npm install

	[09:22:36] Using gulpfile E:\dev\home_web\gulpfile.js
	[09:22:36] Starting 'serve'...
	[09:22:36] Finished 'serve' after 93 ms
	[09:22:36] Server started http://localhost:9001


===========
Revise las configuraciones
===========

1. angular module app setting like this:

.. code-block:: bash


	var app = angular.module("catalogo", [
	    "pi.dynamicMenu",
	    "pi.oauth2",
	    "pi.appPagination",
	    "pi.tableResponsive",

	    'ui.router',
	    'ngResource',
	    'ngAnimate',
	    'ngAria',
	    'ngSanitize',
	    'ngMaterial',
	    'ngMdIcons',
	    'toastr',

	    'ngMessages',


	    'pascalprecht.translate',
	    'tmh.dynamicLocale',
	]);

2. Constantes de la app::

	// Authorization Server -> oauth2_backend_service
	app.constant("authUrl", "http://localhost:7001"); 

	// Resource Server -> catalogo si tiene acceso
	app.constant("apiUrl", "http://localhost:8003"); 

3. Constantes opcionales de la app::
	
	// Api que trae el menu del usuario
	app.constant("menuUrl", "http://localhost:7001/api/oauth2_backend/usermenu/"); 

	// Página de inicio o de convergencia
	app.constant("homeUrl", "http://localhost:9001"); 




4. config.js file setting like this::

	app.run(function(oauth2Service, $state, $rootScope, $location, authUrl, $window, userService) {

	    oauth2Service.loginUrl = authUrl + "/o/authorize/";
	    oauth2Service.oidcUrl = authUrl + "/api/oauth2_backend/localuserinfo/";
	    oauth2Service.clientId = "o5W31ZGx7XrCp4B4f6Mr0HMryYyUMuswMpL0LLi4"; //MYSQL
	    oauth2Service.scope = "home"; //comentar si no está configurado
	    ...


====
Meta
====


-------
Licence
-------

BSD-3-Clause: `LICENSE <https://github.com/practian-ioteca-project/home_web/blob/master/LICENSE>`_.



-------
Authors
-------

- Angel Sullon Macalupu (asullom@gmail.com)



-------
Contributors
-------

See https://github.com/practian-ioteca-project/home_web/graphs/contributors

.. _github: https://github.com/practian-ioteca-project/catalogo_service
.. _Django: https://www.djangoproject.com
.. _Django REST Framework: http://www.django-rest-framework.org
.. _Django OAuth Toolkit: https://django-oauth-toolkit.readthedocs.io
.. _oauth2_backend: https://github.com/practian-reapps/django-oauth2-backend
.. _Authorization server: https://github.com/practian-ioteca-project/oauth2_backend_service
.. _Catalogo resource server: https://github.com/practian-ioteca-project/catalogo_service

subst z: .
subst /d z:
