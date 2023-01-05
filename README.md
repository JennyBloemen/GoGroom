# GoGroom: Top Services for Top Dogs & Cats

This application serves users that are dog and/or cat owners who would like to schedule grooming appointments for their pets. This application allows them to create a user profile with their name and email address. Users will be able to add a profile per pet that includes the pet's name, breed, sex, weight, and age. With the profile and pet information, users will be able to schedule appointments for their pets where they can choose the day, time, and grooming service. The home page offers detailed descriptions of the grooming services for dogs and cats, respectively. This application will make scheduling appointments for a particular pet based on preferences a much more efficient and informative process.

USER STORY
```
AS A pet owner
I WANT to add my contact information along with my pet information
SO THAT I can book new appointments efficiently and conveniently
```

ACCEPTANCE CRITERIA
```
GIVEN I am an authenticated user with a username and password
WHEN I log in to the application
THEN I am taken to my profile page with my information, my pet's information, and an option to add a new pet
GIVEN I have not created an account
WHEN I sign up from the home page
THEN I am presented with fields to create a username and password associated with my existing email address
GIVEN my account username or password is incorrect
WHEN my authentication does not pass requirements
THEN I will receive an error message
GIVEN I have not created any pet profiles
THEN I am prompted to create a new pet profile from my pet page
WHEN I create a new pet profile
THEN I will have a pet profile saved to my user profile
WHEN I edit my pet profile
THEN I can edit any part of my pet's information
WHEN I have successfully created a pet profile
THEN I am able to make a new appointment for my pet
WHEN I navigate to the scheduling page
THEN I am prompted to select my pet, a specific day of the week, a timeblock, and a grooming service
WHEN I submit my appointment information
THEN the appointment will be saved to the database associated to my profile
WHEN I have scheduled an appointment
THEN I can see my appointments on my profile page
WHEN I cancel an appointment from my profile page
THEN the appointment associated with my profile is deleted from the database
WHEN I navigate to the home page
THEN I can see a detailed description of services
WHEN I choose to log out
THEN I am redirected to the home page with an option to log in or sign up
```