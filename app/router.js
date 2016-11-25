var ejemplo = { // nadie lo referencia, borrar
    "estado.nombre": {
        "url": "/url",
        "data": {
            "section": "Menu name",
            "page": "Menu item name"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model/index.html"
    },
};

app.constant('ROUTERS', [

    {
        
        "home.catalogo": {
            "url": "/catalogo",
            "template": "<div ui-view ></div>"
        },
        "home.dashboard": {
            "url": "/dashboard",
            "data": {
                "page": "Dashboard"
            },
            "views": {
                "": {
                    "templateUrl": "app/views/layouts/dashboard.wall.html"
                }
            }
        }
    },


    {
        "home.catalogo.categorias": {
            "url": "/categorias",
            "data": {
                "section": "Catálogo",
                "page": "Categorías"
            },
            "templateUrl": "app/views/categorias/index.html",
            "loginRequired": true
        },
        "catalogo.catalogo.categoriasNew": {
            "url": "/categorias/new",
            "data": {
                "section": "Catálogo",
                "page": "Categorías"
            },
            "templateUrl": "app/views/categorias/form.html"
        },
        "catalogo.catalogo.categoriasEdit": {
            "url": "/categorias/:id/edit",
            "data": {
                "section": "Catálogo",
                "page": "Categorías"
            },
            "templateUrl": "app/views/categorias/form.html"
        }
    },

    {
        "home.catalogo.autores": {
            "url": "/autores",
            "data": {
                "section": "Catálogo",
                "page": "Autores"
            },
            "templateUrl": "app/views/autores/index.html"
        },
        "catalogo.catalogo.autoresNew": {
            "url": "/autores/new",
            "data": {
                "section": "Catálogo",
                "page": "Autores"
            },
            "templateUrl": "app/views/autores/form.html"
        },
        "catalogo.catalogo.autoresEdit": {
            "url": "/autores/:id/edit",
            "data": {
                "section": "Catálogo",
                "page": "Autores"
            },
            "templateUrl": "app/views/autores/form.html"
        }

    }


]);

app.constant('ROUTERSo', [

    {
        "catalogo": {
            "url": "/catalogo",
            "views": {
                "": {
                    "templateUrl": "app/views/layouts/uno/layout.html"
                },
                "aside": {
                    "templateUrl": "app/views/layouts/uno/aside.html"
                },
                "content": {
                    "templateUrl": "app/views/layouts/uno/content.html"
                }
            },
            "loginRequired": false
        },
        "catalogo.401_unauthorized": {
            "url": "/401_unauthorized",
            "data": {
                "page": "Error 401: unauthorized"
            },
            "views": {
                "": {
                    "templateUrl": "app/views/layouts/401_unauthorized.html"
                }
            }
        },
        "catalogo.dashboard": {
            "url": "/dashboard",
            "data": {
                "page": "Dashboard"
            },
            "views": {
                "": {
                    "templateUrl": "app/views/layouts/dashboard.wall.html"
                }
            }
        },
        "catalogo.catalogo": {
            "url": "/catalogo",
            "template": "<div ui-view ></div>"
        }
    },


    {
        "catalogo.catalogo.categorias": {
            "url": "/categorias",
            "data": {
                "section": "Catálogo",
                "page": "Categorías"
            },
            "templateUrl": "app/views/categorias/index.html",
            "loginRequired": true
        },
        "catalogo.catalogo.categoriasNew": {
            "url": "/categorias/new",
            "data": {
                "section": "Catálogo",
                "page": "Categorías"
            },
            "templateUrl": "app/views/categorias/form.html"
        },
        "catalogo.catalogo.categoriasEdit": {
            "url": "/categorias/:id/edit",
            "data": {
                "section": "Catálogo",
                "page": "Categorías"
            },
            "templateUrl": "app/views/categorias/form.html"
        }
    },

    {
        "catalogo.catalogo.autores": {
            "url": "/autores",
            "data": {
                "section": "Catálogo",
                "page": "Autores"
            },
            "templateUrl": "app/views/autores/index.html"
        },
        "catalogo.catalogo.autoresNew": {
            "url": "/autores/new",
            "data": {
                "section": "Catálogo",
                "page": "Autores"
            },
            "templateUrl": "app/views/autores/form.html"
        },
        "catalogo.catalogo.autoresEdit": {
            "url": "/autores/:id/edit",
            "data": {
                "section": "Catálogo",
                "page": "Autores"
            },
            "templateUrl": "app/views/autores/form.html"
        }

    }


]);
