export class RulesSection {
    title: string;
    content: string[];
}

export const RULES: RulesSection[] = [
    {
        title: "OVERVIEW",
        content: [
            "At the beginning of the game, you will choose one player to be the Suspect and one player to be the Investigator. Over the course of five minutes, the Investigator, armed with targeted conversation starters, will question the Suspect and try to determine whether the Suspect is a Human or a Robot.",
            "Robots are assigned specific malfunctions that make it difficult to answer the Investigator's questions, so they must be clever in conversation to avoid giving away their identity. Humans have no restrictions, and must simply attempt to “act normal,” whatever that means.",
            "The Investigator knows the general category of malfunctions, and has guidelines and sample questions tailored to that category, but there are no right or wrong answers. There are only suspicious and innocuous answers, and it's up to the Investigator to determine which is which before the end of the round. Once the round has ended, the Investigator must decide—robot, or human?",
        ]
    },
    {
        title: "OBJECT",
        content: [
            "There are always two players: one Suspect and one Investigator.",
            "The Investigator always has the same two goals, which go hand in hand:",
            "[LIST]: - Ensure all human Suspects are properly identified as HUMAN. - Ensure all robot Suspects are identified as ROBOT and safely detained.",
            "The Investigator loses if the Suspect is incorrectly identified, or if they are killed during the course of their duties by a Violent Robot.",
            "The Suspect's goals may change, depending on their role. However, ALL Suspects, robots and humans alike, share one common, overriding objective:",
            "Convince the Investigator that you are a human.",
            "Any Suspect who is identified as a robot (whether or not that identification is correct) loses.",
            "Additionally, robots will have some programming which they must obey."
        ]
    },
    {
        title: "SETTING UP",
        content: [
            "First, decide who will be the Suspect and who will the the Investigator. The Investigator should wear something – a hat, a badge, a trench coat, etc. – as a symbol of their authority.",
            "Once ready to start, the investigator should select 'Start new game' on the menu above on their own device"
        ]
    },
    {
        title: "SELECTING A PENALTY",
        content: [
            "To select a Penalty, three random cards from the Penalty Deck are displayed to the Investigator, who chooses one to discard. The Suspect then chooses one of the remaining two cards to use.",
            "This is the Penalty for the interrogation. It specifies a suspicious action which a robotic Suspect may perform under stress during the interrogation."
        ]
    },
    {
        title: "SELECTING A PACKET",
        content: [
            "Once the penalty has been selected, players should agree on a Packet to explore during the interrogation. The Investigator should carefully note the name the chosen packet in the “PACKET” section of their Investigation Form or department-issue notepad.",
            "Packets are intended to focus the interview. and provide guidance to the Investigator. Each Packet consists of 6 Inquiry cards and 9 Suspect Role cards. All cards in a given packet are marked with the same innocuous icon (eg. Chair, Coffee Pot, Dragon, etc.), and each Packet focuses on isolating and testing a single capacity. For example, the “Dragon” Packet tests the Suspect’s ability to “Demonstrate Imagination.”",
            "The Inquiry cards help to test this capacity by providing lines of questioning for the Investigator to pursue (See [LINK]:(What to Look For as the Investigator|#what-to-look-for-as-the-investigator)). The Suspect Role cards help by causing robotic Suspects to malfunction in ways that are related to the topic of the Packet. If the Investigator is thorough in their exploration of their assigned Inquiry cards, and keen in their observations, a robotic Suspect should have a very hard time eluding detection.",
            "For first time players, we recommend the Chair Packet. It is intended as an introduction to facilitate a low-pressure conversation that serves as an introduction to the mechanics of the game."
        ]
    },
    {
        title: "DETERMINING THE SUSPECT'S ROLE",
        content: [
            "Once the Packet is agreed upon, the device should be passed to the suspect to receive three random Role Cards from that packet. They must then choose one to use for the duration of the interrogation. More experienced players may prefer to have the Suspect receive one random card from the chosen packet and use that.",
            "Each Packet contains nine specially designed Role Cards to assist the Investigator in their questioning. The code used to generate these cards has no effect on humans, but causes significant cognitive distress for robots. A human who views the role card will simply see what is displayed on the card:",
            "[HUMAN ROLE]",
            "But a robot, after viewing the Role Card, will hallucinate something that looks more like one of these:",
            "[ROBOT ROLES]",
            "When the interrogation timer begins, a Robot viewing one of these cards will be compelled to obey the instructions it sees. It is up to the Investigator to detect this odd behaviour. (For more information see [LINK]:(Robot Behaviour|#robot-behaviour))"
        ]
    },
    {
        title: "SELECTING SUSPECT NOTE",
        content: [
            "Once the Suspect has chosen their Role Card, they will be shown two cards from the Suspect Note deck. When they have decided which Note they would like to be true about their character, they should select it and continue with the setup",
            "A Suspect Note is simply a fact about the Suspect that is known to both players. Think of it as a kind of conversation starter. Suspects are encouraged to act in a way that reflects their Suspect Note. Behaving in a way that is consistent with known facts about you is a very human thing to do!"
        ]
    },
    {
        title: "SELECTING INVESTIGATOR QUESTIONS",
        content: [
            "Once the suspect has determined their identity, they should pass the device back to the Investigator who selects four Question cards from the chosen Packet. There are two types of Inquiry cards: Primary, and Secondary. The Investigator should select two of each.",
            "In the pursuit of covert robots, the Investigator may ask any questions they wish. However, department protocol requires that they at least attempt the four lines of questioning specified on their Inquiry cards. This ensures that the capacity targeted by the chosen Packet is thoroughly tested. Difficulty responding to any of the Inquiries in a Packet is a sign of roboticism.",
            "[INQUIRY CARDS]",
            "Each Question card consists of a general directive and two sample prompts. Investigators may use the sample prompts if they wish, but are also free to formulate their own questions. All that is necessary is that they try to get the Suspect to perform the task described on each Inquiry card.",
            "As a rule, Primary Inquiries introduce topics of conversation, and Secondary Inquiries delve deeper into the Suspect's answers."
        ]
    },
    {
        title: "BEGINNING THE INTERROGATION",
        content: [
            "Once cards have been selected, but before beginning the timer and starting the interrogation, the Investigator must complete the preliminary paperwork.",
            "Note: if the Suspect is a robot, they do not have to obey the instructions on their card until the timer is started after the preliminary paperwork.",
            "[LIST]: - Name: Ask the Suspect to state the name for the record, and copy down whatever name they give. - Packet: Indicate the Packet being tested. You may write or draw the Packet icon (“Dragon”, “Coffee”, “Chair”, etc.) or abbreviate the Packet topic (“Imagination,” “Problem Solving”, “P_Y_D”, etc.) - Penalty Calibrated: Ask the Suspect to perform the Penalty 1-3 times, then check the appropriate box. - Identity Confirmed: Ask the Suspect to verbally confirm the truth of their Suspect Note (eg. “It says here you are a retired stunt pilot, is that correct?”), then check the appropriate box. After the appropriate boxes are checked, the Investigator is free to begin the five minute timer, and start the interrogation."
        ]
    },
    {
        title: "ROBOT BEHAVIOUR",
        content: [
            "During the interrogation, there are no restrictions on a human's behaviour. A robot, however, will be compelled to follow the instructions they see on their card from the moment the timerbegins. Broadly speaking, there are two types of robots: Patient Robots and Violent Robots.",
            "",
            "[SUBTITLE]:PATIENT ROBOTS",
            "The goal of a Patient Robot is to survive the interrogation, and receive a HUMAN confirmation on their Investigation Form. This is made difficult by their Vulnerability – a restriction on their behaviour that makes it difficult to answer certain questions. A Patient Robot may violate its Vulnerability (either accidentally or strategically), but it must perform the Penalty once for each such violation. It need not perform the Penalty immediately after violating its Vulnerability, but it must do so at some point before the end of its answer to the Investigator's final question. If a Patient Robot is confirmed as a HUMAN, it should shake the Investigator's hand and thank them for being “a true friend to all of us.” This will let the Investigator know that they have made a terrible mistake, without providing them the legal means to rectify it.",
            "",
            "[SUBTITLE]:VIOLENT ROBOTS",
            "A Violent Robot's goal is to murder the Investigator. Due to the laws of robotics, however, a robot cannot simply walk into a room and murder someone. First, a Violent Robot must deprogram itself by fulfilling its Obsession. An Obsession consists of three checklist items. The first two items are unique to each Violent Robot. The third is always “Perform the Penalty twice.” As soon as a Violent Robot completes any two of their three checklist items, they may immediately stand up (or slap the table with both hands, or perform some other equally startling gesture as circumstances permit) to indicate that they are now killing the Investigator. They may then complete the Investigation Form however they wish, and mark the “DEAD” box in the section labeled ADMIN ONLY. A Violent Robot should never accept a Human certification from the Investigator. Instead, a Violent Robot must complete its Obsession before the end of its answer to the Investigator's final question. If it cannot, it must visibly malfunction instead."
        ]
    },
    {
        title: "WHAT TO LOOK FOR AS THE INVESTIGATOR",
        content: [
            "Identifying robots can be difficult, especially for new Investigators.",
            "Here are a few things to keep in mind:",
            "[LIST]: - Patient Robots will tend to be reticent and evasive. - Violent Robots will often be overly talkative, or engage in unusual behaviour. - Either type of robot might perform the Penalty, but no robot actually has to perform the Penalty unless it violates its Vulnerability or is trying to fulfill its third Obsession item. - Your goal is to force the robot to either perform the Penalty, so you can see it, or work so hard to avoid the Penalty that they cannot hide how oddly they’re behaving. - Humans have no mechanical reason to perform the Penalty, but may end up doing it anyway, by accident. - Simply acting in a way that is consistent with the Suspect’s Note is not, on its own, suspicious behaviour. Many humans are excited about their jobs and histories, and want to talk about them. That is a very human thing to want!"
        ]
    },
    {
        title: "FINAL QUESTION",
        content: [
            "Once five minutes have passed, the timer stops and the Investigator may ask one final question. The Suspect must answer this question to the best of their ability, without asking for clarification. If the Suspect is a Peaceful Robot with unresolved Penalties, or a Violent Robot who has not yet completed two of its checklist items, all unfinished business must be completed during the answer to this final question. This means that an otherwise ordinary-seeming Suspect might suddenly get very weird during their final answer."
        ]
    },
    {
        title: "COMPLETING THE FORM",
        content: [
            "At any time after the interrogation has begun, the Investigator may choose to identify the Suspect as a robot by pressing the large ROBOT button on their Investigation Form.",
            "To certify a human, however, the Investigator must wait until the end of the interrogation, after the Suspect has answered the Investigator’s final question. If the Investigator is satisfied with the Suspect's final answer, they may then press the HUMAN button on their Investigation Form.",
            "If the Suspect is certified as a Robot, they are dragged out of the room for weeks of invasive confirmation tests. If they are certified as a Human, the Suspect and the Investigator should shake hands."
        ]
    },
    {
        title: "ADMINISTRATIVE REVIEW",
        content: [
            "After the form has been completed or the Investigator has been killed, someone (ideally an audience member, if present) should fill out the Administrative Review portion at the bottom of the Investigation Form, for posterity.",
            "",
            "[SUBTITLE]:Correct",
            "If the Investigator's decision was correct, the Investigator wins. If the Suspect was a human, the Investigator and the Suspect win together.",
            "If the Suspect was a robot, they are dragged off into another room and spinal tapped for confirmation. In other words, they lose.",
            "",
            "[SUBTITLE]:Incorrect",
            "If the Investigator's decision was incorrect, they lose.",
            "If the Suspect was a robot, the Suspect escapes and wins. Patient Robots should announce their victory by saying something creepy as they shake the investigator’s hand. Violent Robots may only win this way if they completed two of their three checklist items. If they did, they should simply tighten their grip and smile as they shake the investigator’s hand. If they didn't, they should dramatically malfunction, and both players lose.",
            "If the Suspect was a human, they are dragged off into another room and spinal tapped for confirmation. Once the Investigator's error is discovered, the Investigator receives the Scarlet Cross of Shame – the worst demerit an Investigator can receive.",
            "",
            "[SUBTITLE]:Dead",
            "If the Investigator is dead, they lose, obviously. The Violent Robot who killed them wins, and may complete the form however they wish."
        ]
    }

];