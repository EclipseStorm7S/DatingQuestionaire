class QuestionList:
    Questions = [Question(),Question(),Question()]

class Question:
    criteriaLow = scores()
    criteriaHigh = scores()
    text = "Is this a test question?"
    answers = [answer(),answer(),answer()]

class scores:
    empathy = 0
    extroversion = 0
    patience = 0
    creativity = 0
    boldness = 0
    tact = 0

class answer():
    text = "ERROR"
    result = scores()
