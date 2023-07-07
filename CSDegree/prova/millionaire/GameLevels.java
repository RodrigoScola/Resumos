import java.util.Arrays;

public class GameLevels {
     private int currentLevel = 0;
     private int levelIndex = 0;
     public static int[] levels = {
               500, 1000, 2000, 3000, 5000, 10000, 15000, 20000, 30000, 50000, 100000, 150000, 300000, 500000, 1000000
     };

     public GameLevels() {
          this.levelIndex = 0;
          this.currentLevel = GameLevels.levels[this.levelIndex];
     }

     public int getLevel() {
          return this.levelIndex;
     }

     public int getLevelValue() {
          return currentLevel;
     }

     public boolean isMaxLevel() {
          return this.levelIndex >= GameLevels.levels.length - 1;
     }

     public void SetLevel(int level) {
          if (this.isValidLevel(level)) {
               this.currentLevel = level;
          }
     }

     private boolean isValidLevel(final int currentLevel) {
          return Arrays.binarySearch(GameLevels.levels, currentLevel) >= 0 ? true : false;
     }

     public void increaseLevel() {
          this.levelIndex++;
          this.currentLevel = GameLevels.levels[this.levelIndex];
     }

     public void decreaseLevel() {
          this.levelIndex--;
          this.currentLevel = GameLevels.levels[this.levelIndex];
     }
}