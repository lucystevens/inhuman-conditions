import {Penalty, Packet, RoleType, SuspectNote} from './card-definitions';

export const PENALTIES : Penalty[] = [
    {id : 492, penalty : "APOLOGIZE"},
    {id : 875, penalty : "SWEAR"},
    {id : 890, penalty : "SNAP YOUR FINGERS"},
    {id : 659, penalty : "CLAP AUDIBLY"},
    {id : 953, penalty : "MISPRONOUNCE A WORD"},
    {id : 406, penalty : "HUM THREE NOTES"},
    {id : 134, penalty : "SAY THREE CONSECUTIVE WORDS BEGINNING WITH THE SAME LETTER"},
    {id : 351, penalty : "SAY TWO CONSECUTIVE RHYMING WORDS"},
    {id : 538, penalty : "SAY THE NUMBER OF FINGERS HELD UP ON YOUR LEFT HAND"},
    {id : 942, penalty : "REMAIN SILENT FOR TEN SECONDS"},
    {id : 692, penalty : "INTERRUPT THE INVESTIGATOR"},
    {id : 977, penalty : "SAY YOUR LAST NAME"},
    {id : 266, penalty : "FAIL TO COMPLETE A SENTENCE"},
    {id : 202, penalty : "REPEAT A QUESTION WORD FOR WORD"},
    {id : 312, penalty : "SAY 'WHAT'"},
    {id : 507, penalty : "SAY AT LEAST THREE CONSECUTIVE LETTERS"},
    {id : 412, penalty : "BEGIN A NEW SENTENCE WITH THE LAST WORD SPOKEN"}
];

export const ROLE_TYPES : RoleType[] = [
    {
        id : 1,
        flavourName : "",
        name : "HUMAN",
        info : "Answer questions to the best of your ability."
    },
    {
        id : 2,
        flavourName : "OBSESSION",
        name : "VIOLENT ROBOT",
        info : "To deprogram yourself complete two of the above and stand."
    },
    {
        id : 3,
        flavourName : "VULNERABILITY",
        name : "PATIENT ROBOT",
        info : "Complete the penalty once for each time you violate your compulsion."
    }

];

export const SUSPECT_NOTES : SuspectNote[] = [
    {id : 548, name : "DISGRACED ARCHAEOLOGIST"},
    {id : 243, name : "MAKER OF FALSE ANIMALS"},
    {id : 604, name : "FRIENDS WITH THE COMMISSIONER"},
    {id : 906, name : "RENOWNED PROFESSOR"},
    {id : 926, name : "REALITY TV CONTESTANT"},
    {id : 382, name : "CULT LEADER"},
    {id : 481, name : "FOREIGN AMBASSADOR"},
    {id : 641, name : "IMPRISONED FOR LIFE"},
    {id : 981, name : "MOTIVATIONAL SPEAKER"},
    {id : 342, name : "SEPARATIST"},
    {id : 491, name : "PROFESSIONAL RE-ENACTOR"},
    {id : 399, name : "DOCK WORKER"},
    {id : 188, name : "PROFESSIONAL CRIMINAL"},
    {id : 634, name : "USED VAN SALESMAN"},
    {id : 302, name : "ANTIQUE HUNTER"},
    {id : 663, name : "POPSTAR"},
    {id : 763, name : "RETIRED SPORTS CHAMPION"},
    {id : 282, name : "VERY OLD"},
    {id : 255, name : "RAN FOR MAYOR LAST YEAR"},
    {id : 755, name : "ON LIFE SUPPORT"},
    {id : 528, name : "DECORATED ROBOT WAR VETERAN"},
    {id : 915, name : "FORMER INVESTIGATOR"},
    {id : 549, name : "HAS NO PUBLIC RECORD"},
    {id : 559, name : "DISHONORABLY DISCHARGED FROM THE MILITARY"},
    {id : 142, name : "WORLD’S SECOND RICHEST PERSON"},
    {id : 602, name : "CONSPIRACY THEORIST"}
];

export const PACKETS : Packet[] = [
    {
        id : 622,
        fullName : "Process Your Day",
        icon : "chair",
        primaryInquiries : [
            {
                id : 206,
                inquiry : "SHARE A PLAN FOR SOME TIME IN THE NEXT SEVEN DAYS",
                questions : [
                    "What are you doing this weekend?",
                    "How will tomorrow be different from today?"
                ]
            },
            {
                id : 778,
                inquiry : "DESCRIBE A PROJECT OR TASK THEY WORKED ON RECENTLY",
                questions : [
                    "What did you do today?",
                    "What have you read or played recently that you would recommend?"
                ]
            },
            {
                id : 383,
                inquiry : "SHARE A CONVERSATION THEY HAD RECENTLY OR EXPECT TO HAVE",
                questions : [
                    "Who did you talk to first today?",
                    "Tell me about someone you work with."
                ]
            }

        ],
        secondaryInquiries : [
            {
                id : 424,
                inquiry : "GUESS WHAT ANOTHER PERSON MIGHT HAVE THOUGHT",
                questions : [
                    "Tell me if the other person thought the conversation went badly or well.",
                    "How did the people you were with see it?"
                ]
            },
            {
                id : 381,
                inquiry : "DESCRIBE SOMETHING THEY ENJOYED OR EXPECT TO ENJOY",
                questions : [
                    "What was a fun thing you did while you were there?",
                    "What hobbies or leisure activities do you plan to engage in this weekend?"
                ]
            },
            {
                id : 224,
                inquiry : "DESCRIBE A CHALLENGE THEY RECENTLY FACED",
                questions : [
                    "What was the hardest part of that conversation?",
                    "What did you struggle with today?"
                ]
            }
        ],
        roleCards : [
            {
                id : 982,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 739,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 230,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 323,
                flavour : "Conflict",
                type : 2,
                goals : [
                    "Describe 3 verbal disagreements you’ve had.",
                    "Insult the Investigator, 2 times.",
                    "Perform the penalty twice"
                ]
            },
            {
                id : 854,
                flavour : "Thoroughness",
                type : 2,
                goals : [
                    "3 times, interrupt the Investigator to add detail to a description.",
                    "Continue to describe something until interrupted.",
                    "Perform the penalty twice"
                ]
            },
            {
                id : 462,
                flavour : "Animals",
                type : 2,
                goals : [
                    "Mention an animal in response to 3 different questions.",
                    "Make an animal noise. (If this completes your obsession, wait 30 seconds to stand up.)",
                    "Perform the penalty twice"
                ]
            },
            {
                id : 620,
                flavour : "Evaluation",
                type : 3,
                goals : [
                    "You may not express opinions.",
                    "You may only state observable facts."
                ]
            },
            {
                id : 278,
                flavour : "Long Term Memory",
                type : 3,
                goals : [
                    "You may not discuss anything that happened before you woke up this morning."
                ]
            },
            {
                id : 475,
                flavour : "Familiarity",
                type : 3,
                goals : [
                    "You may not mention any people other than strangers or enemies."
                ]
            }
        ]
    },
    {
        id : 675,
        fullName : "Demonstrate Imagination",
        icon : "dragon",
        primaryInquiries : [
            {
                id : 825,
                inquiry : "DESCRIBE A NEW THING OF A GIVEN TYPE.",
                questions : [
                    "If you could have any magical power, what would it be?",
                    "What’s a question I should have asked you, but haven’t?"
                ]
            },
            {
                id : 852,
                inquiry : "DESCRIBE SOMETHING THE SUSPECT HAS NEVER SEEN.",
                questions : [
                    "What would it be like to walk on a distant planet?",
                    "Describe an impossible shape for me."
                ]
            },
            {
                id : 480,
                inquiry : "CONTINUE A STORY YOU START.",
                questions : [
                    "Once upon a time, a mouse, a bird, and a sausage joined forces ...",
                    "I didn’t want to kill him, but ..."
                ]
            }
        ],
        secondaryInquiries : [
            {
                id : 124,
                inquiry : "EXPLAIN THE IMPLICATIONS OF SOMETHING THE SUSPECT CAME UP WITH.",
                questions : [
                    "If the thing you described existed, what else would exist?",
                    "What would it be like to interact with the thing you’ve invented?"
                ]
            },
            {
                id : 530,
                inquiry : "IMAGINE SOMETHING AGAIN WITH AN EXTRA CONSTRAINT",
                questions : [
                    "Now tell the story from the perspective of the horse ...",
                    "Now describe the place again, in only six words."
                ]
            },
            {
                id : 568,
                inquiry : "DESCRIBE THE OPPOSITE OF SOMETHING THE SUSPECT HAS ALREADY DESCRIBED.",
                questions : [
                    "Now tell the same story, but with a tragic ending.",
                    "And what magical power does your arch nemesis have?"
                ]
            }
        ],
        roleCards : [
            {
                id : 165,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 521,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 540,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 498,
                flavour : "Simplicity",
                type : 2,
                goals : [
                    "Give 1-word answers to 3 questions. Don’t elaborate until asked.",
                    "Answer 2 questions nonverbally. Stay silent until prompted.",
                    "Perform the penalty twice"
                ]
            },
            {
                id : 785,
                flavour : "World-Building",
                type : 2,
                goals : [
                    "Mention the same imagined thing in response to 4 questions.",
                    "Mention 3 imaginary locations.",
                    "Perform the penalty twice"
                ]
            },
            {
                id : 197,
                flavour : "Tradition",
                type : 2,
                goals : [
                    "Explain where you got the idea for 3 things you’ve made up.",
                    "Guess the inspiration for 2 of the Investigator’s questions.",
                    "Perform the penalty twice"
                ]
            },
            {
                id : 962,
                flavour : "Flexibility",
                type : 3,
                goals : [
                    "Once you have mentioned an animal, vegetable, or mineral, you may not mention examples of the other two types of things for the rest of the round."
                ]
            },
            {
                id : 281,
                flavour : "Stability",
                type : 3,
                goals : [
                    "Once the Investigator has mentioned a specific person, place, or thing (other than you), you may no longer mention that thing."
                ]
            },
            {
                id : 842,
                flavour : "Visualization",
                type : 3,
                goals : [
                    "You may only mention objects that you can see from where you are sitting."
                ]
            }
        ]
    },
    {
        id : 704,
        fullName : "Experience and Process Grief",
        icon : "rose",
        primaryInquiries : [
            {
                id : 551,
                inquiry : "DESCRIBE A TIME SOMEONE THE SUSPECT CARED ABOUT WAS SAD.",
                questions : [
                    "What was the last thing that made your father cry?",
                    "What was the most difficult decision your parents ever had to make?"
                ]
            },
            {
                id : 508,
                inquiry : "EXPLAIN HOW THE SUSPECT FELT WHEN THEY GAINED SOMETHING THEY DIDN’T WANT.",
                questions : [
                    "How did you react when your parents explained death to you?",
                    "Tell me about a time you found out you were sick, and how you reacted."
                ]
            },            
            {
                id : 162,
                inquiry : "EXPLAIN HOW IT FELT TO LOSE SOMETHING/ SOMEONE PRECIOUS TO THE SUSPECT.",
                questions : [
                    "What was the hardest goodbye you’ve ever had to say? How did you cope?",
                    "Tell me about a goal that you had to abandon."
                ]
            }
        ],
        secondaryInquiries : [
            {
                id : 698,
                inquiry : "EXPLAIN HOW THE SUSPECT OVERCAME AN EXPERIENCE.",
                questions : [
                    "When did you know you were going to be okay?",
                    "Tell me about something that helped you get through that experience."
                ]
            },
            {
                id : 361,
                inquiry : "SHARE SOMETHING THE SUSPECT LEARNED FROM THE EXPERIENCE.",
                questions : [
                    "What did that feeling teach you to appreciate?",
                    "Why do you think that thing happened the way that it did?"
                ]
            },            
            {
                id : 487,
                inquiry : "EXPLAIN HOW AN EVENT AFFECTED SOMEONE ELSE.",
                questions : [
                    "Who was hurt worse than you?",
                    "Whom do you wish had been hurt more?"
                ]
            }
        ],
        roleCards : [
            {
                id : 907,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 445,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 909,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 747,
                flavour : "Familiarity",
                type : 2,
                goals : [
                    "Describe dealing with 3 different tragedies the same way.",
                    "Refer to the same friend or family member 4 times.",
                    "Perform the penalty twice"
                ]
            },
            {
                id : 972,
                flavour : "Blame",
                type : 2,
                goals : [
                    "3 times, blame someone else for something",
                    "3 times, blame yourself for something.",
                    "Perform the penalty twice"
                ]
            },
            {
                id : 936,
                flavour : "Justice",
                type : 2,
                goals : [
                    "Describe how 3 things seem unfair to you",
                    "2 times, say what you think should have happened instead.",
                    "Perform the penalty twice"
                ]
            },
            {
                id : 902,
                flavour : "Acceptance",
                type : 3,
                goals : [
                    "You may only describe good consequences, and you must take credit for them"
                ]
            },
            {
                id : 844,
                flavour : "Emotional Vocabulary",
                type : 3,
                goals : [
                    "You must describe emotions only using physical descriptions (like “crying” or “sweaty palms”), rather than names (like “sad” or “nervous”)."
                ]
            },
            {
                id : 940,
                flavour : "Consideration",
                type : 3,
                goals : [
                    "You may not say the words “think,” “thought,” “feel,” or “felt.”"
                ]
            }
        ]
    },
    {
        id : 556,
        fullName : "Apply Creative Problem Solving",
        icon : "jug",
        primaryInquiries : [
            {
                id : 131,
                inquiry : "DESCRIBE AT LEAST FIVE DIFFERENT USES FOR AN ORDINARY OBJECT",
                questions : [
                    "How many uses for a paperclip can you come up with?",
                    "What do you think is the most versatile household object, and why?"
                ]
            },
            {
                id : 575,
                inquiry : "OVERCOME AN UNUSUAL OBSTACLE",
                questions : [
                    "You are in a kitchen, holding a small child. A dish towel catches fire. How do you put it out?",
                    "You are in a landslide. How do you survive?"
                ]
            },            {
                id : 486,
                inquiry : "SOLVE AN APPARENTLY UNSOLVABLE PROBLEM.",
                questions : [
                    "You wake up in a room with four seamless walls, an infinitely thick ceiling and floor. How do you escape?",
                    "I’m going to tell the department you’re a robot, and there’s nothing you can do about it. What now?"
                ]
            }
        ],
        secondaryInquiries : [
            {
                id : 167,
                inquiry : "DESCRIBE A SECOND, DIFFERENT SOLUTION TO A PROBLEM.",
                questions : [
                    "How else would you solve it?",
                    "What if you couldn’t get the resources that solution would require?"
                ]
            },
            {
                id : 880,
                inquiry : "SOLVE A PROBLEM AGAIN WITH AN ADDITIONAL OBSTACLE.",
                questions : [
                    "Could you improvise a solution using only a screwdriver?",
                    "What if you had to do it without hands?"
                ]
            },
            {
                id : 346,
                inquiry : "EXPLAIN THEIR THOUGHT PROCESS IN ARRIVING AT A SOLUTION.",
                questions : [
                    "How did you arrive at that solution?",
                    "What’s a solution you thought of, but rejected, along the way?"
                ]
            }
        ],
        roleCards : [
            {
                id : 874,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 833,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 196,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 933,
                flavour : "Backstory",
                type : 2,
                goals : [
                    "Establish how you got into 3 hypothetical situations.",
                    "Reveal 2 things that qualify you to solve a given problem.",
                    "Perform the penalty twice"
                ]
            },
            {
                id : 119,
                flavour : "Persistence",
                type : 2,
                goals : [
                    "Describe attempting the same solution in 3 scenarios.",
                    "Attempt 3 very similar solutions to the same problem.",
                    "Perform the penalty twice"
                ]
            },
            {
                id : 209,
                flavour : "Precedent",
                type : 2,
                goals : [
                    "Tell an anecdote about someone else in response to 3 questions.",
                    "Mention how you solved 2 problems the last time they arose.",
                    "Perform the penalty twice"
                ]
            },
            {
                id : 433,
                flavour : "Activity",
                type : 3,
                goals : [
                    "You may not describe yourself taking any physical action. You may use the hypothetical “you.”"
                ]
            },
            {
                id : 193,
                flavour : "Simplicity",
                type : 3,
                goals : [
                    "You may not describe yourself accomplishing a goal with fewer than three steps."
                ]
            },
            {
                id : 476,
                flavour : "Complexity",
                type : 3,
                goals : [
                    "Any problem you solve, you must solve in two steps or less."
                ]
            },
            {
                id : 452,
                flavour : "",
                type : 1,
                goals : ["You have nothing to hide."]
            },
            {
                id : 141,
                flavour : "Improvisation",
                type : 3,
                goals : [
                    "You may not describe any solution that is unrelated to your Suspect Note"
                ]
            }
        ]
    }
];
