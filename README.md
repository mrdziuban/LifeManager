# LifeManager

A two-page to-do list app with lists and items (with deadlines). LifeManager aims to simplify your life by letting you keep track of what you need to do and when it needs to get done by.

## Tech used

* Rails Api
    * User, List, and Item models
* JavaScript and jQuery
    * All post requests (except user creation) made asynchronously via AJAX
* HTML5
* CSS 2/3
    * Majority of styling done with Bootstrap CSS
    * Custom styling added for minor alterations
* [Devise](https://github.com/plataformatec/devise) for user registration and authentication

## Features

* List creation with nested item creation
* Individual item creation within a list
* Ability to give items a deadline to be displayed along with item text
* Toggling of item completion
* Display of item in bold if item is due on current day

Try it out at http://life-manager.herokuapp.com. Login to demo with with email: test@test.com, password: testpass.