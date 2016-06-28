// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The moment diagram for a cantilever which is subjected to a uniformly distributed load will be a",
            "a": [
                {"option": "Parabola",      "correct": true},
                {"option": "Rectangle",      "correct": false},
                {"option": "Cubic parabola",      "correct": false},		// no comma here
				{"option": "Triangle",      "correct": false}   
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans: Parabola</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In a loaded beam, the point of contra-flexure occurs at a section where",
            "a": [
                {"option": "Shearing force is maximum",               "correct": false},
                {"option": "Bending moment is maximum",   "correct": false},
				{"option": "Bending moment changes its sign",               "correct": true},
				{"option": "Bending moment is minimum", "correct": false} // no comma here
            ],
            
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Bending moment changes its sign</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Shear force for a cantilever carrying a uniformly distributed load over its length, is",
            "a": [
                {"option": "Parabola",           "correct": false},
                {"option": "Rectangle",                  "correct": true},
                {"option": "Traingle",  "correct": false},		
                {"option": "Cubic parabola",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans: Rectangle</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "The deflection at the free end of cantilever of length L carrying a point load F at its free end is given as",
            "a": [
                {"option": "(FL^3)/(3EI)",           "correct": true},
                {"option": "(FL^2)/(3EI)",                  "correct": false},
                {"option": "(FL^3)/(2EI)",  "correct": false},		
                {"option": "(FL^2)/(6EI)",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans: (FL^3)/(3EI)</p>" // no comma here
        }
		
        
      // no comma here
    ]
};
