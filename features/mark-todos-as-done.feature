# language: en
@todo-managing @functional @gui @uat @wip @ignore
Feature: Ticking off todos when done
    In order to avoid having to remember things that needs to do
    KP wants to records all the things needs to get done.
    
    @regression @integration @ci
    Scenario Outline: Mark items in the todo list as done

        Given that KP has a list of things to do such as "<todo-list>"
         When he marks "<done-todos>" in the list as done
          And he looks at all things to do
         Then he shall see the number of todos should at least be <nr-of-todos>

    @smoke
    Examples:
        | todo-list                                                          | done-todos                     | nr-of-todos |
        | Buy some cookies, Walk the dog, Buy some cereal                    | Walk the dog, Buy some cereal  | 1           |
        | Smile more often, Drink more water, Eat a banana                   | Drink more water               | 2           |
        | Write some code, Do some demos, Smile more often, Drink more water | Write some code, Do some demos | 2           |
    
    @sanity @security
    Examples:
        | todo-list                                        | done-todos                    | nr-of-todos |
        | Join the 5AM Club, Join the Audible Inner-circle | Join the Audible Inner-circle | 2           |
