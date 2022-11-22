import csv 


insurance_information = []

insurance_information_fields = [
     'age','sex','children','smoker','region',
]




with open('insurance.csv') as insurance_csv:
     insurance_file = csv.DictReader(insurance_csv)
     for information in insurance_file:
          insurance_information.append(information)


def group_by_value(key, value = ''):
     values = {}
     for user in insurance_information:
          try: 
               if value == user[key] and not value == '':
                    values[user[key]].append(user)
               elif value == '':
                    values[user[key]].append(user)
          except KeyError:
               values[user[key]] = [user]
     if value == '':
          return values;
     elif not value == '':
          return list( values.values())[0]
          

def cost_by_group(group_name, selector = ''): 
     group = group_by_value(group_name, selector);
     cost = 0
     for item in group:
          cost += float(item.get('charges', 0))
     return cost

# regions = group_by_value

def users_cost(users):
     cost = 0;
     for user in users:
          cost += float(user['charges'])
     return cost

def average_cost(users):
     return users_cost(users) / len(users)



def calculate_cost_by(group_name):
     groups = group_by_value(group_name).keys()
     costs = {}
     for group in groups:
       
          group_users = group_by_value(group_name,group)
          total_cost = users_cost(group_users);
          average = average_cost(group_users)
          region_cost = {
               "group name": group,
               "total cost": str(total_cost),
               "average cost" : str(average) 
          }
          print("The average cost for {} is {} dollars, And the average cost is {}".format(region_cost['group name'], region_cost['total cost'], region_cost['average cost']))
          costs[region_cost['group name']] = region_cost
     return costs


femeale_cost, male_cost = calculate_cost_by('sex').values()

print("the femeale average cost is {fem_cost} and the male average cost is {male_cost}, ".format(fem_cost=femeale_cost['average cost'], male_cost=male_cost['average cost']))


for region in calculate_cost_by('region').values():
     print('the total cost for {} is {} and the average cost is {}'.format(region['group name'], region['total cost'], region['average cost']))     




def get_top_by(item = 'age', count = 1):
     group = group_by_value(item);
     best_group = [];
     most_age = 0;

     for ages, info in group.items():
          if float(ages)> most_age :
               best_group = info;
               most_age = float(ages)
     return best_group[:count]             




