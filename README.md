# kopra-v1
A simple full-stack taxi management web app built with Django, Angular, Leaflet, and PostgreSQL

# Step I - Backend Setup

1- Make sure you have the latest version of Python installed (prefered).

2- Clone the repository.<br>
3- Open the repository using the command line by copying its path.


4- Create a virtual environment using the following: <br>

`python3 -m venv <name_of_virtualenv>`

5- Activate the virtual environment by running the following:<br>

`<name_of_virtualenv>\Scripts\activate`

6- Install the dependencies as highlighted below using the requirement.txt file:<br>

`pip install -r requirements.txt`

7- Go to coreApi directory and migrate the existing database tables:<br>

`python manage.py migrate`

8- Run the Django development server:<br>

`python manage.py runserver`

# Step II - Frontend Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7

## 1- Development Server

a- Using your CMD, go to "frontend" directory. <br>
b- Run `ng serve` for a dev server. <br>
c- Navigate to `http://localhost:4200/`. <br>
The app will automatically reload if you change any of the source files.

## 2- Code Scaffolding

Run `ng generate component component-name` to generate a new component. <br>
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 3- Further help

To get more help on the Angular CLI:<br>

You can use `ng help`.<br>
For more details, go to check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
