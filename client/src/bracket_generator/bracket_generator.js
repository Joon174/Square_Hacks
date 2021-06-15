/**
 *  BracketGenerator
 *  @brief Class to generate React Components for tournament brackets. Scope will be limited to the two brakcets in the class
 *  
 *  @author Joon You Tan  
 */

// There should be a tree object here for each bracket to store:
// - 1. Participant Name
// - 2. Score
// Whatever the solution is make sure it is compatible with the rest of the code!
function Bracket() {
    this.participant_name = ["Alice", "Bob"];
    this.score = ["1",  "0"];
};

// Will generate a HTML component for the bracket specified.
class BracketGenerator {
    constructor() {
        this.available_brackets = ['single-elimination', 'double-elimination'];
    }

    // Return big fat structure:
    generate_bracket() {
        // TODO: Create sample html structure for above bracket formats.
        // if the number of participants is even:
            // - Create low layer for all participants
            // - Create a parent for a pair of children in a layer higher in heirarchy.
            // - Repeat until the highest layer is formed with only one possible parent
        // if the number of participants is odd:
            // - Create a low layer for all participants
            // - The last participant shall be placed in the second last layer and will compete
            //   with whoever won at the lower level
    }
    populate_bracket(participant_list){
        // TODO: Populate bracket with the participant names 
        // @note This is more of a "if we can finish the bracket generation and others". Out of scope otherwise
        // For each participant in the list:
            // Randomise the strings in the list:
        // For each participant in randomised list:
            // populate the bracket struct to contain the participant names
    }
    update_bracket(score, participant_name){
        // TODO: Populate the brackets with the relevant score of each participant
        // If participant is in the list:
            // Populate and add in the score
        // Else throw an error for an invalid participant name entry
    }
}