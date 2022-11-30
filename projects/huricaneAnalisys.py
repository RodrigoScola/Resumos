# names of hurricanes
names = ['Cuba I', 'San Felipe II Okeechobee', 'Bahamas', 'Cuba II', 'CubaBrownsville', 'Tampico', 'Labor Day', 'New England', 'Carol', 'Janet', 'Carla', 'Hattie', 'Beulah', 'Camille', 'Edith', 'Anita', 'David', 'Allen', 'Gilbert', 'Hugo', 'Andrew', 'Mitch', 'Isabel', 'Ivan', 'Emily', 'Katrina', 'Rita', 'Wilma', 'Dean', 'Felix', 'Matthew', 'Irma', 'Maria', 'Michael']

# months of hurricanes
months = ['October', 'September', 'September', 'November', 'August', 'September', 'September', 'September', 'September', 'September', 'September', 'October', 'September', 'August', 'September', 'September', 'August', 'August', 'September', 'September', 'August', 'October', 'September', 'September', 'July', 'August', 'September', 'October', 'August', 'September', 'October', 'September', 'September', 'October']

# years of hurricanes
years = [1924, 1928, 1932, 1932, 1933, 1933, 1935, 1938, 1953, 1955, 1961, 1961, 1967, 1969, 1971, 1977, 1979, 1980, 1988, 1989, 1992, 1998, 2003, 2004, 2005, 2005, 2005, 2005, 2007, 2007, 2016, 2017, 2017, 2018]

# maximum sustained winds (mph) of hurricanes
max_sustained_winds = [165, 160, 160, 175, 160, 160, 185, 160, 160, 175, 175, 160, 160, 175, 160, 175, 175, 190, 185, 160, 175, 180, 165, 165, 160, 175, 180, 185, 175, 175, 165, 180, 175, 160]

# areas affected by each hurricane
areas_affected = [['Central America', 'Mexico', 'Cuba', 'Florida', 'The Bahamas'], ['Lesser Antilles', 'The Bahamas', 'United States East Coast', 'Atlantic Canada'], ['The Bahamas', 'Northeastern United States'], ['Lesser Antilles', 'Jamaica', 'Cayman Islands', 'Cuba', 'The Bahamas', 'Bermuda'], ['The Bahamas', 'Cuba', 'Florida', 'Texas', 'Tamaulipas'], ['Jamaica', 'Yucatn Peninsula'], ['The Bahamas', 'Florida', 'Georgia', 'The Carolinas', 'Virginia'], ['Southeastern United States', 'Northeastern United States', 'Southwestern Quebec'], ['Bermuda', 'New England', 'Atlantic Canada'], ['Lesser Antilles', 'Central America'], ['Texas', 'Louisiana', 'Midwestern United States'], ['Central America'], ['The Caribbean', 'Mexico', 'Texas'], ['Cuba', 'United States Gulf Coast'], ['The Caribbean', 'Central America', 'Mexico', 'United States Gulf Coast'], ['Mexico'], ['The Caribbean', 'United States East coast'], ['The Caribbean', 'Yucatn Peninsula', 'Mexico', 'South Texas'], ['Jamaica', 'Venezuela', 'Central America', 'Hispaniola', 'Mexico'], ['The Caribbean', 'United States East Coast'], ['The Bahamas', 'Florida', 'United States Gulf Coast'], ['Central America', 'Yucatn Peninsula', 'South Florida'], ['Greater Antilles', 'Bahamas', 'Eastern United States', 'Ontario'], ['The Caribbean', 'Venezuela', 'United States Gulf Coast'], ['Windward Islands', 'Jamaica', 'Mexico', 'Texas'], ['Bahamas', 'United States Gulf Coast'], ['Cuba', 'United States Gulf Coast'], ['Greater Antilles', 'Central America', 'Florida'], ['The Caribbean', 'Central America'], ['Nicaragua', 'Honduras'], ['Antilles', 'Venezuela', 'Colombia', 'United States East Coast', 'Atlantic Canada'], ['Cape Verde', 'The Caribbean', 'British Virgin Islands', 'U.S. Virgin Islands', 'Cuba', 'Florida'], ['Lesser Antilles', 'Virgin Islands', 'Puerto Rico', 'Dominican Republic', 'Turks and Caicos Islands'], ['Central America', 'United States Gulf Coast (especially Florida Panhandle)']]

# damages (USD($)) of hurricanes
damages = ['Damages not recorded', '100M', 'Damages not recorded', '40M', '27.9M', '5M', 'Damages not recorded', '306M', '2M', '65.8M', '326M', '60.3M', '208M', '1.42B', '25.4M', 'Damages not recorded', '1.54B', '1.24B', '7.1B', '10B', '26.5B', '6.2B', '5.37B', '23.3B', '1.01B', '125B', '12B', '29.4B', '1.76B', '720M', '15.1B', '64.8B', '91.6B', '25.1B']

# deaths for each hurricane
deaths = [90,4000,16,3103,179,184,408,682,5,1023,43,319,688,259,37,11,2068,269,318,107,65,19325,51,124,17,1836,125,87,45,133,603,138,3057,74]

conversion = {
  "M" : 1000000,
  "B": 1000000000
}
# write your update damages function here:
def update_damages():
  n_damages = []
  for damage in damages:
    if damage == 'Damages not recorded':
      continue
    unit = conversion[ damage[-1]]
    n_damage = float(damage[:-1]) * unit
    n_damages.append(n_damage)
  return n_damages

new_damages = update_damages()

def format_data(key_name = 'name'):
  n_format = {}
  for item in list(zip(names, months,years,max_sustained_winds, areas_affected, deaths, new_damages)):
    n_obj = {
      "name": item[0],
      'month': item[1],
      'year': item[2],
      "max_sustained_wind": item[3],
      'areas_affected': item[4],
      'deaths': item[5],
      'damages': item[6]
    }
    n_format[n_obj.get(key_name, n_obj['name'])] = n_obj
  return n_format


def count_items(item_name = 'areas_affected'):
  all_data = format_data();
  items_count = {}
  for huricane_data in all_data.values():
    if (type(huricane_data[item_name]) is list):
      for area in huricane_data.get(item_name, 0):
        current_area_count = items_count.get(area, 0);
        items_count[area] = current_area_count + 1
    else:
      items_count[huricane_data.get('name')] = huricane_data.get(item_name)
  return items_count
    

    
def find_most(item_name = 'deaths', limit=5):
  start_count = count_items(item_name)

  return sorted(start_count.items(), key=lambda x:x[1], reverse=True)[:limit]



# write your construct hurricane dictionary function here:

mortality_scale = {
  0: 0,
  1: 100,
  2: 500,
  3: 1000,
  4: 10000
}


def in_range(number, min_number, max_number):
  if number > min_number and number < max_number:
    return True
  return False
def get_closer(number, items):
  level = 0
  for i in range(len(items) -1):
    curr_item = items[i];
    next_item = items[i + 1]
    if number > next_item:
      print(items[0])
      level = items[0]
      break
    else:
      level = curr_item
  return level

    




def rate_items(item_name = 'deaths', levels = []):
  
  m_rates = format_data('deaths');
  breakpoints = {
    num: [] for num in levels
  }
  for item,value in m_rates.items():
    for j in range(len(levels) - 1):
     level = levels[j]
     next_lvl = levels[j + 1]
     max_lvl = levels[-1]
     if item < level :
          continue
     if next_lvl == max_lvl and item > max_lvl:
          breakpoints[max_lvl].append({
            item: value
          })
          continue
     if (item >= level and item < next_lvl ) or level == item :
          breakpoints[level].append({
            item: value
          })
          continue
  return breakpoints



rating = rate_items('deaths',[0, 100,500,1000,10000])
print(rating)
