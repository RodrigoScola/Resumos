import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

enum GameState {
     PLAYING,
     LOST,
     WON
}

class GameDisplay {
     public static final void displayIntro() {
          System.out.println("Olá e bem vindo ao Quem quer ser um Milionário.");
          System.out.println(
                    "Para ganhar o jogo deve chegar ao nivel 15, que corresponde ao prémio máximo de 1 Milhão de reais!");
          System.out.println("Para chegar ao nível 15, deverá responder corretamente às perguntas");
     }

     public static final void displayStart() {
          System.out.println("Você deseja participar? \n");
          System.out.println("[S] - Sim \n");
          System.out.println("[N] - Não \n");
     }

     public static final void displayNewQuestionText(final int value) {
          System.out.println("Valendo " + value + " reais \n");
     }

     public final static synchronized void displayGameStart() {
          System.out.println("Muito bem!");
     }

     public final static synchronized void displayCorrectAnswer() {
          System.out.println("Resposta Certa!\n");
     }

     public final static void displayGameOver() {
          System.out.println("Que pena, você perdeu! Infelizmente não participa no jogo esta semana");
     }

     public final static void displayGameWon() {
          System.out.println("Parabéns, você ganhou o jogo!");
     }
}

class Game {
     private GameState gamestate;
     private final Questions questions;
     private GameLevels levels;

     private AvailableQuestion currentQuestion;
     private Map<Integer, AskedQuestion> askedQuestions;

     public Game() {
          this.askedQuestions = new HashMap<Integer, AskedQuestion>();
          this.questions = new Questions();
          this.gamestate = GameState.PLAYING;
          this.levels = new GameLevels();
     }

     public Questions getQuestions() {
          return questions;
     }

     public GameLevels getLevels() {
          return levels;
     }

     public AvailableQuestion getCurrentQuestion() {
          return currentQuestion;
     }

     public boolean isGameOver() {
          if (this.levels.isMaxLevel() == true) {
               return true;
          }
          if (this.gamestate == GameState.PLAYING)
               return false;
          else
               return true;
     }

     public boolean isGameWon() {
          if (this.levels.isMaxLevel()) {
               return true;
          }
          return false;
     }

     public void newRound() {
          this.getNewQuestion();
     }

     public void getNewQuestion() {

          AvailableQuestion[] allquestionsInlevel = this.questions.getQuestionsByLevel(this.levels.getLevel());

          int questionNo = (int) ((Math.random() * allquestionsInlevel.length) + 1);

          this.currentQuestion = allquestionsInlevel[questionNo - 1];
     }

     public void gameLost() {
          this.gamestate = GameState.LOST;
     }

     public boolean answerQuestion(String answer) throws NumberFormatException {
          int answerInt;
          try {
               answerInt = Integer.parseInt(answer);
          } catch (NumberFormatException e) {
               throw new NumberFormatException("you must enter a number");
          }
          boolean isValid = Questions.isAnswerValid(this.currentQuestion, answerInt);
          if (isValid) {
               this.questions.questionsMap.put(currentQuestion.getId(), currentQuestion);
               this.questions.availableQuestions.remove(currentQuestion.getId());
               boolean isCorrect;
               try {
                    isCorrect = Questions.isAnswerCorrect(this.currentQuestion, answerInt);
               } catch (IllegalArgumentException e) {
                    return false;
               }

               if (isCorrect) {
                    this.askedQuestions.put(this.levels.getLevel(),
                              new AskedQuestion(currentQuestion.getText(), currentQuestion.getAnswers(),
                                        currentQuestion.getId()));
                    this.levels.increaseLevel();
                    return true;
               }
          }
          return false;
     }
}

public class Main {
     public static void main(String[] args) {
          Scanner input = new Scanner(System.in);
          Game game = new Game();

          GameDisplay.displayIntro();
          GameDisplay.displayStart();
          String canStart = "default";

          while (!canStart.equals("n") || !canStart.equals("s")) {
               canStart = input.nextLine().toLowerCase();

               if (canStart.equals("n")) {
                    System.exit(0);
               } else if (canStart.equals("s")) {
                    break;
               }
          }

          while (game.isGameOver() == false) {
               game.newRound();
               GameDisplay.displayNewQuestionText(game.getLevels().getLevel());

               System.out.println("Pergunta número " + game.getLevels().getLevel());
               System.out.println(game.getCurrentQuestion());

               String answer = input.nextLine();
               boolean isCorrect = game.answerQuestion(answer);
               if (isCorrect == false) {
                    GameDisplay.displayGameOver();
                    game.gameLost();
                    break;
               }
               GameDisplay.displayCorrectAnswer();
          }
          if (game.isGameWon()) {
               GameDisplay.displayGameWon();
          }
          input.close();
     }
}
