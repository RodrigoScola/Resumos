# find if a value is in a certain breakpoint
# breakpoints are from lower to higher (0 - 100 - 200 - 500 - 1923)

items = [ num * 100 for num in range(3000)];

levels = [
     0, 100, 200, 500
]

breakpoints = {
     num : [] for num in levels
}



for item in items:
    for j in range(len(levels) - 1):
     level = levels[j]
     next_lvl = levels[j + 1]
     max_lvl = levels[-1]
     if item < level :
          continue
     if next_lvl == max_lvl and item > max_lvl:
          breakpoints[max_lvl].append(item)
          continue
     if (item >= level and item < next_lvl ) or level == item :
          breakpoints[level].append(item)
          continue
     
     
