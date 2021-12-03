# kopra
A simple full-stack taxi management web app built with Django, Angular, Leaflet, and PostgreSQL

# Step I - Backend Setup

The project backend was generated with [Django](https://github.com/django/django) version 3.2.9

a- Make sure you have the latest version of Python installed (prefered).<br>
b- Clone the repository.<br>

## 1- Virtual Environment Configuration

a- Create a virtual environment using the following: <br>

`python3 -m venv <name_of_virtualenv>`

b- Activate the virtual environment by running the following:<br>

`<name_of_virtualenv>\Scripts\activate`

c- Install the dependencies as highlighted below using the requirement.txt file:<br>

`pip install -r requirements.txt`

## 2- Development Server

a- Go to coreApi directory and migrate the existing database tables:<br>

`python manage.py migrate`

b- Run the Django development server:<br>

`python manage.py runserver`

# Step II - Frontend Setup

The project frontend was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7

## 1- Development Server

a- Run `ng serve` for a dev server. <br>
b- Navigate to `http://localhost:4200/`. <br>
The app will automatically reload if you change any of the source files.

## 2- Code Scaffolding

Run `ng generate component component-name` to generate a new component. <br>
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 3- Packages to Install

Run `npm install bootstrap jquery @types/jquery popper.js leaflet @types/leaflet`

## 4- Further help

To get more help on the Angular CLI:<br>

You can use `ng help`.<br>
For more details, go to check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
