# kopra-v1
A simple full-stack taxi management web app built with Django, Angular, Leaflet, and PostgreSQL

# Installation Walkthrough

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
