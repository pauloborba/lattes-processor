Feature: As a user of the lattes processor
		I want to merge 2 or more groups together
		So that I can better organize the registered researchers without having to create a new group from scratch


Scenario: criação de novo grupo a partir de dois grupos não vazios
Given I am at the "Merge groups" screen
Then I can see the groups "Voxar", with members "Joao" and "Douglas"  and "SPG", with members "Michael" and "Joao"
When I select "SPG" and "Voxar"
Then Input "SPG_Voxar" as the new group name
Then select the merge option
Then I see the group "SPG_Voxar", which contains the members "Joao", "Douglas" and "Michael".

Scenario: Tentativa de merge com apenas um grupo selecionado
Given I am at the "Merge groups" screen
Then I can see the groups "Voxar", with members "Joao" and "Douglas"  and "SPG", with members "Michael" and "Joao"
When I select "SPG"
Then Input "SPG+" as the new group name
Then select the merge option
Then I see an error message stating that I must choose more than one group
Then I'm still at the "Merge groups" page

Scenario: Tentantiva de merge com dois grupos, nome vazio
Given I am at the "Merge groups" screen
Then I can see the groups "Voxar", with members "Joao" and "Douglas"  and "SPG", with members "Michael" and "Joao"
When I select "SPG" and "Voxar"
Then don't input a group name
Then select the merge option
Then I see an error message stating that I must input a group name
Then I'm still at the "Merge groups" page


Scenario: Tentantiva de merge com dois grupos, nome do grupo composto apenas de espacos vazios
Given I am at the "Merge groups" screen
Then I can see the groups "Voxar", with members "Joao" and "Douglas"  and "SPG", with members "Michael" and "Joao"
When I select "SPG" and "Voxar"
Then Input "       " as the new group name
Then select the merge option
Then I see an error message stating that group names can't be made entirely of blank spaces
Then I'm still at the "Merge groups" page
