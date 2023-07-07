import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

class Answer {
     private final String text;
     private boolean isCorrect;
     private final int id;

     public Answer(String text, boolean isCorrect, int id) {
          this.text = text;
          this.isCorrect = isCorrect;
          this.id = id;
     }

     public String getText() {
          return text;
     }

     public boolean isCorrect() {
          return isCorrect;
     }

     public void setCorrect(boolean isCorrect) {
          this.isCorrect = isCorrect;
     }

     public int getId() {
          return id;
     }

}

interface IQuestion {

     public Answer[] getAnswers();

     public Answer getCorrectAnswer();

}

abstract class Question implements IQuestion {
     private Answer[] answers;
     private final String text;

     public Question(String text, Answer[] answers) {
          this.text = text;
          this.answers = answers;
     }

     public String getText() {
          return this.text;
     }

     public Answer[] getAnswers() {
          return this.answers;
     }

     public Answer getCorrectAnswer() {
          for (Answer answer : this.getAnswers()) {
               if (answer.isCorrect() == true) {
                    return answer;
               }
          }
          return null;
     }

     @Override
     public String toString() {
          String answerList = "";
          for (Answer currentAnswer : this.getAnswers()) {
               answerList += "[ " + currentAnswer.getId() + " ] " + currentAnswer.getText() + "\n";
          }
          return this.getText() + "\n" + answerList;
     }
}

class AvailableQuestion extends Question {
     private final int id;
     private static int questionsId = 0;
     private final int level;

     public AvailableQuestion(String text, Answer[] answers, int level) {
          super(text, answers);
          this.level = level;
          this.id = questionsId;
          questionsId++;
     }

     public int getLevel() {
          return this.level;
     }

     public int getId() {
          return this.id;
     }

}

class AskedQuestion extends Question {

     public AskedQuestion(String text, Answer[] answers, int questionId) {
          super(text, answers);
     }
}

public class Questions {
     Set<Integer> availableQuestions;
     Map<Integer, AvailableQuestion> questionsMap;

     public Questions() {
          this.questionsMap = new HashMap<Integer, AvailableQuestion>();
          AvailableQuestion[] allQuestions = new AllQuestions().getQuestions();
          this.availableQuestions = new HashSet<Integer>();
          for (AvailableQuestion currentQuestion : allQuestions) {
               this.availableQuestions.add(currentQuestion.getId());
               this.questionsMap.put(currentQuestion.getId(), currentQuestion);
          }
     }

     public static final boolean isAnswerCorrect(AvailableQuestion question, int answer)
               throws IllegalArgumentException {
          Answer correctAnswer;
          try {
               correctAnswer = question.getCorrectAnswer();
          } catch (Exception e) {
               throw new IllegalArgumentException(
                         "Cannot obtain correct answer, it either points to null or doesnt exist!");
          }
          return correctAnswer.getId() == answer;
     }

     public static final boolean isAnswerValid(AvailableQuestion question, int answer) {
          return answer > 0 && answer <= question.getAnswers().length;
     }

     public AvailableQuestion[] getAllQuestions() {

          return (AvailableQuestion[]) this.questionsMap.values().toArray();
     }

     public AvailableQuestion[] getAllAvailableQuestions() {
          AvailableQuestion[] questions = new AvailableQuestion[this.availableQuestions.size()];
          int aux = 0;
          for (Integer id : this.availableQuestions) {
               questions[aux] = this.questionsMap.get(id);
               aux++;
          }
          return questions;
     }

     public AvailableQuestion[] getQuestionsByLevel(int level) {
          AvailableQuestion[] allquestions = this.getAllAvailableQuestions();

          List<AvailableQuestion> levelQuestions = new ArrayList<AvailableQuestion>();

          for (AvailableQuestion currQuestion : allquestions) {
               if (currQuestion.getLevel() == level) {
                    levelQuestions.add(currQuestion);
               }
          }
          AvailableQuestion[] questionarr = new AvailableQuestion[levelQuestions.size()];
          levelQuestions.toArray(questionarr);
          return questionarr;

     }

     public int[] getAvailableQuestionsIds() {
          int[] questionsIds = new int[this.availableQuestions.size()];
          int aux = 0;
          for (Integer id : this.availableQuestions) {
               questionsIds[aux] = id;
               aux++;
          }
          return questionsIds;
     }

     public AvailableQuestion getRandomQuestion() {
          int questionSpan = this.availableQuestions.size();
          int questionId = this.getAvailableQuestionsIds()[(int) (questionSpan * Math.random())];
          AvailableQuestion question = this.questionsMap.get(questionId);
          return question;
     }
}
