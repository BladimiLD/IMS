'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'PageController.index')

Route.get('/admin', 'Admin/ProductController.index')
Route.get('/admin/products', 'Admin/ProductController.index')  //GET
Route.post('/admin/products', 'Admin/ProductController.store')  //POST 


Route.get('/admin/products/create', 'Admin/ProductController.create')
Route.get('/admin/products/:id/edit', 'Admin/ProductController.edit')

Route.get('/admin/products/create', 'Admin/ProductController.create')  //CREATE
Route.get('/admin/products/:id', 'Admin/ProductController.show')  //SHOW
Route.get('/admin/products/:id/:name', 'Admin/ProductController.show')  //SHOW


Route.get('/admin/products/edit', 'Admin/ProductController.create')
Route.get('/admin/products/:id/edit', 'Admin/ProductController.edit')  //EDIT
Route.put('/admin/products/:id', 'Admin/ProductController.update') //UPDATE submitting a FORM

Route.get('/admin/products/:id/delete', 'Admin/ProductController.delete') //DELETE 

