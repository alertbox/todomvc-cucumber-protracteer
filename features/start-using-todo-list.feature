# language: en
@todo-onboarding @functional @gui @uat
Feature: Start using a fresh todo list
    In order to avoid having to remember things that needs to do
    KP wants to records all the things needs to get done.

    Background:

        Given that KP has a list of things to do such as "Write some code, Do some demos, Smile more often, Drink more water"
    
    @regression @integration @ci
    Scenario Outline: Create a fresh todo list

        Given that KP starts a fresh todo list
         When he adds "<new-todo-list>" to the list
         Then he shall see the number of todos should at least be <nr-of-todos>
         When he looks at pending things to do
         Then he shall see "<new-todo-list>" in the list

    @smoke
    Examples:
        | some-todo-list                                                     | new-todo-list                                         | nr-of-todos |
        | Buy some cookies, Walk the dog, Buy some cereal                    | Go to Yoga, Meet the shrink                           | 3           |
        | Quit the job, Sleep early, Eat a banana                            | Smile more often, Drink more water, Eat a banana      | 3           |
        | Go to Yoga, Meet the shrink                                        | Join the 5AM Club, Join the Audible Inner-circle      | 2           |
        | Write some code, Do some demos, Smile more often, Drink more water | Sprint retrospective starts 2pm, Tech talk starts 6pm | 2           |

    @sanity @security
    Examples:
        | some-todo-list              | new-todo-list                                         | nr-of-todos |
        | Go to Yoga, Meet the shrink | Join the 5AM Club, Join the Audible Inner-circle      | 2           |
