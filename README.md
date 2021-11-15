# Lab 8 - Starter

# Lab Info:
This lab was completed individually by:
Misha Reswick
A15994771


## Q1:
I would put my automated tests in the Recipe project development pipeline for answer 1), of within a Github action that runs whenever
code is pushed. This is useful because you want to have a pipeline that you can feed code to which can then perform the 
necessary checks and actions when pushing. You wouldn't want to have to do this manually before pushing the code
as this could easily become tedious; and you certainly wouldn't want to run them only after all development is completed
as you need to be testing as you write tcode to be pushed. Trying to test only after all the code is written 
seems like it could easily become a nightmare.

## Q2:
No, you would not use an end-to-end test to check if a function is returning the correct output. For this,
you'd instead want to use a unit test. 
This is because an end-to-end test is designed to test "user actions from start to finish (end to end)," which
a simple function returning a given value is likely not. A unit test, however, would treat this
function as a unit that it would then test.

## Q3: 
No, you would not use a unit test to test the "message" feature of a messaging application.
This is because the message is a feature, of being an individiaul component.
Using an end-to-end test would be how to test the message feature.
(In order to have the webpage perform such a feature, you'd thus want to use end-to-end
testing for it.)
In other words, a unit test is for testing a given coded function (as a "unit"), but
not an entire feature of your application (such as "messaging" here); that's for
end-to-end.

## Q4:
Yes, I would use a unit a test for testing the max message length. This is because
the unit test would not be testing the overall "message" feature, but instead
just one aspect of it. (For instance, one could imagine a maxMessageLength() function
being used as a check for the "message" feature. This function/unit is what we could
apply one or more unit tests to.)
Thus, this "max message length" is an individual unit that we could unit test,
so yes, I'd use a unit test for it. (And, because it's not testing the entire
feature, I thus wouldn't use end-to-end testing for it, but thus rather unit testing.)