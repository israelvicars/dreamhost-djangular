
# Project

Project uses a Django-based API and MySQL database to provide a list of companies with attributes to an AngularJS client-side app to view companies in a list format similar to how companies are listed for investor users on Circleup.com.

Client app: circleup.dreamhosters.com redirects to circleup.dreamhosters.com/client/index.html.

API output: circleup.dreamhosters.com/api/companies/?format=json.

Hosted on Dreamhost shared hosting.

Project structure:
- env // Local Python virtualenv
- public
-- client// Client application
- server // Server application
- tmp
--- restart.txt // Passenger alert file
- passenger_wsgi.py // Passenger config file
- README.md

# Server Application

Developed using Python 2.7 and Django 1.5 with tastypie 0.9.15 for simple API setup. API provides a single GET request to a single MySQL 5 database table (companies). Hosting configuration requires Phusion Passenger to serve the Server application. A Python virtual environment with later versions of both Python and Django was used in the initial versions of the Server application, but the current version uses a virtual environment with earlier versions that matched available documentation from the host.

# Client Application

Developed using AngularJS 1.3 with Bootstrap 3.3 for styling.

Design and styling is intended to mimic the Companies view of Circleup.com as seen by an investor user.

Companies were sourced from the Advertising Age article, "SNL's 13 Best Fake Ads as Chosen by Real Ad Execs."
