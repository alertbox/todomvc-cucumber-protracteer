# language: en
@todo-managing @functional @gui @uat
Feature: Adding more things to do to the list
    In order to avoid having to remember things that needs to do
    KP wants to records all the things needs to get done.
    
    @regression @integration @ci
    Scenario Outline: Add more new items to the todo list

        Given that KP has a list of things to do such as "<todo-list>"
         When he adds "<more-todos>" to the list
         Then he shall see both "<todo-list>" and "<more-todos>" in the list
          And he shall see the number of todos should at least be <nr-of-todos>
         When he looks at all things to do
         Then he shall see the number of todos should at least be <total-nr-of-todos>

    @smoke
    Examples:
        | todo-list                                             | more-todos                                                            | nr-of-todos | total-nr-of-todos |
        | Buy some cookies, Walk the dog, Buy some cereal       | Go to Yoga, Meet the shrink                                           | 3           | 5                 |
        | Smile more often, Drink more water, Eat a banana      | Quit the job, Sleep early, Eat a banana                               | 3           | 6                 |
        | Sprint retrospective starts 2pm, Tech talk starts 6pm | Write some code, Do some demos, Smile more often, Drink more water    | 4           | 6                 |
    
    @sanity @security
    Examples:
        | todo-list                                             | more-todos                    | nr-of-todos | total-nr-of-todos |
        | Join the 5AM Club, Join the Audible Inner-circle      | Go to Yoga, Meet the shrink   | 2           | 4                 |
