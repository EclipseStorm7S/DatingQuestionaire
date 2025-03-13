class QuestionList:
    Questions = [Question(),Question(),Question()]

class Question:
    criteriaLow = [0,0,0,0,0,0]
    criteriaHigh = [0,0,0,0,0,0]
    text = "Is this a test question?"
    tf = true
    trueAnswer = [0,0,-0.2,0.1,0,0]
    falseAnswer = [0,0,0.2,-0.1,0,0]
    mc = true
