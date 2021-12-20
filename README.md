# kopra
A simple full-stack taxi management web app built with **Django**, **Angular**, **Leaflet**, and **PostgreSQL**. The app is a collection of CRUD operations to simulate some basic tasks of the most common fleet management software.

# Step I - Backend Setup

The project backend was generated with [Django](https://github.com/django/django) version 3.2.9, make sure you have the latest version of **Python** installed (prefered).<br>

## 1- Virtual Environment Configuration

a- Create a virtual environment using the following:

      python3 -m venv <name_of_virtualenv>

b- Activate the virtual environment by running the command below:

      <name_of_virtualenv>\Scripts\activate

c- Install the dependencies as highlighted below using the **requirement.txt** file:

      pip install -r requirements.txt

d- To make sure that all dependencies are installed correctly:

      pip freeze

## 2- Development Server

a- Go to **coreApi** directory and migrate the existing database tables:

      python manage.py migrate

b- Run the **Django** development server:<br>

      python manage.py runserver

# Step II - Frontend Setup

The project frontend was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## 1- Development Server

a- Run the following command for a dev server:

     ng serve
b- Navigate to **http://localhost:4200/**. 

The app will automatically reload if you change any of the source files.

## 2- Code Scaffolding

To generate a new component:

     ng generate component component-name
You can also use:

     ng generate directive|pipe|service|class|guard|interface|enum|module

## 3- Packages to Install

Run the following:

     npm install bootstrap jquery @types/jquery popper.js leaflet @types/leaflet

## 4- Further help

To get more help on the Angular CLI:

     ng help
For more details, go to check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
